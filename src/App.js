import React from 'react';
import axios from 'axios';
import EpisodeList from './components/EpisodeList';
import EpisodeForm from './components/EpisodeForm';
import './App.css'; 

const App = () => {
  const handleCreateEpisode = (newEpisode) => {
  
    console.log('Creating new episode:', newEpisode);
 
    axios
      .post('https://64b16b0b062767bc48262d6e.mockapi.io/podcast', newEpisode)
      .then((response) => {

        console.log('New episode created:', response.data);
      })
      .catch((error) => {
   
        console.error('Error creating episode:', error);
      });
  };

  const handleUpdateEpisode = (episodeId, updatedEpisode) => {
   
    console.log(`Updating episode ${episodeId}:`, updatedEpisode);
   
    axios
      .put(`https://64b16b0b062767bc48262d6e.mockapi.io/podcast/${episodeId}`, updatedEpisode)
      .then((response) => {
    
        console.log('Episode updated:', response.data);
      })
      .catch((error) => {
      
        console.error('Error updating episode:', error);
      });
  };

  const handleDeleteEpisode = (episodeId) => {

    console.log('Deleting episode:', episodeId);
  
    axios
      .delete(`https://64b16b0b062767bc48262d6e.mockapi.io/podcast/${episodeId}`)
      .then((response) => {
       
        console.log('Episode deleted:', episodeId);
      })
      .catch((error) => {
     
        console.error('Error deleting episode:', error);
      });
  };




  return (
    <div className= "App-header">
  
      
      <h1>The Mummy's Mask Podcast</h1>
      
      <EpisodeList handleDeleteEpisode={handleDeleteEpisode} />
      <EpisodeForm handleSubmit={handleCreateEpisode} />
     
    </div>
  );
};

export default App;
