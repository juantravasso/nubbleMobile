import {userService} from '../userService';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@infra';

export function useUserGetById(id: number) {
  const {data, isLoading,isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30,
    // cacheTime: 5000,
  });

  return {
    user: data,
    isLoading,
    isError,
    refetch,
    isFetching,
  };
}