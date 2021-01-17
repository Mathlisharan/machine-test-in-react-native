import React from 'react';
import { TextInput, View, ScrollView, Text, Image, Button, _ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default class Signup extends React.Component {



  render() {
    return (

      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <ScrollView>

          <View style={{ top: hp('-10%') }}>
            <Image source={require('../../assets/img.png')}
              style={{ alignSelf: 'center', width: wp('80%'), height: hp('30%') }}></Image>
          </View>



          <View style={{ top: hp('-20%') }}>
            <TextInput placeholder='First Name' placeholderTextColor='#A9A9A9' style={{
              marginLeft: 30, fontSize: hp(2.5),
              color: '#000000', borderWidth: 1, width: wp('75%'),
              borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
            }}>
            </TextInput>

            <TextInput placeholder='Last Name' placeholderTextColor='#A9A9A9' style={{
              marginLeft: 30, fontSize: hp(2.5),
              color: '#000000', borderWidth: 1, width: wp('75%'),
              borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
            }}>
            </TextInput>

            <TextInput placeholder='Emaid Id' placeholderTextColor='#A9A9A9' style={{
              marginLeft: 30, fontSize: hp(2.5),
              color: '#000000', borderWidth: 1, width: wp('75%'),
              borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
            }}>
            </TextInput>

            <TextInput placeholder='Country Code' placeholderTextColor='#A9A9A9' style={{
              marginLeft: 30, fontSize: hp(2.5),
              color: '#000000', borderWidth: 1, width: wp('75%'),
              borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
            }}>
            </TextInput>

            <TextInput placeholder='Mobile No' placeholderTextColor='#A9A9A9' style={{
              marginLeft: 30, fontSize: hp(2.5),
              color: '#000000', borderWidth: 1, width: '75%',
              borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
            }}>
            </TextInput>

            <TextInput placeholder='Get OTP' placeholderTextColor='#A9A9A9' style={{
              marginLeft: 30, fontSize: hp(2.5),
              color: '#000000', borderWidth: 1, width: wp('75%'),
              borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', textAlign: 'center', marginBottom: 10
            }}>
            </TextInput>

            <TextInput placeholder='Enter OTP' placeholderTextColor='#A9A9A9' style={{
              marginLeft: 30, fontSize: hp(2.5),
              color: '#000000', borderWidth: 1, width: wp('75%'),
              borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', textAlign: 'center', marginBottom: 10
            }}>
            </TextInput>

            <TextInput placeholder='Verify OTP' placeholderTextColor='#A9A9A9' style={{
              marginLeft: 30, fontSize: hp(2.5),
              color: '#000000', borderWidth: 1, width: wp('75%'),
              borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', textAlign: 'center', marginBottom: 10
            }}>
            </TextInput>

            <TextInput placeholder='Password' placeholderTextColor='#A9A9A9' style={{
              marginLeft: 30, fontSize: hp(2.5),
              color: '#000000', borderWidth: 1, width: wp('75%'),
              borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center', marginBottom: 10
            }} secureTextEntry>
            </TextInput>

            <TextInput placeholder='Re-Password' placeholderTextColor='#A9A9A9' style={{
              marginLeft: 30, fontSize: hp(2.5),
              color: '#000000', borderWidth: 1, width: wp('75%'),
              borderRadius: 20, borderColor: '#878794', paddingLeft: 20, alignSelf: 'center'
            }} secureTextEntry>
            </TextInput>
          </View>


          <View style=
            {{
              top: hp('-18%'),
              backgroundColor: 'white',
              borderWidth: 1,
              width: wp("40%"),
              paddingVertical: 5,
              borderRadius: 20,
              alignSelf: 'center',
              justifyContent: 'center'
            }}>
            <TouchableOpacity>
              <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: hp(3) }}>Signup</Text>
            </TouchableOpacity>
          </View>

          <View style={{ top: hp('-16%'), flexDirection: 'row', alignSelf: 'center' }}>

            <Text style=
              {{
                justifyContent: 'center',
                alignSelf: 'center',
                fontSize: hp(2)
              }}>Already A Member? </Text>


            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Text style=
                {{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontSize: hp(2)
                }}>Log In</Text>
            </TouchableOpacity>

          </View>



        </ScrollView>
      </View>
    );
  }
}
