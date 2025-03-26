import { FlatList, GestureResponderEvent, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputProps, TextInputSelectionChangeEventData, TouchableOpacity, View } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { theme } from '../assets/styles';
import CustomText from './CustomText'
import ArrowDown from "../assets/svg/selectArrow.svg"
import Eye from "../assets/svg/eyesopen.svg"
import Eyeoff from "../assets/svg/eyeclosed.svg"
import Check from "../assets/svg/checkgreen.svg"
import { Icons } from '../assets'


interface CustomInputProps extends TextInputProps {
    label: string,
    style?: object,
    onChangeText?: (text: string) => void,
    icon?: React.ReactNode,
    type?: "text" | "email" | "password" | "number",
    value?: string
}


export const CustomInput: React.FC<CustomInputProps> = ({ label, style, onChangeText, icon, value = "", type = "text", ...props }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible)
    const isEmailValid = type === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    return (
        <View style={styles.container}>
            <CustomText>{label}</CustomText>

            <View style={styles.inputContainer}>
                {icon && <View style={styles.iconContainer}>
                    {icon}
                    <Text style={styles.code}>
                        +880
                    </Text>
                </View>}
                <View style={{ position: "relative", width: "100%" }}>

                    <TextInput
                        style={[styles.inputTxt, style]}
                        placeholderTextColor={theme.color.lightGray}
                        onChangeText={onChangeText}
                        secureTextEntry={type === "password" && !isPasswordVisible}
                        keyboardType={type === "number" ? "numeric" : "default"}
                        autoCapitalize={type === 'email' ? "none" : "sentences"}
                        {...props}

                    />

                    {
                        type === "password" && (
                            <TouchableOpacity hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }} onPress={() => { togglePasswordVisibility() }} style={styles.leftIcons}>
                                {isPasswordVisible ? <Eyeoff /> : <Eye />}
                            </TouchableOpacity>
                        )
                    }
                    {
                        type === "email" && isEmailValid && <Check />
                    }

                </View>

            </View>
        </View>
    )
}


interface selectFieldProps extends TextInputProps {
    label: string,
    selected: string,
    options: string[],
    onSelectOption: any,
    isOpen: any,
    setIsOpen: any
}

export const SelectField: React.FC<selectFieldProps> = ({ label, selected, options, onSelectOption, isOpen, setIsOpen }) => {

    return (
        <View style={styles.selectContainer}>
            <CustomText>{label}</CustomText>

            <View style={styles.selectInput}>
                <TouchableOpacity style={{ width: "100%" }} onPress={() => setIsOpen(!isOpen)}>
                    <Text style={styles.selectText}>{selected}</Text>
                </TouchableOpacity>
                <ArrowDown />

                {
                    isOpen && <FlatList
                        data={options}
                        style={styles.dropdown}

                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.options} onPress={() => {
                                onSelectOption(item);
                                setIsOpen(false)

                            }}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                }

            </View>
        </View>
    )
}


interface SearchFieldProps extends TextInputProps {

}


export const SearchInput: React.FC<SearchFieldProps> = () => {
    return (
        <View style={styles.searchContainer}>
            <Icons.Search />
            <TextInput
                placeholder='Search Store'
                placeholderTextColor={theme.color.lightGray}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: theme.color.border

    },
    iconContainer: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center",

    },
    code: {
        color: theme.color.darkBlue,
        fontSize: 18,
        fontFamily: theme.fontFamily.GilroySemibold
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        marginTop: 5
    },
    inputTxt: {
        fontSize: 18,
        fontFamily: theme.fontFamily.GilroySemibold,
        color: theme.color.darkBlue,
        width: "100%"
    }, selectContainer: {
        borderBottomWidth: 1,
        borderBlockColor: "#E2E2E2"
    },
    selectInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBlock: 10,
        position: "relative"
    },
    seclectTouch: {
        width: "100%",
    },
    selectText: {
        fontSize: 18,
    },
    dropdown: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        padding: 20,
        borderRadius: 10,
        height: 300,
        backgroundColor: theme.color.white,
        elevation: 5,
        gap: 4
    },
    options: {
        paddingBlock: 15,
        borderBottomWidth: 1,
        borderBottomColor: theme.color.border
    },
    leftIcons: {
        position: "absolute",
        right: 0,
        top: "50%",
        transform: [{ translateY: "-50%" }]

    },
    searchContainer: {
        flexDirection: "row",
        backgroundColor: "#F2F3F2",
        borderRadius: 15,
        alignItems: "center",
        gap: 6,
        paddingInline: 16,
        paddingBlock: 12
    }
})