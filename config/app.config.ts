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
