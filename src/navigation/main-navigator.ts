import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Authentication, Debugger } from '../core'

const MainNavigator = createStackNavigator(
    {
        Debugger: {
            screen: Debugger,
        },
    },
    {
        initialRouteName: 'Debugger',
        defaultNavigationOptions: () => ({ header: null }),
        // transitionConfig: stackTransition
    },
)

export default createAppContainer(
    // For Sign In Screen
    createSwitchNavigator(
        {
            App: MainNavigator,
            Auth: createStackNavigator(
                { Authentication }, 
                { defaultNavigationOptions: () => ({ header: null }) }
            ),
        },
        {
          initialRouteName: 'Auth',
        }
    )
)