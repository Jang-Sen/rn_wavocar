import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Block, Button, Text } from '@/components/base';
import styles from '@/assets/styles/main.styles';
import { theme } from '@/constants';
import { Dimensions } from 'react-native';
import setting from '@/assets/icons/Account-Setting--Streamline-Plump.png';
import bell from '@/assets/icons/Bell-Notification--Streamline-Plump.png';
import { Image } from 'expo-image';

const { width, height } = Dimensions.get('window');

const getTabMenus = (navigation: any) => {
  return [
    { icon: bell, link: null },
    { icon: setting, link: () => navigation.navigate('setting') },
  ];
};

const CustomDrawerContent: React.FC = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <Block style={{ marginTop: 10 }}>
        <Block flex row center space={'between'} style={[styles.sideHeader]}>
          <Block column>
            <Text h1 bold style={{ paddingBottom: theme.sizes.font }}>
              오장원
            </Text>
            <Text semibold>dh789521@naver.com</Text>
          </Block>

          <Block row right>
            {getTabMenus(props.navigation).map((menu, index) => (
              <Button key={index} style={styles.button} onPress={menu.link}>
                <Image
                  source={menu.icon}
                  style={{ width: 24, height: 24, resizeMode: 'contain' }}
                />
                {/*<AntDesign name={menu.icon} size={24} color="black" />*/}
              </Button>
            ))}
          </Block>
        </Block>
      </Block>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
