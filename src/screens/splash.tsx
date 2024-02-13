import { Image, StyleSheet, View } from 'react-native'
import React, { FC, useEffect } from 'react'
import { COLORS, COMMON_STYLES, hp } from '../assets/styles/styleGuide'
import { IMAGES } from '../assets/images'
import { useNavigation } from '@react-navigation/native'
import { ASYNC_KEYS, SCREENS } from '../assets/enums'
import { getItem } from '../services/asyncStorage'
import { appStateSelectors, useApp } from '../states/app'

const Splash: FC = () => {
  const navigation = useNavigation()
  const setAuthenticated = useApp(appStateSelectors.setAuthenticated)

  useEffect(() => {
    setTimeout(async () => {
      try {
        const data = await getItem(ASYNC_KEYS.USER_DATA, null)
        if (data == null) {
          navigation.replace(SCREENS.SCAN)
        } else {
          setAuthenticated(true, data)
          navigation.replace(SCREENS.MENU)
        }
      } catch (error) {
        navigation.replace(SCREENS.SCAN)
      }
    }, 2000);
  }, [])


  return (
    <View style={styles.main}>
      <Image
        source={IMAGES.BRANDING}
        style={styles.image}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    ...COMMON_STYLES.center_
  },
  image: {
    width: hp(20),
    height: hp(20),
    resizeMode: 'contain'
  }
})