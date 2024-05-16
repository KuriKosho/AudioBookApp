import axios from 'axios';
import axiosClient, { ResponseSuccess } from '../ConfigAxios';
import { Alert, ToastAndroid } from 'react-native';
import tokenService from 'services/token/token.service';

const resendOtpPath = "/api/v1/regenerate-otp?email=";

export interface ResendOtpResponse {
    message: string;
    send: boolean;
}

export const resendOtp = async (email: string): Promise<boolean> => {
    let check = false;
    try {
        const response: ResendOtpResponse = await axiosClient.put(resendOtpPath+email);
        // Handle successful resend OTP response
        if (response) {
            check = response.send;
            console.log("RESEND OTP:", response.send);
            if (check) {
                ToastAndroid.show("OTP resent successfully", ToastAndroid.SHORT);
            } else {
                Alert.alert(response.message, "Please try again", [{ text: "OK" }]);
            }
        }
        console.log("Response:", response);
        return check;
    } catch (error) {
        // Handle resend OTP error
        console.log("Error:", error);
        throw new Error('Resend OTP failed');
    }
};
