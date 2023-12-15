import HeaderDropdown from './HeaderDropdown';
import '../assets/css/global.css'
import '../assets/css/AppHeader.css';
import { Link } from 'react-router-dom';
function AppHeader(){
return(

  <header className="container" id="headerHeight">
    <section className="bookstore-logo">
      <Link to="/">
        <img  id="logo"
          src={require('../assets/images/site/bbLogo.png')}
          alt="BBM   Logo"
          width="150px"
          height="auto"
        />
      </Link>
    </section>
    <section className="title-and-search-bar">
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <h1 className="text-logo">MasterRed</h1></Link>


    </section>




      <section id="dropdownCartSection" className="header-dropdown-and-cart">

          <HeaderDropdown />
      </section>
      <Link to="/signUp">
      <button id="loginbtn"  style={{ height: 'fit-content', marginTop: '4px' }} className="button">Sign up</button>
      </Link>

  </header>
)
}
export default AppHeader;

