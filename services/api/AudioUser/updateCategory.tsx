import axios from 'axios';
import axiosClient, { ResponseSuccess } from '../ConfigAxios';
import { Alert, ToastAndroid } from 'react-native';
import tokenService from 'services/token/token.service';
import { getUserId } from 'services/client/clientService';
import clientService from 'services/client/client.service';

const updateCategoryPath = "/api/v1/audio-user/update-categories";
export interface CategoryDTO {
    id: string;
    name: string;
}
export const updateCategoryList = async (categories: CategoryDTO[]): Promise<boolean> => {
    let check = false;
    try {
        // const userId = await getUserId();
        const userId =  (await clientService.getUserProfile()).userId;
        if (!userId) {
            console.log("User ID not found");
            return false;
        }
        const response:boolean = await axiosClient.post(updateCategoryPath, { audioUserId:userId, categories });
        // Handle successful update category response
        if (response) {
            check = response;
            ToastAndroid.show("Category list updated successfully", ToastAndroid.SHORT);
        }
    } catch (error) {
        console.log("Error:", error);
        throw new Error('Update category list failed');
    }
    return check;
};
