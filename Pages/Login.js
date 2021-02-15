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
              <Text style={{position:'absolute',top:280,fontSize:18,width:280}}>Don't have an account?  </Text>
              <TouchableOpacity>
                <Text style={{color:'white',marginTop:90,marginLeft:170,fontSize:22,color:'#5876B9'}}>Sign Up</Text>
        
               </TouchableOpacity>
               
        </View>
       
        </View>
     
    );
}
const styles = StyleSheet.create({
  Container:{
      position:'absolute',
      top:322,
      right:73,
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