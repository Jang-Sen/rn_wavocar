import React from 'react';
import { Block, Card, Text } from '@/components/base';
import { TouchableOpacity } from 'react-native';
import styles from '@/assets/styles/view.styles';
import { Image } from 'expo-image';
import { theme } from '@/constants';

const MainMenuCardView = (item, middle = true) => {
  console.log('@@@@@@@@@@@@@@@@@@@', item);

  return (
    <Block key={item.title}>
      <Block>
        <TouchableOpacity activeOpacity={0.7} key={item.title}>
          <Card middle shadow style={styles.category}>
            <Text
              header
              bold
              height={20}
              style={{ marginBottom: middle === true ? theme.sizes.radius / 2 : theme.sizes.base }}
            >
              {item.title}
            </Text>

            {middle === true ? (
              <Text
                caption
                semibold
                height={20}
                style={{ marginBottom: 15 }}
                color={theme.colors.gray}
              >
                {item.description}
              </Text>
            ) : null}

            <Block style={{ alignItems: 'flex-end' }}>
              {/*<Badge margin={[0, 0, 5]} size={70} color={theme.colors.active}>*/}
              <Image source={item.icon} style={{ height: 37, width: 37 }} />
              {/*</Badge>*/}
            </Block>

            {/*<Text gray caption>*/}
            {/*  {item} products*/}
            {/*</Text>*/}
          </Card>
        </TouchableOpacity>
        {/*<TouchableOpacity>*/}
        {/*  <Card style={styles.view3}>*/}
        {/*    <Text bold title style={{ marginBottom: 10 }}>*/}
        {/*      {item.title}*/}
        {/*    </Text>*/}
        {/*    <Block style={{ alignItems: 'flex-end', marginBottom: 15, backgroundColor: 'red' }}>*/}
        {/*      <Image source={item.icon} style={{ width: 30, height: 30, resizeMode: 'contain' }} />*/}
        {/*    </Block>*/}
        {/*  </Card>*/}
        {/*</TouchableOpacity>*/}
      </Block>
    </Block>
  );
};

export default MainMenuCardView;
