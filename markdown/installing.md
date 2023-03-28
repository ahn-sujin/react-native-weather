
# Intro

- React-Native에서 가장 중요한 것은 Bridge들을 통해서 **코드가 운영체제와 통신을 할 수 있도록 하는 인프라 시설**이다.
- `apk` : 안드로이드 인프라 시설
- `ipa` : ios 인프라 시설
- `Java`와 `Xcode` 로 인프라를 가져와서 이것들(=RN 코드)을 `apk`와 `ipa`안에 넣어준다.

## Expo
🔗 https://expo.dev/

- 작성한 코드를 앱에서 확인할 수 있음
- 앱을 만들기 위해 필요한 환경(java, xcode, 안드로이드 스튜디오, 시뮬레이터 등등…)을 하나하나 설치하지 않아도됨
- 앱을 만들기 위한 모든 환경이 이미 만들어져 있고 나는 거기에 코드만 더해주면 되는 형식임

### 환경 세팅

1. terminal 에서  `npm install --global expo-cli`
2. (mac) `brew update` ➡️ `brew install watchman`
    1. **m1 오류 시**  `arch -arm64 brew install watchman`
3. (IOS App Store) `Expo Go` 다운 

### 실행

`expo start`

### 폴더 구조

- assets: 기본제공 이미지를 포함하여 이미지들이 저장되는 곳
- node_modules: 앱 개발시 사용하는 도구
- App.js: 화면이 되는 파일
- app.json: 배포시 앱에 대한 설명서
