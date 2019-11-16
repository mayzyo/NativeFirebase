import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import { Platform } from 'react-native'

export default (props: NavigationStackScreenProps) => {

    const [form, setForm] = useState({ username: '', password: '' })

    const handleSubmit = async () => {
        if(!form.username || !form.password) return
        console.log('submitting', form)
        const res = await auth().signInWithEmailAndPassword(form.username, form.password)
        console.log('received', res)
        props.navigation.navigate('App')
    }

    return (
        <Container>
            <Grid style={{ margin: 16, paddingTop: '25%' }} >
                <Row>
                    <Content>
                        <Form>
                            <Item floatingLabel={Platform.OS == 'android'}>
                                <Label>Username</Label>
                                <Input 
                                value={form.username}
                                onChangeText={text => setForm(p => ({ ...p, username: text }))} 
                                
                                />
                            </Item>
                            <Item floatingLabel={Platform.OS == 'android'}>
                                <Label>Password</Label>
                                <Input 
                                value={form.password}
                                onChangeText={text => setForm(p => ({ ...p, password: text }))} 
                                secureTextEntry
                                />
                            </Item>
                            <Button
                                style={{ marginTop: 40 }}
                                onPress={() => handleSubmit()}
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