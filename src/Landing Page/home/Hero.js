import React from 'react'

const Hero = () => {
  return (
    // Bootstrap uses a 12-column grid system to help create responsive layouts that adjust smoothly across different screen sizes.
    // 4 + 8 = 12 You column structure should not exceed this number.
    <div className='container p-5'>
      <div className='row text-center'>
          <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
          <h1 className='mt-5'>Invest in Everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds and more.</p>
          <button style={{width:"20%", margin:"0 auto"}} className='p-2 mt-3 btn btn-primary fs-5'>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero
