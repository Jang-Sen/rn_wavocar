import React from 'react';
import styles from '@/assets/styles/main.styles';
import bell from '@/assets/icons/Bell-Notification--Streamline-Plump.png';
import setting from '@/assets/Account-Setting--Streamline-Sharp.png';
import { Image } from 'expo-image';
import Button from '../components/base/Button';
import { Block, Text } from '@/components/base';

const getTabMenus = () => {
  return [
    { icon: bell, link: null },
    { icon: setting, link: null },
  ];
};

type Props = {
  username?: string;
  email?: string;
};

const TabHeader: React.FC<Props> = ({ username, email }) => {
  return (
    <Block flex row center space={'between'} style={styles.header}>
      <Text h1 bold>
        {username ?? '유저 이름'}
      </Text>
      <Text semibold>{email ?? '유저 이메일'}</Text>

      <Block row right>
        {getTabMenus().map((menu, index) => (
          <Button key={index} style={styles.button} onPress={menu.link}>
            <Image source={menu.icon} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
          </Button>
        ))}
      </Block>
    </Block>
  );
};

export default TabHeader;
