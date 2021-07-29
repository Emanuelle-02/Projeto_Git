import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './pages/Home';
import {Details} from './pages/Details';

const Stack = createStackNavigator();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home}  options={{ headerShown: false  }}  />
            <Stack.Screen name='details' component={Details} />
        </Stack.Navigator>
    );
}