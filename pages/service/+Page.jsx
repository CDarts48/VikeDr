import React, { useState } from 'react';
import CarouselModal from './CarouselModal';
import ImageContainer from './ImageContainer';
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
    { src: './workpics/before/porches/hillPorchBefore.png', alt: 'Porch', caption: 'Before' },
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
        <ImageContainer
          src="./workpics/after/hillPorchAfter.png"
          alt="Porches"
          title="Porches"
          description="Our experts can repair and maintain your porch to keep it looking great."
          images={porchImages}
          openCarousel={openCarousel}
          width="600" // Specify the width
          height="400" // Specify the height
        />
        <ImageContainer
          src="/workpics/after/20231113_162909.jpg"
          alt="Bathroom"
          title="Bathroom"
          description="Our team can help you design and build the perfect bathroom."
          images={bathroomImages}
          openCarousel={openCarousel}
          width="600" // Specify the width
          height="400" // Specify the height
        />
        <ImageContainer
          src="./workpics/after/20230920_170812.jpg"
          alt="Kitchen"
          title="Kitchen"
          description="We specialize in kitchen renovations to create a space you'll love."
          images={kitchenImages}
          openCarousel={openCarousel}
          width="600" // Specify the width
          height="400" // Specify the height
        />
        <ImageContainer
          src="./workpics/after/20230330_161944.jpg"
          alt="Remodel"
          title="Remodel"
          description="From design to construction, we handle every aspect of your remodel."
          images={remodelImages}
          openCarousel={openCarousel}
          width="600" // Specify the width
          height="400" // Specify the height
        />
      </div>
      <CarouselModal images={carouselImages} isOpen={isCarouselOpen} onClose={closeCarousel} />
    </section>
  );
};

export default ServiceSection;