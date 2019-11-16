import React, { useEffect } from 'react'
import { NavigationSwitchScreenProps } from 'react-navigation'

const INITIAL_ROUTE = 'App'

export default (props: NavigationSwitchScreenProps) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate(INITIAL_ROUTE)
        }, 300)
    }, [])
    
    return (
        <></>
    )
}