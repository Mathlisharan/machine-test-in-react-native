import { Text } from 'native-base';
import React from 'react';
import { View, Image } from 'react-native';

export default class Splash extends React.Component {

  


  render() {
    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>



        <View>
          <Image source={require('D:/Machine test/assets/img.png')} style={{ alignSelf: 'center', width: '80%', height: '30%' }}></Image>
          </View>
      <View>
        <Text style={{alignSelf:'center'}}>Hi User, you are in dashboard!</Text>
      </View>
      </View>

    );


  }
} 