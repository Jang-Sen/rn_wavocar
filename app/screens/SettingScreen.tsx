import React from 'react';
import { Block } from '@/components/base';
import HeaderMenus from '@/constants/Header';

const SettingScreen: React.FC = () => {
  return (
    <Block style={{ marginTop: 50 }}>
      <HeaderMenus title="Setting" />
    </Block>
  );
};

export default SettingScreen;
