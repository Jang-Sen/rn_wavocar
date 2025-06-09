import React from 'react';
import { Block, Text } from '@/components/base';
import HeaderMenus from '@/constants/Header';

const EventScreen: React.FC = () => {
  return (
    <Block style={{ marginTop: 50 }}>
      <HeaderMenus title="Event" />
      <Text>이벤트/혜택</Text>
    </Block>
  );
};

export default EventScreen;
