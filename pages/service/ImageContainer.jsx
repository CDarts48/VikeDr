import React from 'react';

const ImageContainer = ({ src, alt, title, description, images, openCarousel, width, height }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} width={width} height={height} />
      <div className={title}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={() => openCarousel(images)} className="see-more-button">Click to See More</button>
      </div>
    </div>
  );
};

export default ImageContainer;