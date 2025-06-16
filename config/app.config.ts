export type AppConfig = {
  apiPrefix: string;
};

const appConfig: AppConfig = {
  apiPrefix: 'http://192.168.35.80:81/api/v1',
};

export const endpointConfig = {
  auth: {
    login: '/auth/login',
    register: '/auth/signup',
    forgot_password: '/auth/find/password',
    reset_password: 'auth/update/password',
    verification_email: '/auth/email/send',
    validation_email: '/auth/email/check',
    getInfo: '/auth',
    refreshToken: '/auth/refreshToken',
  },
  car: {
    carList: '/car/findAll',
    carDetail: (carId: string) => `/car/find/${carId}`,
  },
};

// const carConfig: AppConfig = {
// carList: '/car/findAll',
// carDetail: '/car/',
// };

export default appConfig;
