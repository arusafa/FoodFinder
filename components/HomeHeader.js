import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Icon } from 'react-native-elements'
import {colors, parameters} from '../global/styles'

export default function HomeHeader() {
  return (
    <View style={styles.header}>
        <View style={{alignItems:"center", justifyContent:"center", marginLeft:15}}>
            <Icon
            name='menu'
            type='material'
            color={colors.headerText}
            size={30}
            />
        </View>
        <View style={{alignSelf:"center"}}>
            <Text style={{...styles.headerText, marginRight:20}}>Comp3074 ❂ Group-41</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    headerText: {
        color: colors.headerText,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 30
    }
})