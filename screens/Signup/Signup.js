import React from 'react';
import { TextInput, View, ScrollView, Text, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class Signup extends React.Component {



  render() {
    return (

      <View style={{ flex: 1, backgroundColor: 'white' }}>



        <View>
          <Image source={require('D:/Machine test/assets/img.png')} 
          style={{ alignSelf: 'center', width: '80%', height: '30%' }}></Image>
        </View>

        

        <View style={{ top: '-20%' }}>
          <TextInput placeholder='First Name' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
          }}>
          </TextInput>

          <TextInput placeholder='Last Name' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
          }}>
          </TextInput>

          <TextInput placeholder='Emaid ID' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
          }}>
          </TextInput>

          <TextInput placeholder='Country Code' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
          }}>
          </TextInput>

          <TextInput placeholder='Mobile No' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
          }}>
          </TextInput>

          <TextInput placeholder='Get OTP' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', textAlign: 'center', marginBottom: 10
          }}>
          </TextInput>

          <TextInput placeholder='Enter OTP' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', textAlign: 'center', marginBottom: 10
          }}>
          </TextInput>

          <TextInput placeholder='Verify OTP' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', textAlign: 'center', marginBottom: 10
          }}>
          </TextInput>

          <TextInput placeholder='Password' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
          }} secureTextEntry>
          </TextInput>

          <TextInput placeholder='Re-Password' placeholderTextColor='#A9A9A9' style={{
            marginLeft: 30, fontSize: 16,
            color: '#000000', borderWidth: 1, width: '75%',
            borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center'
          }} secureTextEntry>
          </TextInput>
        </View>


        <View style={{ top: '-18%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white', borderWidth: 1, width: "40%", paddingVertical: 5, borderRadius: 20,
              alignSelf: 'center', justifyContent: 'center'
            }}>
            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 24 }}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={{ top: '-16%' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 16 }}>Already A Member? Sing In</Text>
          </TouchableOpacity>
        </View>




      </View>
    );
  }
}
