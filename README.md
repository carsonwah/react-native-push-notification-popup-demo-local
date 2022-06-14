# Local Demo Project for react-native-push-notification-popup

## Getting Started

1. Clone [react-native-push-notification-popup](https://github.com/carsonwah/react-native-push-notification-popup)
2. Clone this project next to it
3. `yarn` or `npm install`
    - Note that in `package.json`, it has a local dependency pointing to `../react-native-push-notification-popup/`
4. Using [Expo](https://expo.dev), just run `expo ios` or `expo android`

## Updating the library

1. Make changes in `react-native-push-notification-popup/`
2. In this project, run `npm update react-native-push-notification-popup`
3. You may need to `^c` and restart Expo server, due to Expo's limitation of not re-bundling libraries even if you reload the app
