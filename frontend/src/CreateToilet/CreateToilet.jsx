import React, { useState } from "react";
import './CreateToilet.css'
import axios from "axios";
const CreateToilet = () => {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    description: "",
    creepinessScore: 5,
    images: [],
    reactions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
    } catch (error) {
        
    }
    let res = await axios.post('http://localhost:3000/api/toilets', formData)
    
  };

  return (
    <div className="form-container">
      <h2>Add a Creepy Toilet</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label>Creepiness Score:</label>
        <input
          type="number"
          name="creepinessScore"
          min="1"
          max="10"
          value={formData.creepinessScore}
          onChange={handleChange}
        />

        <label>Upload Images:</label>
        <input type="file" name="images" multiple onChange={handleImageChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateToilet;
