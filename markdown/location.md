# Location

### ✨ 설치
🔗 https://docs.expo.dev/versions/v48.0.0/sdk/location/

`npx expo install expo-location`

```jsx
import * as Location from "expo-location
```

1. **권한 요청** 
    
    ▪️`requestForegroundPermissonAsync()` : 앱 사용 중에만 위치를 허용
    
    ```jsx
    Location.requestForegroundPermissonAsync()
    
    /* 결과
    Object {
    	"canAskAgain" : true,
    	"expires": "naver", 
    	"granted": true, // 권한 허가를 의미
    	"status" : "granted, 
    }
    **/
    ```
    
    <br>
    
2. **유저의 위치 정보**
    
    ▪️ `GetCurrentPosition` option : 위치의 정확도를 의미
    
    - Acuuracy.Lowest  = 1
    - Acuuracy.Low  = 2
    - Acuuracy.Balanced  = 3
    - Acuuracy.High  = 4
    - Acuuracy.Highest  = 5
    - A[cuuracy.Best](http://acuuracy.Best)ForNavigation = 6
    
    ```jsx
    Location.getCurrentPositionAsync({accurancy:5})
    
    /* 결과
    	"coords": {
    		"accuracy" : 5,
    		"altitude" : 0,
    		"altitudeAcuuracy" -1,
    		"heading" : 201.45,
    		"altitude" : 37.4451522,
    		"longtitude" : -122,03256229,
    		"speed" : 3.64
    	},
    	...
    **/
    ```
    
    ▪️ `latitude` , `longtitude` 를 가지고 reverse geocoding 할 수 있음
    
    - 좌표를 통해 도시, 나라, 구역명 등을 얻을 수 있음
    
    ```jsx
    reverseGeocodeAsync({latitude, longtitude}, {useGoogleMap: false})
    
    /* 결과
    	Array[Object {
    		"city" : "seoul",
    		"contry" : "South Korea",
    		"district" : "어쩌구" ,
    		"isoContryCode" : KOR,
    		"name" : "어쩌구"
    		...
    	},
    	...
     ]
    **/
    ```
