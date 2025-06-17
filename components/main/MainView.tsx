import React from 'react';
import { Block } from '@/components/base';
import { theme } from '@/constants';
import three from '@/assets/icons/Button-Go-Forward-30--Streamline-Plump.png';
import newCar from '@/assets/icons/Ai-Vehicle-Spark-2--Streamline-Plump.png';
import oneWay from '@/assets/icons/Swap-Car-Driving-App--Streamline-Plump.png';
import wavocarZone from '@/assets/icons/Car-Alert--Streamline-Plump.png';
import want from '@/assets/images/img.png';
import airport from '@/assets/images/img_1.png';
import bicycle from '@/assets/images/img_2.png';
import train from '@/assets/images/img_3.png';
import { Dimensions, FlatList } from 'react-native';
import FirstMenuCardView from '@/components/main/FirstMenuCardView';
import MainMenuCardView from '@/components/main/MainMenuCardView';

const { width, height } = Dimensions.get('window');

const items = [
  { title: '가지러 가기', description: '가까운 와보카존 찾기', link: null, icon: wavocarZone },
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
      <Block flex style={{ paddingHorizontal: theme.sizes.base }}>
        <FlatList
          data={items}
          keyExtractor={item => item.title}
          numColumns={2}
          contentContainerStyle={{
            paddingVertical: theme.sizes.radius / 2,
            paddingHorizontal: theme.sizes.radius / 2,
            // width: width / 1.1,
            justifyContent: 'space-between',
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            margin: theme.sizes.caption,
            marginVertical: 1,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={FirstMenuCardView}
        />
      </Block>

      <Block flex style={{ paddingHorizontal: theme.sizes.base }}>
        <FlatList
          data={items2}
          keyExtractor={item => item.title}
          numColumns={4}
          contentContainerStyle={{
            paddingVertical: theme.sizes.radius,
            paddingHorizontal: theme.sizes.radius / 2,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          renderItem={data => MainMenuCardView(data.item, true)}
        />
      </Block>

      <Block flex style={{ paddingHorizontal: theme.sizes.base, marginBottom: 10 }}>
        <FlatList
          data={items3}
          keyExtractor={item => item.title}
          numColumns={4}
          contentContainerStyle={{
            paddingVertical: theme.sizes.radius,
            paddingHorizontal: theme.sizes.radius / 2,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          renderItem={data => MainMenuCardView(data.item, false)}
        />
      </Block>
    </>
  );
};

export default MainView;
