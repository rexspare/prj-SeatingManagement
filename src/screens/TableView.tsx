import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Draggable from 'react-native-draggable';
import { COLORS, hp, wp } from '../assets/styles/styleGuide';
import { AddTableMenu, EightPerson, FourPerson, SixPerson, TableDetailModal, ThreePerson, TwoPerson } from '../components';
import { boardStateSelectors, useBoard } from '../states/board';


const TableView: FC = () => {
    const tablesList = useBoard(boardStateSelectors.tablesList)
    const setSelectedTable = useBoard(boardStateSelectors.setSelectedTable)

    const [isModalVisible, setisModalVisible] = useState(false)

    const getTable = (table: any) => {
        switch (table.type) {
            case "2P":
                return <TwoPerson
                    onPressTable={() => handleSelectTable(table)}
                />
            case "3P":
                return <ThreePerson
                    onPressTable={() => handleSelectTable(table)}
                />
            case "4P":
                return <FourPerson
                    onPressTable={() => handleSelectTable(table)}
                />
            case "6P":
                return <SixPerson
                    onPressTable={() => handleSelectTable(table)}
                />
            case "8P":
                return <EightPerson
                    onPressTable={() => handleSelectTable(table)}
                />
            default:
                return <TwoPerson
                    onPressTable={() => handleSelectTable(table)}
                />
        }
    }

    const handleSelectTable = (table: any) => {
        setSelectedTable(table)
        setisModalVisible(true)
    }

    return (
        <View style={styles.main}>

            <View style={styles.canvas}>

                {
                    tablesList.map((table: any, index: number) => {
                        return (
                            <Draggable
                                key={index}
                                x={wp(45)}
                                y={hp(45)}
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

            </View>

            <AddTableMenu />

            <TableDetailModal
                isVisible={isModalVisible}
                onClose={() => setisModalVisible(false)}
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
    }
})

/*
  flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.BACKGROUND,
        padding: 50
*/ 