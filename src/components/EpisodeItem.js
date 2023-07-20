import React from 'react';
import './EpisodeItem.css';

const EpisodeItem = ({ episode, handleDeleteEpisode }) => {
  const handleEdit = () => {
 
  };

  const handleDelete = () => {

    handleDeleteEpisode(episode.id);
  };

  return (
    <div className="episode-card">
      <img src={episode.imageUrl} alt={episode.title} className="episode-image" />
      <div className="episode-info">
        <h3>{episode.title}</h3>
        <p>{episode.description}</p>
      </div>
      <div className="episode-actions">
        {/* <button onClick={handleEdit}>Edit</button> */}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default EpisodeItem;
