import React, { useState } from "react";
import "./CreateToilet.css";
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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const uploadImages = async () => {
    const imageUrls = [];
    const uploadPreset = "toilet"; // Change this
    const cloudName = "dycx19qo7"; // Change this

    for (const file of formData.images) {
      const formDataImage = new FormData();
      formDataImage.append("file", file);
      formDataImage.append("upload_preset", uploadPreset);

      try {
        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formDataImage
        );
        imageUrls.push(res.data.secure_url);
      } catch (error) {
        console.error("Image upload failed", error);
      }
    }
    return imageUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const uploadedImageUrls = await uploadImages();
      const finalData = { ...formData, images: uploadedImageUrls };

      const res = await axios.post("http://localhost:3000/api/toilets", finalData);
      console.log("Submission Successful:", res.data);
    } catch (error) {
      console.error("Submission failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Add a Creepy Toilet</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>

        <label>Creepiness Score:</label>
        <input type="number" name="creepinessScore" min="1" max="10" value={formData.creepinessScore} onChange={handleChange} />

        <label>Upload Images:</label>
        <input type="file" name="images" multiple onChange={handleImageChange} />

        <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
};

export default CreateToilet;
