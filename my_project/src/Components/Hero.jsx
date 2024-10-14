import React from 'react'

const Hero = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            
  <h1>YOU FEET DESERVE THE BEST</h1>
  <p>YOU FEET DESERVE THE BEST AND WE ARE HERE TO HELP 
    OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES
  </p>

   <div className="hero-btn">

   <button>Shop Now</button>
   <button className='secondary-btn'>Category</button>
   </div>


     <div className="shopping">

      <p>Also Available On</p>


       <div className="brand-icons">
        
        <img src='/images/amazon.png' alt='amazon-logo'/>
        <img src='/images/flipkart.png' alt='flipkart-logo'/>


       </div>

     </div>

        </div>


  <div className='heo-image'>

  <img src='/images/hero-image.png' alt='hero-image'/>


  </div>

    </main>
  )
}

export default Hero