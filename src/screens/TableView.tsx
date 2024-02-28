import React, { FC, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Draggable from 'react-native-draggable';
import { COLORS, hp, wp } from '../assets/styles/styleGuide';
import { AddTableMenu, ChairStatusModal, EightPerson, ElevenPerson, FivePerson, FourPerson, NinePerson, OnePerson, SevenPerson, SixPerson, TableDetailModal, TenPerson, ThreePerson, TwelvePerson, TwoPerson, ZoneSelector } from '../components';
import { boardStateSelectors, useBoard } from '../states/board';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';


const TableView: FC = () => {
    const zoomRef = useRef<ReactNativeZoomableView>(null)

    const tablesList = useBoard(boardStateSelectors.tablesList)
    const selectedZone = useBoard(boardStateSelectors.selectedZone)
    const setSelectedTable = useBoard(boardStateSelectors.setSelectedTable)
    const setSelectedChair = useBoard(boardStateSelectors.setSelectedChair)

    const [isModalVisible, setisModalVisible] = useState(false)
    const [isChairModalVisible, setisChairModalVisible] = useState(false)

    const getFilteredData = () => {
        if (selectedZone == 0) {
            return tablesList
        } else {
            const filtered = tablesList.filter((tb: any) => tb.zone == selectedZone)
            return filtered
        }
    }

    const getTable = (table: any) => {
        switch (table.type) {
            case "1P":
                return <OnePerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "2P":
                return <TwoPerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "3P":
                return <ThreePerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "4P":
                return <FourPerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "5P":
                return <FivePerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "6P":
                return <SixPerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "7P":
                return <SevenPerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "8P":
                return <EightPerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "9P":
                return <NinePerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "10P":
                return <TenPerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "11P":
                return <ElevenPerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            case "12P":
                return <TwelvePerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
            default:
                return <TwoPerson
                    data={table}
                    isRound={table?.isRound}
                    onPressTable={() => handleSelectTable(table)}
                    onPressChair={(idx: number) => handleSelectChair(table, idx)}
                />
        }
    }

    const handleSelectTable = (table: any) => {
        setSelectedTable(table)
        setisModalVisible(true)
    }

    const handleSelectChair = (table: any, index: number) => {
        setSelectedTable(table)
        setSelectedChair(index)
        setisChairModalVisible(true)
    }

    zoomRef.current?.zoomTo(1)

    return (
        <View style={styles.main}>

            <View style={styles.mapContainer}>

                <ReactNativeZoomableView
                    ref={zoomRef}
                    maxZoom={2.5}
                    minZoom={-0.5}
                    zoomStep={0.25}
                    initialZoom={1}
                    bindToBorders={true}
                    disablePanOnInitialZoom={true}
                    style={[styles.canvas, {}]}
                    contentWidth={wp(85)}
                    contentHeight={hp(100)}
                >

                    {
                        getFilteredData().map((table: any, index: number) => {
                            return (
                                <Draggable
                                    key={index}
                                    x={table.xAxis}
                                    y={table.yAxis}
                                    minX={wp(1)}
                                    maxX={wp(100) - hp(15)}
                                    minY={hp(1)}
                                    maxY={hp(90)}
                                    renderColor={COLORS.BACKGROUND}
                                    onDragRelease={(e) => { }}

                                >
                                    {getTable({ ...table, index: index })}
                                </Draggable>
                            )
                        })
                    }


                </ReactNativeZoomableView>

                <ZoneSelector />
            </View>


            <AddTableMenu />

            <TableDetailModal
                isVisible={isModalVisible}
                onClose={() => setisModalVisible(false)}
            />
            <ChairStatusModal
                isVisible={isChairModalVisible}
                onClose={() => setisChairModalVisible(false)}
            />
        </View>
    )
}

export default TableView

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        flexDirection: 'row',
        borderColor: COLORS.DANGER
    },
    mapContainer: {
        flex: 1,
    },
    canvas: {
        flex: 1,
    },
    absoluteBtn: {
        position: 'absolute',
        top: 30
    }
})

/*
  flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.BACKGROUND,
        padding: 50
*/ 