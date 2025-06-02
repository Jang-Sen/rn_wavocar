import bell from '@/assets/icon/Bell-Notification--Streamline-Plump.png';
import ticket from '@/assets/icon/Discount-Percent-Coupon--Streamline-Plump.png';
import hambuger from '@/assets/icon/Hamburger-Menu-1--Streamline-Plump.png';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

const getHeaderMenus = () => {
  const navigation = useNavigation();
  return [
    { icon: ticket, link: null },
    { icon: bell, link: null },
    {
      icon: hambuger,
      link: () => navigation.dispatch(DrawerActions.openDrawer()),
    },
  ];
};

export { getHeaderMenus };
