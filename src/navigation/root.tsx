import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SCREENS } from '../assets/enums';
import { COLORS } from '../assets/styles/styleGuide';
import { SettingScreen, TableView } from '../screens';

const Stack = createNativeStackNavigator();

const Root: FC = () => {
    return (
        <NavigationContainer>
            <StatusBar
                hidden
                backgroundColor={COLORS.PRIMARY}
                barStyle={'light-content'} />
            <Stack.Navigator screenOptions={{
                headerShown: false,
                animation: 'flip'
            }}>
                <Stack.Screen name={SCREENS.TABLE_VIEW} component={TableView} />
                <Stack.Screen name={SCREENS.SETTING} component={SettingScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root
