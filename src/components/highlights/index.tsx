import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'native-base'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import auth from '@react-native-firebase/auth'
import Search from './search'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useManifest from './useManifest'
import Card from '../card'

export default (props: NavigationStackScreenProps) => {
    
    const { projects } = useManifest()
    const [current, setCurrent] = useState('')

    useEffect(() => {
        const sub = props.navigation.addListener('didFocus', () => {
            const user = auth().currentUser
            user ? setCurrent(user.email || 'no email') : props.navigation.navigate('Auth')
        })
        return () => sub.remove()
    }, [])

    return (
        <Container showsVerticalScrollIndicator={false}>
            <Search navigate={props.navigation.navigate} />
            <View style={{ marginLeft: 20 }}>
                <Text>Logged In: {current}</Text>
            </View>
            { projects.map(el => 
                <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Details', el)} >
                    <ArticleCard
                    title={el.name}
                    subtitle={el.created.toString()}
                    content="Lorem Ipsum"
                    />
                </TouchableWithoutFeedback>
            )}
        </Container>
    )
}

// STYLE PROPERTIES
const Container = styled.ScrollView(props => ({
    flex: 1
}))
const ArticleCard = styled(Card)(props => ({
    borderRadius: 15,
    margin: '10px 20px',
}))