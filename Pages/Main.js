import React from 'react';
import { Image, Text, View } from 'react-native';

function Main(props) {
    return (
        <View style={{flexDirection:'column',alignContent:'flex-start'}}>
      <View style={{alignContent:'space-between',flexDirection:'row',width:250,marginTop:50}}>
          <Image style={{width:100,height:100}} source={require('../assets/favicon.png')}/>
          
          <Text style={{marginLeft:60,fontSize:16,marginTop:15}} >الروضة </Text>
      </View>
      <View style={{alignContent:'space-between',flexDirection:'row',width:250,marginTop:50}}>
          <Image style={{width:100,height:100}} source={require('../assets/favicon.png')}/>
          
          <Text style={{marginLeft:60,fontSize:16.5,marginTop:15}} >Syrian kinder</Text>
      </View>
      </View>
    );
}

export default Main;