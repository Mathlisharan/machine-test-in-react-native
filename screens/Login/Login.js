import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Login extends React.Component {


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <View>
          <Image source={require('../../assets/img.png')}
            style={{ alignSelf: 'center', width: wp('80%'), height: hp('30%') }}></Image>
        </View>


        <View style={{ top: hp('-6%') }}>
          <TextInput
            placeholder='Email'
            placeholderTextColor='#A9A9A9'
            style=
            {{
              marginLeft: 30,
              fontSize: hp(2.5),
              color: '#000000',
              borderWidth: 1,
              width: wp('75%'),
              height: hp('9%'),
              borderRadius: 20,
              borderColor: '#878794',
              paddingLeft: 20,
              alignSelf: 'center',
              marginBottom: 20
            }}>
          </TextInput>

          <TextInput
            placeholder='Password'
            placeholderTextColor='#A9A9A9'
            style=
            {{
              marginLeft: 30,
              fontSize: hp(2.5),
              color: '#000000',
              borderWidth: 1,
              width: wp('75%'),
              height: hp('9%'),
              borderRadius: 20,
              borderColor: '#878794',
              paddingLeft: 20,
              alignSelf: 'center'
            }} secureTextEntry required>
          </TextInput>
        </View>


        <View style=
          {{
            top: hp(-3),
            backgroundColor: 'white',
            borderWidth: 1,
            width: wp("40%"),
            paddingVertical: 5,
            borderRadius: 20,
            alignSelf: 'center',
            justifyContent: 'center'
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: hp(3) }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style=
          {{
            top: hp(2),
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'center'
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{ fontSize: hp(2.5) }}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <View style=
          {{
            top: hp(10),
            backgroundColor: 'white',
            borderWidth: 1,
            width: wp("40%"),
            paddingVertical: 5,
            borderRadius: 20,
            alignSelf: 'center',
            justifyContent: 'center'
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: hp(3) }}>Signup</Text>
          </TouchableOpacity>
        </View>



      </View>
    );
  }
}
