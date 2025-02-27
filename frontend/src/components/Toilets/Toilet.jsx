import React, { useEffect, useState } from 'react'
import './Toilet.css'
import ToiletCard from './ToiletCard'
import axios from 'axios'
const Toilet = () => {
  const [toilets, setToilets] = useState(null)

  const getAllToilets = async () => {
    try {
      let res = await axios.get("http://localhost:3000/api/toilets", {
        headers: localStorage.getItem("token")
      })
      setToilets(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllToilets()
  }, [])

  return (
    <div className="container">
      <h1>Toilets</h1>
      {toilets && toilets.map(toilet => (
     <ToiletCard key={toilet._id} toilet={toilet}/>
      ))}
    </div>
  )
}

export default Toilet
