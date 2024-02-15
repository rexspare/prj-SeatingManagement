import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Image, Platform } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { COLORS, FONTS } from '../assets/styles/styleGuide'
import { getGreetings } from '../utils/myUtils'
import { useApp, appStateSelectors } from '../states/app'
import { IUser } from '../models/user'
import { useNavigation } from '@react-navigation/native'
import { removeItem } from '../services/asyncStorage'
import { ASYNC_KEYS, SCREENS } from '../assets/enums'
import { CommonActions } from '@react-navigation/native';
interface appHeaderProps {
    title?: string;
    hideRightIcon?: boolean;
    showBack?: boolean;
}

const AppHeader = (props: appHeaderProps) => {
    const { hideRightIcon = false, showBack = false, title } = props
    const navigation = useNavigation()
    /**
     * STATES, PROPS AND HOOKS
     * **/
    const user = useApp(appStateSelectors.user) as any
    const setAuthenticated = useApp(appStateSelectors.setAuthenticated)


    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleLogout = async () => {
        try {
            await removeItem(ASYNC_KEYS.USER_DATA)
            setAuthenticated(false, {})

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: SCREENS.SCAN },
                    ],
                })
            );
        } catch (error) {

        }
    }


    return (
        <View style={styles.main}>
            <View style={styles.profileContainer}>
                {
                    showBack &&
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => handleGoBack()}
                    >
                        <Feather name='arrow-left' color={COLORS.BLACK} size={24} />
                    </TouchableOpacity>
                }
                <View style={styles.titleContainer}>

                    <Text style={[styles.title, { fontSize: 18 }]}>{title}</Text>

                </View>

            </View>

            {
                hideRightIcon == false &&
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleLogout()}
                >
                    <Feather name='log-out' color={COLORS.WHITE} size={26} />
                </TouchableOpacity>
            }


        </View>
    )
}

export default React.memo(AppHeader)

const styles = StyleSheet.create({
    main: {
        width: '100%',
        // borderBottomWidth: 0.8,
        borderColor: COLORS.GREY,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.BACKGROUND,
        paddingTop: Platform.OS == 'ios' ? 60 : 10,
        minHeight: 65,
        borderWidth: 1,

    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25
    },
    greeting: {
        color: COLORS.WHITE,
        fontFamily: FONTS.POPPINS_400,
        fontSize: 12
    },
    title: {
        color: COLORS.BLACK,
        fontFamily: FONTS.POPPINS_700,
        fontSize: 14,
        marginTop: 4
    },
    titleContainer: {
        marginLeft: 10
    }

})