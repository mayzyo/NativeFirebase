import { AppRegistry } from 'react-native'
import MainNavigator from './src/navigation/main-navigator'
import { name as appName } from './app.json'

if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

AppRegistry.registerComponent(appName, () => MainNavigator)
