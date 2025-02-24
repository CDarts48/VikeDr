import React, { useRef } from "react";
import './code.css';

// Import photos from the before and after folders
const data = [
  { id: 0, url: '/workpics/misc/businesscard.webp' },
  { id: 1, url: '/workpics/before/hillPorchBefore.webp' },
  { id: 2, url: '/workpics/after/hillPorchAfter.webp' },
  { id: 3, url: '/workpics/before/20240527_193813.webp' },
  { id: 4, url: '/workpics/after/20240608_175551.webp ' },
  { id: 5, url: '/workpics/after/20240619_094805.webp' },
  { id: 6, url: '/workpics/after/20240624_144536.webp' },
  { id: 7, url: '/workpics/after/20240625_191345.webp' },
  { id: 8, url: '/workpics/before/20231010_110550.webp' },
  { id: 9, url: '/workpics/after/20231016_160754.webp' },
  { id: 10, url: '/workpics/before/20230830_112212.webp' },
  { id: 11, url: '/workpics/after/20231208_175223.webp' },
  { id: 12, url: '/workpics/before/20230722_154051.webp' },
  { id: 13, url: '/workpics/after/20230723_205706.webp' },
  { id: 14, url: '/workpics/before/20230829_155936.webp' },
  { id: 15, url: '/workpics/after/20230920_170812.webp' },
  { id: 16, url: '/workpics/before/20230525_120122.webp' },
  { id: 17, url: '/workpics/after/20230505_144805.webp' },
  { id: 18, url: '/workpics/before/20241118_122846.webp' },
  { id: 19, url: '/workpics/after/20241130_155548.webp' },
  { id: 20, url: '/workpics/before/20240321_191549.webp' },
  { id: 21, url: '/workpics/after/20240427_175355.webp' },
  { id: 22, url: '/workpics/before/20230316_135031.webp' },
  { id: 23, url: '/workpics/after/20230914_123747.webp' },
  { id: 24, url: '/workpics/before/20230316_135053.webp' },
  { id: 25, url: '/workpics/after/20230914_123755.webp' },
  { id: 26, url: '/workpics/before/20240815_091030.webp' },
  { id: 27, url: '/workpics/before/20240901_115602.webp' },
  { id: 28, url: '/workpics/after/20240909_182144.webp' },
  { id: 29, url: '/workpics/after/20240909_182256.webp' },
  { id: 30, url: '/workpics/after/20230820_200559.webp' },
  { id: 31, url: '/workpics/after/20240808_161514.webp' },
  { id: 32, url: '/workpics/after/20200331_175327.webp' },
  { id: 33, url: '/workpics/after/Screenshot_20191027-160235_Gallery.webp' },
  { id: 34, url: '/workpics/before/20230512_183753.webp' },
  { id: 35, url: '/workpics/after/20230514_163900.webp' },
  // { id: 36, url: '/workpics/after/20240808_161554.webp' },
  // { id: 37, url: '/workpics/after/20240808_161602.webp' },
  // { id: 38, url: '/workpics/after/20240808_161610.webp' },
  // { id: 39, url: '/workpics/after/20240808_161618.webp' },
  // { id: 40, url: '/workpics/after/20240808_161626.webp' },
  // { id: 41, url: '/workpics/after/20240808_161634.webp' },
  // { id: 42, url: '/workpics/after/20240808_161642.webp' },
  // { id: 43, url: '/workpics/after/20240808_161650.webp' },
  // { id: 44, url: '/workpics/after/20240808_161658.webp' },
  // { id: 45, url: '/workpics/after/20240808_161706.webp' },
  // { id: 46, url: '/workpics/after/20240808_161714.webp' },
  // { id: 47, url: '/workpics/after/20240808_161722.webp' },
  // { id: 48, url: '/workpics/after/20240808_161730.webp' },
  // { id: 49, url: '/workpics/after/20240808_161738.webp' },
  // { id: 50, url: '/workpics/after/20240808_161746.webp' },
  // { id: 51, url: '/workpics/after/20240808_161754.webp' },
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