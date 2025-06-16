import { DarkTheme, DefaultTheme, ThemeProvider, useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Pressable } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from '@/app/screens/SettingScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HistoryScreen from '@/app/screens/HistoryScreen';
import CustomDrawerContent from '@/components/auth/CustomDrawerContent';
import CouponScreen from '@/app/screens/CouponScreen';
import EventScreen from '@/app/screens/EventScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarDetailScreen from '@/app/screens/CarDetailScreen';
import { Text } from '@/components/base';
import CarList from '@/components/car/CarList';
import LoginScreen from '@/app/screens/auth/LoginScreen';
import RegisterScreen from '@/app/screens/auth/RegisterScreen';
import IntroScreen from '@/app/screens/IntroScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const queryClient = new QueryClient();

export default function HomeStackNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={IntroScreen} />
      <Stack.Screen
        name="Details"
        component={CarDetailScreen}
        options={{
          headerShown: true,
          presentation: 'fullScreenModal',
          headerRight: () => (
            <Pressable
              onPress={() => {
                console.log(navigation.canGoBack());
                if (navigation.canGoBack()) {
                  navigation.goBack();
                } else {
                  navigation.navigate('Home'); // 혹은 원하는 초기 화면
                }
              }}
            >
              <Text style={{ fontSize: 18 }}>✕</Text>
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: 'right',
            drawerType: 'front',
            headerShown: false,
            // drawerStyle
          }}
          drawerContent={props => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={HomeStackNavigator} />
          <Drawer.Screen name="login" options={{ title: '로그인' }} component={LoginScreen} />
          <Drawer.Screen
            name="register"
            options={{
              title: '약관 동의',
            }}
            component={RegisterScreen}
          />
          <Drawer.Screen name="infinite" options={{ title: '무한 스크롤' }} component={CarList} />
          <Drawer.Screen
            name="history"
            options={{ title: '이용 내역' }}
            component={HistoryScreen}
          />
          <Drawer.Screen name="coupon" options={{ title: '쿠폰' }} component={CouponScreen} />
          <Drawer.Screen name="event" options={{ title: '이벤트/혜택' }} component={EventScreen} />
          <Drawer.Screen name="setting" options={{ title: '설정' }} component={SettingScreen} />
        </Drawer.Navigator>
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
