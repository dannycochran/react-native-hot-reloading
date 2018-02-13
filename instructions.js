import { Platform } from 'react-native';
import { circularInstructions } from './App';
export const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  foo: circularInstructions
});
