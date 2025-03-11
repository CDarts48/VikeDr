import React, { useRef } from "react";
import './code.css';

// Import photos from the before and after folders
const data = [
  { id: 0, url: '/workpics/misc/businesscard.avif' },
  { id: 1, url: '/workpics/before/hillPorchBefore.avif' },
  { id: 2, url: '/workpics/after/hillPorchAfter.avif' },
  { id: 3, url: '/workpics/before/20240527_193813_1.avif' },
  { id: 4, url: '/workpics/after/20240608_175551.avif ' },
  { id: 5, url: '/workpics/after/20240619_094805.avif' },
  { id: 6, url: '/workpics/after/20240624_144536.avif' },
  { id: 7, url: '/workpics/after/20240625_191345.avif' },
  { id: 8, url: '/workpics/before/20231010_110550.avif' },
  { id: 9, url: '/workpics/after/20231016_160754.avif' },
  { id: 10, url: '/workpics/before/20230830_112212.avif' },
  { id: 11, url: '/workpics/after/20231208_175223.avif' },
  { id: 12, url: '/workpics/before/20230722_154051.avif' },
  { id: 13, url: '/workpics/after/20230723_205706.avif' },
  { id: 14, url: '/workpics/before/20230829_155936.avif' },
  { id: 15, url: '/workpics/after/20230920_170812.avif' },
  { id: 16, url: '/workpics/before/20230525_120122.avif' },
  { id: 17, url: '/workpics/after/20230505_144805.avif' },
  { id: 18, url: '/workpics/before/20241118_122846_1.avif' },
  { id: 19, url: '/workpics/after/20241130_155548.avif' },
  { id: 20, url: '/workpics/before/20240321_191549_1.avif' },
  { id: 21, url: '/workpics/after/20240427_175355_1.avif' },
  { id: 22, url: '/workpics/before/20230316_135031.avif' },
  { id: 23, url: '/workpics/after/20230914_123747.avif' },
  { id: 24, url: '/workpics/before/20230316_135053.avif' },
  { id: 25, url: '/workpics/after/20230914_123755.avif' },
  { id: 26, url: '/workpics/before/20240815_091030.avif' },
  { id: 27, url: '/workpics/after/20240909_182256.avif' },
  { id: 28, url: '/workpics/before/20240901_115602.avif' },
  { id: 29, url: '/workpics/after/20240909_182144.avif' },
  { id: 30, url: '/workpics/after/20230820_200559_1.avif' },
  { id: 31, url: '/workpics/after/20240808_161514.avif' },
  { id: 32, url: '/workpics/after/20240304_180558.avif' },
  { id: 33, url: '/workpics/after/20200331_175327.avif' },
  { id: 34, url: '/workpics/after/Screenshot_20191027-160235_Gallery.avif' },
  { id: 35, url: '/workpics/before/20230512_183753_1.avif' },
  { id: 36, url: '/workpics/after/20230514_163900.avif' },
  { id: 37, url: '/workpics/before/20250214_111638.avif' },
  { id: 38, url: '/workpics/after/20250228_170724.avif' },
  { id: 39, url: '/workpics/before/20250304_111256.avif' },
  { id: 40, url: '/workpics/after/20250304_160622.avif' },
  { id: 40, url: '/workpics/landscaping/before/IMG_0208.avif' },
  { id: 41, url: 'workpics/landscaping/before/IMG_0218.avif' },
  { id: 42, url: '/workpics/landscaping/after/IMG_0248.avif' },
  { id: 43, url: '/workpics/landscaping/after/IMG_0246.avif' },
  { id: 44, url: '/workpics/landscaping/after/IMG_0244.avif' },
  // { id: 45, url: '/workpics/after/20240808_161706.avif' },
  // { id: 46, url: '/workpics/after/20240808_161714.avif' },
  // { id: 47, url: '/workpics/after/20240808_161722.avif' },
  // { id: 48, url: '/workpics/after/20240808_161730.avif' },
  // { id: 49, url: '/workpics/after/20240808_161738.avif' },
  // { id: 50, url: '/workpics/after/20240808_161746.avif' },
    { id: 51, url: '/workpics/after/20240224_121420.avif' },
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