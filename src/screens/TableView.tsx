import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Draggable from 'react-native-draggable';
import { IMAGES } from '../assets/images';
import { COLORS, hp, wp } from '../assets/styles/styleGuide';

const TableView: FC = () => {
    return (
        <View style={styles.main}>

            <View style={styles.canvas}>
                <Draggable
                    x={75}
                    y={300}
                    minX={0}
                    maxX={wp(100)}
                    minY={0}
                    maxY={hp(80)}
                    renderSize={56}
                    renderColor={COLORS.BACKGROUND}
                    renderText='A'
                    imageSource={IMAGES.ICON}
                    isCircle
                    // shouldReverse
                    onShortPressRelease={() => alert('touched!!')}
                    onDragRelease={(e) => {

                        console.log('====================================');
                        console.log(e.nativeEvent);
                        console.log('====================================');
                    }}
                />
                <Draggable />
            </View>

        </View>
    )
}

export default TableView

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        borderWidth: 2
    },
    canvas: {
        width: '100%',
        height: '100%'
    }
})