import { useEffect, useState } from 'react';
import axiosClient from 'services/api/ConfigAxios';
import { getUserId } from 'services/client/clientService';

const bookContentPath = '/api/v1/audio-book/content-book';



export interface bookContentResponse {
    id: string,
    bookName?: string | undefined,
    authorName?: string | undefined,
    content: string [],
    
}
const useGetContentBookById = (bookId:string):bookContentResponse => {
    const [book, setBook] = useState<bookContentResponse>();
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response:bookContentResponse = await axiosClient.get(bookContentPath+`?bookId=${bookId}`);
                if (response) { 
                    setBook(response);
                }
            } catch (error) {
                console.error('Error fetching books content: ', bookId, error);
            }
        };
        fetchBook();
    }, []);
    return book || {} as bookContentResponse;
};

export default useGetContentBookById;