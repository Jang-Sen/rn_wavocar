import React from 'react';
import HeaderMenus from '@/constants/Header';
import { Block } from '@/components/base';

const WavocarZone: React.FC = () => {
  return (
    <Block style={{ marginTop: 30 }}>
      <HeaderMenus title="가지러 가기" />
    </Block>
  );
};

export default WavocarZone;
