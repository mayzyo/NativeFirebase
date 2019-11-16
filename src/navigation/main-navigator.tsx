import { Personal, Highlights, Details } from '../components'
import { createStackNavigator } from 'react-navigation-stack'

export default createStackNavigator(
    {
        Highlights,
        Details: {
            screen: Details,
            navigationOptions: () => ({ header: null })
        },
        Personal
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.routeName
        }),
        // transitionConfig: stackTransition
    },
)