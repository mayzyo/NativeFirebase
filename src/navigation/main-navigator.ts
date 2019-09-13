import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Authentication, Home } from '../core'

const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
    },
    {
        initialRouteName: 'Home',
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
          initialRouteName: 'App',
        }
    )
)