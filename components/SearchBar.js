import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function SearchBar({cityHandler}) {
  return (
    <View style={{marginTop: 5, flexDirection: "row"}}>
      <GooglePlacesAutocomplete
        query={{ key: 'AIzaSyBkdcYoLXqBB3s2QNS6BfWx3wgoEiRHKvc' }}
        onPress={(data, details = null) => {
            console.log(data.description);
            const city = data.description.split(",")[0];
            cityHandler(city);
        }}

        placeholder='Search'
        styles={{
            textInput: {
                backgroundColor: "#eee",
                borderRadius: 20,
                fontWeight: "700",
                marginTop: 8,
            },
            textInputContainer: {
                backgroundColor: "#eee",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
            }
        }}
        renderLeftButton={() => (
            <View style={{marginLeft: 10}}>
                <Ionicons name="location-sharp" size={24} color="black" />
            </View>
        )}
        renderRightButton={() => (
            <View 
            style={{
                flexDirection:"row",
                marginRight: 10,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 30,
                alignItems: "center",
            }}
                >
                <AntDesign 
                    name="clockcircle"
                    size={11} 
                    color="black" 
                    style={{marginRight:7}} />
                <Text>Search</Text>
            </View>
        )}
       />
    </View>
  )
}
