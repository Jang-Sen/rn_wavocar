import React from 'react';
import { StyleSheet } from 'react-native';

import Block from './Block';
import { theme } from '@/constants';

interface Props {
  children?: React.ReactNode;
  style?: any;
  size?: number;
  color?: string;

  [key: string]: any;
}

export default function Badge({ children, style, size, color, ...props }: Props) {
  const badgeStyles = StyleSheet.flatten([
    styles.badge,
    size && {
      height: size,
      width: size,
      borderRadius: size,
    },
    style,
  ]);

  return (
    <Block flex={false} middle center color={color} style={badgeStyles} {...props}>
      {children}
    </Block>
  );
}

const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.radius,
  },
});
