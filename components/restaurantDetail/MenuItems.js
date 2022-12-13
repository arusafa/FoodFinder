import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },
});

const foods = [
    {
      title:"Lasagna",
      description:"With butter lettuce, tomato and sauce bechamel",
      price:"$13.50",
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      title:"Tandori Chicken",
      description:"Amazing Indian dish with tenderloin chicken off the sizzle",
      price:"$19.20",
      image:"https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80"
    },
    {
      title:"Chilaquiles",
      description:"Chilaquiles with cheese and sauce.  A delicious mexican food",
      price:"$14.50",
      image:"https://images.unsplash.com/photo-1640719028782-8230f1bdc42a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbGFxdWlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
    }
  ]

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {foods.map((food, index) => (
    <View key={index}>
      <View style={styles.menuItemStyle}>
        <FoodInfo food={food}/>
        <FoodImage food={food}/>
      </View>
      <Divider width={3} style={{ marginHorizontal: 20 }} />
    </View>
    ))}
    </ScrollView>
  )
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 120,
        height: 120,
        borderRadius: 10
      }}
    />
  </View>
);