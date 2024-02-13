import React from 'react';
import { StyleProp, View, ViewStyle, ScrollView } from 'react-native';
import { COMMON_STYLES } from '../assets/styles/styleGuide';
import If from './if';

interface ILayoutProps {
    containerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    fixed?: boolean;
    children?: any;
}

const Layout: React.FC<ILayoutProps> = ({
    children,
    containerStyle,
    fixed,
    contentContainerStyle,
}) => {
    return (
        <>
            <If condition={fixed}>
                <View
                    style={[COMMON_STYLES.main, containerStyle]}>
                    {children}
                </View>
            </If>
            <If condition={!fixed}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    style={[COMMON_STYLES.main, containerStyle]}
                    contentContainerStyle={contentContainerStyle}>
                    {children}
                </ScrollView>
            </If>
        </>
    );
};

export default Layout;
