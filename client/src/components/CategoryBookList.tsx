import   '../types';
import '../assets/css/CategoryBookList.css';
import CategoryBookListItem from './CategoryBookListItem';
import CategoryNav from './CategoryNav';
import  "../types";
import {bookList,BookItem} from "../types";

function CategoryBookList() {
  return (
      <><CategoryNav/>
          <ul className="book-lists">
              {bookList.map((book:BookItem) => (
                  <CategoryBookListItem  bookId={book.bookId} isPublic={book.isPublic} price={book.price} title={book.title} author={book.author}/>))}
          </ul>
      </>
)
}

export default CategoryBookList;
