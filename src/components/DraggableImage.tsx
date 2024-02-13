import { StyleSheet, PanResponder, Animated, Pressable } from 'react-native'
import React, { memo } from 'react'

import { PinchGestureHandler, State } from 'react-native-gesture-handler'
import { boardStateSelectors, useBoard } from '../states/board'
import { TOOLS } from '../assets/enums'
import { COLORS, hp } from '../assets/styles/styleGuide'



const DraggableImage = ({ item, onPositionChange, onScaleChange, index, onPress }: any) => {
    const selectedTool = useBoard(boardStateSelectors.selectedTool)
    const resizingIndex = useBoard(boardStateSelectors.resizingIndex) 

    // const boundary = {
    //     left: 0,
    //     top: 0,
    //     right: wp(67),
    //     bottom: isIOS() ? hp(65) : hp(70),
    // }

    const scale = new Animated.Value(1)

    // const onZoomEvent = Animated.event(
    //     [
    //         {
    //             nativeEvent: { scale: scale },
    //         },
    //     ],
    //     {
    //         useNativeDriver: true,
    //     }
    // )

    const onZoomStateChange = (event) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            const newScale = scale._value * event.nativeEvent.scale
            const minScale = 1
            const maxScale = 4
            const clampedScale = Math.max(minScale, Math.min(newScale, maxScale))
            onScaleChange(clampedScale)
            scale.setValue(clampedScale)
            scale.flattenOffset()
        }
    }

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
                onPositionChange(box?.position)
            },
        })

    const Styles = styles(item?.position, scale)

    if (selectedTool === TOOLS.COLOR || selectedTool === '') {
        return (
            <Animated.View style={[Styles.container]} {...createPanResponder(item).panHandlers}>
                <Animated.Image
                    source={item?.image}
                    style={Styles.imageStyle}
                />
            </Animated.View>
        )
    } else if (selectedTool === TOOLS.RESIZE) {
        return (
            <PinchGestureHandler
                // onGestureEvent={onZoomEvent}
                onHandlerStateChange={onZoomStateChange}
            >
                <Animated.View style={[Styles.container, { flex: 1 }]}>
                    <Animated.Image
                        source={item?.image}
                        style={[Styles.imageStyle]}
                    />
                </Animated.View>
            </PinchGestureHandler>
        )
    } else {
        return (
            <Pressable style={Styles.container} onPress={() => onPress()}>
                <Animated.Image
                    source={item?.image}
                    style={[Styles.imageStyle, resizingIndex == index && Styles.activeStyle]}
                />
            </Pressable>
        )
    }
}

const styles = (position, scale) => StyleSheet.create({
    container: {
        position: 'absolute',
        transform: [{ translateX: position?.x }, { translateY: position?.y }],
    },
    imageStyle: {
        width: hp(10),
        height: hp(10),
        transform: [{ scale: scale }],
    },
    activeStyle: {
        borderWidth: 2,
        borderColor: COLORS.PRIMARY,
    },
})

export default memo(DraggableImage)
