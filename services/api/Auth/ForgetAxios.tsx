import axios from 'axios';
import axiosClient, { ResponseSuccess } from '../ConfigAxios';
import { Alert, ToastAndroid } from 'react-native';
import tokenService from 'services/token/token.service';

const forgotPasswordPath = "/api/v1/forgot-password?email=";

export interface ForgotResponse {
    message: string;
    sent: boolean;
}
export const forgotPassword = async (email: string):Promise<boolean> => {
    let check = false;
    try {
        const response:ForgotResponse = await axiosClient.put(forgotPasswordPath+email);
        // Handle successful forgot password response
        if (response) {
            check = response.sent;
            console.log("FORGOT PASSWORD :",response.sent)
            if (check) {
                ToastAndroid.show("Email sent successful", ToastAndroid.SHORT);
            } else {
                Alert.alert(response.message, "Please try again", [{ text: "OK" }]);
            }
        }
    } catch (error) {
        console.log("Error:",error);
        throw new Error('Forgot password failed');
    }
    return check;
};
