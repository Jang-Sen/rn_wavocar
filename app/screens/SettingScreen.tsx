import React from 'react';
import { Block, Text } from '@/components/base';
import HeaderMenus from '@/constants/Header';

const SettingScreen: React.FC = () => {
  return (
    <Block style={{ marginTop: 50 }}>
      <HeaderMenus title="Setting" />
      <Text>Setting</Text>
    </Block>
  );
};

export default SettingScreen;
