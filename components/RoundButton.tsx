import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ArrowNext from "../assets/svg/arrowforwardwhite.svg"

interface MyButtonProps {
    onPress: (event: GestureResponderEvent) => void;
}



const RoundBtn: React.FC<MyButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.forBtn}
            onPress={onPress}
        >
            <ArrowNext />
        </TouchableOpacity>
    )
}

export default RoundBtn

const styles = StyleSheet.create({
    forBtn: {
        height: 67,
        aspectRatio: 1,
        backgroundColor: "#53B175",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        marginBlockEnd: 30,

    }
})