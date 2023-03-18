import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  /**
   * View : div 대신 사용 하는 것 , container 역할
   * Text : text 사용시 쓰는 컴포넌트로 span, p를 대신 하는 역할
   * StyleSheet.create : 컴포넌트에 스타일을 입힐 수 있게 도와주는 객체로 꼭 사용해야하는 것은 아니지만, 자동완성기능이 있기 때문에 편리
   * StatusBar : 시뮬레이터(핸드폰) 상단의 시계, 배터리, Wi-Fi를 보야주는 컴포넌트, IOS 및 Android 운영체제와 소통하는 역할
   */

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's Start Reacat-Native☺️</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
  },
});
