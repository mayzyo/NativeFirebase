import React from 'react'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import { Text } from 'react-native'
import { Project } from '../../models/project'
import Card from '../card'
import styled from 'styled-components/native'

export default (props: NavigationStackScreenProps<Details>) => {

    return (
        <>
            <Card
            title={props.navigation.getParam('name')}
            subtitle={props.navigation.getParam('created').toString()}
            content="Lorem Ipsum"
            goBack={props.navigation.goBack}
            />
            <ArticleView>
                <Text>{props.navigation.getParam('name')}</Text>
            </ArticleView>
        </>
    )
}

// STYLE PROPERTIES
const ArticleView = styled.View(props => ({
    margin: 18
}))

export interface Details extends Project {

}