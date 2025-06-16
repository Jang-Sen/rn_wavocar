import { useMutation } from '@tanstack/react-query';
import authService from '@/services/AuthService';

export const useVerificationEmail = () => {
  return useMutation({
    mutationFn: authService.verification_email,
  });
};

export const useValidationEmail = () => {
  return useMutation({
    mutationFn: authService.validation_email,
  });
};
