import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Block, Text } from '@/components/base';

const ResetPassword = () => {
  return (
    <KeyboardAvoidingView>
      <Block>
        <Text>비밀번호 변경</Text>
      </Block>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;
