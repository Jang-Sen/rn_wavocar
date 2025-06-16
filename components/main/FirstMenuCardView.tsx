import React from 'react';
import { Block, Card, Text } from '@/components/base';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants';
import { Image } from 'expo-image';

const { width, height } = Dimensions.get('window');

const FirstMenuCardView = ({ index, item }) => {
  return (
    <Block key={index}>
      <Block>
        <TouchableOpacity activeOpacity={0.7} key={index}>
          <Card middle shadow style={styles.card}>
            <Text title bold style={{ marginBottom: theme.sizes.radius }}>
              {item.title}
            </Text>

            <Text caption semibold style={{ marginBottom: 15 }} color={theme.colors.gray}>
              {item.description}
            </Text>

            <Block style={{ alignItems: 'flex-end' }}>
              {/*<Badge margin={[0, 0, 5]} size={70} color={theme.colors.active}>*/}
              <Image source={item.icon} style={{ height: 60, width: 60 }} />
              {/*</Badge>*/}
            </Block>

            {/*<Text gray caption>*/}
            {/*  {item} products*/}
            {/*</Text>*/}
          </Card>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default FirstMenuCardView;

const styles = StyleSheet.create({
  card: {
    width: width / 2.5,
    // minWidth: (theme.sizes.padding * 2.4 - theme.sizes.base) / 3,
    // maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    // maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
  },
});
