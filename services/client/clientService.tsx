// authUtils.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, NavigationContainerRef, NavigationProp } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';

export const handleLogout = async (): Promise<boolean> => {
    try {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userProfile');
        ToastAndroid.show('Logout successful', ToastAndroid.SHORT);
        return true;
    } catch (error) {
        console.error('Error logging out:', error);
        return false;
    }
};
export const setUserId = async (userId: string) => {
    try {
        await AsyncStorage.setItem('userId', userId);
    } catch (error) {
        console.error('Error setting userId:', error);
    }
}
export const getUserId = async (): Promise<string> => {
    try {
        const userId = await AsyncStorage.getItem('userId');
        return userId ?? '';
    } catch (error) {
        console.error('Error getting userId:', error);
        return '';
    }
}
export const removeUserId = async () => {
    try {
        await AsyncStorage.removeItem('userId');
    } catch (error) {
        console.error('Error removing userId:', error);
    }
}
