import React from 'react';
import { Block, Text } from '@/components/base';
import styles from '@/assets/styles/view.styles';
import { theme } from '@/constants';
import { Image } from 'expo-image';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  item: any;
  index: number;
  // isLasted: boolean;
};

const MainFuelImageView: React.FC<Props> = ({ item, index }) => {
  return (
    <Block
      flex
      column
      style={[
        styles.recommendation,
        styles.shadow,
        index === 0 && { marginLeft: theme.sizes.base },
        // isLasted && { marginRight: theme.sizes.base },
      ]}
    >
      <Block flex row style={styles.recommendationHeader}>
        <Image style={[styles.recommendationImage]} source={item.icon} />
        <Block flex row style={styles.recommendationOptions}>
          {/*<View style={[styles.flex, styles.row, styles.recommendationOptions]}>*/}
          <Text style={styles.recommendationTemp}></Text>
          <FontAwesome
            name={item.saved ? 'bookmark' : 'bookmark-o'}
            color={theme.colors.white}
            size={theme.sizes.font * 1.25}
          />
          {/*</View>*/}
        </Block>
      </Block>

      <Block
        flex
        column
        style={[
          styles.shadow,
          {
            justifyContent: 'space-evenly',
            padding: theme.sizes.margin / 2,
          },
        ]}
      >
        <Text
          style={{
            paddingBottom: theme.sizes.radius,
          }}
          semibold
          size={theme.sizes.font}
        >
          {item.label}
        </Text>
      </Block>
    </Block>
  );
};

export default MainFuelImageView;
