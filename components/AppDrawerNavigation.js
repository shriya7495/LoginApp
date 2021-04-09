import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CustomSideBarMenu  from './CustomSideBarMenu';

import SettingScreen from '../screens/SettingScreen';
import DisplayScreen from '../screens/DisplayScreen';
import HomeScreen from "../screens/HomeScreen"

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({

  
  DisplayScreen :{
    screen: DisplayScreen,
    navigationOptions:{
      drawerIcon : <Icon name="gift" type ="font-awesome" />,
      drawerLabel : "User Details"
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Edit Details"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'MyReceiedBooks'
  })
