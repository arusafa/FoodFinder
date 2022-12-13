import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import {colors, parameters} from '../global/styles'

import { Icon } from 'react-native-elements'

export default function Header({title, type, navigation}) {
  return (
    <View style={styles.header}>
        <View style={{marginLeft:20,padding:10}}>
            <Icon 
            type='material-community'
            name={type}
            color={colors.headerText}
            size={30}
            onPress= {() => {navigation.goBack()}} />
        </View>
        <View>
            <Text style={{...styles.headerText,marginTop:12, marginLeft:5}}>{title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight
    },
    headerText: {
        color: colors.headerText,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 30
    }
})