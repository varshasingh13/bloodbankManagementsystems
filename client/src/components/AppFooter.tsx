import '../assets/css/AppFooter.css'
import '../assets/css/global.css'
import {Link} from "react-router-dom";


function AppFooter(){

    const openLinkInNewBrowser = () => {
        const url = 'https://www.google.com/maps/place/7054+Haycock+Rd,+Falls+Church,+VA+22043/@38.8967412,-77.1894485,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7b4d3e8a5e66f:0xd8f88c73bc3be6db!8m2!3d38.8967412!4d-77.1894485!16s%2Fg%2F11c3q4nphq?entry=ttu';

        // Open the link in a new browser window or tab
        window.open(url, '_blank');
    };
return(
  <footer id="footerHeight" className="container">
    <section className="links">
      <Link to="/aboutUs">about</Link>
      <Link to="/contactUs">contact</Link>
      <Link to="/" onClick={openLinkInNewBrowser}>directions</Link>
    </section>
    <section className="social-media-icons">


        <a href="">
            <img id="facebook" src={require('../assets/images/site/facebook.png')}
            alt="Facebook Logo"
                 width="30px"
                 height="30px"
            />
        </a>
        <a href="">
            <img id="twitter" src={require('../assets/images/site/twitter.png')}
                 alt="Twitter Logo"
                 width="30px"
                 height="30px"
            />
        </a>
    </section>
      <section className="copyright">
          <p>
              ©2023 Reading Studio
          </p>
      </section>
  </footer>
)
}
export default AppFooter;
