import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React, { FC } from 'react'
import { COLORS, FONTS, hp } from '../../assets/styles/styleGuide'
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import { getAssetColor, getChairColor } from '../../utils/myUtils';
import { boardStateSelectors, useBoard } from '../../states/board';

interface props {
    size?: number;
    disabled?: boolean;
    onPressTable?: Function;
    data?: any;
    onPressChair?: Function;
    defaultSize?: any;
}


const EightPerson: FC<props> = (props) => {
    const {
        size = 10,
        disabled = false,
        onPressTable = () => { },
        data = {},
        onPressChair = () => { },
        defaultSize
    } = props

    const tableSize = useBoard(boardStateSelectors.tableSize)

    const getSize = () => {
        if (defaultSize) {
            return defaultSize
        } else {
            return hp(size + (tableSize * 2))
        }
    }

    const styles = styles_(getSize(), disabled, data)
    const rotation = Gesture.Rotation();

    return (

        <Animated.View style={styles.main}>

            <View style={styles.rowChair}>
                <TouchableOpacity
                    style={[styles.chair, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 0),
                    }]}
                    onPress={() => onPressChair(0)}
                    hitSlop={{ top: 10, bottom: 0, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.chair, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 1),
                    }]}
                    onPress={() => onPressChair(1)}
                    hitSlop={{ top: 10, bottom: 0, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.chair, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 2),
                    }]}
                    onPress={() => onPressChair(2)}
                    hitSlop={{ top: 10, bottom: 0, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>
            </View>


            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.chair2, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 3),
                    }]}
                    onPress={() => onPressChair(3)}
                    hitSlop={{ top: 0, bottom: 0, left: 10, right: 0 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.table}
                    onPress={() => onPressTable()}
                    disabled={disabled}
                >
                    <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={styles.txt}>{data.id}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.chair2, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 4),
                    }]}
                    onPress={() => onPressChair(4)}
                    hitSlop={{ top: 0, bottom: 0, left: 0, right: 10 }}
                    disabled={disabled}
                >
                </TouchableOpacity>
            </View>

            <View style={styles.rowChair}>
                <TouchableOpacity
                    style={[styles.chair, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 5),
                    }]}
                    onPress={() => onPressChair(5)}
                    hitSlop={{ top: 0, bottom: 10, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.chair, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 6),
                    }]}
                    onPress={() => onPressChair(6)}
                    hitSlop={{ top: 0, bottom: 10, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.chair, {
                        backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 7),
                    }]}
                    onPress={() => onPressChair(7)}
                    hitSlop={{ top: 0, bottom: 10, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

            </View>

        </Animated.View >

    )
}

export default EightPerson

const styles_ = (size: any, disabled: boolean, data: any) => StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    table: {
        width: size,
        height: size / 2.5,
        backgroundColor: disabled ? COLORS.BLACK : getAssetColor(data.tableStatus),
        margin: (size * 0.1) > 5 ? 5 : size * 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    chair: {
        width: size * 0.3,
        height: (size * 0.1) > 5 ? 5 : size * 0.1,
        backgroundColor: disabled ? COLORS.BLACK : COLORS.SUCCESS,
        alignSelf: 'center'
    },
    chair2: {
        width: (size * 0.1) > 5 ? 5 : size * 0.1,
        height: size / 3,
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