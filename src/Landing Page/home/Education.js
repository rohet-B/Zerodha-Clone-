import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <img src='media/Images/education.svg'></img>
        </div>
        <div className='col-6'>
          <h1 className='mb-3 fs-2'>Free and open market education</h1>
          <p>Varsity, the largetst online stock market education book in the world covering everything fromt he basics to advance trading.</p>
          <a href='' style={{textDecoration:'none'}}>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market realted queries.</p>
          <a href='' style={{textDecoration:'none'}}>Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education
