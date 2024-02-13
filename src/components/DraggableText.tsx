import { StyleSheet, PanResponder, Animated, Text } from 'react-native'
import React from 'react'



const DraggableText = ({ item }: any) => {
    const Styles = styles(item?.position)


    const createPanResponder = (box) =>
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [
                    null,
                    {
                        dx: box.position.x,
                        dy: box.position.y,
                    },
                ],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: () => {
                box?.position?.extractOffset()
                // onPositionChange(box?.position)
            },
        })

    return (
        <Animated.View style={[Styles.container]} {...createPanResponder(item).panHandlers}>
            <Text style={Styles.text}>{item.text}</Text>
        </Animated.View>
    )
}

export default DraggableText

const styles = (position, scale) => StyleSheet.create({
    container: {
        position: 'absolute',
        transform: [{ translateX: position?.x }, { translateY: position?.y }],
    },
    text: {
        color: COLOR.black,
        ...TEXT_STYLE.text,
    },
})