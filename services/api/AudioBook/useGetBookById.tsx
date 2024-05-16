import { useEffect, useState } from 'react';
import axiosClient from 'services/api/ConfigAxios';
import { getUserId } from 'services/client/clientService';

const bookDetailsPath = '/api/v1/audio-book/detail-book';

export interface Reviewers {
    reviewerId?: string,
    reviewerName?: string,
    reviewerAvatar?: string,
    reviewContent?: string,
    numberStar?: number,
    reviewDate?: string,
}
export interface bookDetailsResponse {
    id: string,
    imgUrl?: string | undefined,
    bookName?: string | undefined,
    authorName?: string | undefined,
    numberListener?: number | undefined,
    numberStar?: number | undefined,
    categories?: string[] | undefined,
    summary?: string[] | undefined,
    audioUrl?: string ,
    reviews?: Reviewers[] | undefined,
    numberReview?: number | undefined,
}
const useGetBookById = (bookId:string | undefined):bookDetailsResponse => {
    const [book, setBook] = useState<bookDetailsResponse>();
    useEffect(() => {
        const fetchBook = async () => {
            try {
                if (bookId === undefined) {
                    console.log("Book ID not found");
                    return book;
                }
                const response:bookDetailsResponse = await axiosClient.get(bookDetailsPath+`?bookId=${bookId}`);
                if (response) {
                    setBook(response);
                }
            } catch (error) {
                console.error('Error fetching books details: ', bookId, error);
            }
        };
        
        fetchBook();
    }, []);
    return book || {} as bookDetailsResponse;
};

export default useGetBookById;