import api from '@/api/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

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
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

const fetchAccount = async () => {
  return api.get<Account>(`/account`).then((res) => res.data);
};

const updateAccount = async (updateAccountDto: UpdateAccountDto) => {
  return api.patch<void>(`/account`, updateAccountDto).then((res) => res.data);
};

export const useGetAccount = () => {
  return useQuery({
    queryKey: ['account'],
    queryFn: fetchAccount
  });
};

export const useUpdateAccount = () => {
  return useMutation({
    mutationFn: updateAccount,
    onError: (err) => {
      Toast.show({
        type: 'customToast',
        text1: 'Error updating account!',
        text2: err.message,
        position: 'bottom'
      });
    },
    onSuccess: () => {
      Toast.show({
        type: 'customToast',
        text1: 'Account updated!',
        text2: 'Your account has been updated successfully',
        position: 'bottom'
      });
    }
  });
};
