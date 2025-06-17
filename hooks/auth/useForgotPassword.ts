import { useMutation } from '@tanstack/react-query';
import authService from '@/services/AuthService';

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: authService.forgot_password,
    onSuccess: data => {
      console.log('✅ 인증 메일 발송 완료');
    },
    onError: error => {
      console.error('❌ 인증 메일 발송 API 에러: ', error.message);
    },
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: authService.reset_password,
    onSuccess: data => {
      console.log('✅ 비밀번호 변경 완료');
    },
    onError: error => {
      console.error('❌ 비밀번호 변경 API 에러: ', error.message);
    },
  });
};
