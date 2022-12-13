import { View, Text } from 'react-native'
import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'

import {colors} from '../global/styles'

import Home from '../screens/HomeScreen'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import AddReview from '../screens/AddReview'
import MyAccount from '../screens/MyAccount'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'

const Tab = createBottomTabNavigator()

export default function ClientTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: colors.grey3,
            style: {
                backgroundColor: colors.white,
                borderTopWidth: 0,
                elevation: 0
            }
        }}
    >
        <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
                <Icon
                type='material-community'
                name='home'
                color={'red'}
                size={26}/>
            )
        }}
        />

        <Tab.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => (
                <Icon
                type='material-community'
                name='map-search'
                color={'gray'}
                size={26}/>
            )
        }}
        />

        <Tab.Screen
        name='AddReview'
        component={AddReview}
        options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({color}) => (
                <Icon
                type='material-community'
                name='plus-box'
                color={'blue'}
                size={26}/>
            )
        }}
        />

        <Tab.Screen
        name='MyAccount'
        component={MyAccount}
        options={{
            tabBarLabel: 'MyAccount',
            tabBarIcon: ({color}) => (
                <Icon
                type='material-community'
                name='account-circle'
                color={'black'}
                size={26}/>
            )
        }}
        />
    </Tab.Navigator>
  )
}