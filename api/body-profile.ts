import api from '@/api/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

export interface BodyProfile {
  height: number;
  weight: number;
  age: number;
  activityLevel: number;
  sex: string;
  pregnant: boolean;
  breastfeeding: boolean;
}

export interface BodyProfileDto {
  bodyProfile: BodyProfile;
}

const fetchBodyProfile = async () => {
  return api
    .get<BodyProfileDto>(`/profile/body-profile`)
    .then((res) => res.data.bodyProfile);
};

const updateBodyProfile = async (updateBodyProfileDto: BodyProfileDto) => {
  return api
    .patch<void>(`/profile/body-profile`, updateBodyProfileDto)
    .then((res) => res.data);
};

export const useGetBodyProfile = () => {
  return useQuery({
    queryKey: ['profile', 'body-profile'],
    queryFn: fetchBodyProfile
  });
};

export const useUpdateBodyProfile = () => {
  return useMutation({
    mutationFn: (updateBodyProfileDto: BodyProfile) =>
      updateBodyProfile({ bodyProfile: updateBodyProfileDto }),
    onError: (err) => {
      Toast.show({
        type: 'customToast',
        text1: 'Error updating body profile!',
        text2: err.message,
        position: 'bottom'
      });
    },
    onSuccess: () => {
      Toast.show({
        type: 'customToast',
        text1: 'Body profile updated!',
        text2: 'Your body profile has been updated successfully',
        position: 'bottom'
      });
    }
  });
};
