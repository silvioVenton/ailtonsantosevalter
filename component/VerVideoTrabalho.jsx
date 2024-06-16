import React from 'react';

const VerVideoTrabalho = ({ videoId }) => {
  return (
    
      
      <div className="video-container">
        <iframe 
          width="100%"
          height="615"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    
  );
};

export default VerVideoTrabalho;

