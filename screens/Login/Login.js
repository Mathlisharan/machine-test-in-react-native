import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class Login extends React.Component {


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <View>
          <Image source={require('D:/Machine test/assets/img.png')} 
          style={{ alignSelf: 'center', width: '80%', height: '65%' }}></Image>
        </View>

     
        <View style={{ top: '-35%' }}>
          <TextInput placeholder='Email' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%', height: '20%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center'
          }}>
          </TextInput>

          <View style={{
            marginTop: -20,
            marginLeft: 30,
            marginBottom: 20,
            marginRight: 30,
            padding: 10,
          }} />

          <TextInput placeholder='Password' placeholderTextColor='#A9A9A9'
            style={{
              marginLeft: 30, fontSize: 16, color: '#000000', borderWidth: 1,
              width: '75%', height: '20%', borderRadius: 20, borderColor: '#878794',
              paddingLeft: 20, alignSelf: 'center'
            }} secureTextEntry required>
          </TextInput>

          <View style={{
            marginTop: -25,
            marginLeft: 30,
            marginBottom: 20,
            marginRight: 30,
          }} />
        </View>


        <View style={{ top: '-55%' }}>
          <TouchableOpacity style={{
            backgroundColor: 'white', borderWidth: 1, width: "40%",
            paddingVertical: 5, borderRadius: 20, alignSelf: 'center', justifyContent: 'center'
          }}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 26 }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{ top: '-50%' }}>
          <TouchableOpacity>
            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 20 }}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ top: '-40%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white', borderWidth: 1, width: "40%", paddingVertical: 5, borderRadius: 20,
              alignSelf: 'center', justifyContent: 'center'
            }} onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 26 }}>Signup</Text>
          </TouchableOpacity>
        </View>



      </View>
    );
  }
}
