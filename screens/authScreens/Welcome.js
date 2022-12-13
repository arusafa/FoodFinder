import { View, Text,StyleSheet,Dimensions, TextInput } from 'react-native'
import React from 'react'
import {colors, parameters,title} from '../../global/styles'

import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from 'react-native-elements'

import { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.title}>🍔🍟Welcome to 🍝🍕 Application🌮🥗</Text>
            <Text style={styles.title}>❂Team Members❂</Text>
            <Text style={styles.subtitle}>George Brown College</Text>
            <Text style={styles.subtitle}>Comp3074 - Mobile-Application</Text>
            <Text style={styles.subtitle}>Safa Aru - 101331910</Text>
            <Text style={styles.subtitle}>Hakan Inel - 101213098</Text>
            <Text style={styles.subtitle}>Onur Korkmaz - 101303363</Text>
            <Text style={styles.subtitle}>Ahmet Buyukbas - 101304595 </Text>
            </View>

            <View style={{marginRight:30, width:'70%'}}>
            <Button
            title='Sign In'
            buttonStyle={parameters.styleedButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate('SignIn')}
            />
            </View>

            <View>
            <Button
            title='Create New Account'
            buttonStyle={{...parameters.styleedButton, backgroundColor:colors.green, width:'100%',marginLeft:1}}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate('SignUp')}
            />
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    about: {
        backgroundColor: '#f0faf3',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        marginTop: 50,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '700',
        margin: 10,
        textAlign: 'center'
    }
});