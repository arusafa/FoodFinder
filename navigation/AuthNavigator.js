import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import {TransitionPresets} from '@react-navigation/stack'

import Welcome from '../screens/authScreens/Welcome'
import SignInScreen from '../screens/authScreens/SignInScreen'
import HomeScreen from '../screens/HomeScreen'
import ClientTabs from './ClientTabs'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'

const AuthStack = createStackNavigator()

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
        
        <AuthStack.Screen 
        name='Welcome'
        component={Welcome}
        options={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false
            }} />
        
        <AuthStack.Screen
        name='SignIn'
        component={SignInScreen}
        options={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false
            }} />

        <AuthStack.Screen
        name='ClientTabs'
        component={ClientTabs}
        options={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false
            }} />

    </AuthStack.Navigator>
  )
}