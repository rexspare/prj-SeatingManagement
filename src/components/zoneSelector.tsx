import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { COLORS, FONTS, hp, wp } from '../assets/styles/styleGuide'
import { ZONE_LIST } from '../data'
import { PrimaryButton } from '.'
import { boardStateSelectors, useBoard } from '../states/board'

const ZoneSelector: FC = () => {
    const selectedZone = useBoard(boardStateSelectors.selectedZone)
    const setselectedZone = useBoard(boardStateSelectors.setselectedZone)

    const handleSelectZone = (id: number) => {
        setselectedZone(id)
    }

    return (
        <View style={styles.main}>
            {
                ZONE_LIST.map((zone, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => handleSelectZone(zone.id)}
                        style={[styles.btn, {
                            backgroundColor: selectedZone == zone.id ? COLORS.PRIMARY : COLORS.BACKGROUND
                        }]}
                    >
                        <Text
                            adjustsFontSizeToFit={true}
                            numberOfLines={1}
                            style={[styles.btnTxt, {
                                color: selectedZone == zone.id ? COLORS.WHITE : COLORS.PRIMARY
                            }]}>{zone.title}</Text>
                    </TouchableOpacity>

                ))
            }

        </View >
    )
}

export default ZoneSelector

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: hp(8),
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: COLORS.GREY,
        paddingTop: hp(1),
    },
    btn: {
        height: hp(4),
        borderWidth: 2,
        borderColor: COLORS.PRIMARY,
        backgroundColor: COLORS.BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%',
        borderRadius: 5,
        marginHorizontal: 5,

    },
    btnTxt: {
        fontFamily: FONTS.POPPINS_500,
        color: COLORS.PRIMARY,
        fontSize: hp(1.6)
    }
})