import { Header, Text } from 'native-base';
import React from 'react';
import { View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Splash extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'dodgerblue' }}>
                <Header style={{ backgroundColor: 'white' }}>

                    <Image source={require('../../assets/menu.png')}
                        style={{ width: wp('5%'), height: hp('2.5%'), top: hp(2.25), right: wp(18) }}></Image>


                    <Image source={require('../../assets/img.png')}
                        style={{ alignSelf: 'center', width: wp('44%'), height: hp('5%') }}></Image>


                    <Image source={require('../../assets/camera.png')}
                        style={{ width: wp('10%'), height: hp('5%'), top: hp(1.10), left: wp(20) }}></Image>



                </Header>

                <View>
                    <Text style={{color:'white', fontSize:20, fontWeight:'bold', alignSelf:'center', top:hp(20)}}>Hi User, Welcome in Board</Text>
                    <Text style={{color:'white', fontSize:20, fontWeight:'bold', alignSelf:'center', top:hp(20)}}>Now you are in dashboard!</Text>
                </View>


            </View>

        );


    }
} 