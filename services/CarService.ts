import { fetchCarDetail, fetchCarList, fetchInfiniteCarList } from '@/api/car';

const carService = {
  getCarList: async () => {
    return await fetchCarList();
  },
  getInfiniteCarList: async (params: { page: number; take: number }) => {
    return await fetchInfiniteCarList(params);
  },
  getCarDetail: async (id: string) => {
    return await fetchCarDetail(id);
  },
};

export default carService;
