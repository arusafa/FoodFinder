import { View, Text,StyleSheet,Dimensions, TextInput } from 'react-native'
import React from 'react'
import {colors, parameters,title} from '../../global/styles'

import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from 'react-native-elements'

import { useState, useRef } from 'react';
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native';

export default function SignInScreen() {

    const navigation = useNavigation();

    const [textInput2Focussed, setTextInput2Focussed] = useState(false);

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)


  return (
    <View style={styles.container}>
        <Header title='My Account' type='arrow-left' navigation={navigation}/>

        <View>
            <Text style={title}>Sign - In</Text>
        </View>

        <View style={{alignItems:'center', marginTop:5}}>
            <Text style={styles.text1}>Please enter the Email & Password</Text>
            <Text style={styles.text1}>registered with your account</Text>
        </View>

        <View style={styles.form}>
            <Text style={styles.form}>Sign In Form</Text>
        </View>
        
        <View>
            <TextInput 
            style = {styles.TextInput1} 
            placeholder='Email'
            ref={textInput1} 
            />
        </View>

        
        <View style={styles.TextInput2}>

            <Animatable.View
            animation={textInput2Focussed ? "" : "fadeInRight"}
            duration={400}
            >
                <Icon
                name = 'lock'
                iconStyle={{color:colors.grey3, marginLeft: 10}}
                type='material'
                />
            </Animatable.View>
                
            <TextInput
            width='80%' 
            placeholder='Password'
            ref={textInput2}
            onFocus={() => setTextInput2Focussed(false)}
            onBlur={() => setTextInput2Focussed(true)}
            />
            
            <Animatable.View 
            animation={textInput2Focussed ? "" : "fadeInLeft"}
            duration={400}>
            <Icon
                name = 'visibility-off'
                iconStyle={{color:colors.grey3, marginRight: 10}}
                type='material'
                />
            </Animatable.View>

        </View>

        <View>
            <Button
            title='Sign In'
            buttonStyle={parameters.styleedButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {navigation.navigate('ClientTabs')}}
            />
        </View>

        <View style={{alignItems:"center", marginTop:10}}>
            <Text style={{...styles.text1, textDecorationLine:"underline", fontWeight:"800"}}>Forgot Password?</Text>
        </View>

        <View style={{alignItems:"center", marginTop:15}}>
            <Text style={{...styles.text1, fontWeight:"900"}}>OR</Text>
        </View>

        <View style={{marginTop:10, alignContentL:"center", width:'60%',marginLeft:80}}>
            <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
            />
        </View>

        <View style={{width:'60%',marginLeft:80,alignContentL:"center"}}>
            <SocialIcon
            title='Sign In With Twitter'
            button
            type='twitter'
            />
        </View>

        <View style={{width:'60%', marginLeft:80,alignContentL:"center"}}>
            <SocialIcon
            title='Sign In With Google'
            button
            type='google'
            />
        </View>

        <View>
            <Button
            title='Create New Account'
            buttonStyle={{margin:10, backgroundColor:colors.green,alignContentL:"center", borderRadius:20, width:'90%', height:50}}
            titleStyle={parameters.buttonTitle}
            />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color:colors.grey4,
        fontSize: 15
    },
    form: {
        marginTop: 8,
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: '#86939e',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 20,
        width: '90%',
        height: 50,
        paddingLeft: 15,
    },
    TextInput2: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderRadius: 16,
        marginHorizontal: 20,
        borderColor: '#86939e',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
})