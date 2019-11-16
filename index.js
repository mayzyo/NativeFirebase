import { AppRegistry } from 'react-native'
import AppNavigator from './src/navigation/app-navigator'
import { name as appName } from './app.json'

if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

AppRegistry.registerComponent(appName, () => AppNavigator)
