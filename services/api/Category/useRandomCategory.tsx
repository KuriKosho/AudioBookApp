import { useEffect, useState } from 'react';
import axiosClient, { ResponseSuccess } from '../ConfigAxios';

const categoriesRandomPath = "/api/v1/category/random";

export interface CategoriesRandomResponse{
    success: boolean;
    message: string;
    data: Categories[];
}
export interface Categories {
    id: string;
    name: string;
}
export const useRandomCategoryList = ():Categories[] => {
    const [categoryList, setCategoryList] = useState<Categories[]>([]);
    const fetchCategoryList = async () => {
        try {
            const response = await axiosClient.get(categoriesRandomPath);
            if (response) {
                setCategoryList(response.data);
            }
        } catch (error) {
            console.log("Error:", error);
            throw new Error('Update category list failed');
        }
    };
    fetchCategoryList();
    return categoryList;
};
