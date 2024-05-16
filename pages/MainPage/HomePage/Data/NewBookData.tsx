export interface NewBookProps {
    id: number;
    imageUrl: string;
    bookName: string;
    authorName?:string;
}
export const ListNewBookData: NewBookProps[] = [
    {
        id: 1,
        imageUrl: 'https://media.newyorker.com/photos/661560a0859cd787c3b6a58a/master/w_1000,c_limit/the%20limits.jpg',
        bookName: 'Book 1',
        authorName:"Author name"
    },
    {
        id: 2,
        imageUrl: 'https://media.newyorker.com/photos/661560a0de5c95a58f56e63b/master/w_1000,c_limit/cocktails%20with%20george%20and%20martha.jpg',
        bookName: 'Book 1',
        authorName:"Author name"
    },
    {
        id: 3,
        imageUrl: 'https://media.newyorker.com/photos/661560a01efd5aa132c7a3be/master/w_1000,c_limit/cahokia%20jazz.jpg',
        bookName: 'Book 1',
        authorName:"Author name"
    },
    {
        id: 4,
        imageUrl: "https://media.newyorker.com/photos/661563b2c62092a4440bdeda/master/w_1000,c_limit/the%20wide%20wide%20sea.jpg",
        bookName: 'Book 1',
        authorName:"Author name"
    },
    {
        id: 5,
        imageUrl: "https://assets.vogue.com/photos/65fb5a1877db5e347b4933dc/3:4/w_640,c_limit/strange%20eventful.jpg",
        bookName: 'Book 1',
        authorName:"Author name"
    },
    {
        id: 6,
        imageUrl: "https://assets.vogue.com/photos/65a185c3367731376015c812/3:4/w_640,c_limit/slide_9.jpg",
        bookName: 'Book 1',
        authorName:"Author name"
    },
    {
        id: 7,
        imageUrl: "https://assets.vogue.com/photos/65a185c3367731376015c812/3:4/w_640,c_limit/slide_9.jpg",
        bookName: 'Book 1',
        authorName:"Author name"
    }
]