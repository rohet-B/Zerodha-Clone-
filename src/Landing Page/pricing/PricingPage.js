import React from 'react'
import Brokerage from './Brokerage'
import Hero from './Hero'

const PricingPage = () => {
  return (
    <>
        <Hero/>
        <div className='container p-5'>
      <div className='row text-center'>
          <h1 className='mt-5'>Open a Zerodha Account</h1>
          <p>Modern platforms and apps, $0 investments, and flat $20 intraday and F&O trades.</p>
          <button style={{width:"20%", margin:"0 auto"}} className='p-2 mt-3 btn btn-primary fs-5'>Signup Now</button>
      </div>
    </div>
        <Brokerage/>
    </>
  )
}

export default PricingPage
