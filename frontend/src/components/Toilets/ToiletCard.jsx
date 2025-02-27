import React from 'react'

const reactions = ['😂', '🔥', '❤️', '😂', '🔥', '❤️','😂', '🔥', '❤️']

const ToiletCard = ({toilet}) => {
  return (
    <div className="card">
    <img 
      src={toilet.images[0]} 
      alt="Creepy Toilet" 
      className="card-image"
    />
    
    <h5 className="title">{toilet.title}</h5>
    
    <div className="address">
      <p>{toilet.address}</p>
      <p className="dot">·</p>
      {/* <p className="user">{toilet.submittedBy.username}</p> */}
    </div>
    
    <p className="desc">{toilet.description}</p>
    <p className='address'>{toilet.createdAt.split("T")[0]}</p>
    {/* Additional Tags */}
    <div className="tags">
      <span className="tag">Spiders</span>
      <span className="tag">Gas Station</span>
      <span className="tag">Horror</span>
    </div>

    {/* Slider for Creepiness Score */}
    <div className="slider-container">
      <label htmlFor="creepinessSlider" className="slider-label">
        Creepiness Score: {toilet.creepinessScore}
      </label>
    </div>
    
    {/* Reaction Emojis */}
    <div className="reactions">
      {/* Additional reactions from the array */}
      {toilet?.reactions.slice(4).map((item, index) => (
        <div key={index} className='emoji-container'>

          <div  className="emojis">{item}</div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ToiletCard