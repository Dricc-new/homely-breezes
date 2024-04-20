import { Food, getFoods, getGastronomy, SecctionHeaderType } from "../../services/services";

export interface LoaderType {
    gastronomyHeader: SecctionHeaderType
    foods: Food[]
}

export async function loaderGastronomy(): Promise<LoaderType> {
    return {
        gastronomyHeader: await getGastronomy(),
        foods: await getFoods(),
    }
}