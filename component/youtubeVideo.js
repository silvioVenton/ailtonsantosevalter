import React, { useEffect, useState } from 'react';

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBXtOAQvDoneg4LdqsMSF6MzaYZOww4uU4&channelId=UCwviePBk_V0uUjiQGSLklgw&part=snippet,id&order=date&maxResults=6`);
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Erro ao carregar vídeos do YouTube:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div >
      <h2>Vídeos do Canal do YouTube</h2>
      <div className="video-list" style={{display:"flex", flexWrap:"wrap"}}>
        {videos.map(video => (
          <div key={video.id.videoId} className="video-item">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.snippet.title}</p>
          </div>
        ))}
    
      </div>
    </div>
  );
};

export default YouTubeVideos;
