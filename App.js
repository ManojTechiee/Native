import Login from './Pages/Login';
import Home from './Pages/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DeliveryTrackingPage from './Pages/Info';
const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator
          initialRouteName='Login'
          >
           <Stack.Screen name='Login' component={Login}/>
           <Stack.Screen name='Home' component={Home}/>
           <Stack.Screen name='Info' component={DeliveryTrackingPage}/>

      </Stack.Navigator>

    </NavigationContainer>
  );
}


