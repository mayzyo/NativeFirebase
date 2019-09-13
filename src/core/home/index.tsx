import React, { useEffect, useState } from 'react'
import { Container, Header, Left, Body, Title, Right, View, Text } from 'native-base'
import { NavigationScreenProps } from 'react-navigation'
import auth, { Auth } from '@react-native-firebase/auth'

export default (props: Home) => {
    
    const [current, setCurrent] = useState('')

    useEffect(() => {
        const sub = props.navigation.addListener('didFocus', () => {
            const user = auth().currentUser
            user ? setCurrent(user.email || 'no email') : props.navigation.navigate('Auth')
        })
        return () => sub.remove()
    }, [])

    return (
        <Container>
            <Header>
                <Left />
                <Body>
                    <Title>App Home</Title>
                </Body>
                <Right />
            </Header>
            <View>
                <Text>Logged In: {current}</Text>
            </View>
        </Container>
    )
}

export interface Home extends NavigationScreenProps {

}