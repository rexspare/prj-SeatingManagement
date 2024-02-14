import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { COLORS, hp } from '../../assets/styles/styleGuide'
import { getAssetColor, getChairColor } from '../../utils/myUtils';

interface props {
    size?: number;
    disabled?: boolean;
    onPressTable?: Function;
    data?: any;
    onPressChair?: Function;
}

const TwoPerson: FC<props> = (props) => {
    const {
        size = hp(5),
        disabled = false,
        onPressTable = () => { },
        data = {},
        onPressChair = () => { },
    } = props

    const styles = styles_(size, disabled, data)


    return (
        <View style={styles.main}>

            <TouchableOpacity
                style={[styles.chair, {
                    backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 0),
                }]}
                onPress={() => onPressChair(2)}
                hitSlop={{ top: 10, bottom: 0, left: 5, right: 5 }}
                disabled={disabled}
            >
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.table}
                onPress={() => onPressTable()}
                disabled={disabled}
            >
            </TouchableOpacity>


            <TouchableOpacity
                style={[styles.chair, {
                    backgroundColor: disabled ? COLORS.BLACK : getChairColor(data, 1),
                }]}
                onPress={() => onPressChair(1)}
                hitSlop={{ top: 0, bottom: 10, left: 5, right: 5 }}
                disabled={disabled}
            >
            </TouchableOpacity>

        </View>
    )
}

export default TwoPerson

const styles_ = (size: any, disabled: boolean, data: any) => StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    table: {
        width: size,
        height: size,
        borderRadius: size,
        backgroundColor: disabled ? COLORS.BLACK : getAssetColor(data?.tableStatus),
        margin: size * 0.1
    },

    chair: {
        width: size * 0.6,
        height: size * 0.1,
        alignSelf: 'center',
    },
})