import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Block, Button, Input, Text } from '@/components/base';
import { theme } from '@/constants';
import { Controller, useForm } from 'react-hook-form';
import { useForgotPassword } from '@/hooks/auth/useForgotPassword';

const ForgotPassword = () => {
  const { control, handleSubmit, watch } = useForm();
  const { mutate: forgotPassword, isPending, isError, error } = useForgotPassword();

  const submitHandler = async (data: { email: string }) => {
    forgotPassword(data);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]} style={{ paddingTop: 100 }}>
        <Text h1 bold>
          비밀번호 찾기
        </Text>

        <Block middle>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Email"
                placeholder="가입한 이메일 주소를 입력해주세요."
                onChangeText={onChange}
                value={value}
                style={[styles.input]}
              />
            )}
          />

          <Button gradient onPress={handleSubmit(submitHandler)}>
            <Text bold color={theme.colors.black} center>
              비밀번호 변경 메일 전송
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
