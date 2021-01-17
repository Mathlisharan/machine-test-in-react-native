import React from 'react';
import { View, ImageBackground, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Splash extends React.Component {

  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000);
  };


  render() {
    return (
      <View>
        <ImageBackground source={require('../../assets/img.png')}
          style={{ width: wp('100%'), height: hp('100%') }}></ImageBackground>
      </View>

    );


  }
} 