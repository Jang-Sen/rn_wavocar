import React, { useRef } from 'react';
import { Block, Button, Text } from '@/components/base';
import { theme } from '@/constants';
import { Animated, Dimensions, FlatList, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const { width, height } = Dimensions.get('window');

const defaultIllustrations = [
  { id: 1, source: require('../../assets/images/img_4.png') },
  { id: 2, source: require('../../assets/images/img_5.png') },
  { id: 3, source: require('../../assets/images/img_6.png') },
];

const IntroScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderIllustrations = () => (
    <FlatList
      horizontal
      pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToAlignment="center"
      data={defaultIllustrations}
      keyExtractor={(item, index) => `${item.id}`}
      renderItem={({ item }) => (
        <Image
          source={item.source}
          style={{ width, height: height / 2, overflow: 'visible', resizeMode: 'contain' }}
        />
      )}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: false,
      })}
    />
  );

  const renderSteps = () => {
    const stepPosition = Animated.divide(scrollX, width);

    return (
      <Block row center middle style={styles.stepsContainer}>
        {defaultIllustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  };

  return (
    <Block>
      <Block center bottom flex={0.4}>
        <Text h1 center bold>
          어서오세요.
        </Text>
        <Text h1 primary>
          WAVOCAR
        </Text>
        <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
          enjoy the experience.
        </Text>
      </Block>

      <Block center middle>
        {renderIllustrations()}
        {renderSteps()}
      </Block>

      <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
        <Button gradient onPress={() => navigation.navigate('login')}>
          <Text center semibold white>
            로그인
          </Text>
        </Button>
        <Button shadow>
          <Text center semibold white onPress={() => navigation.navigate('register')}>
            회원가입
          </Text>
        </Button>

        <Button>
          <Text center caption gray>
            Terms Of Service
          </Text>
        </Button>
      </Block>
    </Block>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  stepsContainer: {
    position: 'absolute',
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});
