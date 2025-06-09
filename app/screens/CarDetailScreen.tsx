import { Block, Text } from '@/components/base';
import React, { useRef } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useCarDetail } from '@/hooks/cars/useCarDetail';
import {
  Animated,
  Dimensions,
  FlatList,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { theme, theme2 } from '@/constants';
import { FontAwesome, Octicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

const { width, height } = Dimensions.get('window');

const mocks = [
  {
    id: 1,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    saved: true,
    location: 'Santorini, Greece',
    temperature: 34,
    title: 'Santorini',
    description:
      'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    rating: 4.3,
    reviews: 3212,
    preview:
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 2,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    saved: false,
    location: 'Loutraki, Greece',
    temperature: 34,
    title: 'Loutraki',
    description: 'This attractive small town, 80 kilometers from Athens',
    rating: 4.6,
    reviews: 3212,
    preview:
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 3,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    saved: true,
    location: 'Santorini, Greece',
    temperature: 34,
    title: 'Santorini',
    description: 'Santorini - Description',
    rating: 3.2,
    reviews: 3212,
    preview:
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 4,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    location: 'Loutraki, Greece',
    temperature: 34,
    title: 'Loutraki',
    description: 'This attractive small town, 80 kilometers from Athens',
    rating: 5,
    reviews: 3212,
    preview:
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

type DetailStackParamList = {
  Details: { id: string };
};

const CarDetailScreen: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const route = useRoute<RouteProp<DetailStackParamList>>();
  const { id } = route.params;

  const { data: car, isLoading, error } = useCarDetail(id);

  // const navigation = useNavigation();
  // useLayoutEffect(() => {
  //   navigation.setOptions({ title: car.carName }); // 원하는 제목으로 수정
  // }, [navigation]);

  const renderCarImg = item => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => console.log(item.id)}>
      <ImageBackground
        source={{ uri: item.preview }}
        style={[styles.flex, styles.destination, styles.shadow]}
        imageStyle={{ borderRadius: theme2.sizes.radius }}
      >
        <Block row style={{ justifyContent: 'space-between' }}>
          <Block flex>
            <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
          </Block>
          <Block>
            <Text bold color={theme.colors.white}>
              {item.user.name}
            </Text>
            <Text color={theme.colors.white}>
              <Octicons name="location" size={theme2.sizes.font * 0.8} color={theme.colors.white} />
              <Text color={theme.colors.white}>{item.location}</Text>
            </Text>
          </Block>
          <Block flex center align="end">
            <Text size={theme.sizes.font * 2} color={theme.colors.white} bold>
              {item.rating}
            </Text>
          </Block>
        </Block>
      </ImageBackground>
      <Block column style={[styles.destinationInfo, styles.shadow]}>
        <Text
          size={theme.sizes.font * 1.25}
          semibold
          style={{ paddingBottom: theme.sizes.base / 2 }}
        >
          {item.title}
        </Text>

        <Block row space="between" align="end">
          <Text color={theme.colors.gray}>{item.description.slice(0, 50)}</Text>
          <FontAwesome
            name="chevron-right"
            size={theme.sizes.font * 0.75}
            color={theme.colors.primary}
          />
        </Block>
      </Block>
    </TouchableOpacity>
  );

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, width);

    return (
      <Block flex row center middle style={{ marginTop: theme.sizes.h2 / 2 }}>
        {mocks.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth }]}
            />
          );
        })}
      </Block>
    );
  };

  const renderCarImgList = () => (
    <Block>
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={{ overflow: 'visible', height: 300 }}
        data={mocks}
        keyExtractor={(item, index) => `${item.id}`}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        renderItem={({ item }) => renderCarImg(item)}
      />
      {renderDots()}
    </Block>
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={{ marginVertical: theme.sizes.base * 2 }}
    >
      {renderCarImgList()}
      <Block center middle>
        <Text title>{car?.carName}</Text>
        <Text title>{car?.carNo}</Text>
        <Text title>{car?.carYear}</Text>
        <Text title>{car?.fuel}</Text>
        <Text title>{car?.garde}</Text>
        <Text title>{car?.memo}</Text>
        <Text title>{car?.mileage}</Text>
        <Text title>{car?.price}</Text>
        <Text title>{car?.scale}</Text>
      </Block>
    </ScrollView>
  );
};

export default CarDetailScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: theme2.colors.white,
    paddingHorizontal: theme2.sizes.padding,
    paddingTop: theme2.sizes.padding * 1.33,
    paddingBottom: theme2.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {},
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destination: {
    width: width - theme2.sizes.padding * 2,
    height: width * 0.6,
    marginHorizontal: theme2.sizes.margin,
    paddingHorizontal: theme2.sizes.padding - 2,
    paddingVertical: theme2.sizes.padding * 0.66,
    borderRadius: theme2.sizes.radius,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme2.sizes.radius,
    paddingHorizontal: theme2.sizes.padding,
    paddingVertical: theme2.sizes.padding / 2,
    bottom: 20,
    left: (width - theme2.sizes.padding * 4) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme2.colors.white,
    width: width - theme2.sizes.padding * 4,
  },
  recommended: {},
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme2.sizes.padding,
  },
  recommendedList: {},
  recommendation: {
    width: (width - 36 * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: 12,
    marginVertical: 36 * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme2.sizes.radius,
    borderTopLeftRadius: theme2.sizes.radius,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 36 / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: 14 / 1.25,
    color: theme.colors.black,
    marginVertical: 36 / 5,
  },
  recommendationImage: {
    width: (width - theme2.sizes.padding * 2) / 2,
    height: (width - theme2.sizes.padding * 2) / 2,
  },
  avatar: {
    width: theme2.sizes.padding,
    height: theme2.sizes.padding,
    borderRadius: theme2.sizes.padding / 2,
  },
  rating: {
    fontSize: theme2.sizes.font * 2,
    color: theme2.colors.white,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    marginBottom: theme.sizes.padding,
    backgroundColor: theme2.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme2.colors.active,
  },
});
