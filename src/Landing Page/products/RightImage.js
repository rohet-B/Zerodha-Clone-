import React from 'react'

const RightImage = (
  {
  imageURL,
  productName,
  productDescription,
  learnMore,
 }
) => {
  return (
      <div className='container mt-5'>
      <div className='row '>
        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{textDecoration: "none" }}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className='col-6 '>
          <img src={imageURL}/> {/*Since we are using props */}
        </div>
      </div>
    </div>
  )
}

export default RightImage
