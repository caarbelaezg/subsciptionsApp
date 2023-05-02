import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home';
import DemoScreen from './src/screens/Demo';
import PaywallScreen from './src/screens/Paywall';

export type RootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  Demo: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home" 
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Demo" 
          component={DemoScreen}
        />
        <Stack.Screen
          options={{ 
            headerShown: false,
            presentation: "modal"
          }}
          name="Paywall" 
          component={PaywallScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
