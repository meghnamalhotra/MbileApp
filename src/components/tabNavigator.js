import { createBottomTabNavigator } from 'react-navigation';
import {Image, StyleSheet, Text} from 'react-native'
import React,{Component} from 'react'
import Otp from './otpLogin'
import Drawer from './drawerLayout'
import Feedback from './feedback'
import Register from './register'
import Twitter from './twitterShare'
 const Tabs=createBottomTabNavigator({
   Otp:{screen:Otp,
   
    
    navigationOptions: {
        tabBarLabel:'Home',
        tabBarIcon: ({tintColor}) => (
           <Image source={require('../images/Home.imageset/home_nonsel.png') }  style={[styles.tab, { tintColor:tintColor}]}/>  //
          )
        }
    },

    Feedback:{screen:Feedback,
    navigationOptions: {
        tabBarLabel:'Program',
        tabBarIcon: ({tintColor}) => (
           <Image source={require('../images/Program.imageset/program_nonsel.png') }  style={[styles.tab, { tintColor:tintColor}]}/>  //
          )
        }
    },
    Drawer:{screen:Drawer,
         navigationOptions: {
        tabBarLabel:'Connect',
        tabBarIcon: ({tintColor}) => (
           <Image source={require('../images/Connect.imageset/connect_nonsel.png') }  style={[styles.tab, { tintColor:tintColor}]}/>  //
          )
        }
    },
    ///home/user/Navigation/src/images/Connect.imageset/connect_nonsel@2x.png
    Register:{screen:Register,
         
    navigationOptions: {
        tabBarLabel:'Speakers',
        tabBarIcon: ({tintColor}) => (
           <Image source={require('../images/Speaker.imageset/speaker_nonsel.png') }  style={[styles.tab, { tintColor:tintColor}]}/>  //
          )
        }
    },
  ///home/user/Navigation/src/images/Speaker.imageset/speaker_nonsel@2x.png
    Twitter:{screen:Twitter,
         
        navigationOptions: {
            tabBarLabel:'Buzz',
            tabBarIcon: ({tintColor}) => (
               <Image source={require('../images/Buzz.imageset/buzz_nonsel.png') }  style={[styles.tab, { tintColor:tintColor}]}/>  //
              )
            }
        }
     
 ///home/user/Navigation/src/images/Buzz.imageset/buzz_nonsel@2x.png
  })
export default class Nav extends Component{
   
    render(){
      return(
        <Tabs/>
      )
    }
  }
  const styles = StyleSheet.create({
      tab:{
          width:25,
          height:25,
        
      }
  })