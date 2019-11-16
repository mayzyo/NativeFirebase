import React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const { width: WIDTH } = Dimensions.get('window')

export default (props: Article) => {
    return (
        <TouchableWithoutFeedback onPress={props.navigate}>
            <ArticleView>
                <Text>{props.subtitle && props.subtitle.toUpperCase()}</Text>
                <TitleText>{props.title}</TitleText>
                <Text>{props.content}</Text>
            </ArticleView>
        </TouchableWithoutFeedback>
    )
}

// STYLE PROPERTIES
const ArticleView = styled.View(props => ({
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    minHeight: WIDTH,
    margin: '10px 20px',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.4)'
}))
const Text = styled.Text(props => ({
    color: 'white',
}))
const TitleText = styled(Text)(props => ({
    fontSize: 36,
    lineHeight: 38
}))

export interface Article {
    navigate: () => void
    title: string
    subtitle?: string
    content: string
}