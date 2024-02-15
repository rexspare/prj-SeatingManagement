import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import Slider from '@react-native-community/slider';
import { AppHeader, Layout } from '../components';
import { COLORS, FONTS, hp, wp } from '../assets/styles/styleGuide';
import { boardStateSelectors, useBoard } from '../states/board';
import { setItem } from '../services/asyncStorage';
import { ASYNC_KEYS } from '../assets/enums';

const SettingScreen: FC = () => {
    const tableSize = useBoard(boardStateSelectors.tableSize)
    const settableSize = useBoard(boardStateSelectors.settableSize)

    const handleSize = async (value: number) => {
        try {
            settableSize(value)
            await setItem(ASYNC_KEYS.TABLE_SIZE, value)
        } catch (error) {

        }
    }


    return (
        <Layout fixed={true}>
            <AppHeader
                hideRightIcon={true}
                showBack={true}
                title='Settings'
            />

            <View style={styles.detailContainer}>
                <Text style={styles.txt}>Table Size</Text>

                <Slider
                    style={styles.slider}
                    value={tableSize}
                    minimumValue={0}
                    maximumValue={5}
                    minimumTrackTintColor={COLORS.BLACK}
                    maximumTrackTintColor={"#ababab"}
                    thumbTintColor={COLORS.PRIMARY}
                    onSlidingComplete={async value => {
                        handleSize(value)
                    }}
                />
            </View>

        </Layout>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    detailContainer: {
        borderWidth: 1,
        width: wp(92),
        alignSelf: 'center',
        paddingVertical: hp(1.5),
        paddingHorizontal: 15,
        borderColor: COLORS.GREY,
        borderRadius: hp(1),
        marginBottom: hp(3),
        marginTop: hp(3),
        alignItems: 'flex-start',
        backgroundColor: COLORS.BACKGROUND
    },
    slider: {
        width: '100%',
        maxWidth: 500,
        height: 40,
    },
    txt: {
        fontFamily: FONTS.POPPINS_500,
        color: COLORS.BLACK,
        fontSize: 16
    }
})



