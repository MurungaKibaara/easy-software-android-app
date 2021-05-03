import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UsersScreen from '../pages/Users';
import UserDetailsScreen from '../pages/UserDetails';

export default () => {
    
  const Stack = createStackNavigator();
  const StackScreen = () => (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );

  return (
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
  );
};
