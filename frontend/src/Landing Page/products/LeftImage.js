import React from 'react'

// Since the page using a left - right then right - left structure we will use props
// 1. write props inside LeftImage = () or Deconstruct the values you'll use for this component
// 2. Go to Productspage.js
const LeftImage = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore}) => {
  return (
    <div className='container mt-5'>
      <div className='row '>
        <div className='col-6 '>
          <img src={imageURL}/> {/*Since we are using props */}
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft:"50px",textDecoration: "none" }}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className='mt-3'>
            <a href={googlePlay}><img src='media/Images/googlePlayBadge.svg'/></a>
            <a href={appStore} style={{marginLeft:"50px"}}><img src='media/Images/appstoreBadge.svg'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftImage
