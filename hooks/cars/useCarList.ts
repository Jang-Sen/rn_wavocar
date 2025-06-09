import { useQuery } from '@tanstack/react-query';
import carService from '../../services/CarService';

export const useCarList = () => {
  return useQuery({
    queryKey: ['cars'],
    queryFn: () => carService.getCarList(),
  });
};

export const useInfiniteCarList = (params: { page: number; take: number }) => {
  return useQuery({
    queryKey: ['car', params],
    queryFn: () => carService.getInfiniteCarList(params),
    getNextPageParam: (lastPage: any) => {
      if (lastPage.page < lastPage.totalPages) return lastPage.nextPage;
    },
  });
};
