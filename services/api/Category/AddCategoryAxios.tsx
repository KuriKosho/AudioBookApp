import axios from 'axios';
import axiosClient, { ResponseSuccess } from '../ConfigAxios';
import { Alert, ToastAndroid } from 'react-native';
import tokenService from 'services/token/token.service';

const forgotPasswordPath = "/api/v1/forgot-password?email=";
const categoryListPath = "/api/v1/categories";

export interface Category {
    // Define the properties of a category here
    // For example:
    id: number;
    name: string;
    // ...
}
export const getCategoryList = async (limit: number): Promise<Category[]> => {
    try {
        const response = await axiosClient.get(categoryListPath, {
            params: {
                limit: limit
            }
        });
        // Handle successful category list response
        if (response && response.data) {
            return response.data as Category[];
        }
    } catch (error) {
        console.log("Error:", error);
        throw new Error('Failed to get category list');
    }
    return [];
};
