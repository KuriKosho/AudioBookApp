import { useEffect, useState } from 'react';
import axiosClient from 'services/api/ConfigAxios';
import { typeBookResponse } from './useTypeBook';

const searchPath = '/api/v1/audio-book/search-book?';
const searchCategoryPath = '/api/v1/audio-book/search-book/categories?';
interface SearchProps {
    searchString: string;
    page: number;
    size: number;
}
interface CategorySearchProps {
    page: number;
    size: number;
    categories: string[];
}
export const useSearchBook = () => {
    const [ListBookData, setListBookData] = useState<typeBookResponse[]>([]);
    const [ListBookDataCategory, setListBookDataCategory] = useState<typeBookResponse[]>([]);
    const [BookData, setBookData] = useState<typeBookResponse[]>([]);
    const fetchBookWithSearch = async (searchProps: SearchProps) => {
        try {
            setBookData([]);
            const response = await axiosClient.get(searchPath, { params: searchProps });
            if (response) {
                if (response.success) {
                    setListBookData([...ListBookData, ...response.data]);
                    setBookData([...ListBookData, ...response.data]);
                }
            }
        } catch (error) {
            console.log("Error in fetch book with search : ",error);
        }
    }

    const fetchBookWithCategory = async (categorySearchProps: CategorySearchProps) => {
        try {
            setBookData([]);
            console.log("categorySearchProps : ",categorySearchProps);
            const response = await axiosClient.post(searchCategoryPath+"page="+categorySearchProps.page+"&size="+categorySearchProps.size, categorySearchProps.categories);
            if (response) {
                if (response.success) {
                    setListBookDataCategory([...ListBookDataCategory, ...response.data]);
                    setBookData([...ListBookData, ...response.data]);
                    // setListBookData([...ListBookData, ...response.data]);
                }
            }
        } catch (error) {
            console.log("Error in fetch book with categories : ",error);
        }
    }
    return {BookData, ListBookData, ListBookDataCategory, fetchBookWithSearch, fetchBookWithCategory };
} 

