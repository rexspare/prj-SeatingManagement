import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native'
import React, { ReactNode } from 'react'
import { COLORS, FONTS, hp, wp, COMMON_STYLES, normalize } from '../assets/styles/styleGuide';
import { If } from '.';


interface primaryButtonProps {
    title: string;
    onPress: () => any;
    style?: ViewStyle | [ViewStyle] | any;
    textStyle?: TextStyle | [TextStyle] | any;
    isLoading?: boolean;
    filled?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
}

const PrimaryButton: React.FC<primaryButtonProps> = (props) => {
    const { filled = false, disabled = false, } = props
    const styles = styles_(filled, disabled)

    return (
        <TouchableOpacity
            style={[
                styles.main,
                props.style,
            ]}
            activeOpacity={0.8}
            onPress={() => props.onPress()}
            disabled={disabled || props.isLoading}
        >
            {
                props.isLoading ?
                    <ActivityIndicator color={COLORS.WHITE} />
                    :
                    <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
            }
            <If condition={props.icon != undefined && props.icon != true}>
                <View style={{ marginLeft: 5 }}>
                    {props.icon}
                </View>
            </If>
        </TouchableOpacity>
    )
}

PrimaryButton.defaultProps = {
    title: 'title',
    onPress: () => { },
    isLoading: false
}

export default React.memo(PrimaryButton)

const styles_ = (filled: any, disabled: any) => StyleSheet.create({
    main: {
        width: '50%',
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 15,
        backgroundColor: COLORS.PRIMARY,
        ...COMMON_STYLES.center_,
        height: hp(6),
        borderRadius: hp(0.6),
        borderWidth: 1.5,
        borderColor: disabled ? COLORS.BLACK : COLORS.PRIMARY
    },
    title: {
        color: COLORS.WHITE,
        fontSize: 14,
        fontFamily: FONTS.POPPINS_600
    }
})