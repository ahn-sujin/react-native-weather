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
import { Ionicons } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const API_KEY = "5d5741c09fde22378b676be4c5e10c76";

const icons = {
  Clouds: "cloudy",
  Rain: "rainy",
  Clear: "sunny",
  Snow: "snow",
  Thunderstorm: "thunderstorm",
};

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
      <StatusBar style="light" />
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
              <View style={Styles.weatherBox}>
                <Text style={Styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
                <Ionicons
                  name={icons[day.weather[0].main]}
                  size={70}
                  color="white"
                />
              </View>

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
    backgroundColor: "#000",
  },
  city: {
    flex: 1.1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    color: "#fff",
    fontSize: 50,
    fontWeight: 700,
  },
  day: {
    width: SCREEN_WIDTH,
    paddingLeft: 20,
    paddingRight: 20,
  },
  weatherBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  temp: {
    marginTop: 30,
    color: "#fff",
    fontSize: 130,
  },
  description: {
    marginTop: -10,
    marginLeft: 20,
    color: "#fff",
    fontSize: 40,
  },
  subText: {
    marginTop: 5,
    marginLeft: 20,
    color: "#fff",
    fontSize: 18,
    fontWeight: 300,
  },
});
