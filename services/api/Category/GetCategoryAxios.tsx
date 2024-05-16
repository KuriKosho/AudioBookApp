import { useEffect, useState } from 'react';
import axiosClient, { ResponseSuccess } from '../ConfigAxios';
import { Alert, ToastAndroid } from 'react-native';

const updateCategoryPath = "/api/v1/category?";

export interface CategoriesResponse{
    id: string,
    name: string,
}

export const useCategoryList = (page: number, size: number): CategoriesResponse[] => {
    const [categoryList, setCategoryList] = useState<CategoriesResponse[]>([]);

    useEffect(() => {
        const fetchCategoryList = async () => {
            try {
                const response: CategoriesResponse[] = await axiosClient.get(updateCategoryPath+"page="+page+"&size="+size);
                // Handle successful update category response
                if (response) {
                    setCategoryList(response);
                    // console.log("Category list:", response);
                    // ToastAndroid.show("Category list updated successfully", ToastAndroid.SHORT);
                }
            } catch (error) {
                console.log("Error:", error);
                throw new Error('Update category list failed');
            }
        };

        fetchCategoryList();
    }, [size, page]);

    return categoryList;
};
