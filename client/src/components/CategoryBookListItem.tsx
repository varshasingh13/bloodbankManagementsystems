import '../assets/css/CategoryBookListItem.css';
import '../types'
import "../types";
import {BookItem} from "../types";

const bookImageFileName =  (book:BookItem) => {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.gif`;
};

function CategoryBookListItem(props:BookItem) {
return (

  <li className="book-box">
   <div className="book-image">
       {!props.isPublic ? (
           <a href="#">
               <img id="readIcon" src={require('../assets/images/categories/readIcon.png')} alt="read" />
           </a>
       ) : null}
           <img id="categoryBookImage" src={require('../assets/images/books/' + bookImageFileName(props))}
        alt="book.title"
      />
    </div>
    <div className="book-title">{props.title }</div>
    <div className="book-author">{ props.author }</div>
    <div className="book-price">${ (props.price / 100).toFixed(2) }</div>

      <button id="addCartBtn" className="button">Add <img id="cartImage" src={require('../assets/images/categories/cart.png')}  alt="Cart Button"/>
      </button>

  </li>

)
}
export default CategoryBookListItem;
