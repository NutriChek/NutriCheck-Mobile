import { Preferences } from './types';

export interface ProductProps {
  _id: string;
  product_name: string;
  quantity: string;
  price: string;
  brands: string;
  nutriments: {
    carbohydrates: number;
    carbohydrates_100g: number;
    energy_kcal: number;
    energy_kcal_100g: number;
    fat: number;
    fat_100g: number;
    nova_group: number;
    nova_group_100g: number;
    proteins: number;
    proteins_100g: number;
    salt: number;
    salt_100g: number;
    saturated_fat: number;
    saturated_fat_100g: number;
    sodium: number;
    sodium_100g: number;
    sugars: number;
    sugars_100g: number;
    folates: number;
    niacin: number;
    riboflavin: number;
    thiamin: number;
    vitamin_a: number;
    vitamin_b6: number;
    vitamin_b12: number;
    vitamin_c: number;
    vitamin_d: number;
    vitamin_e: number;
    vitamin_k: number;
    water: number;
  };
  nutriscore_data: {
    energy: number;
    fiber: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils: number;
    is_beverage: number;
    proteins: number;
    saturated_fat: number;
    sodium: number;
    sugars: number;
  };
  nutriscore_grade: string;
  nutriscore_score: number;
  vegetarian: boolean;
  vegan: boolean;
  pescatarian: boolean;
  palmoil: boolean;
  image_url: string;
  ingredients: {
    id: string;
    text: string;
  }[];
  allergens_tags: string[];
}

function haveCommonItem(array1: any[], array2: any[]) {
  const set = new Set(array2);

  for (let item of array1) {
    if (set.has(item)) {
      return true;
    }
  }

  return false;
}

export const getMatchScore = (
  product: ProductProps,
  preferences: Preferences
) => {
  try {
    if (
      (preferences?.pescatarian && !product?.pescatarian) ||
      (preferences?.vegan && !product?.vegan) ||
      (preferences?.vegetarian && !product?.vegetarian) ||
      (preferences?.palmoil && !product?.palmoil)
    )
      return 0;

    if (preferences?.allergens && product?.allergens_tags) {
      const ownAllergens = Object.keys(preferences.allergens).filter(
        (el) => preferences.allergens[el]
      );

      if (haveCommonItem(product.allergens_tags, ownAllergens)) return 0;
    }

    if (preferences?.ingredients && product?.ingredients) {
      if (
        haveCommonItem(
          product.ingredients.map((el) => el.id),
          preferences.ingredients.map((el) => el.id)
        )
      )
        return 0;
    }

    if (preferences?.nutriments && product?.nutriments) {
      let score = 100;

      if (preferences.nutriments.salt && product.nutriments.salt > 0.1) {
        score -= 17;
      }

      if (preferences.nutriments.sugars && product.nutriments.sugars > 0.1) {
        score -= 21;
      }

      if (preferences.nutriments.fat && product.nutriments.fat > 0.1) {
        score -= 24;
      }

      if (
        preferences?.nutriments['saturated-fat'] &&
        product?.nutriments.saturated_fat > 0.1
      ) {
        score -= 23;
      }

      if (
        preferences?.nutriments.nutriscore &&
        (preferences?.nutriments.nutriscore as unknown as string) !==
          product?.nutriscore_grade
      ) {
        score -= 15;
      }

      return score;
    }

    return 100;
  } catch (e) {
    return 'Unknown';
  }
};
