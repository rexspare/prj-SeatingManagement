import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React, { FC } from 'react'
import { COLORS, hp } from '../../assets/styles/styleGuide'
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

interface props {
    size?: number;
    disabled?: boolean;
    onPressTable?: Function
}

const EightPerson: FC<props> = (props) => {
    const {
        size = hp(10),
        disabled = false,
        onPressTable = () => { }
    } = props

    const styles = styles_(size, disabled)
    const rotation = Gesture.Rotation();

    return (

        <Animated.View style={styles.main}>

            <View style={styles.rowChair}>
                <TouchableOpacity
                    style={styles.chair}
                    onPress={() => alert('CHAIR 1')}
                    hitSlop={{ top: 10, bottom: 0, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.chair}
                    onPress={() => alert('CHAIR 1')}
                    hitSlop={{ top: 10, bottom: 0, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.chair}
                    onPress={() => alert('CHAIR 1')}
                    hitSlop={{ top: 10, bottom: 0, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>
            </View>


            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.chair2}
                    onPress={() => alert('CHAIR 2')}
                    hitSlop={{ top: 0, bottom: 0, left: 10, right: 0 }}
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
                    style={styles.chair2}
                    onPress={() => alert('CHAIR 2')}
                    hitSlop={{ top: 0, bottom: 0, left: 0, right: 10 }}
                    disabled={disabled}
                >
                </TouchableOpacity>
            </View>

            <View style={styles.rowChair}>
                <TouchableOpacity
                    style={styles.chair}
                    onPress={() => alert('CHAIR 1')}
                    hitSlop={{ top: 0, bottom: 10, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.chair}
                    onPress={() => alert('CHAIR 1')}
                    hitSlop={{ top: 0, bottom: 10, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.chair}
                    onPress={() => alert('CHAIR 1')}
                    hitSlop={{ top: 0, bottom: 10, left: 5, right: 5 }}
                    disabled={disabled}
                >
                </TouchableOpacity>

            </View>

        </Animated.View >

    )
}

export default EightPerson

const styles_ = (size: any, disabled: boolean) => StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    table: {
        width: size,
        height: size / 2.5,
        backgroundColor: disabled ? COLORS.BLACK : COLORS.SUCCESS,
        margin: (size * 0.1) > 5 ? 5 : size * 0.1,
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
})