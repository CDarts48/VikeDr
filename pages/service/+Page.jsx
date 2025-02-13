import React, { useRef } from "react";
import './code.css';

// Import photos from the before and after folders
const data = [
  { id: 1, url: '/workpics/before/hillPorchBefore.png' },
  { id: 2, url: '/workpics/after/hillPorchAfter.png' },
  { id: 3, url: '/workpics/before/20231010_110550.jpg' },
  { id: 4, url: '/workpics/after/20231016_160754.jpg' },
  { id: 5, url: '/workpics/before/20230830_112212.jpg' },
  { id: 6, url: '/workpics/after/20231208_175223.jpg' },
  { id: 7, url: '/workpics/before/20230722_154051.jpg' },
  { id: 8, url: '/workpics/after/20230723_205706.jpg' },
  { id: 9, url: '/workpics/before/20230829_155936.jpg' },
  { id: 10, url: '/workpics/after/20230920_170812.jpg' },
  { id: 11, url: '/workpics/before/20230525_120122.jpg' },
  { id: 12, url: '/workpics/after/20230505_144805.jpg' },
];

const Slider = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 300; // The amount to scroll when clicking the navigation buttons

  const scrollLeft = () => {
    const container = sliderRef.current;
    container.scrollLeft -= scrollAmount;
  };

  const scrollRight = () => {
    const container = sliderRef.current;
    container.scrollLeft += scrollAmount;
  };

  return (
    <div className="App">
      <button className="nav-btn left" onClick={scrollLeft}>‹</button>
      <div className="images-container" ref={sliderRef}>
        {data.map((item) => (
          <img className="image" alt="sliderImage" key={item.id} src={item.url} />
        ))}
      </div>
      <button className="nav-btn right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default Slider;