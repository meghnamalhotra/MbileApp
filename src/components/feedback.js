import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Keyboard,ImageBackground,TextInput,TouchableWithoutFeedback,ToastAndroid} from 'react-native';
export default class Feedback extends Component{
    static navigationOptions = {

        title: 'Feedback',
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
        <View style={{flex:.87}}>
         <TextInput 
          multiline={true}
          placeholder="How can we improve?"
          placeholderTextColor="#000" 
          onChangeText={(text) => this.setState({text})}
          ></TextInput>
          </View>
          <View style={style.input}>
          <TouchableOpacity style={style.opacity} >
             <Text style={style.opacityText}>Submit</Text>
             </TouchableOpacity>
             <Text style={style.endText}>NASSCOM Events App powered by Kellton Tech</Text>
             </View>
        </View>
     
        )
    }
}

const style=StyleSheet.create({

   main:{
    flex:1,
    },
    input:{
    width:'100%',
     flex:.13
   },
   opacity:{
    width:'35%',
    height:'45%',
    backgroundColor:'orange',
    borderRadius:20,

    marginLeft:"30%"
},
opacityText:{
   
    fontSize:16,
    color:'white',
    textAlign:'center',
    marginTop:'5%',
 
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

})