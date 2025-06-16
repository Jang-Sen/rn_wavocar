import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Block, Button, Input, Text } from '@/components/base';
import { theme } from '@/constants';
import { useState } from 'react';
import { useLogin } from '@/hooks/auth/useLogin';
import { Register } from '@/@types/auth';

export default function LoginScreen({ navigation }) {
  const { control, handleSubmit, watch } = useForm();
  const [isActive, setIsActive] = useState(false);
  const { mutate: login, isPending, isError } = useLogin();

  // useEffect(() => {
  //   const subscription = watch(value => {
  //     setIsActive(!!value.email && !!value.password);
  //   });
  //
  //   return () => subscription.unsubscribe();
  // }, [control]);

  // const onSubmit = (data: any) => {
  //   login(data);
  // };

  const loginHandler = async (data: Register) => {
    const userInput = {
      email: data.email,
      password: data.password,
    };

    console.log(userInput);

    login(userInput);

    // try {
    //   const { data, status } = await axios.post(
    //     'http://172.30.43.50:81/api/v1/auth/login',
    //     userInput,
    //   );

    // console.log('@@@@@@@@@@@@@@@@@@@@@', data);
    // console.log('!!!!!!!!!', status);

    // return response.data;
    // } catch (e) {
    //   console.error('에러 메세지: ', e.message);
    // }
  };

  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.base * 2]} style={{ paddingTop: 100 }}>
        <Text h1 bold>
          로그인
        </Text>

        <Block middle>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                label="Email"
                placeholder="가입한 이메일 주소 입력"
                onChangeText={onChange}
                value={value}
                style={[styles.input]}
                error={isError ? <Text>에러입니다.</Text> : null}
              />
              // <TextInput
              //   placeholder="가입한 이메일 주소 입력"
              //   style={localStyles.input}
              //   onChangeText={onChange}
              //   value={value}
              //   autoCapitalize="none"
              // />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                secureTextEntry
                label="Password"
                placeholder="비밀번호 입력"
                onChangeText={onChange}
                value={value}
                style={[styles.input]}
              />
              // <TextInput
              //   placeholder="가입한 이메일 주소 입력"
              //   style={localStyles.input}
              //   onChangeText={onChange}
              //   value={value}
              //   autoCapitalize="none"
              // />
            )}
          />
          <Button gradient onPress={handleSubmit(loginHandler)}>
            {isPending ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold color={theme.colors.black} center>
                로그인
              </Text>
            )}
          </Button>

          <Button
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('forgotPassword')}
          >
            <Text gray caption center style={{ textDecorationLine: 'underline' }}>
              비밀번호를 잊어버리셨나요?
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
    // <Block style={{ backgroundColor: theme.colors.white }}>
    //   <Block flex row center space="between" style={[styles.header, { paddingTop: 50 }]}>
    //     <Text h1 bold center color={theme.colors.black}>
    //       로그인
    //     </Text>
    //   </Block>
    //
    //   <Card>
    //     <Block>
    //       <Controller
    //         control={control}
    //         name="email"
    //         render={({ field: { onChange, value } }) => (
    //           <TextInput
    //             placeholder="가입한 이메일 주소 입력"
    //             style={localStyles.input}
    //             onChangeText={onChange}
    //             value={value}
    //             autoCapitalize="none"
    //           />
    //         )}
    //       />
    //
    //       <Controller
    //         control={control}
    //         name="password"
    //         render={({ field: { onChange, value } }) => (
    //           <TextInput
    //             placeholder="비밀번호 입력"
    //             style={localStyles.input}
    //             onChangeText={onChange}
    //             value={value}
    //             secureTextEntry
    //           />
    //         )}
    //       />
    //
    //       <Button
    //         onPress={handleSubmit(loginHandler)}
    //         style={isActive ? localStyles.inputButton : localStyles.unInputButton}
    //       >
    //         <Text color={isActive ? theme.colors.black : theme.colors.gray} center semibold>
    //           로그인하기
    //         </Text>
    //       </Button>
    //     </Block>
    //
    //     <Block
    //       flex
    //       row
    //       style={{
    //         marginBottom: theme.sizes.base,
    //       }}
    //     >
    //       <Text
    //         color={theme.colors.gray}
    //         semibold
    //         center
    //         style={{ marginLeft: theme.sizes.h2 * 5 }}
    //       >
    //         아이디 찾기 | {''}
    //       </Text>
    //       <Text color={theme.colors.gray} semibold center>
    //         비밀번호 재설정
    //       </Text>
    //     </Block>
    //   </Card>
    // </Block>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
  forgotPassword: {
    marginVertical: theme.sizes.radius,
  },
});
