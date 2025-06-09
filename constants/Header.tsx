import bell from '@/assets/icons/Bell-Notification--Streamline-Plump.png';
import ticket from '@/assets/icons/Discount-Percent-Coupon--Streamline-Plump.png';
import hambuger from '@/assets/icons/Hamburger-Menu-1--Streamline-Plump.png';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { Block, Text } from '@/components/base';
import styles from '@/assets/styles/main.styles';
import Button from '../components/base/Button';
import { Image } from 'expo-image';
import { theme } from '@/constants/index';

const getHeaderMenus = () => {
  const navigation = useNavigation();
  return [
    { icon: ticket, link: () => navigation.navigate('coupon') },
    { icon: bell, link: null },
    {
      icon: hambuger,
      link: () => navigation.dispatch(DrawerActions.openDrawer()),
    },
  ];
};

type Props = {
  title: string;
};

const HeaderMenus: React.FC<Props> = ({ title }) => {
  return (
    <Block flex row center space={'between'} style={styles.header}>
      <Text h1 bold color={theme.colors.gray}>
        {title}
      </Text>

      <Block row right>
        {getHeaderMenus().map((menu, index) => (
          <Button key={index} style={styles.button} onPress={menu.link}>
            <Image source={menu.icon} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
          </Button>
        ))}
      </Block>
    </Block>
  );
};

export default HeaderMenus;
