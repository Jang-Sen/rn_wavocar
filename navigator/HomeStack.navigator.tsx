import { useNavigation } from '@react-navigation/native';
import CarDetailScreen from '@/app/screens/CarDetailScreen';
import { Pressable } from 'react-native';
import { Text } from '@/components/base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '@/app/screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={MainScreen} />
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
                  navigation.navigate('home'); // 혹은 원하는 초기 화면
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
