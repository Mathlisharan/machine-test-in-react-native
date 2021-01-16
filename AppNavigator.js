import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash/Splash'
import Login from './screens/Login/Login'
import Signup from './screens/Signup/Signup'
import Home from './screens/Home/Home'



const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{}}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{}}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{}}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{}}
          />


        </Stack.Navigator>
      </NavigationContainer>
    );
  };
};