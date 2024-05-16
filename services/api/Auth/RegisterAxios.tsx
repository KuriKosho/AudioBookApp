import { Alert, ToastAndroid } from "react-native";
import axiosClient from "../ConfigAxios";

const registerPath = "/api/v1/register";

export interface RegisterResponse {
  message: string;
  register: boolean;
  email: string;
}
export const register = async (username: string, password: string, email: string):Promise<boolean> => {
  let check = false;
    try {
      const response:RegisterResponse = await axiosClient.post(registerPath, { username, password, email });
      console.log("Response:",response);
      // Handle successful registration response
      if (response) {
          check = response.register;
          console.log("REGISTER :",response.register)
          if (check) {
              ToastAndroid.show("Registration successful", ToastAndroid.LONG);
          } else {
              Alert.alert("Registration failed", response.message);
          }
      }
    } catch (error) {
      // Handle registration error
        console.log("Error:",error);
      throw new Error('Registration failed');
    }
    return check;
  };
  