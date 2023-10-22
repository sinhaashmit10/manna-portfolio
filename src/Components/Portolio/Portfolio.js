import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <section id='portfolio'>
        <h2 className="portfolioTitle">My Portfolio</h2>
        <span className="portfolioDesc">I take pride in paying attention to details and making sure that my work is pixel perfect. I am excited to bring my skills and expeirence to help businesses achieve their goals and create a strong online presence.</span>
        <div className="portfolioImgs">
          <div className="cards">
          <img src="./fooddelivery.svg" alt="" className="portfolioImg" />
          <div className="theback">
            <p>Food Delivery App</p>
            <a className='portfolioBtn' href='https://github.com'>Demo</a>
          </div>
          </div>
          <div className="cards">
          <img src="./ebook.svg" alt="" className="portfolioImg" />
          <div className="theback">
            <p>Ebook Generator</p>
            <a className='portfolioBtn' href='https://github.com/your-username/your-repo'>Demo</a>
          </div>
          </div>
          <div className="cards">
          <img src="./textutility.svg" alt="" className="portfolioImg" />
          <div className="theback">
            <p>Text Utility App</p>
            <a className='portfolioBtn' href='https://github.com'>Demo</a>
          </div>
          </div>
        </div>
        {/* <button className="portfolioBtn">See More</button> */}
    </section>
  )
}

export default Portfolio