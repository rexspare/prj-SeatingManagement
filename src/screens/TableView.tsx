import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Draggable from 'react-native-draggable';
import { COLORS, hp, wp } from '../assets/styles/styleGuide';
import { AddTableMenu, ChairStatusModal, EightPerson, FourPerson, SixPerson, TableDetailModal, ThreePerson, TwoPerson } from '../components';
import { boardStateSelectors, useBoard } from '../states/board';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';


const TableView: FC = () => {
    const tablesList = useBoard(boardStateSelectors.tablesList)
    const setSelectedTable = useBoard(boardStateSelectors.setSelectedTable)
    const setSelectedChair = useBoard(boardStateSelectors.setSelectedChair)

    const [isModalVisible, setisModalVisible] = useState(false)
    const [isChairModalVisible, setisChairModalVisible] = useState(false)

    const getTable = (table: any) => {
        switch (table.type) {
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
            case "6P":
                return <SixPerson
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

    return (
        <View style={styles.main}>
            <ReactNativeZoomableView
                maxZoom={2.5}
                minZoom={1}
                zoomStep={0.5}
                initialZoom={1}
                bindToBorders={true}
                disablePanOnInitialZoom={true}
                style={[styles.canvas, { borderColor: "#FF0000" }]}
                contentWidth={wp(85)}
                contentHeight={hp(100)}
            >

                {
                    tablesList.map((table: any, index: number) => {
                        return (
                            <Draggable
                                key={index}
                                x={table.xAxis}
                                y={table.yAxis}
                                minX={0}
                                maxX={wp(100) - hp(15)}
                                minY={0}
                                maxY={hp(90)}
                                renderColor={COLORS.BACKGROUND}
                                onDragRelease={(e) => { }}

                            >
                                {getTable(table)}
                            </Draggable>
                        )
                    })
                }

            </ReactNativeZoomableView>
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
        flexDirection: 'row'
    },
    canvas: {
        flex: 1,
        shadowColor: "#000",
        backgroundColor: COLORS.BACKGROUND,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
})

/*
  flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.BACKGROUND,
        padding: 50
*/ 