import React from 'react';
import { Image, ImageBackground,StyleSheet, View,TextInput, TouchableOpacity,Text } from 'react-native';

function Login(props) {
    return (
      <View style={{backgroundColor:'#E6B0AA',flex:1,justifyContent:'flex-end',alignContent:'center'}}>
      <Image style={{backgroundColor:'#E6B0AA',width:'100%',height:'60%',opacity:0.51}} source={require('../assets/background.png')}/>
      <View style={styles.Container} >

              <TextInput placeholder="  Username" style={styles.Input}/>
              <TextInput secureTextEntry={true} placeholder="  Password" style={[styles.Input,styles.font]} />
              <TouchableOpacity style={styles.button} onPress={()=>console.log('button touched')}>
                <Text style={{fontSize:26,color:'#5876B9'}}>Log In </Text>
              </TouchableOpacity>
              <View style={{flexDirection:'column',marginTop:80,alignItems:'center'}}>
           </View>   
             <Text style={{fontSize:18}}>Don't have an account?  </Text>
              <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',marginRight:-20}}>
           
                <Text style={{color:'white',fontSize:18,color:'black'}}>Sign Up as</Text>
                <TouchableOpacity>
                  <Text style={{color:'#5876B9',fontSize:22,marginLeft:10,fontWeight:'bold'}}>Parent</Text>
                </TouchableOpacity>
               <Text style={{fontSize:18,marginLeft:8,marginRight:8}}>-OR-</Text>
               <TouchableOpacity>
                <Text style={{color:'white',fontSize:22,color:'#5876B9',fontWeight:'bold'}}>Kindergarten</Text>
        
               </TouchableOpacity>
               </View>
               </View>
      
       
        </View>
     
    );
}
const styles = StyleSheet.create({
  Container:{
      position:'absolute',
      top:325,
      right:55,
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center'
  },
  Input:{
      fontSize:20,
      width:250,
      height:45,
      borderWidth:1,
      borderColor:'#F2D7D5',
      borderRadius:20,
      marginBottom:20,
      backgroundColor:'white',
      opacity:0.65,
      
  },
  font:{
      color:'black'
  },
  button:{
    width:170,
    height:40,
    backgroundColor:'white',
    fontSize:20,
    borderRadius:14,
    alignItems:'center',
    marginTop:15
  }

});
export default Login;