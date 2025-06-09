import React from 'react';
import { Block, Text } from '@/components/base';
import HeaderMenus from '@/constants/Header';

const CouponScreen: React.FC = () => {
  return (
    <Block style={{ marginTop: 50 }}>
      <HeaderMenus title="Coupon" />
      <Text>쿠폰</Text>
    </Block>
  );
};

export default CouponScreen;
