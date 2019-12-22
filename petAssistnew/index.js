import { Navigation } from "react-native-navigation";

//import {AppRegistry} from 'react-native';
import App from './App';
//import {name as appName} from './app.json';
//AppRegistry.registerComponent(appName, () => App);

import startPage from './src/screens/startPage'

import myPets from './src/screens/myPets'
import clinic from './src/screens/clinic'
import complaint from './src/screens/complaint'
import gift from './src/screens/gift'
import activity from './src/screens/activity'
import question from './src/screens/question'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import exampleGift from './src/screens/exampleGift'
import ihbar from './src/screens/ihbar'
import yardim from './src/screens/yardim'


Navigation.registerComponent('startPage', () => startPage)
Navigation.registerComponent('myPets', () => myPets)
Navigation.registerComponent('clinic', () => clinic)
Navigation.registerComponent('complaint', () => complaint)
Navigation.registerComponent('gift', () => gift)
Navigation.registerComponent('activity', () => activity)
Navigation.registerComponent('question', () => question)
Navigation.registerComponent('Login', () => Login)
Navigation.registerComponent('SignUp', () => SignUp)
Navigation.registerComponent('exampleGift', () => exampleGift)
Navigation.registerComponent('ihbar', () => ihbar)
Navigation.registerComponent('yardim', () => yardim)




Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
       stack: {
         id:'AppStack',
         children:[
           {
             component:{
               name:'startPage'
             }
           }
         ]
       }
    }
  });
});