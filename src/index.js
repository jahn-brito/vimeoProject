import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homePage from './pages/home'
// import { Container } from './styles';

const Stack = createStackNavigator();

const app = () => {
  return (
      <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={homePage}/>
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

export default app;