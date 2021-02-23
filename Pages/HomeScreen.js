import React from 'react';
import { View ,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen(props) {
    return (
        <View style={{flex:1,alignItems:'center',backgroundColor:'#E6EAEC'}}>
        
        <View style={{flexDirection:'column',alignItems:'center',width:'93%',backgroundColor:'white',
        borderRadius:15,borderColor:'#E6EAEC',borderWidth:1,marginTop:15}}>
            <Image source={require('../assets/k1.jpg')} style={{width:'100%',height:145,borderRadius:15}}/>
            
            <Text style={{marginTop:20,fontSize:24,color:'#2F6F99', fontFamily:'Roboto'}}>Kindergarten Name</Text>
            <View style={{flexDirection:'row',marginTop:10,marginBottom:25}}>
                <Icon name="location-outline" size={20} style={{marginRight:-50}}  />
                <View style={{flexDirection:'column',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'#8D9092'}}>Nablus</Text>
            <Text style={{fontSize:17.5,color:'#8D9092'}}>An-Najah National University street</Text>
            </View>
            </View>
            </View>
        </View>
    );
}

export default HomeScreen;