import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/app/screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
