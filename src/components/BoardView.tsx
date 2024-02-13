import { StyleSheet, View } from 'react-native'
import React, { memo, useCallback, useMemo, useState } from 'react'
import DraggableImage from './DraggableImage'
import DraggableText from './DraggableText'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { boardStateSelectors, useBoard } from '../states/board'
import { hp } from '../assets/styles/styleGuide'
import { TOOLS } from '../assets/enums'
import { IMAGES } from '../assets/images'

const BoardView = () => {
    const currentPost = useBoard(boardStateSelectors.currentPost)
    const selectedTool = useBoard(boardStateSelectors.selectedTool)
    const setResizingIndex = useBoard(boardStateSelectors.setResizingIndex)

    // const memorizedImages = useMemo(() => currentPost?.images, [currentPost?.images])
    const memorizedImages = [
        {
            image: IMAGES.ICON
        }
    ]
    const memorizedTexts = useMemo(() => currentPost?.texts, [currentPost?.texts])
    const [selectedImage, setSelectedImage] = useState(-1)
    const [selectedUrl, setSelectedUrl] = useState('')


    const handlePositionChange = useCallback((index, newPosition) => {
        if (currentPost.images?.length >= 1) {
            const selected = currentPost?.images[index]
            let updatedImage = { ...selected, position: newPosition }
            // dispatch(setPostImages({ index, image: updatedImage }))
        }
    }, [currentPost.images])

    const handleScaleChange = (index, newScale) => {
        if (currentPost.images?.length >= 1) {
            const selected = currentPost?.images[index]
            let updatedImage = { ...selected, scale: newScale }
            // dispatch(setPostImages({ index, image: updatedImage }))
        }
    }

    const onImagePress = useCallback((index) => {
        if (selectedTool === TOOLS.RESIZE) {
            setResizingIndex(index)
        } else {
            setSelectedImage(index)
            setSelectedUrl(currentPost.images[index]?.url)
        }
    }, [selectedTool])

    const handleDonePress = () => {
        if (selectedUrl) {
            const selected = currentPost?.images[selectedImage]
            let updatedImage = { ...selected, url: selectedUrl }
            // dispatch(setPostImages({ index: selectedImage, image: updatedImage }))
            closeUrlModal()
        } else {
        }
    }

    const closeUrlModal = () => {
        setSelectedUrl('')
        setSelectedImage(-1)
    }

    return (
        <>
            <GestureHandlerRootView>
                <View style={[styles.container, { backgroundColor: currentPost.background }]}>
                    {memorizedImages?.map((item, index) => (
                        <DraggableImage
                            item={item}
                            key={index}
                            index={index}
                            onPositionChange={(newPosition) => handlePositionChange(index, newPosition)}
                            onScaleChange={(newScale) => handleScaleChange(index, newScale)}
                            onPress={() => onImagePress(index)}
                        />
                    ))}
                    {memorizedTexts?.map((item, index) => (
                        <DraggableText
                            item={item}
                            key={index}
                        // index={index}
                        // onPositionChange={(newPosition) => handlePositionChange(index, newPosition)}
                        // onPress={() => onImagePress(index)}
                        />
                    ))}
                </View>
            </GestureHandlerRootView>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: hp(80),
        borderRadius: hp(2),
        paddingVertical: hp(1.5),
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
});

export default memo(BoardView);
