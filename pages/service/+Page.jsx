import React, { useEffect, useState } from "react";
import './code.css';

// Import photos from the before and after folders
const data = [
  { before: '/workpics/before/hillPorchBefore.png', after: '/workpics/after/hillPorchAfter.png' },
  // { before: '/workpics/before/20240110_134125.jpg', after: '/workpics/after/20240202_122343.jpg' },
  { before: '/workpics/before/20231010_110550.jpg', after: '/workpics/after/20231016_160754.jpg' },
  { before: '/workpics/before/20230830_112212.jpg', after: '/workpics/after/20231208_175223.jpg' },
  { before: '/workpics/before/20230722_154051.jpg', after: '/workpics/after/20230723_205706.jpg' },
  { before: '/workpics/before/20230829_155936.jpg', after: '/workpics/after/20230920_170812.jpg' },
  { before: '/workpics/before/20230525_120122.jpg', after: '/workpics/after/20230505_144805.jpg' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 6000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id='service'>
      <h2 className="carousel-header">Remodel / Build /  Maintenance</h2>
      <div className='labels-container'>
        <div id="Before">Before</div>
        <div id="After">After</div>
      </div>
      <div className='carousel-container'>
        <div className='carousel-item'>
          <div className="before">
            <img src={data[currentIndex].before} alt={`Before ${currentIndex}`} />
          </div>
          <div className="after">
            <img src={data[currentIndex].after} alt={`After ${currentIndex}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;