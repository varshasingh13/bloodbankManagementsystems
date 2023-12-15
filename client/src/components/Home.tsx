
import HomeCategoryList from './HomeCategoryList';
import '../assets/css/global.css';
import '../assets/css/Home.css'



function Home() {
    return (

        <div className="home-pages">
            <div className="welcome-text flow-content container dark-background">
                <h2>DONATE BLOOD !!!</h2>
                <p>
                   If you are a blood donor, you are a hero to someone, somewhere, who received your gracious gift of Life !!!

                </p>

                <p>
                   DONATE BLOOD AND SAVE LIFE !!!
                </p>

            </div>
            <div className="category-images container">

               <HomeCategoryList />
            </div>
        </div>
    )
}

export default Home;
