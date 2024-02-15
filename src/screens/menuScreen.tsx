import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { Layout } from '../components'
import { COLORS } from '../assets/styles/styleGuide'

const MenuScreen: FC = () => {
    return (
        <Layout fixed={true} containerStyle={styles.main}>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
            >

            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
            >

            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
            >

            </TouchableOpacity>

        </Layout>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    main: {
        justifyContent: "center",
        alignItems: 'center'
    },
    btn: {
        width: '30%',
        height: '20%',
        backgroundColor: COLORS.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10
    }
})