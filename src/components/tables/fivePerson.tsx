import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { COLORS, FONTS, hp } from '../../assets/styles/styleGuide'
import { getAssetColor, getChairColor, getTableTxtStyle } from '../../utils/myUtils';
import { boardStateSelectors, useBoard } from '../../states/board';
import { BOOK_STATUS } from '../../assets/enums';

interface props {
    size?: number;
    disabled?: boolean;
    onPressTable?: Function;
    data?: any;
    onPressChair?: Function;
    defaultSize?: any;
    isRound?: boolean;
}

const FivePerson: FC<props> = (props) => {
    const {
        size = 10,
        disabled = false,
        onPressTable = () => { },
        data = {},
        onPressChair = () => { },
        defaultSize,
        isRound = false,
    } = props

    const tableSize = useBoard(boardStateSelectors.tableSize)

    const getSize = () => {
        if (defaultSize) {
            return defaultSize
        } else {
            return hp(size + (tableSize * 2))
        }
    }

    const styles = styles_(getSize(), disabled, data, isRound)

    return (
        <View style={styles.main}>

            <View style={styles.rowChair}>
                <TouchableOpacity
                    style={[styles.chair, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 0),
                        transform: [{ rotate: isRound ? '150deg' : '0deg' }],
                        marginBottom: isRound ? - (getSize() * 0.1) : 0
                    }]}
                    onPress={() => onPressChair(0)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    disabled={disabled}
                >
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.chair, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 1),
                        transform: [{ rotate: isRound ? '25deg' : '0deg' }],
                        marginBottom: isRound ? - (getSize() * 0.1) : 0
                    }]}
                    onPress={() => onPressChair(1)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    disabled={disabled}
                >
                </TouchableOpacity>
            </View>


            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.chair2, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 2),
                    }]}
                    onPress={() => onPressChair(2)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.table}
                    onPress={() => onPressTable()}
                    disabled={disabled}
                >
                     {(!disabled) &&
                        <Text
                            adjustsFontSizeToFit={true}
                            numberOfLines={1}
                            style={[styles.txt, getTableTxtStyle(tableSize)]}>{data.index + 1}</Text>
                    }

                    {(data.tableStatus != BOOK_STATUS.EMPTY && !disabled) &&
                        <Text
                            adjustsFontSizeToFit={true}
                            numberOfLines={1}
                            style={[styles.txt, getTableTxtStyle(tableSize)]}>08:00</Text>
                    }

                </TouchableOpacity>

            </View>

            <View style={styles.rowChair}>
                <TouchableOpacity
                    style={[styles.chair, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 3),
                        transform: [{ rotate: isRound ? '25deg' : '0deg' }],
                        marginTop: isRound ? - (getSize() * 0.1) : 0
                    }]}
                    onPress={() => onPressChair(4)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.chair, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 4),
                        transform: [{ rotate: isRound ? '150deg' : '0deg' }],
                        marginTop: isRound ? - (getSize() * 0.1) : 0
                    }]}
                    onPress={() => onPressChair(5)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default FivePerson

const styles_ = (size: any, disabled: boolean, data: any, isRound: boolean) => StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    table: {
        width: size,
        height: isRound ? size : size / 2,
        borderRadius: isRound ? size : 0,
        backgroundColor: disabled ? COLORS.BLACK : getAssetColor(data?.tableStatus),
        margin: (size * 0.1) > 5 ? 5 : size * 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    chair: {
        width: size * 0.4,
        height: (size * 0.1) > 5 ? 5 : size * 0.1,
        backgroundColor: disabled ? COLORS.BLACK : COLORS.SUCCESS,
        alignSelf: 'center'
    },
    chair2: {
        width: (size * 0.1) > 5 ? 5 : size * 0.1,
        height: size * 0.4,
        backgroundColor: disabled ? COLORS.BLACK : COLORS.SUCCESS,
        alignSelf: 'center'
    },
    rowChair: {
        flexDirection: 'row',
        width: size * 1,
        justifyContent: "space-between"
    },
    txt: {
        fontFamily: FONTS.POPPINS_500,
        color: COLORS.WHITE,
        fontSize: 16
    }
})