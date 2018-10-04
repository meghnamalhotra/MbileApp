import { createStackNavigator } from 'react-navigation';
import Otp from './otpLogin'
import Drawer from './drawerLayout'
import Feedback from './feedback'
import Register from './register'
  export const Stack = createStackNavigator({
   
    // Otp:{screen:Otp},
    // Feedback:{screen:Feedback},
    Drawer:{screen:Drawer},
    Register:{screen:Register},
   }
);