import { useEffect, useState } from 'react';
import axiosClient from 'services/api/ConfigAxios';
import clientService from 'services/client/client.service';
import { getUserId } from 'services/client/clientService';

const typeBookPath = '/api/v1/audio-book/type-book';

export interface typeBookResponse {
    id: string,
    imgUrl: string,
    bookName?: string | undefined,
    authorName?: string | undefined,
    numberStar?: number | undefined,
    numberListener?: number | undefined,
}
const useTypeBook = (type:"recommend"| "bestseller"|"newrelease"|"trending"| string,page: number , size: number):typeBookResponse[] => {
    const [typeBooks, setTypeBooks] = useState<typeBookResponse[]>([]);
    useEffect(() => {
        const fetchTypeBook = async () => {
            try {
                if (!type) {
                    console.log("Type not found");
                    return typeBooks;
                }
                const userId =  (await clientService.getUserProfile()).userId;
                if (!userId) {
                    console.log("User ID not found");
                    return typeBooks;
                }
                const response:typeBookResponse[] = await axiosClient.get(typeBookPath+`?userId=${userId}&type=${type}&page=${page}&size=${size}`);
                if (response) {
                    setTypeBooks(response);
                }
            } catch (error) {
                console.error('Error fetching type books:', type, error);
            }
        };

        fetchTypeBook();
    }, []);

    return typeBooks;
};

export default useTypeBook;