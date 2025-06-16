import axiosInstance from '../utils/AxiosBase';
import { endpointConfig } from '@/config/app.config';

const fetchCarList = async () => {
  const response = await axiosInstance.get(endpointConfig.car.carList);

  return response.data.body;
};

const fetchInfiniteCarList = async (params: { page: number; take: number }) => {
  const response = await axiosInstance.get(endpointConfig.car.carList, {
    params,
  });

  return {
    results: response.data.body.data,
    page: response.data.body.meta.page,
    itemCount: response.data.body.meta.itemCount,
    beforePage: response.data.body.meta.hasBeforePage ? params.page - 1 : undefined,
    nextPage: response.data.body.meta.hasNextPage ? params.page + 1 : undefined,
    totalPages: response.data.body.meta.pageCount,
  };
};

const fetchCarDetail = async (carId: string) => {
  const response = await axiosInstance.get(endpointConfig.car.carDetail(carId));

  return response.data.body;
};

export { fetchCarList, fetchInfiniteCarList, fetchCarDetail };
