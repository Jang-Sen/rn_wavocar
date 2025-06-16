import { useMutation } from '@tanstack/react-query';
import authService from '@/services/AuthService';
import { useNavigation } from 'expo-router';

export const useRegister = () => {
  const navigation = useNavigation();

  return useMutation({
    mutationFn: authService.register,
    onSuccess: data => {
      console.log('✅ 로그인 성공: ', data);

      navigation.navigate('login');
    },
    onError: error => {
      console.error('❌ 회원가입 API 에러: ', error.message);
    },
  });
};
