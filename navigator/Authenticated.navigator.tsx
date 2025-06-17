import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '@/components/auth/CustomDrawerContent';
import HistoryScreen from '@/app/screens/HistoryScreen';
import CouponScreen from '@/app/screens/CouponScreen';
import EventScreen from '@/app/screens/EventScreen';
import SettingScreen from '@/app/screens/SettingScreen';
import HomeStackNavigator from '@/navigator/HomeStack.navigator';

const Drawer = createDrawerNavigator();

export default function AuthenticatedNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'front',
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="home" component={HomeStackNavigator} />
      <Drawer.Screen name="history" options={{ title: '이용 내역' }} component={HistoryScreen} />
      <Drawer.Screen name="coupon" options={{ title: '쿠폰' }} component={CouponScreen} />
      <Drawer.Screen name="event" options={{ title: '이벤트/혜택' }} component={EventScreen} />
      <Drawer.Screen name="setting" options={{ title: '설정' }} component={SettingScreen} />
    </Drawer.Navigator>
  );
}
