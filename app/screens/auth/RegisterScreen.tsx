import { Block, Button, Text } from '@/components/base';
import { theme } from '@/constants';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/base/Input';
import { useRegister } from '@/hooks/auth/useRegister';
import { Register } from '@/@types/auth';
import { useValidationEmail, useVerificationEmail } from '@/hooks/auth/useVerificationEmail';
import { useState } from 'react';

export default function RegisterScreen() {
  const { control, handleSubmit, watch } = useForm();
  const [showCode, setShowCode] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const { mutateAsync: sendEmail } = useVerificationEmail();
  const { mutateAsync: checkEmail } = useValidationEmail();
  const { mutate: register, isError, error, isPending } = useRegister();

  const checkCodeHandler = async () => {
    const email = watch('email');
    const code = watch('code');

    if (!email || !code) return;

    try {
      await checkEmail({ email, code });
      console.log('✅ 인증번호 일치');
      setIsEmailVerified(true);
      setShowCode(false);
    } catch (e) {
      console.error('❌ 인증번호 불일치: ', e.message);
    }
  };

  const sendCodeHandler = async () => {
    const email = watch('email');

    if (!email) return;

    try {
      await sendEmail({ email });
      console.log('✅ 인증번호 메일 발송');
      setShowCode(true);
    } catch (e) {
      setShowCode(false);
      console.error('❌ 인증번호 발송 API 에러: ', e.message);
    }
  };

  const registerHandler = async (data: Register) => {
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    if (password !== confirmPassword) return;

    register(data);
  };

  return (
    <KeyboardAvoidingView style={styles.register} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]} style={{ paddingTop: 100 }}>
        <Text h1 bold>
          회원가입
        </Text>

        <Block middle>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <Input
                label="이름"
                placeholder="이름 혹은 닉네임을 입력해주세요."
                onChangeText={onChange}
                value={value}
                style={[styles.input]}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                label="이메일"
                placeholder="사용하실 이메일을 입력해주세요."
                onChangeText={onChange}
                value={value}
                style={[styles.input, isEmailVerified && styles.verifiedInput]}
                editable={!isEmailVerified}
                rightLabel={
                  !isEmailVerified ? (
                    <Text color={theme.colors.dark} semibold>
                      발송
                    </Text>
                  ) : null
                }
                onRightPress={!isEmailVerified ? sendCodeHandler : undefined}
                rightStyle={styles.rightButton}
              />
            )}
          />

          {showCode && !isEmailVerified && (
            <Controller
              control={control}
              name="code"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="인증번호"
                  placeholder="메일로 발송한 인증번호를 입력해주세요."
                  onChangeText={onChange}
                  value={value}
                  style={[styles.input]}
                  rightLabel={
                    <Text color={theme.colors.dark} semibold>
                      확인
                    </Text>
                  }
                  onRightPress={checkCodeHandler}
                  rightStyle={styles.rightButton}
                />
              )}
            />
          )}

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                secureTextEntry
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
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
                secureTextEntry
                label="비밀번호 재입력"
                placeholder="비밀번호를 한번 더 입력해주세요."
                onChangeText={onChange}
                value={value}
                style={[styles.input]}
              />
            )}
          />

          <Button gradient onPress={handleSubmit(registerHandler)}>
            <Text bold color={theme.colors.black} center>
              회원가입
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  verifiedInput: {
    color: theme.colors.gray,
  },
  rightButton: {
    // paddingHorizontal: theme.sizes.base,
    // paddingVertical: theme.sizes.base / 2,
    // borderRadius: theme.sizes.radius,
    justifyContent: 'center',
    alignItems: 'center',
    // height: theme.sizes.base * 2.2,
  },
});
