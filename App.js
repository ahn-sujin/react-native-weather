import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const API_KEY = "5d5741c09fde22378b676be4c5e10c76";

export default function App() {
  const [city, setCity] = useState("📍Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accurancy: 5 });

    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMap: false }
    );

    setCity(location[0].district);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&units=metric&appid=${API_KEY}`
    );
    const json = await response.json();
    setDays(json.daily);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={Styles.container}>
      <StatusBar style="basic" />
      <View style={Styles.city}>
        <Text style={Styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.weather}
      >
        {days.length === 0 ? (
          <View style={Styles.day}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={Styles.day}>
              <Text style={Styles.temp}>
                {parseFloat(day.temp.day).toFixed(1)}
              </Text>
              <Text style={Styles.description}>{day.weather[0].main}</Text>
              <Text style={Styles.subText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
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
    fontSize: 40,
  },
  subText: {
    fontSize: 18,
    fontWeight: 300,
    marginTop: 5,
  },
});
