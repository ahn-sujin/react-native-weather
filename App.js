import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  /**
   * View : div 대신 사용 하는 것 , container 역할
   * Text : text 사용시 쓰는 컴포넌트로 span, p를 대신 하는 역할
   * StyleSheet.create : 컴포넌트에 스타일을 입힐 수 있게 도와주는 객체로 꼭 사용해야하는 것은 아니지만, 자동완성기능이 있기 때문에 편리
   * StatusBar : 시뮬레이터(핸드폰) 상단의 시계, 배터리, Wi-Fi를 보야주는 컴포넌트, IOS 및 Android 운영체제와 소통하는 역할
   */

  return (
    <View style={Styles.container}>
      <StatusBar style="basic" />
      <View style={Styles.city}>
        <Text style={Styles.cityName}>서울</Text>
      </View>
      <View style={Styles.weather}>
        <View style={Styles.day}>
          <Text style={Styles.temp}>17</Text>
          <Text style={Styles.description}>☀️sunny</Text>
        </View>
      </View>
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
  weather: {
    flex: 3,
  },
  day: {
    flex: 1,
    alignItems: "center",
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
