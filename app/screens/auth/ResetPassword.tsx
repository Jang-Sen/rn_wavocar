import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Block, Button, Input, Text } from '@/components/base';
import { theme } from '@/constants';
import { Controller, useForm } from 'react-hook-form';
import { useResetPassword } from '@/hooks/auth/useForgotPassword';
import { useRoute } from '@react-navigation/native';
import { useSearchParams } from 'expo-router/build/hooks';

const ResetPassword = () => {
  const { control, handleSubmit, watch } = useForm();
  const { mutate: resetPassword, isPending, isError, error } = useResetPassword();
  const route = useRoute();
  const { token } = useSearchParams();
  
  const resetPasswordHandler = async () => {
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    if (password !== confirmPassword) return;

    resetPassword({ password, token });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]} style={{ paddingTop: 100 }}>
        <Text h1 bold>
          비밀번호 변경
        </Text>

        <Block middle>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                label="비밀번호"
                placeholder="변경하실 비밀번호를 입력해주세요."
                onChangeText={onChange}
                value={value}
                style={[styles.input]}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                label="비밀번호 재입력"
                placeholder="변경하실 비밀번호를 다시 입력해주세요."
                onChangeText={onChange}
                value={value}
                style={[styles.input]}
              />
            )}
          />

          <Button gradient onPress={handleSubmit(resetPasswordHandler)}>
            <Text bold color={theme.colors.black} center>
              비밀번호 변경
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;

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
