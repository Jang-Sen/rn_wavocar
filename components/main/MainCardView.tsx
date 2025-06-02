import React from 'react';
import { Block, Text } from '@/components';
import { FlatList } from 'react-native';
import MainImageView from '@/components/main/MainImageView';
import styles from '@/assets/styles/mainView.styles';

type Props = {
  cars: any[];
  title: string;
};
const MainCardView: React.FC<Props> = ({ cars, title }) => {
  const isLasted = cars.length - 1;

  return (
    <Block flex column style={styles.recommended}>
      {/*<View style={[styles.flex, styles.column, styles.recommended]}>*/}
      <Block row style={styles.recommendedHeader}>
        <Text h2 bold>
          {title}
        </Text>
      </Block>
      <Block column style={styles.recommendedList}>
        {/*<View style={[styles.column, styles.recommendedList]}>*/}
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={[styles.shadow, { overflow: 'visible' }]}
          data={cars}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item, index }) => (
            <MainImageView item={item} index={index} isLasted={isLasted} />
          )}
        />
        {/*</View>*/}
      </Block>
      {/*</View>*/}
    </Block>
  );
};

export default MainCardView;
