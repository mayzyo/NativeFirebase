import React from 'react'
import styled from 'styled-components/native'
import { Icon, Input, Button } from 'native-base'

export default (props: Search) => {
    return (
        <Container>
            <Icon name='home' />
            <Input style={{ flex: 1 }} placeholder='search...'/>
            <Button onPress={() => props.navigate('Personal')}>
                <Icon name='home' />
            </Button>
        </Container>
    )
}

// STYLE PROPERTIES
const Container = styled.View(props => ({
    flexDirection: 'row',
    alignItems: 'center',
    margin: '5px 20px'
}))

export interface Search {
    navigate: Function
}