import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllCarsScreen from './screens/AllCarsScreen';
import Details from './screens/details';
import shoppingCartScreen from './screens/shoppingCartScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cars" component={AllCarsScreen} />
        <Stack.Screen name="Details" component={Details} />  
        <Stack.Screen name="ShoppingCart" component={shoppingCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
