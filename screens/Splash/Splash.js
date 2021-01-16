import React from 'react';
import { View, ImageBackground } from 'react-native';


export default class Splash extends React.Component {

  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000);
  };


  render() {
    return (
      <View>
        <ImageBackground source={require('D:/Machine test/assets/img.png')} style={{ width: '100%', height: '100%', }}></ImageBackground>
      </View>

    );


  }
} 