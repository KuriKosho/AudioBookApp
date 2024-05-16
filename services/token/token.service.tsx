import AsyncStorage from "@react-native-async-storage/async-storage";
// import jwtDecode from 'jwt-decode';
import jwt_decode from "jwt-decode";
const getToken = () => {
    return AsyncStorage.getItem("token");
};

const setToken = (token: string) => {
    AsyncStorage.setItem("token", token);
};

const removeToken = () => {
    AsyncStorage.removeItem("token");
};

const checkTokenExists = async (): Promise<boolean> => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token || token === '') {
        return false; // Trả về true nếu token không tồn tại hoặc rỗng
      } else {
        return true; // Trả về false nếu token tồn tại
      }
    } catch (error) {
      console.error('Lỗi khi kiểm tra token:', error);
      return false; // Trả về true nếu có lỗi xảy ra
    }
  };

const isTokenExpired = (token: string): boolean => {
    try {
      const decodedToken: { exp: number } = jwt_decode.jwtDecode(token);
      const expirationDate = new Date(decodedToken.exp * 1000); // Convert expiration time from seconds to milliseconds
      const currentDateTime = new Date();
      // Compare the current date/time with the expiration date/time
      return expirationDate < currentDateTime;
    } catch (error) {
      // Handle decoding errors, such as invalid token format
      console.error('Error decoding token:', error);
      return true; // Assume token is expired if decoding fails
    }
  };
export default {
    getToken,
    setToken,
    removeToken,
    checkTokenExists,
    isTokenExpired
};


