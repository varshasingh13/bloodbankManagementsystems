import '../assets/css/global.css'
import '../assets/css/HeaderDropdown.css';
import {categoryList} from '../types';
import { Link } from 'react-router-dom';


function HeaderDropdown() {
  return (

      <div className="header-dropdown">
        <button id="categorybtn" className="button categories-button">Login<span className="arrow">&#8595;</span></button>
        <ul id="CategoryList">
         {/*{categoryList.map((item) =>    <li>*/}
         {/*    <Link to ="/categories">*/}
         {/*        {item.name}</Link></li>*/}

         {/*    ) }*/}

            {categoryList.map((item) => {
                if (item.name === 'Admin') {
                    return (
                        <li key={item.name}>
                            <Link to="/adminLogin">{item.name}</Link>
                        </li>
                    );
                } else if (item.name === 'User') {
                    return (
                        <li key={item.name}>
                            <Link to="/userLogin">{item.name}</Link>
                        </li>
                    );
                }
                return null; // Optional: Handle other cases or exclude if not needed
            })}


        </ul>

</div>

)
}
export default HeaderDropdown

