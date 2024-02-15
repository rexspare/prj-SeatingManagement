import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../assets/enums';
import { StatusBar } from 'react-native';
import { COLORS } from '../assets/styles/styleGuide';
import { LoginScreen, MenuScreen, TableView } from '../screens';

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

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root
