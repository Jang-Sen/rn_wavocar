import React from 'react';
import { Block, Card, Text } from '@/components/base';
import styles from '@/assets/styles/view.styles';
import { theme } from '@/constants';
import three from '@/assets/icons/Button-Go-Forward-30--Streamline-Plump.png';
import newCar from '@/assets/icons/Ai-Vehicle-Spark-2--Streamline-Plump.png';
import oneWay from '@/assets/icons/Swap-Car-Driving-App--Streamline-Plump.png';
import goWavocarZone from '@/assets/icons/Car-Alert--Streamline-Plump.png';
import want from '@/assets/icons/Car-Crash--Streamline-Plump.png';
import airport from '@/assets/icons/Departure-Time--Streamline-Plump.png';
import bicycle from '@/assets/icons/Electric-Bicycle--Streamline-Plump.png';
import train from '@/assets/icons/Train-Front--Streamline-Plump.png';
import { Image } from 'expo-image';

const items = [
  { title: '가지러 가기', description: '가까운 와보카존 찾기', link: null, icon: goWavocarZone },
  { title: '여기로 부르기', description: '원하는 차 받기', link: null, icon: want },
];

const items2 = [
  { title: '편도', description: '다른 곳에 반납', link: null, icon: oneWay },
  { title: '한 달 이상', description: '월플랜', link: null, icon: three },
  { title: '신차를 길게', description: '신차장기플랜', link: null, icon: newCar },
];

const items3 = [
  { title: '공항 이동', link: null, icon: airport },
  { title: '차+KTX', link: null, icon: train },
  { title: '자전거', link: null, icon: bicycle },
];

const MainView: React.FC = () => {
  return (
    <>
      <Block row style={{ paddingHorizontal: theme.sizes.base }}>
        {items.map(item => (
          <Block>
            <Block key={item.title}>
              <Card style={styles.view}>
                <Text bold title>
                  {item.title}
                </Text>
                <Text semibold color={theme.colors.gray} caption>
                  {item.description}
                </Text>
                <Block style={{ alignItems: 'flex-end', marginTop: 5 }}>
                  <Image
                    source={item.icon}
                    style={{ width: 60, height: 60 }}
                    resizeMode="contain"
                  />
                </Block>
              </Card>
            </Block>
          </Block>
        ))}
      </Block>

      <Block flex row style={{ paddingHorizontal: theme.sizes.base }}>
        {items2.map(item => (
          <Block>
            <Block key={item.title}>
              <Card style={styles.view2}>
                <Text bold title>
                  {item.title}
                </Text>
                <Text semibold color={theme.colors.gray} caption>
                  {item.description}
                </Text>
                <Block style={{ alignItems: 'flex-end', marginTop: 3 }}>
                  <Image
                    source={item.icon}
                    style={{ width: 36, height: 36 }}
                    resizeMode="contain"
                  />
                </Block>
              </Card>
            </Block>
          </Block>
        ))}
      </Block>

      <Block flex row style={{ paddingHorizontal: theme.sizes.base }}>
        {items3.map(item => (
          <Block>
            <Block key={item.title}>
              <Card style={styles.view3}>
                <Text bold title>
                  {item.title}
                </Text>
                <Block style={{ alignItems: 'flex-end' }}>
                  <Image
                    source={item.icon}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                  />
                </Block>
              </Card>
            </Block>
          </Block>
        ))}
      </Block>
    </>
  );
};

export default MainView;
