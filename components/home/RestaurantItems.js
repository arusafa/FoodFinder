import { View,Image,Text, SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];


export default function RestaurantItems({navigation, ...props}) {
  return (
    <SafeAreaView>
        {props.restaurantData.map((restaurant, index) => (
    <TouchableOpacity 
    activeOpacity={0.5} 
    style={{marginBottom:5}} 
    key={index}
    onPress={() => navigation.navigate("RestaurantDetail",{
        name: restaurant.name,
        image: restaurant.image_url,
        price: restaurant.price,
        reviews: restaurant.review_count,
        rating: restaurant.rating,
        categories: restaurant.categories
        })} >
    <View
    style={{
        marginTop:10,
        padding:20,
        backgroundColor:"#f7edee"
    }}>
        <RestaurantImage 
            image={restaurant.image_url}/>
        <RestaurantInfo 
            name={restaurant.name} 
            rating={restaurant.rating}/>
    </View>
    </TouchableOpacity>
          ))}
    </SafeAreaView>
  )
}

const RestaurantImage = (props) => (
    <>
    <Image
        source={{
            uri: props.image
        }}
        style={{
            width: "100%",
            height: 200,
        }}
    />
        <TouchableOpacity style={{position:"absolute", right:20, top:20}}>
            <MaterialCommunityIcons name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View 
        style={{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop:8}}>
        <View>
            <Text style={{fontSize:15, fontWeight:"bold"}}>{props.name}</Text>
            <Text style={{fontSize:13, color:"gray"}}>30-45 ❂ min</Text>
        </View>

        <View style={{
            backgroundColor:"#eee",
            height:30,
            width:30,
            alignItems:"center",
            borderRadius:15,
            justifyContent:"center"
            
        }}>
            <Text>{props.rating}</Text>  
        </View>
             
    </View>
)