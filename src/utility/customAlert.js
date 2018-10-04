import AwesomeAlert from 'react-native-awesome-alerts';
import React, {Component} from 'react';
import Otp from '../components/otpLogin'
export class Alert extends Component{
    state={
        showAlert:true
    }
    render(){
        const {showAlert} = this.state;
        return(
        <AwesomeAlert
         show={showAlert}
         showProgress={false}
         message={this.props.message}
         closeOnTouchOutside={true}
         closeOnHardwareBackPress={false}
         showConfirmButton={true}
         confirmText="OK"
         confirmButtonStyle={{
         backgroundColor:'orange',
         height:45,
         marginTop:20,
         width:288,
         borderBottomLeftRadius: 20,
         borderBottomRightRadius: 20,
         borderTopLeftRadius:0,
         borderTopRightRadius:0,
        }}
        contentContainerStyle={{
            width:300,
            height:170,
            borderRadius:20,
        }}
        messageStyle={{
            textAlign:'center',
           marginTop:16,
            fontSize:16,
            color:'black'
        }}
        confirmButtonTextStyle={{
            textAlign:'center',
            fontSize:17,
            marginTop:4,
            fontWeight:'bold',
        }}
       onConfirmPressed={() => {
       this.hideAlert();
       }}
    />
    )
    }

    hideAlert = () => {
       
        this.setState({
          showAlert: false
        });
       
        this.props.hideShowAlert(false);

      };
}