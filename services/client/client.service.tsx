import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserInfo } from "services/api/Auth/LoginAxios";

const setUserProfile = async (user: UserInfo) => {
    try {
      await AsyncStorage.setItem("userProfile", JSON.stringify(user));
    } catch (error) {
        console.log("Error:", error);
    }
}
const getUserProfile = async (): Promise<UserInfo> => {
    try {
        const userProfile = await AsyncStorage.getItem("userProfile");
        return JSON.parse(userProfile ?? "{}");
    } catch (error) {
        console.log("Error:", error);
        return {};
    }
}
const deleteUserProfile = async () => {
    try {
        await AsyncStorage.removeItem("userProfile");
    } catch (error) {
        console.log("Error:", error);
    }
}
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
export default {
    setUserProfile,
    getUserProfile,
    getRandomColor
}