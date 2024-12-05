import React, { useEffect } from 'react';
import { tns } from 'tiny-slider';

const MySlider = () => {
  useEffect(() => {
    const slider = tns({
      container: '.my-slider',
      items: 1,
      slideBy: 'page',
      autoplay: true,
    });

    // Cleanup on component unmount
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="my-slider">
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </div>
  );
};

export default MySlider;
