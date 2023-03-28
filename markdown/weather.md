# Weather

### ✨ 사용 API
🔗 https://openweathermap.org/api

```jsx
// API KEY
5d5741c09fde22378b676be4c5e10c76
```

### One Call API
- Current weather
- Minute forecast for 1 hour
- Hourly forecast for 48 hours
- Daily forecast for 8 days
- National weather alerts
- Historical weather data for 40+ years back (since January 1, 1979)
- 
```jsx
https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
```

### RN **ActivityIndicator**
🔗 https://reactnative.dev/docs/activityindicator

- 로딩 화면을 보여주는 컴포넌트
<img src="https://user-images.githubusercontent.com/67556491/228264862-3acbff9f-cf27-4d01-95c6-280e1f80ad64.jpeg" width="300" height="300">

```javascript
import {ActivityIndicator} from "react-native

 <View>
  <ActivityIndicator size="large" />
 </View>

```

### Icons

**1. Expo Icons**

🔗 https://icons.expo.fyi/

```jsx
import {Iconicons} from "@expo/vector-icons"

<Iconicons name="사용할 아이콘 이름" size={} color="" />
```

**2. 날씨 상태 정보**

🔗 https://openweathermap.org/weather-conditions

```jsx

const icons = {
  Clouds: "cloudy",
  Rain: "rainy",
  Clear: "sunny",
  Snow: "snow",
  Thunderstorm: "thunderstorm",
};

...

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


```




