import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeItem from './EpisodeItem';

const EpisodeList = ({ handleDeleteEpisode }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get('https://64b16b0b062767bc48262d6e.mockapi.io/podcast')
      .then((response) => setEpisodes(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {episodes.map((episode) => (
        <EpisodeItem key={episode.id} episode={episode} handleDeleteEpisode={handleDeleteEpisode} />
      ))}
    </div>
  );
};

export default EpisodeList;
