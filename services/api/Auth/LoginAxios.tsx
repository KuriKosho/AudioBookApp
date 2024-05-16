import axios from 'axios';
import axiosClient, { ResponseSuccess } from '../ConfigAxios';
import { ToastAndroid } from 'react-native';
import tokenService from 'services/token/token.service';
import { setUserId } from 'services/client/clientService';
import clientService from 'services/client/client.service';

const loginPath = "/api/v1/login";

export interface LoginResponse {
    message: string;
    token: string;
    login: boolean;
    userInfo?:UserInfo;
}
export interface UserInfo {
    userId?: string;
    displayName?: string;
    username?: string;
    email?: string;
    avatar?: string;
    phone?: string;
    dob?: string
}
export const login = async (username: string, password: string):Promise<boolean> => {
    let check = false;
  try {
    const response:LoginResponse = await axiosClient.post(loginPath, { username, password });
    // Handle successful login response
    if (response) {
        check = response.login;
        console.log("LOGIN :",response.login)
        if (check) {
            await tokenService.setToken(response.token);
            if (response.userInfo){
              await clientService.setUserProfile(response.userInfo);
            }
            ToastAndroid.show("Login successful", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show(response.message, ToastAndroid.LONG);
        }
    }
    console.log("Response:",response);
    return check;
  } catch (error) {
    // Handle login error
    console.log("Error:",error);
    throw new Error('Login failed');
  }
  return check;
};
