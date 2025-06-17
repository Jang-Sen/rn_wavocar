import React, { useMemo, useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '@/constants';
import { Block, Text } from '@/components/base';
import MainCardView from '@/components/main/MainCardView';
import { useNavigation } from 'expo-router';
import HeaderMenus from '@/constants/Header';
import MainFuelView from '@/components/main/MainFuelView';
import styles from '@/assets/styles/main.styles';
import AccommodationSearch from '@/components/Accommodation/AccommodationSearch';
import AccommodationCardView from '@/components/Accommodation/AccommodationCardView';
import { useCarList } from '@/hooks/cars/useCarList';
import MainView from '@/components/main/MainView';

const MainScreen: React.FC = () => {
  const [fuel, setFuel] = useState<string | undefined>();

  const { data: cars, isLoading, isError, error } = useCarList();

  // const { data: cars, isLoading, error } = useInfiniteCarList({ page: 1, take: 10 });

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
    <Block style={{ marginTop: 15 }}>
      <HeaderMenus title="WAVOCAR" />

      <Block flex row style={styles.tabs}>
        {tabs.map(tab => renderTab(tab))}
      </Block>
      {active === '이동' && (
        <FlatList
          data={[]}
          renderItem={null}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: theme.sizes.base }}
          ListHeaderComponent={
            <>
              <MainView />
              {cars?.data && (
                <MainCardView cars={cars?.data} title={'새 차를 빌리고 싶을 땐, 신차장기플랜!'} />
              )}
              <MainFuelView
                title={'한 번쯤 타보고 싶던 그 차'}
                activeFuel={fuel}
                setFuel={setFuel}
              />
            </>
          }
        />
        // <ScrollView
        //   showsVerticalScrollIndicator={false}
        //   contentContainerStyle={{ paddingBottom: theme.sizes.base }}
        // >
        //   <MainView />
        //   {/*{renderDestinations()}*/}
        //   {cars?.data && (
        //     <MainCardView cars={cars?.data} title={'새 차를 빌리고 싶을 땐, 신차장기플랜!'} />
        //   )}
        //   <MainFuelView title={'한 번쯤 타보고 싶던 그 차'} activeFuel={fuel} setFuel={setFuel} />
        //   {/*{renderRecommended()}*/}
        //   {/*{renderRecommended()}*/}
        // </ScrollView>
      )}
      {active === '숙박' && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: theme.sizes.base }}
        >
          <AccommodationSearch />
          <AccommodationCardView />
        </ScrollView>
      )}
    </Block>
  );
};

export default MainScreen;
