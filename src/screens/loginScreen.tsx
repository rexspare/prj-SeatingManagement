import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react'
import { Layout } from '../components'
import { COLORS, FONTS, hp, wp } from '../assets/styles/styleGuide'
import PrimaryInput from '../components/primaryInput'
import PrimaryButton from '../components/primaryButton'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../assets/enums'

const LoginScreen: FC = () => {
    const navigation = useNavigation()

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    return (
        <Layout fixed={true} containerStyle={styles.main}>

            <View style={styles.logoConatiner}>

                <View style={styles.logo}>
                    <Text style={{
                        fontFamily: FONTS.POPPINS_600,
                        fontSize: 18,
                        color: COLORS.WHITE
                    }}>LOGO GOES HERE</Text>
                </View>

            </View>

            <Layout >
                <Layout fixed={true} containerStyle={styles.context}>

                    <PrimaryInput
                        placeholder='Email'
                        value={email}
                        onChange={(txt) => setemail(txt)}

                    />
                    <PrimaryInput
                        placeholder='Password'
                        value={password}
                        onChange={(txt) => setpassword(txt)}
                        isPassword={true}
                    />

                    <PrimaryButton
                        title='Login'
                        filled={true}
                        onPress={() => navigation.navigate(SCREENS.TABLE_VIEW)}
                        style={styles.btn}
                    />

                </Layout>

            </Layout>


        </Layout>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row'
    },
    logoConatiner: {
        height: hp(90),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(20),
        height: wp(20),
        backgroundColor: COLORS.PRIMARY
    },
    context: {
        height: hp(90),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: '50%'
    }

})