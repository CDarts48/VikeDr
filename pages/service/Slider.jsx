import React, { useRef } from "react";
import './code.css';

// Import photos from the before and after folders
const data = [
  { id: 0, url: '/workpics/misc/businesscard.jpg' },
  { id: 1, url: '/workpics/before/hillPorchBefore.png' },
  { id: 2, url: '/workpics/after/hillPorchAfter.png' },
  { id: 3, url: '/workpics/before/20240527_193813.jpg' },
  { id: 4, url: '/workpics/after/20240608_175551.jpg ' },
  { id: 5, url: '/workpics/after/20240619_094805.jpg' },
  { id: 6, url: '/workpics/after/20240624_144536.jpg' },
  { id: 7, url: '/workpics/after/20240625_191345.jpg' },
  { id: 8, url: '/workpics/before/20231010_110550.jpg' },
  { id: 9, url: '/workpics/after/20231016_160754.jpg' },
  { id: 10, url: '/workpics/before/20230830_112212.jpg' },
  { id: 11, url: '/workpics/after/20231208_175223.jpg' },
  { id: 12, url: '/workpics/before/20230722_154051.jpg' },
  { id: 13, url: '/workpics/after/20230723_205706.jpg' },
  { id: 14, url: '/workpics/before/20230829_155936.jpg' },
  { id: 15, url: '/workpics/after/20230920_170812.jpg' },
  { id: 16, url: '/workpics/before/20230525_120122.jpg' },
  { id: 17, url: '/workpics/after/20230505_144805.jpg' },
  { id: 18, url: '/workpics/before/20241118_122846.jpg' },
  { id: 19, url: '/workpics/after/20241130_155548.jpg' },
  { id: 20, url: '/workpics/before/20240321_191549.jpg' },
  { id: 21, url: '/workpics/after/20240427_175355.jpg' },
  { id: 22, url: '/workpics/before/20230316_135031.jpg' },
  { id: 23, url: '/workpics/after/20230914_123747.jpg' },
  { id: 24, url: '/workpics/before/20230316_135053.jpg' },
  { id: 25, url: '/workpics/after/20230914_123755.jpg' },
  { id: 26, url: '/workpics/before/20240815_091030.jpg' },
  { id: 27, url: '/workpics/before/20240901_115602.jpg' },
  { id: 28, url: '/workpics/after/20240909_182144.jpg' },
  { id: 29, url: '/workpics/after/20240909_182256.jpg' },
  { id: 30, url: '/workpics/after/20230820_200559.jpg' },
  { id: 31, url: '/workpics/after/20240808_161514.jpg' },
  { id: 32, url: '/workpics/after/20200331_175327.jpg' },
  { id: 33, url: '/workpics/after/Screenshot_20191027-160235_Gallery.jpg' },
  { id: 34, url: '/workpics/before/20230512_183753.jpg' },
  { id: 35, url: '/workpics/after/20230514_163900.jpg' },
  // { id: 36, url: '/workpics/after/20240808_161554.jpg' },
  // { id: 37, url: '/workpics/after/20240808_161602.jpg' },
  // { id: 38, url: '/workpics/after/20240808_161610.jpg' },
  // { id: 39, url: '/workpics/after/20240808_161618.jpg' },
  // { id: 40, url: '/workpics/after/20240808_161626.jpg' },
  // { id: 41, url: '/workpics/after/20240808_161634.jpg' },
  // { id: 42, url: '/workpics/after/20240808_161642.jpg' },
  // { id: 43, url: '/workpics/after/20240808_161650.jpg' },
  // { id: 44, url: '/workpics/after/20240808_161658.jpg' },
  // { id: 45, url: '/workpics/after/20240808_161706.jpg' },
  // { id: 46, url: '/workpics/after/20240808_161714.jpg' },
  // { id: 47, url: '/workpics/after/20240808_161722.jpg' },
  // { id: 48, url: '/workpics/after/20240808_161730.jpg' },
  // { id: 49, url: '/workpics/after/20240808_161738.jpg' },
  // { id: 50, url: '/workpics/after/20240808_161746.jpg' },
  // { id: 51, url: '/workpics/after/20240808_161754.jpg' },
  // { id: 52, url: '/workpics/after/20240808_
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
          <img
            className="image"
            alt="sliderImage"
            key={item.id}
            src={item.url}
            loading="lazy" // Lazy load images
          />
        ))}
      </div>
      <button className="nav-btn right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default React.memo(Slider); // Use React.memo to prevent unnecessary re-renders