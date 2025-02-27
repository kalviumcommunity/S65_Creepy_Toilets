import React, { useState } from 'react'
import './Toilet.css'
import ToiletCard from './ToiletCard'

const Toilet = () => {

  return (
    <div className="container">
      <h1>Toilets</h1>
     <ToiletCard />
     <ToiletCard />
     <ToiletCard />
    </div>
  )
}

export default Toilet
