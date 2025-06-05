import React from 'react';
import { theme, theme2 } from '@/constants';
import { Image } from 'expo-image';
import { Block, Text } from '@/components/base';
import { FontAwesome } from '@expo/vector-icons';
import styles from '@/assets/styles/mainView.styles';

type Props = {
  item: any;
  index: number;
  isLasted: boolean;
};

const MainImageView: React.FC<Props> = ({ item, index, isLasted }) => {
  // const isLastItem = index === item.length - 1;

  console.log(item);

  return (
    <Block
      flex
      column
      style={[
        styles.recommendation,
        styles.shadow,
        index === 0 && { marginLeft: theme2.sizes.base },
        isLasted && { marginRight: theme2.sizes.base },
      ]}
    >
      {/*// <View*/}
      {/*//   style={[*/}
      {/*//     styles.flex,*/}
      {/*//     styles.column,*/}
      {/*//     styles.recommendation,*/}
      {/*//     styles.shadow,*/}
      {/*//     index === 0 && { marginLeft: theme2.sizes.margin },*/}
      {/*//     isLasted && { marginRight: theme2.sizes.margin / 2 },*/}
      {/*//   ]}*/}
      {/*// >*/}
      <>
        <Block flex row style={styles.recommendationHeader}>
          {/*<View style={[styles.flex, styles.recommendationHeader]}>*/}
          <Image
            style={[styles.recommendationImage]}
            source={{
              uri: `https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-empty-box-icon-for-your-project-png-image_1521417.jpg`,
            }}
          />
          <Block flex row style={styles.recommendationOptions}>
            {/*<View style={[styles.flex, styles.row, styles.recommendationOptions]}>*/}
            <Text style={styles.recommendationTemp}></Text>
            <FontAwesome
              name={item.saved ? 'bookmark' : 'bookmark-o'}
              color={theme2.colors.white}
              size={theme2.sizes.font * 1.25}
            />
            {/*</View>*/}
          </Block>
          {/*</View>*/}
        </Block>

        <Block
          flex
          column
          style={[
            styles.shadow,
            {
              justifyContent: 'space-evenly',
              padding: theme2.sizes.padding / 2,
            },
          ]}
        >
          {/*<View*/}
          {/*  style={[*/}
          {/*    styles.flex,*/}
          {/*    styles.column,*/}
          {/*    styles.shadow,*/}
          {/*    {*/}
          {/*      justifyContent: 'space-evenly',*/}
          {/*      padding: theme2.sizes.padding / 2,*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*>*/}
          <Text
            style={{
              paddingBottom: theme.sizes.radius,
            }}
            semibold
            size={theme.sizes.font}
          >
            {item.carName}
          </Text>
          <Text
            style={{
              paddingBottom: theme2.sizes.radius,
            }}
            size={theme.sizes.font}
            color={theme.colors.carPrice}
            bold
          >
            시간당
            <Text size={theme.sizes.base} color={theme.colors.carPrice}>
              {' '}
              {item.price * 10}
            </Text>
            원~
          </Text>
          <Text color={theme.colors.gray} size={theme.sizes.caption}>
            #{item.scale} #{item.grade}
          </Text>
          {/*<Text style={{ color: theme2.colors.caption }}>{item.description.slice(0, 50)}</Text>*/}
          <Block
            row
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: theme2.sizes.margin / 2.5,
            }}
          ></Block>

          {/*<View*/}
          {/*  style={[*/}
          {/*    styles.row,*/}
          {/*    {*/}
          {/*      alignItems: 'center',*/}
          {/*      justifyContent: 'space-between',*/}
          {/*      marginTop: theme2.sizes.margin / 2.5,*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*>*/}
          {/*{renderRatings(item.vote_average)}*/}
          {/*<Text style={{color: theme2.colors.active}}>{item.vote_average}</Text>*/}
          {/*</View>*/}
          {/*<Text style={styles.recommendationTemp}>{item.release_date}</Text>*/}
          {/*</View>*/}
        </Block>
      </>
      {/*// </View>*/}
    </Block>
  );
};

export default MainImageView;
