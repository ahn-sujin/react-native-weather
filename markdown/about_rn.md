# About React Native

### RN의 작동 원리

💡 **왜 RN앱을 만들고 컴퓨터에서 테스트하려고 할 때  시뮬레이터와 모든 소프트웨어를 다운 받아야할까?**
- RN은 브라우저가 없음
- **번역** 역할 , 인터페이스, 운영 체제(ios, android) 사이에 있음
- **RN은 운영체제에게 원하는 것을 요청**함

<br>

💡 **RN 통신 원리**
- 운영체제가 이벤트를 감지하다가 이벤트가 발생하면  bridge를 통해서 JS에 메세지를 전달한다. JS는 그 이벤트에 대한 코드를 실행하고 RN은 그 결과를 운영체제에 다시 전달한다.

### RN의 규칙

**Rule**
1. HTML이 아니기 때문에 `div` 는 쓸 수 없다.
    - `div` 대신 `View` 를 import 해서 사용한다.
2. RN에 있는 모든 text는 `Text` component에 들어가야한다.
    - `span` `p` 를 사용할 수 없음 / `View` 안에 text를 쓸 수 없음
3. 일부 style 을 사용할 수 없다.
    - `border` ❌
    - `StyleSheet.create` : 자동 완성 기능을 제공

**status-bar**
- 시뮬레이터 상단에 나오는 시계, 배터리, Wi-Fi를 의미
- IOS 및 Android 운영 체제와 소통하기 위한 컴포넌트

**FlexBox**
- 모든 `Views` 는 기본적으로 Flex Container 이다.
    - 상위 컴포넌트에 `display:flex` 와 같은 선언이 필요 없다는 의미
- Flex Direction의 기본값은 Column이다.
- 너비와 높이에 기반해서 레이아웃을 만들지 않는다.
    - 반응형 디자인을 고려해야한다.
    - Flex size를 부여한다. `flex:1` 비율을 의미한다. (부모 컴포넌트를 기준으로 움직이기 때문에 부모 컴포넌트에 `flex:1` 를 해줘야한다. )
