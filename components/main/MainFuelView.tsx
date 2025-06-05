import React from 'react';
import { Block, Text } from '@/components/base';
import styles from '@/assets/styles/main.styles';
import { FlatList } from 'react-native';
import electric from '@/assets/icons/Electric-Car--Streamline-Plump.png';
import hybrid from '@/assets/icons/Electric-Car--Streamline-Flex.png';
import gasoline from '@/assets/icons/Gas-Canister--Streamline-Plump.png';
import diesel from '@/assets/icons/Gas-Station-Fuel-Petroleum--Streamline-Plump.png';
import MainFuelImageView from '@/components/main/MainFuelImageView';

type Props = {
  title: string;
  activeFuel: string | undefined;
  setFuel: (fuel: string) => void;
};

const fuelData = [
  {
    type: '전기',
    label: '전기차',
    icon: electric,
  },
  {
    type: '하이브리드',
    label: '하이브리드',
    icon: hybrid,
  },
  {
    type: '휘발유',
    label: '휘발유',
    icon: gasoline,
  },
  { type: '경유', label: '경유', icon: diesel },
];

const fuelTypes = ['휘발유', '경유', '하이브리드', '전기'];

const MainFuelView: React.FC<Props> = ({ title, activeFuel, setFuel }) => {
  return (
    <Block flex column style={styles.recommended}>
      <Block row style={styles.recommendedHeader}>
        <Text h2 bold>
          {title}
        </Text>
      </Block>
      <Block column style={styles.recommendedList}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={[styles.shadow, { overflow: 'visible' }]}
          data={fuelData}
          keyExtractor={item => item.type}
          // contentContainerStyle={{ paddingHorizontal: 16, marginTop: 10 }}
          renderItem={({ item, index }) => (
            <MainFuelImageView item={item} index={index} />
            // <Card
            //   onPress={() => setFuel(item.type)}
            //   color={activeFuel === item.type ? theme.colors.primary : theme.colors.gray2}
            //   style={{
            //     width: 100,
            //     marginRight: 12,
            //     alignItems: 'center',
            //     justifyContent: 'center',
            //     paddingVertical: 12,
            //     borderRadius: 12,
            //   }}
            // >
            //   <Image
            //     source={item.icon}
            //     style={{ width: 36, height: 36, marginBottom: 8 }}
            //     resizeMode="contain"
            //   />
            //   <Text center semibold color={theme.colors.white}>
            //     {item.label}
            //   </Text>
            // </Card>
          )}
        />
      </Block>
    </Block>
  );
};

export default MainFuelView;
