import { View, Text,Image,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'

import {Divider, Icon } from 'react-native-elements'
import { colors } from '../global/styles'

export default function FoodCard({
    restaurantName,
    numberOfReview ,
    businessAddress ,
    farAway ,
    averageReview ,
    images,
    screenWidth
})

    {

  return (
    <View>
      <TouchableOpacity>
        <View style={{...styles.card, width:screenWidth}}>
            
            <View style={styles.cardImage}>
                <Image
                style={{...styles.image, width:screenWidth}}
                source={{uri:images}}
                />

<View>
                <View>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                </View>

                <View style={{flex:1, flexDirection:"row"}}>
                    <View style={styles.distance}>
                        <Icon
                        type='material-community'
                        name='clock-time-four'
                        color={colors.grey3}
                        size={15}
                        />
                        <Text style={styles.Min}>{farAway} Min</Text>
                    </View>

                    <View style={{flex:6, flexDirection:"row"}}>
                        <Icon
                        type='material-community'
                        name='map-marker'
                        color={colors.grey3}
                        size={15}
                        />
                        <Text style={styles.address}>{businessAddress}</Text>
                    </View>
                </View>
            </View>


            </View>

        </View>
        <View style={styles.review}>
            <Text style={styles.average}>{averageReview}</Text>
            <Text style={styles.reviewText}>{numberOfReview} Reviews</Text>
        </View>
      </TouchableOpacity>
    </View>
  )

}



const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
     image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150,
     },

     restaurantName:{
        fontSize:17,
        fontWeight:'bold',
        color:colors.grey1,  
        marginTop:5,
        marginLeft:10
     },

     distance :{
        flex:4,flexDirection:'row',
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1
     },
     Min:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey3 
     },

     address:{
        fontSize:12,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10
     },

     review :{
        position:"absolute",
        top:0,
        right:10,
        padding:2,alignItems:"center",
        justifyContent:"center", 
        borderTopRightRadius:5,
        borderBottomLeftRadius:12,
        fontWeight:"bold" 
     },

     average:{
        color:"white",
         fontSize:20,
          fontWeight:'bold',
           marginTop:-3  
     },
     numberOfReview :{
        color:"white", 
        fontSize:13,
        marginRight:0,
        marginLeft:0
     },
     reviewText:{
        color:"#f7d5d2",
            fontSize:15,
            marginRight:0,
            marginLeft:0,
            fontWeight:'bold'
        }
})