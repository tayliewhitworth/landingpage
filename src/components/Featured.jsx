import React from 'react'
import './PortfolioPage.css'

const Featured = () => {
  return (
    <div className='featured-section'>
        <div>
            <h1 className='font-bold text-2xl'>Featured Portfolios</h1>
        </div>
        <div className='flex justify-around items-center member-boxes'>
            <div className='member-box'>
                <h2>Member 1</h2>
                <p>Storyboard artist</p>
            </div>
            <div className='member-box'>
                <h2>Member 2</h2>
                <p>Storyboard artist</p>
            </div>
            <div className='member-box'>
                <h2>Member 3</h2>
                <p>Storyboard artist</p>
            </div>
        </div>
    </div>
  )
}

export default Featured