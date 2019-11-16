import React from 'react'
import { Platform, View, ViewStyle, TouchableWithoutFeedbackProps } from 'react-native'
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler'

let PlatformTouchable: any

if (Platform.OS == 'android') {
    PlatformTouchable = Platform.Version <= 20 ? TouchableOpacity : TouchableNativeFeedback
} else {
    PlatformTouchable = TouchableOpacity
}

export default (props: Touchable) => {

    if(props.ripple) {
        return (
            <PlatformTouchable onPress={props.onPress}>
                <View style={props.style}>
                    {props.children}
                </View>
            </PlatformTouchable>
        )
    }

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.style}>
                {props.children}
            </View>
        </TouchableOpacity>
    )
}

export interface Touchable extends TouchableWithoutFeedbackProps {
    children: JSX.Element | JSX.Element[] | string
    style?: ViewStyle
    ripple?: boolean
}