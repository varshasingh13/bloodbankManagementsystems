// Contains all the custom types we want to use for our application
//import User from './assets/images/bbmHome/bb3.png';
//import Admin from './assets/images/bbmHome/bb2.png';
//import Kids from './assets/images/categories/kid.jpg';
export interface BookItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  isPublic: boolean;
}

export interface CategoryItem {
  categoryId: number;
  name: string;
}
// export const categoryImages: Record<string, any> = {
//   donate: User,
//    donate1 : Admin,
//   // kids : Kids,
// };
export const categoryList = [
  { categoryId: 1001, name: "User" },
   { categoryId: 1002, name: "Admin" },
  // { categoryId: 1003, name: "Kids" },
];

export const bookList = [
  {
    bookId: 1001,
    title: "Gifted",
    author: "Kora Greenwood",
    price: 1262,
    isPublic: false,
  },
  {
    bookId: 1002,
    title: "Stillhouse Lake",
    author: "Rachel Caine",
    price: 1222,
    isPublic: true,
  },
  {
    bookId: 1003,
    title: "The Island",
    author: "Natasha Preston",
    price: 677,
    isPublic: false,
  },
  {
    bookId: 1004,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 999,
    isPublic: true,
  },
  {
    bookId: 1005,
    title: "The Lost Bones",
    author: "Kendra Elliot",
    price: 950,
    isPublic: true,
  },
  {
    bookId: 1006,
    title: "The New Girl",
    author: "Jesse Q. Sutanto",
    price: 853,
    isPublic: true,
  },
  {
    bookId: 1007,
    title: "Alone",
    author: "Megan E. Freeman",
    price: 989,
    isPublic: true,
  },
  {
    bookId: 1008,
    title: "The Inmate",
    author: "Freida McFadden",
    price: 1050,
    isPublic: true,
  },
];