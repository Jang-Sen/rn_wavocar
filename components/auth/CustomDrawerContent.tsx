import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Block, Button, Text } from '@/components/base';
import styles from '@/assets/styles/main.styles';
import { theme } from '@/constants';
import { Dimensions, TouchableOpacity } from 'react-native';
import setting from '@/assets/icons/Account-Setting--Streamline-Plump.png';
import bell from '@/assets/icons/Bell-Notification--Streamline-Plump.png';
import { Image } from 'expo-image';
import { useAuthStore } from '@/store/auth.store';

const { width, height } = Dimensions.get('window');

const getTabMenus = (navigation: any) => {
  return [
    { icon: bell, link: null },
    { icon: setting, link: () => navigation.navigate('setting') },
  ];
};

const CustomDrawerContent: React.FC = (props: any) => {
  const user = useAuthStore(state => state.user);

  return (
    <DrawerContentScrollView {...props}>
      <Block style={{ marginTop: 10 }}>
        <Block flex row center space={'between'} style={[styles.sideHeader]}>
          {user ? (
            <>
              <TouchableOpacity onPress={() => props.navigation.navigate('setting')}>
                <Image
                  source={user?.profileImg[0]}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    marginBottom: theme.sizes.radius,
                    backgroundColor: theme.colors.gray2,
                  }}
                />
              </TouchableOpacity>
              <Block flex column style={{ paddingHorizontal: theme.sizes.radius }}>
                <Text title bold style={{ paddingBottom: theme.sizes.radius }}>
                  {user?.username}
                </Text>
                <Text caption semibold>
                  {user?.email}
                </Text>
              </Block>
            </>
          ) : null}

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
