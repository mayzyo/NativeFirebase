import React from 'react'
import styled from 'styled-components/native'
import { Dimensions, ViewStyle } from 'react-native'
import Touchable from './touchable'

const { width: WIDTH } = Dimensions.get('window')

export default (props: Card) => {
    return (
        <Container style={props.style}>
            <Text>{props.subtitle && props.subtitle.toUpperCase()}</Text>
            <TitleText>{props.title}</TitleText>
            <Text>{props.content}</Text>

            { props.goBack ? (
                <ExitContainer>
                    <ExitButton onPress={() => props.goBack && props.goBack()}>
                        <Text>X</Text>
                    </ExitButton>
                </ExitContainer>
            ) : null }

        </Container>
    )
}

// STYLE PROPERTIES
const Container = styled.View(props => ({
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    minHeight: WIDTH,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)'
}))
const Text = styled.Text(props => ({
    color: 'white',
}))
const TitleText = styled(Text)(props => ({
    fontSize: 36,
    lineHeight: 38
}))
const ExitContainer = styled.View(props => ({
    position: 'absolute',
    right: 20,
    top: 20,
}))
const ExitButton = styled(Touchable)(props => ({
    borderRadius: 15,
    width: 25,
    height: 25,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
}))

export interface Card {
    variant?: CardVariant
    title: string
    subtitle?: string
    content: string
    style?: ViewStyle
    goBack?: () => void
}

export enum CardVariant {
    BETWEEN
}