import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '@/app/screens/MainScreen';
import SettingScreen from '@/app/screens/SettingScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Drawer = createDrawerNavigator();

const queryClient = new QueryClient();

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
      <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator
          screenOptions={{
            drawerPosition: 'right',
            drawerType: 'front',
            headerShown: false,
            // drawerStyle
          }}
        >
          <Drawer.Screen name="Home" component={MainScreen} />
          <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
