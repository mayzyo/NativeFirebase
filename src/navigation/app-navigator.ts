import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoadingScreen from './loading-screen'
import MainNavigator from './main-navigator'

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: MainNavigator,
        },
        {
          initialRouteName: 'Loading',
        }
    )
)