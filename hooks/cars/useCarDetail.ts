import { useQuery } from '@tanstack/react-query';
import carService from '../../services/CarService';

export const useCarDetail = (id: string) => {
  return useQuery({
    queryKey: ['car', id],
    queryFn: () => carService.getCarDetail(id),
  });
};
