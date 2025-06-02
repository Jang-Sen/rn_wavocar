import React from 'react';
import { Block, Text } from '@/components';
import { getHeaderMenus } from '@/constants/HeaderButton';
import Button from '@/components/Button';
import styles from '@/assets/styles/main.styles';
import { Image } from 'expo-image';
import { theme } from '@/constants';

const SettingScreen: React.FC = () => {
  return (
    <Block style={{ marginTop: 50 }}>
      <Block flex row center space="between" style={styles.header}>
        <Text h1 bold color={theme.colors.gray}>
          Setting
        </Text>

        <Block row right>
          {getHeaderMenus().map((menu, index) => (
            <Button key={index} style={styles.button} onPress={menu.link}>
              <Image source={menu.icon} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
            </Button>
          ))}
        </Block>
      </Block>
    </Block>
  );
};

export default SettingScreen;
