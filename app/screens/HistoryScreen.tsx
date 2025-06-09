import React from 'react';
import { Block, Text } from '@/components/base';
import HeaderMenus from '@/constants/Header';

const HistoryScreen: React.FC = () => {
  return (
    <Block style={{ marginTop: 50 }}>
      <HeaderMenus title="History" />
      <Text>이용 내역</Text>
    </Block>
  );
};

export default HistoryScreen;
