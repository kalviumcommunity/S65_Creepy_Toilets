import React from 'react'

const reactions = ['😂', '🔥', '❤️', '😂', '🔥', '❤️','😂', '🔥', '❤️']

const ToiletCard = () => {
  return (
    <div className="card">
    <img 
      src="https://i.pinimg.com/564x/5f/d3/f9/5fd3f9c3c46db039b2709e39593f8edb.jpg" 
      alt="Creepy Toilet" 
      className="card-image"
    />
    
    <h5 className="title">Creepy Gas Station Toilet</h5>
    
    <div className="address">
      <p>Address of this Photo</p>
      <p className="dot">·</p>
      <p className="user">Admin</p>
    </div>
    
    <p className="desc">Lights flicker, weird noises from the vent.</p>

    {/* Additional Tags */}
    <div className="tags">
      <span className="tag">Spiders</span>
      <span className="tag">Gas Station</span>
      <span className="tag">Horror</span>
    </div>

    {/* Slider for Creepiness Score */}
    <div className="slider-container">
      <label htmlFor="creepinessSlider" className="slider-label">
        Creepiness Score: 0
      </label>
    </div>
    
    {/* Reaction Emojis */}
    <div className="reactions">
      {/* Additional reactions from the array */}
      {reactions.slice(4).map((item, index) => (
        <div key={index} className='emoji-container'>

          <div  className="emojis">{item}</div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ToiletCard