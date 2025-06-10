import React from 'react';
import { Block } from '@/components/base';
import { theme } from '@/constants';
import { TextInput } from 'react-native';

const AccommodationSearch: React.FC = () => {
  return (
    <Block flex column style={{ paddingHorizontal: theme.sizes.base }}>
      <TextInput
        placeholder="지역이나 숙소 이름을 찾아보세요."
        style={{
          backgroundColor: theme.colors.whiteGray,
          paddingHorizontal: theme.sizes.base,
          paddingVertical: theme.sizes.base,
          borderRadius: theme.sizes.radius,
        }}
      />
    </Block>
  );
};

export default AccommodationSearch;
