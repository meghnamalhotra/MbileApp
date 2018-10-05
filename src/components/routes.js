import { createStackNavigator } from 'react-navigation';
import Otp from './otpLogin'
import Drawer from './drawerLayout'
import Feedback from './feedback'
import Register from './register'
// import Tabs from './tabNavigator'
import React,{Component} from 'react'

import Nav from './tabNavigator'

  export const Stack = createStackNavigator({
    Tabs:{screen:Nav},
    Drawer:{screen:Drawer},
    // Otp:{screen:Otp},
    // Feedback:{screen:Feedback},
    Register:{screen:Register},
   }
);
