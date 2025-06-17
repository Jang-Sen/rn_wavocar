import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '@/app/screens/IntroScreen';
import ResetPassword from '@/app/screens/auth/ResetPassword';
import ForgotPassword from '@/app/screens/auth/ForgotPassword';
import RegisterScreen from '@/app/screens/auth/RegisterScreen';
import LoginScreen from '@/app/screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

export default function UnAuthenticatedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="intro" component={IntroScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="resetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}
