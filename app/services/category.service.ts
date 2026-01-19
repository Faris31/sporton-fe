import { fetchAPI } from "../lib/api";
import { Category } from "../types";

export const getAllCategories = async (): Promise<Category[]> => {
    const res = await fetchAPI<Category[]>("/categories");
    console.log("Categories response :", res);

    return res;
}