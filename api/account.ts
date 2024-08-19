import api from '@/api/api';
import { useQuery } from '@tanstack/react-query';

export interface Account {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  followers: number;
  following: number;
}

export interface UpdateAccountDto {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

const fetchAccount = async () => {
  return api.get<Account>(`/account`).then((res) => res.data);
};

const updateAccount = async (updateAccountDto: UpdateAccountDto) => {
  return api.put<void>(`/account`, updateAccountDto).then((res) => res.data);
};

export const useGetAccount = () => {
  return useQuery({
    queryKey: ['account'],
    queryFn: fetchAccount
  });
};
