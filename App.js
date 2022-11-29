// import { StatusBar } from 'expo-status-bar';
// import 'react-native-gesture-handler';
import AuthContextProvider from './store/auth-context';
import Horoscope from './components/Horoscope';
import HoroscopeDailyFortune from './components/HoroscopeDailyFortune';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GlobalStyles } from './constants/styles';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.baseColors.purple_100
        }
      }}
    >
      <Stack.Screen 
        name="Horoscope" 
        component={Horoscope} 
      />
      <Stack.Screen 
        name="HoroscopeDailyFortune" 
        component={HoroscopeDailyFortune} 
        options={{headerStyle: { backgroundColor: GlobalStyles.baseColors.white }}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
