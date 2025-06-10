import React from 'react';
import { theme } from '@/constants';
import { Image } from 'expo-image';
import { Block, Text } from '@/components/base';
import { FontAwesome } from '@expo/vector-icons';
import styles from '@/assets/styles/view.styles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

type Props = {
  item: any;
  index: number;
  isLasted: boolean;
};

const MainImageView: React.FC<Props> = ({ item, index, isLasted }) => {
  // const isLastItem = index === item.length - 1;
  const navigation = useNavigation();

  // console.log(item);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
      <Block
        flex
        column
        style={[
          styles.recommendation,
          styles.shadow,
          index === 0 && { marginLeft: theme.sizes.base },
          isLasted && { marginRight: theme.sizes.base },
        ]}
      >
        {/*// <View*/}
        {/*//   style={[*/}
        {/*//     styles.flex,*/}
        {/*//     styles.column,*/}
        {/*//     styles.recommendation,*/}
        {/*//     styles.shadow,*/}
        {/*//     index === 0 && { marginLeft: theme.sizes.margin },*/}
        {/*//     isLasted && { marginRight: theme.sizes.margin / 2 },*/}
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
                color={theme.colors.white}
                size={theme.sizes.font * 1.25}
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
                padding: theme.sizes.margin / 2,
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
            {/*      padding: theme.sizes.margin / 2,*/}
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
                paddingBottom: theme.sizes.radius * 2,
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
            <Block row style={{ gap: theme.sizes.radius / 2 }}>
              <Text
                color={theme.colors.black}
                size={theme.sizes.caption}
                style={{
                  backgroundColor: theme.colors.whiteGray,
                  paddingHorizontal: theme.sizes.base / 2,
                  paddingVertical: theme.sizes.base / 4,
                  borderRadius: theme.sizes.radius,
                  alignSelf: 'flex-start',
                }}
              >
                # {item.scale}
              </Text>
              <Text
                color={theme.colors.black}
                size={theme.sizes.caption}
                style={{
                  backgroundColor: theme.colors.whiteGray,
                  paddingHorizontal: theme.sizes.base / 2,
                  paddingVertical: theme.sizes.base / 4,
                  borderRadius: theme.sizes.radius,
                  alignSelf: 'flex-start',
                }}
              >
                # {item.grade.slice(0, 4)}
              </Text>
            </Block>
            {/*<Text style={{ color: theme2.colors.caption }}>{item.description.slice(0, 50)}</Text>*/}
            <Block
              row
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: theme.sizes.margin / 2.5,
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
    </TouchableOpacity>
  );
};

export default MainImageView;
