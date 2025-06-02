import React, { useMemo, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '@/constants';
import { Block, Text } from '@/components';
import { useCarList } from '@/hooks/useCarList';
import MainCardView from '@/components/main/MainCardView';
import { useNavigation } from 'expo-router';
import { getHeaderMenus } from '@/constants/HeaderButton';
import Button from '@/components/Button';
import { Image } from 'expo-image';
import MainScaleView from '@/components/main/MainScaleView';
import styles from '@/assets/styles/main.styles';

const MainScreen: React.FC = () => {
  const { data: cars, isLoading, isError, error } = useCarList({ page: 1, take: 10 });

  const navigation = useNavigation();

  const [active, setActive] = useState('이동');

  const tabs = useMemo(() => ['이동', '숙박']);

  const handleTab = (tab: string) => setActive(tab);

  const renderTab = (tab: string) => {
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleTab(tab)}
        style={[styles.tab, isActive && styles.active]}
      >
        <Text h2 semibold gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Block style={{ marginTop: 50 }}>
      <Block flex row center space={'between'} style={styles.header}>
        <Text h1 bold color={theme.colors.gray}>
          WAVOCAR
        </Text>

        <Block row right>
          {getHeaderMenus().map((menu, index) => (
            <Button key={index} style={styles.button} onPress={menu.link}>
              <Image source={menu.icon} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
            </Button>
          ))}
          {/*{getHeaderMenus.map((menu, index) => (*/}
          {/*    <Button*/}
          {/*        key={index}*/}
          {/*        style={styles.button}*/}
          {/*        onPress={menu.link}*/}
          {/*    >*/}
          {/*        <Image*/}
          {/*            source={menu.icon}*/}
          {/*            style={{width: 24, height: 24, resizeMode: 'contain'}}*/}
          {/*        />*/}
          {/*    </Button>*/}
          {/*))}*/}

          {/*<Button style={styles.button}>*/}
          {/*    <Image*/}
          {/*        source={bell}*/}
          {/*        style={{width: 24, height: 24, resizeMode: 'contain'}}*/}
          {/*    />*/}
          {/*</Button>*/}

          {/*<Button*/}
          {/*    style={styles.button}*/}
          {/*    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}*/}
          {/*>*/}
          {/*    <Image*/}
          {/*        source={hambuger}*/}
          {/*        style={{width: 24, height: 24, resizeMode: 'contain'}}*/}
          {/*    />*/}
          {/*</Button>*/}
        </Block>
      </Block>
      <Block flex row style={styles.tabs}>
        {tabs.map(tab => renderTab(tab))}
      </Block>
      {active === '이동' && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: theme.sizes.base }}
        >
          {/*{renderDestinations()}*/}
          {cars?.data && (
            <MainCardView cars={cars?.data} title={'새 차를 빌리고 싶을 땐, 신차장기플랜!'} />
          )}
          <MainScaleView title={'한 번쯤 타보고 싶던 그 차'} />
          {/*{renderRecommended()}*/}
          {/*{renderRecommended()}*/}
        </ScrollView>
        // <ScrollView
        //     showsVerticalScrollIndicator={false}
        //     style={{paddingVertical: theme.sizes.base * 2}}
        // >
        //     <Block flex={false} row space="between" style={styles.categories}>
        //         {cars?.data?.map((car, index) => (
        //             <TouchableOpacity
        //                 key={index}
        //                 // onPress={() => navigation.navigate("Explore", {category})}
        //             >
        //                 <Card center middle shadow style={styles.category}>
        //                     <Badge
        //                         margin={[0, 0, 15]}
        //                         size={50}
        //                         color="rgba(41,216,143,0.20)"
        //                     >
        //                         <Image
        //                             source={car.carImgs === null ? 'https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-empty-box-icon-for-your-project-png-image_1521417.jpg' : car.carImgs}/>
        //                     </Badge>
        //                     <Text medium height={20}>
        //                         {car.carName}
        //                     </Text>
        //                     {/*<Text gray caption>*/}
        //                     {/*    {car.count} products*/}
        //                     {/*</Text>*/}
        //                 </Card>
        //             </TouchableOpacity>
        //         ))}
        //     </Block>
        // </ScrollView>
      )}
      {active === '숙박' && <Text h1>숙박</Text>}
    </Block>
  );
};

export default MainScreen;
