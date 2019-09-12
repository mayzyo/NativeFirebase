import { AppRegistry } from 'react-native'
import MainNavigator from './src/navigation/main-navigator'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => MainNavigator)
