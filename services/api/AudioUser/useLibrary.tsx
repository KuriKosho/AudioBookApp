import { useEffect, useState } from "react";
import { typeBookResponse } from "../AudioBook/useTypeBook";
import clientService from "services/client/client.service";
import axiosClient from "../ConfigAxios";

const libraryPath = '/api/v1/audio-user/get-library?userId=';
const addLibraryPath = '/api/v1/audio-user/add-book?';
const deleteLibraryPath = '/api/v1/audio-user/remove-book?';

export const useLibraryBook = () => {
    const [ListLibraryBookData, setListLibraryBookData] = useState<typeBookResponse[]>([]);

    const fetchLibraryBook = async () => {
        try {
            let userId = (await clientService.getUserProfile()).userId;
            const response = await axiosClient.get(libraryPath+userId);
            if (response) {
                if (response.success) {
                    setListLibraryBookData(response.data);
                }
            }
        } catch (error) {
            console.log("Error in fetch library book : ",error);
        }
    }
    const deleteBook = async (id:string) => {
        console.log("deleteBook id : ",id);
        try {
            let userId = (await clientService.getUserProfile()).userId;
            const response = await axiosClient.post(deleteLibraryPath+"userId="+userId+"&bookId="+id);
            setListLibraryBookData(ListLibraryBookData.filter((item) => item.id !== id));
            if (response) {
                if (response.success) {
                    setListLibraryBookData(ListLibraryBookData.filter((item) => item.id !== id));
                }
            }
        } catch (error) {
            console.log("Error in delete library book : ",error);
        }
    }
    const addBook = async (id:string) => {
        console.log("addBook id : ",id);
        try {
            let userId = (await clientService.getUserProfile()).userId;
            const response = await axiosClient.post(addLibraryPath+"userId="+userId+"&bookId="+id);
            if (response) {
                if (response.success) {
                    setListLibraryBookData([...ListLibraryBookData, response.data]);
                }
            }
        } catch (error) {
            console.log("Error in add library book : ",error);
        }
    }

    return { ListLibraryBookData, fetchLibraryBook,setListLibraryBookData, deleteBook, addBook};
}
