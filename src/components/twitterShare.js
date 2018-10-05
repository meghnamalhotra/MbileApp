import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import {shareOnTwitter} from 'react-native-social-share';
export default class Twitter extends Component{

    tweet=()=>{
 
        shareOnTwitter({
            'text':'Global democratized marketplace for art',
            'link':'https://artboost.com/',
            'imagelink':'https://artboost.com/apple-touch-icon-144x144.png',
            //or use image
            'image': 'artboost-icon',
          },
          (results) => {
            console.warn(results);
          }
        );
      }

    render()
    {
        return(
      <View>
    <TouchableOpacity onPress={()=>{this.tweet()}} >
     <Text>Press me!</Text>
    </TouchableOpacity>
      </View>
        )
    }
}