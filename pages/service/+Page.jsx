import React, { useState } from 'react';
import CarouselModal from './CarouselModal';
import './code.css';

const ServiceSection = () => {
  const [isCarouselOpen, setCarouselOpen] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);

  const openCarousel = (images) => {
    setCarouselImages(images);
    setCarouselOpen(true);
  };

  const closeCarousel = () => {
    setCarouselOpen(false);
  };

  const porchImages = [
    { src: './workpics/before/hillPorchBefore.png', alt: 'Porch', caption: 'Before' },
    { src: './workpics/after/hillPorchAfter.png', alt: 'Porch', caption: 'After' },
    { src: './workpics/after/porch3.jpg', alt: 'Porch', caption: 'Porch 3' },
  ];

  const bathroomImages = [
    { src: '/workpics/after/20231113_162909.jpg', alt: 'Bathroom', caption: 'Bathroom 1' },
    { src: '/workpics/after/bathroom2.jpg', alt: 'Bathroom', caption: 'Bathroom 2' },
    { src: '/workpics/after/bathroom3.jpg', alt: 'Bathroom', caption: 'Bathroom 3' },
  ];

  const kitchenImages = [
    { src: './workpics/after/20230920_170812.jpg', alt: 'Kitchen', caption: 'Kitchen 1' },
    { src: './workpics/after/kitchen2.jpg', alt: 'Kitchen', caption: 'Kitchen 2' },
    { src: './workpics/after/kitchen3.jpg', alt: 'Kitchen', caption: 'Kitchen 3' },
  ];

  const remodelImages = [
    { src: './workpics/after/20230330_161944.jpg', alt: 'Remodel', caption: 'Remodel 1' },
    { src: './workpics/after/remodel2.jpg', alt: 'Remodel', caption: 'Remodel 2' },
    { src: './workpics/after/remodel3.jpg', alt: 'Remodel', caption: 'Remodel 3' },
  ];

  return (
    <section id="services-section" className="service">
      <h2>Service in Action</h2>
      <div className="grid">
        <div className="image-container" onClick={() => openCarousel(porchImages)}>
          <img src="./workpics/after/hillPorchAfter.png" alt="Porches" />
          <div className="Porches">
            <h3>Porches</h3>
            <p>Our experts can repair and maintain your porch to keep it looking great.</p>
          </div>
        </div>
        <div className="image-container" onClick={() => openCarousel(bathroomImages)}>
          <img src="/workpics/after/20231113_162909.jpg" alt="Bathroom" />
          <div className="Bathroom">
            <h3>Bathroom</h3>
            <p>Our team can help you design and build the perfect bathroom.</p>
          </div>
        </div>
        <div className="image-container" onClick={() => openCarousel(kitchenImages)}>
          <img src="./workpics/after/20230920_170812.jpg" alt="Kitchen" />
          <div className="Kitchen">
            <h3>Kitchen</h3>
            <p>We specialize in kitchen renovations to create a space you'll love.</p>
          </div>
        </div>
        <div className="image-container" onClick={() => openCarousel(remodelImages)}>
          <img src="./workpics/after/20230330_161944.jpg" alt="Remodel" />
          <div className="Remodel">
            <h3>Remodel</h3>
            <p>From design to construction, we handle every aspect of your remodel.</p>
          </div>
        </div>
      </div>
      <CarouselModal images={carouselImages} isOpen={isCarouselOpen} onClose={closeCarousel} />
    </section>
  );
};

export default ServiceSection;