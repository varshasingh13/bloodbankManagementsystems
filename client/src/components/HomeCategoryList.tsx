import '../assets/css/HomeCategoryList.css';




function HomeCategoryList(){

    return(

  <div id = "cateImage" className ="home-list">

      <img  id="homepic1"
            src={require('../assets/images/bbmHome/bb3.png')}
            alt="BBM   Logo"
            width="150px"
            height="auto"
      />
      <img  id="homepic2"
            src={require('../assets/images/bbmHome/bb2.png')}
            alt="BBM   Logo"
            width="150px"
            height="auto"
      />

  </div>

)
}
export default HomeCategoryList;
