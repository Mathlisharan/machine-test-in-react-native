import { Text } from 'native-base';
import React from 'react';
import { View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Splash extends React.Component {




    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>



                <View>
                    <Image source={require('../../assets/img.png')} style={{ alignSelf: 'center', width: wp('80%'), height: hp('30%') }}></Image>
                </View>
                <View>
                    <Text style={{ alignSelf: 'center' }}>Hi User, you are in dashboard!</Text>
                </View>
            </View>

        );


    }
} 