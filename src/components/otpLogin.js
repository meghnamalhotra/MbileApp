import React, {Component} from 'react';
import md5 from "react-native-md5";
import Toast, {DURATION} from 'react-native-easy-toast'
import {StyleSheet, Text, View,TouchableOpacity,Keyboard,ImageBackground,TextInput,TouchableWithoutFeedback,ToastAndroid} from 'react-native';
import api from '../utility/apiCall'
import {Alert} from '../utility/customAlert'
export default class Otp extends Component
{
    key1="ux19tyiC5Fn0JTLa1l9CIIe03Cw2NsPD"
    key2="vqPvO5H6bMbUhBiOqKT32priQnQrO43k"
    
     static navigationOptions = {
       header:null
      };
      state = {
        isFocused: false,
        otp:0,
        dummyOtp:9090,
        showAlert:false,      
        hideAlert:true
      };
    
    myFunc=()=>{
        this.setState({showAlert:false})
    } 
    renderAlert=()=>{
        if(this.state.showAlert)
        return(<Alert 
               message="Please enter the valid passcode which sent on your email.This field should not be empty."
               hideShowAlert={(x)=>{this.setState({showAlert:x}) }}
               />
              )
            else
              return null;
    } 
    render()
    {
       
       const textOtp={
            color:'white',
            position:'absolute',
            marginLeft: '6%',
            marginTop:!this.state.isFocused ? '6%' : '0%',
            fontSize: !this.state.isFocused ? 16 : 12,
        }

           return(
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            
            <View style={styles.container}>
           
            <ImageBackground  source={require('../images/1242x2208_Login.png')}  style={styles.image}>
             <View style={styles.login}>
             <Text style={styles.loginText}>LOGIN</Text>
              <Text style={styles.text}>The code has been sent to your registered email id. Please enter the code to proceed further.</Text>
             <View style={{marginTop:'8%'}}>  
             <Text style={textOtp}>OTP</Text>
             <TextInput style={styles.textInput} keyboardType="number-pad" onFocus={()=> this.setState({isFocused:true})} onChangeText={(otp) => this.setState({otp})} selectionColor='white'></TextInput>
             </View> 
             <Text style={styles.resend}>Resend OTP</Text>
             <TouchableOpacity style={styles.opacity} onPress={()=>{
               if(this.state.otp=="")  
               {
               this.setState({showAlert:!this.state.showAlert})
               }
               else{
                  if(this.state.otp==this.state.dummyOtp){
                  this.apiCall();
                  }
                  else
                  {
                this.refs.toast.show(<Text style={styles.toastText}>The access code entered is incorrect. Please enter correct access code.</Text>,1000);
               }
            }
             }}>
             <Text style={styles.opacityText}>Submit</Text>
             </TouchableOpacity>
             </View>
             {this.renderAlert()}
             {/* <Alert/> */}
             <Toast style={styles.toast}ref="toast"/>
             <Text style={styles.endText}>NASSCOM Events App powered by Kellton Tech</Text>
             </ImageBackground>
             </View>
             </TouchableWithoutFeedback>
        )
    }
  
    apiCall=()=>{
       
        uts=Math.round((new Date()).getTime() / 1000) //timestamp
        var combine=this.key1+this.key2+uts
        let hex_md5v = md5.hex_md5( combine );
        console.warn(">>>>hex_md5:", hex_md5v);
        console.warn("uts", uts);
         api.postMethod(uts,hex_md5v)
       // api.getMethod(uts,hex_md5v,36081)
        'The access code entered is incorrect. Please enter correct access code.'
    }
}
const styles = StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
     image:{
        width:'100%',
        height:'100%',
     
      
    },
    login:{
        backgroundColor:'#132558',
        height:"60%",
        marginTop: '48%',
        marginHorizontal: '13%',
     
    },
    loginText:{
        color:'white',
        fontSize:22,
        fontWeight: 'bold',
        marginTop:'10%', 
        textAlign:"center"
       
    },
    text:{
        color:'white',
        marginHorizontal:'7%',
        marginTop:20
    },
    textInput:{
        borderBottomWidth:1,
        borderBottomColor:'white',
        width:'90%',
        marginHorizontal:'5%', 
        color:'white',
        paddingBottom:0,
    
    },
    resend:{
        color:'white',
        marginTop:'15%',
        fontSize:16,
        textAlign:'center'
    },
    opacity:{
        width:'50%',
        height:'16%',
        backgroundColor:'orange',
        borderRadius:20,
        marginTop:'15%',
        marginLeft:"25%"
    },
    opacityText:{
       
        fontSize:16,
        color:'white',
        textAlign:'center',
        marginTop:'5%',
     
    },
    endText:{
        color:'white', 
        marginHorizontal:'11.75%',
        fontSize:13,
        marginTop:'2%',
    },
    toast:{
        backgroundColor:'#4F5156',
        opacity:.9,
        width:'90%',
        borderRadius:18,
        position:"absolute",
        bottom:30,
      
        
    },
    toastText:{
        textAlign:"center",
        fontSize:15,
        color:'white'
    }
    
    
  });

  