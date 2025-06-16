import { Block, Button, Text } from '@/components/base';
import { theme } from '@/constants';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/base/Input';
import { useRegister } from '@/hooks/auth/useRegister';
import { Register } from '@/@types/auth';

export default function RegisterScreen() {
  const { control, handleSubmit, watch } = useForm();

  const { mutate: register, isError, error, isPending } = useRegister();

  const registerHandler = async (data: Register) => {
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
                label="Name"
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
                label="Email"
                placeholder="사용하실 이메일을 입력해주세요."
                onChangeText={onChange}
                value={value}
                style={[styles.input]}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                secureTextEntry
                label="Password"
                placeholder="비밀번호를 입력해주세요."
                onChangeText={onChange}
                value={value}
                style={[styles.input]}
              />
            )}
          />

          <Button gradient onPress={handleSubmit(registerHandler)}>
            <Text bold white center>
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
});
