import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselModal = ({ images, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="carousel-modal-overlay">
      <div className="carousel-modal-content">
        <button className="carousel-modal-close" onClick={onClose}>
          &times;
        </button>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
              <p className="legend">{image.caption}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

CarouselModal.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CarouselModal;