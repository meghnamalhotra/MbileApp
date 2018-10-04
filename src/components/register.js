import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Keyboard,ImageBackground,TextInput,TouchableWithoutFeedback,ToastAndroid} from 'react-native';
export default class Register extends Component{
    static navigationOptions = {

        title: 'Register',
        headerStyle: {
            backgroundColor: '#132558',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold',
          },
      }
      constructor(props)
      {
          super(props)
          state={
              text:''
          }
      }
    render(){
        return(
        <View style={style.main}>
        <Text style={style.text}>Please provide your email address used to register for Nasscom BPM Stratergy Summit 2018 to network with other attendees. By providing this email address you are allowing other attendees to connect with you through the app.  </Text>
        <Text style={style.text2}>Email Id</Text>
        <TextInput style={style.textInp} selectionColor='#132558'></TextInput>
        <TouchableOpacity style={style.opacity} >
             <Text style={style.opacityText}>Submit</Text>
             </TouchableOpacity>
             <Text style={style.text3}>By pressing submit you are allowing other Nasscom BPM Stratergy Summit 2018 attendees to connect with you through the app</Text>
             <Text style={style.endText}>NASSCOM Events App powered by Kellton Tech</Text>
        </View>
     
        )
    }
}

const style=StyleSheet.create({

   main:{
    flex:1,
    },
    text:{
     color:'black',
     fontSize:16,
     marginHorizontal:8,
     textAlign:'justify',
     marginTop:5,
    
    },
    text2:{
       fontSize:13,
       color:'#132558',
       marginHorizontal:10,
       marginTop:'10%',
     
    },
   opacity:{
    width:'40%',
    height:'6%',
    backgroundColor:'orange',
    borderRadius:20,
    marginTop:'13%',
    marginLeft:"30%"
   },
   opacityText:{
   
    fontSize:16,
    color:'white',
    textAlign:'center',
    marginTop:'3%',
 
    },
    endText:{
    color:'white', 
    textAlign: 'center',
    fontSize:11,
    width:'100%',
    position:'absolute',
    bottom:0,
    backgroundColor:'#686868'
  },
  textInp:{
    borderBottomColor:'#132558',
    borderBottomWidth:2,
    paddingBottom:0,
  marginHorizontal:10,
 
  },
  text3:{
    marginTop:'8%',
    color:'black',
    marginHorizontal:8,
    fontSize:13
  }

})