import React,{Component} from 'react';
import { render } from 'react-dom';
import { Text,Input, TextInput, View,StyleSheet, ImageBackground, Image,DropDown, Platform, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalDropdown from 'react-native-modal-dropdown';

function NewAccount(props) {
      
  
    return (
        <View style={{backgroundColor:'#E6B0AA',flex:1,paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0}}>
        
        <View style={styles.Container} >
            <Text style={{color:'white',fontWeight:'bold',fontSize:24,backgroundColor:'#E6B0AA',width:'100%',height:40,justifyContent:'center',alignItems:'center',color:'#1F618D'}}>                Create New Account</Text>
            <Text  style={{color:'white',fontSize:15,backgroundColor:'#1F618D',width:'100%',height:30,justifyContent:'center',alignItems:'center',}}>   Please fill in your information below to create your account</Text>
            <Text style={{color:'white',fontSize:18,marginRight:270,marginTop:-5,marginTop:10}}>  Username  </Text>
              <TextInput placeholder="  Username" style={[styles.Input,styles.font]} />
              <Text style={{color:'white',fontSize:18,marginRight:310,}}>Email</Text>
              <TextInput placeholder="  Email Address" style={styles.Input}/>              
              <Text style={{color:'white',fontSize:22,marginRight:325,marginTop:5}}>City:</Text>
         
              <ModalDropdown options={['Nablus', 'Ramallah','Tulkarem','Jenin','Qalqiliah','Tubas']} placeholder="Select Your City" style={{width:315,fontSize:20,height:45,backgroundColor:'white',marginTop:-30,borderRadius:9,marginLeft:60}} dropdownStyle={{width:315,fontSize:20,marginTop:-38}} dropdownTextStyle={{fontSize:20}} textStyle={{fontSize:18}} />
             
              
               <Text style={{color:'white',fontSize:22,marginRight:250,width:120,marginLeft:6,marginTop:22}}>Register as: </Text>
               <ModalDropdown options={['Parent','Kindergarten']}  style={{width:245,fontSize:20,height:45,backgroundColor:'white',marginBottom:15,marginTop:-28,borderRadius:9,marginLeft:125}} dropdownStyle={{width:245,fontSize:20,marginTop:-38,height:110}} dropdownTextStyle={{fontSize:20}} textStyle={{fontSize:18}} />

                 <Text style={{color:'white',fontSize:18,marginRight:275,marginTop:-5}}>  Password  </Text>
                <TextInput secureTextEntry={true} placeholder="  Password" style={[styles.Input,styles.font]} />
                <Text style={{color:'white',fontSize:18,marginRight:175,marginTop:-5}}>  Repeat Your Password  </Text>

                <TextInput secureTextEntry={true} placeholder="  Repeat Your Password" style={[styles.Input,styles.font]} />
                <TouchableOpacity style={{width:135,height:50,backgroundColor:'#1F618D',justifyContent:'center',alignItems:'center',borderRadius:20}}>
                    <Text style={{color:'white',fontSize:25}}>Sign Up </Text>
                </TouchableOpacity>
                        <Image style={{backgroundColor:'#E6B0AA',width:'30%',height:'20%',marginBottom:-35,marginLeft:-250}} source={require('../assets/cartoon.png')}/>


        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        justifyContent:'center',
      flexDirection:'column',
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#E6B0AA',
       
    },
    Input:{
        fontSize:20,
        width:380,
        height:45,
        borderWidth:1,
        borderColor:'white',
        marginBottom:20,
        backgroundColor:'white',
        borderRadius:9
      
        
    },
    font:{

        color:'black'
    },
   

});

export default NewAccount;