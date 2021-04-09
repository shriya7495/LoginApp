import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import MyFirstScreen from './screens/firstPage';

import ReceiverDetailsScreen from './screens/DisplayScreen'
import SignUpScreen from './screens/signUp'
import ForgotPassword from './screens/ForgetPassword'
import { AppDrawerNavigator } from './components/AppDrawerNavigation'


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
   FirstScreen:{screen: MyFirstScreen},
   HomeScreen:{screen: HomeScreen},
  SignUpScreen:{screen:SignUpScreen},
    ForgotPassword:{screen:ForgotPassword},
  Drawer:{screen: AppDrawerNavigator}

})

const AppContainer =  createAppContainer(switchNavigator);
