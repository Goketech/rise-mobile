import { StyleSheet, Text, TextProps, View } from 'react-native'
import React from 'react'
import { theme } from '../assets/styles';
type TextType = "primary" | "header";

interface AppTextProps extends TextProps {
    type?: TextType;
}

const CustomText: React.FC<AppTextProps> = ({ children, type = "primary", style, ...props }) => {
    return (
        <Text style={[styles[type], style]} {...props}>
            {children}
        </Text>
    )
}

export default CustomText;

const styles = StyleSheet.create({
    primary: {
        color: theme.color.lightGray,
        fontSize: theme.fontSizes.normal,
        fontFamily: theme.fontFamily.GilroyMedium,
    },
    header: {
        color: theme.color.darkBlue,
        fontSize: theme.fontSizes.large,
        fontFamily: theme.fontFamily.GilroySemibold
    },

})