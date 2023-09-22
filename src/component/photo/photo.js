import React, { useState, useEffect } from "react";
import axios from "axios";
import "../photo/photo.css";

function Photo() {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error("Error data:", error);
      });
  }, []);

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div class="photo-wrapper">
      <h2>Photos</h2>
      <input
        type="text"
        placeholder="Search by album id"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="photo-grid">
        {filteredPhotos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>Title: {photo.title}</p>
            <p>ID: {photo.id}</p>
            <p>Album ID: {photo.albumId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photo;
