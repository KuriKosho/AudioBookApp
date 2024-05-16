import axios from 'axios';
import axiosClient, { ResponseSuccess } from '../ConfigAxios';
import { Alert, ToastAndroid } from 'react-native';
import clientService from 'services/client/client.service';

const updateUserInfoPath = "/api/v1/audio-user/update-info";
export interface UserInfoDTO {
    userId: string;
    displayName: string;
    username: string;
    email: string;
    avatar: string;
    phone: string;
    dob: string;
}
export const updateUserInfo = async (userInfo: UserInfoDTO): Promise<boolean> => {
    let check = false;
    try {
        const userId =  (await clientService.getUserProfile()).userId;
        if (!userId) {
            console.log("User ID not found");
            return false;
        }
        console.log(userInfo)
        const response:boolean = await axiosClient.post(updateUserInfoPath,  userInfo);
        // Handle successful update user information response
        if (response) {
            check = response;
            ToastAndroid.show("User info updated successfully", ToastAndroid.SHORT);
        }
    } catch (error) {
        console.log("Error:", error);
        throw new Error('Update user info failed');
    }
    return check;
};
