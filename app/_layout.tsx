import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth.store';
import AuthenticatedNavigator from '@/navigator/Authenticated.navigator';
import UnAuthenticatedNavigator from '@/navigator/UnAuthenticated.navigator';

const queryClient = new QueryClient();

export default function RootLayout() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
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
        {isAuthenticated ? <AuthenticatedNavigator /> : <UnAuthenticatedNavigator />}
        {/*<Drawer.Navigator*/}
        {/*  screenOptions={{*/}
        {/*    drawerPosition: 'right',*/}
        {/*    drawerType: 'front',*/}
        {/*    headerShown: false,*/}
        {/*    // drawerStyle*/}
        {/*  }}*/}
        {/*  drawerContent={props => <CustomDrawerContent {...props} />}*/}
        {/*>*/}
        {/*  <Drawer.Screen name="Home" component={HomeStackNavigator} />*/}
        {/*  <Drawer.Screen name="login" options={{ title: '로그인' }} component={LoginScreen} />*/}
        {/*  <Drawer.Screen*/}
        {/*    name="register"*/}
        {/*    options={{*/}
        {/*      title: '회원 가입',*/}
        {/*    }}*/}
        {/*    component={RegisterScreen}*/}
        {/*  />*/}
        {/*  <Drawer.Screen name="forgotPassword" component={ForgotPassword} />*/}
        {/*  <Drawer.Screen name="resetPassword" component={ResetPassword} />*/}
        {/*  <Drawer.Screen name="infinite" options={{ title: '무한 스크롤' }} component={CarList} />*/}
        {/*  <Drawer.Screen*/}
        {/*    name="history"*/}
        {/*    options={{ title: '이용 내역' }}*/}
        {/*    component={HistoryScreen}*/}
        {/*  />*/}
        {/*  <Drawer.Screen name="coupon" options={{ title: '쿠폰' }} component={CouponScreen} />*/}
        {/*  <Drawer.Screen name="event" options={{ title: '이벤트/혜택' }} component={EventScreen} />*/}
        {/*  <Drawer.Screen name="setting" options={{ title: '설정' }} component={SettingScreen} />*/}
        {/*</Drawer.Navigator>*/}
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
