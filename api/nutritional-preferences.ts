import api from '@/api/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

export interface NutritionalPreferences {
  nutriscore: number;
  lowSalt: boolean;
  lowSugar: boolean;
  lowFat: boolean;
  lowSaturatedFat: boolean;

  palmOil: boolean;
  diet: number;

  gluten: boolean;
  milk: boolean;
  eggs: boolean;
  nuts: boolean;
  peanuts: boolean;
  sesameSeeds: boolean;
  soybeans: boolean;
  celery: boolean;
  mustard: boolean;
  lupin: boolean;
  fish: boolean;
  crustaceans: boolean;
  molluscs: boolean;
  sulphurs: boolean;
}

export interface NutritionalPreferencesDto {
  nutritionalPreferences: NutritionalPreferences;
}

const fetchNutritionalPreferences = async () => {
  return api
    .get<NutritionalPreferencesDto>(`/profile/nutritional-preferences`)
    .then((res) => res.data.nutritionalPreferences);
};

const updateNutritionalPreferences = async (updateNutritionalPreferencesDto: NutritionalPreferencesDto) => {
  return api
    .patch<void>(`/profile/nutritional-preferences`, updateNutritionalPreferencesDto)
    .then((res) => res.data);
};

export const useGetNutritionalPreferences = () => {
  return useQuery({
    queryKey: ['profile', 'nutritional-preferences'],
    queryFn: fetchNutritionalPreferences
  });
};

export const useUpdateNutritionalPreferences = () => {
  return useMutation({
    mutationFn: (updateNutritionalPreferencesDto: NutritionalPreferences) =>
      updateNutritionalPreferences({ nutritionalPreferences: updateNutritionalPreferencesDto }),
    onError: (err) => {
      Toast.show({
        type: 'customToast',
        text1: 'Error updating nutritional preferences!',
        text2: err.message,
        position: 'bottom'
      });
    },
    onSuccess: () => {
      Toast.show({
        type: 'customToast',
        text1: 'Nutritional preferences updated!',
        text2: 'Your nutritional preferences has been updated successfully',
        position: 'bottom'
      });
    }
  });
};
