import React, { useCallback } from 'react';
import { Block, Text } from '@/components/base';
import { useInfiniteCarList } from '@/hooks/cars/useCarList';
import { ActivityIndicator, FlatList, View } from 'react-native';
import HeaderMenus from '@/constants/Header';
import { useQueryClient } from '@tanstack/react-query';
import carService from '@/services/CarService';

const CarList: React.FC = () => {
  const queryClient = useQueryClient;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } =
    useInfiniteCarList({
      page: 1,
      take: 10,
    });

  const cars = data?.results;

  // const cars = Array.from(
  //   new Map(data?.pages.flatMap(page => page.results).map(car => [car.id, car])).values(),
  // );

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handlePrefetchCarDetail = useCallback(
    (carId: string) => {
      queryClient.prefetchQuery({
        queryKey: ['carDetail', carId],
        queryFn: () => carService.getCarDetail(carId).then(res => res.data),
      });
    },
    [queryClient],
  );

  // const cars = data?.pages.flatMap(page => page.data);

  if (isLoading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error</Text>;

  return (
    <Block style={{ marginTop: 50 }}>
      <HeaderMenus title="무한 스크롤" />
      <FlatList
        data={cars}
        keyExtractor={item => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.8}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.carName}</Text>
          </View>
        )}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      />
    </Block>
  );
};

export default CarList;
