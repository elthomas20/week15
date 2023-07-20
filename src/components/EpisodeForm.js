import React, { useState } from 'react';
import './EpisodeForm.css';

const EpisodeForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ title, description, imageUrl });
    setTitle('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <form className="episode-form" onSubmit={handleFormSubmit}>
      <h2>Add New Episode</h2>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EpisodeForm;
