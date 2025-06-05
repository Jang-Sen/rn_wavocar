import React from 'react';
import { Block, Text } from '@/components/base';
import { theme } from '@/constants';

const regions = [
  { name: '서울', image: '' },
  { name: '경기', image: '' },
  { name: '인천', image: '' },
  { name: '강원', image: '' },
  { name: '부산', image: '' },
  { name: '경상', image: '' },
  { name: '전라', image: '' },
  { name: '충청', image: '' },
];

const AccommodationCardView: React.FC = () => {
  const topRow = regions.slice(0, 4);
  const bottomRow = regions.slice(4, 8);

  return (
    <Block
      column
      style={{ paddingHorizontal: theme.sizes.base, paddingVertical: theme.sizes.caption }}
    >
      <Block row style={{ marginBottom: theme.sizes.caption }}>
        {topRow.map(item => (
          <Block
            key={item.name}
            style={{
              flex: 1,
              paddingVertical: 10,
              marginRight: 8,
              borderRadius: 20,
              backgroundColor: theme.colors.gray2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text bold color="white">
              {item.name}
            </Text>
          </Block>
        ))}
      </Block>

      <Block row>
        {bottomRow.map(item => (
          <Block
            key={item.name}
            style={{
              flex: 1,
              paddingVertical: 10,
              marginRight: 8,
              borderRadius: 20,
              backgroundColor: theme.colors.gray2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text bold color="white">
              {item.name}
            </Text>
          </Block>
        ))}
      </Block>
    </Block>
  );
};

export default AccommodationCardView;
