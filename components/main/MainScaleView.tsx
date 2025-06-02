import React from 'react';
import { Block, Text } from '@/components';
import styles from '@/assets/styles/mainView.styles';

type Props = {
  title: string;
};

const MainScaleView: React.FC<Props> = ({ title }) => {
  return (
    <Block flex column style={styles.recommended}>
      <Block row style={styles.recommendedHeader}>
        <Text h2 bold>
          {title}
        </Text>
      </Block>
    </Block>
  );
};

export default MainScaleView;
