import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={Styles.container}>
      <StatusBar style="basic" />
      <View style={Styles.city}>
        <Text style={Styles.cityName}>서울</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.weather}
      >
        <View style={Styles.day}>
          <Text style={Styles.temp}>17</Text>
          <Text style={Styles.description}>☀️sunny</Text>
        </View>
        <View style={Styles.day}>
          <Text style={Styles.temp}>17</Text>
          <Text style={Styles.description}>☀️sunny</Text>
        </View>
        <View style={Styles.day}>
          <Text style={Styles.temp}>17</Text>
          <Text style={Styles.description}>☀️sunny</Text>
        </View>
        <View style={Styles.day}>
          <Text style={Styles.temp}>17</Text>
          <Text style={Styles.description}>☀️sunny</Text>
        </View>
        <View style={Styles.day}>
          <Text style={Styles.temp}>17</Text>
          <Text style={Styles.description}>☀️sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B4D8E7",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 50,
    fontWeight: 700,
  },
  weather: {},
  day: {
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
  temp: {
    marginTop: 30,
    fontSize: 150,
  },
  description: {
    marginTop: -10,
    marginLeft: -10,
    fontSize: 30,
    fontWeight: 300,
  },
});
