import React from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'
import { NavigationScreenProps } from 'react-navigation'

export default (props: Authentication) => {
    return (
        <Container>
            <Grid style={{ margin: 16, paddingTop: '25%' }} >
                <Row>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                            <Button 
                            style={{ marginTop: 40 }} 
                            onPress={() => props.navigation.navigate('App')} 
                            block
                            >
                                <Text>Sign In</Text>
                            </Button>
                        </Form>
                    </Content>
                </Row>
            </Grid>
        </Container>
    )
}

export interface Authentication extends NavigationScreenProps {

}