import {ViewStyle, View } from 'react-native'
import React, { FC } from 'react'

interface spacerProps {
    styles?: ViewStyle;
    height ?: number;
}

const Spacer:FC = ({ styles, height = 100 }: spacerProps) => {
    return (
        <View style={[{
            width: '100%',
            height: height
        }, styles]}>

        </View>
    )
}

export default Spacer
