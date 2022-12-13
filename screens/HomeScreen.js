import { View, Text, StyleSheet, TouchableOpacity, FlatList, Pressable, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import {useEffect} from 'react'
import { colors, Divider, Icon } from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
import {filterData,restaurantsData} from '../global/Data'
import { useState } from 'react'
import FoodCart from '../components/FoodCart'
import { useNavigation } from '@react-navigation/native'
import RestaurantItems, {
    localRestaurants,
  } from "../components/home/RestaurantItems";

  import { auth } from "../firebase";


  const YELP_API_KEY =
    "D8VMZFXnfUnt99AzcyQdbNkMnyVupQ2SZiFD45jSdvePDhNewZ4RMlaiCxMq36Z0Qfrqtu0_lRtptY423Gq_XcGbfWjiuWV45fHb8s_6UTOL7_inVxCXKB06UV6UY3Yx"

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen() {

    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    const [city, setCity] = useState("Toronto");

    const getRestaurantsFromYelp = () => {
        
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            },
        };
        
        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => {setRestaurantData(json.businesses)})
        };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city]);

    const handleSignOut = () => {
      auth
      .signOut()
      .then(() => {
        navigation.navigate('Login')
        console.log('Signed Out')
      })
    }

    const navigation = useNavigation()

    const [indexCheck, setIndexCheck] = useState("0")

  return (
    <View style={styles.container}>

        <HomeHeader/>
        <View>
        <Text style={{marginTop:10, fontWeight:"700"}}>Email:{auth.currentUser?.email}</Text>
        <TouchableOpacity style={styles.button_signout}
        onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
        <ScrollView>
            <View style={{flexDirection:"row", backgroundColor:colors.grey5, borderRadius:15, paddingVertical:3, paddingLeft:15,marginTop:5}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Icon
                    type='material-community'
                    name='map-marker'
                    color={colors.grey0}
                    size={20}
                    />
                    <Text style={{marginLeft:5, marginTop:5, fontWeight:"600"}}>160 Kendal Avenue</Text>
                </View>

                <View style={{flexDirection:"row", alignItems:"center", marginLeft:30}}>
                    <Icon
                    type='material-community'
                    name='clock-time-four'
                    color={colors.grey0}
                    size={20}
                    />
                    <Text style={{marginLeft:5, marginTop:5, fontWeight:"600"}}>Now</Text>
                </View>
            </View>
            <Divider width={5} marginTop={10} color={"#87faa6"}/>

            <View style={{backgroundColor: "#fff", padding:15}}>
            <SearchBar cityHandler={setCity}/>
            </View>

            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Categories</Text>
            </View>

            <View>
                <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={filterData}
                keyExtractor={(item) => item.id}
                extraData={indexCheck}
                renderItem={({item, index}) => (
                    <Pressable
                    onPress={() => setIndexCheck(item.id)}
                    >
                        <View 
                        style={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                            <Image
                            style={{width:60, height:60, borderRadius:30}}
                            source={item.image}
                            />
                            <Text
                            style={indexCheck === item.id ? {...styles.smallCardTextSelected}:{...styles.smallCardText}}
                            >{item.name}</Text>
                        </View>
                    </Pressable>
                )}
                />
            </View>
            <Divider width={5} marginTop={10} color={"#87faa6"}/>
            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Restaurants</Text>
                </View>
                <View>
                    <FlatList 
                    style={{marginTop:10, marginBottom:10,margin:10}}
                    horizontal={true}
                    data={restaurantsData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <View style={{marginLeft:5}}>
                            <FoodCart
                            screenWidth={SCREEN_WIDTH*0.5}
                            images={item.images}
                            restaurantName={item.restaurantName}
                            rating={item.rating}
                            farAway={item.farAway}
                            businessAddress={item.businessAddress}
                            averageReview={item.averageReview}
                            numberOfReview={item.numberOfReview}
                            />
                        </View>
                    )}
                    >
                    </FlatList>
                </View>
        </ScrollView>
        
        <View style={styles.floatingButton}>
            <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantsMapScreen')}
            
            
            >
                <Icon
                type='material-community'
                name='map-marker-radius'
                size={30}
                />
                <Text>
                    Map
                </Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.grey1,
        alignSelf: 'flex-start',
        paddingVertical: 2,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 5
    },
    headerTextView: {
        backgroundColor: colors.grey5,
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width:80,
        margin:5,
        height: 100
    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: "#f2bdfc",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width:80,
        margin:10,
        height: 100,
        shadowColor: "#000",
    },
    smallCardText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#43484d",
        alignSelf: 'center',
        paddingVertical: 2,
        marginBottom: 5,
        padding:5
    },
    smallCardTextSelected: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.grey1,
        alignSelf: 'center',
        paddingVertical: 10,
    },
    floatingButton: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#87faa6',
        borderRadius: 30,
        elevation: 8
    },

})