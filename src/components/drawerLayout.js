import React,{Component} from 'react'
import {StyleSheet, Text, View,DrawerLayoutAndroid,TouchableOpacity,Image,FlatList} from 'react-native';
 export default class Drawer extends Component 
{

    static navigationOptions = {
        header:null
    };
    constructor(props)
    {
    //   this.Array_Items=require('../utility/sideMenu.json')
      //listData=require('../utility/sideMenu.json')
      super(props)
      
    }
    render() {
      var navigationView = (
       <View>
       <FlatList
        keyExtractor={(item, index) => item + index}
        data={this.listData}
        renderItem={({item})=>{
         return(
            <View style={style.sideMenu}>
               <Image source={item.image} style={{width:20}}/> 
               <Text style={{width:170,fontSize:16,marginLeft:5,color:'black'}}>{item.title}</Text>
               <Image source={require('../images/right_arrow.imageset/arrow.png')} style={{width:20,marginLeft:15}}/> 
            </View>
        )}}
        
       ></FlatList>
        </View>
      );
      return (
        <DrawerLayoutAndroid
         ref={ref=>(this.DrawerLayoutRef=ref)}
         drawerWidth={250}
         drawerPosition={DrawerLayoutAndroid.positions.Left}     
         renderNavigationView={()=>navigationView }>
         <View style={style.header}>
         <TouchableOpacity onPress={()=>{this.openDrawer()}}>
         <Image style={style.menuIcon}
          source={require('../images/menuIcon.imageset/3_bar_menu.png')}/>
         </TouchableOpacity>
         </View>
       </DrawerLayoutAndroid>
      );
    }
  
    openDrawer=()=>{     //open drawer function
      this.DrawerLayoutRef.openDrawer()
    }

   listData= [
       {
        image:require('../images/MyProfile.imageset/profile.png'),
        title:"My Profile"
    },
    {
        image:require('../images/MyNotes.imageset/create_note_.png'),
        title:"My Notes"
    },
    {
        image:require('../images/Sponsors.imageset/sponsors.png'),
        title:"Sponsors"
    },
    { image:require('../images/helpDesk.imageset/help.png'),
        title:"Help Desk"
    },
    {
        image:require('../images/About.imageset/about.png') ,
        title:"About Kellton Tech"
    },
    {
        image:require('../images/About.imageset/about.png') ,
        title:"About NATC 2018"
    },
    {
        image:require('../images/feedback.imageset/feedback.png'),
        title:"Submit Feedback"
    },
    {
        image:require('../images/Logout.imageset/logout.png'),
        title:"Log Out"
    }
    
    ]
}
 const style=StyleSheet.create({
     header:{
        backgroundColor: '#132458',
        height:60,
        flexDirection: 'row',
        },
        menuIcon:{
            marginTop:15,
            marginLeft:10,
        },
        sideMenu:{
          flex:1,
          flexDirection: 'row',
          padding:15,
          borderBottomColor:'#cccccc',
          borderBottomWidth:1,
          alignItems: 'center',
        }
 }

 )
