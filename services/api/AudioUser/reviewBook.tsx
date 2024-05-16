import axios from 'axios';
import axiosClient, { ResponseSuccess } from '../ConfigAxios';
import { Alert, ToastAndroid } from 'react-native';
import tokenService from 'services/token/token.service';
import { getUserId } from 'services/client/clientService';
import clientService from 'services/client/client.service';

const postReviewPath = "/api/v1/audio-book/review-book";



export interface ReviewDTO {
    bookId: string | undefined;
    numberStar: number | undefined;
    review: string | undefined;
}
export interface ReviewResponse {
    message:string,
    success:boolean
}

export const postReview = async (review: ReviewDTO): Promise<boolean> => {
    let check = false;
    try {
        if (!review.bookId || !review.numberStar || !review.review) {
            console.log("Invalid review data");
            return false;
        }
        // const userId = await getUserId();
        const userId =  (await clientService.getUserProfile()).userId;
        if (!userId) {
            console.log("User ID not found");
            return false;
        }
        const contentFormat = review.review.trim();
        const response: ReviewResponse = await axiosClient.post(postReviewPath, { bookId:review.bookId, userId:userId, numberStar:review.numberStar, review:contentFormat});
        // Handle successful post review response
        if (response) {
            check = response.success;
            if (check){
                ToastAndroid.show("Review posted successfully", ToastAndroid.SHORT);
            } else {
                Alert.alert("Error", response.message);
            }
        }
    } catch (error) {
        console.log("Error:", error);
        throw new Error('Post review failed');
    }
    return check;
};
