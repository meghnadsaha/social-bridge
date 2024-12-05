import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideCount = 3; // Total number of slides
  const progressIntervalRef = useRef(null);

  // Handle slide change
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
    setProgress(0); // Reset progress when slide changes
  };

  // Progress bar update function
  const updateProgress = () => {
    setProgress((prevProgress) => {
      if (prevProgress < 100) {
        return prevProgress + 1; // Increment progress by 1%
      }
      clearInterval(progressIntervalRef.current); // Stop the interval when progress reaches 100
      return 100;
    });
  };

  // Start updating progress when carousel slide starts
  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current); // Clear any existing interval before starting a new one
    }

    // Start the interval when activeIndex changes (slide starts)
    progressIntervalRef.current = setInterval(updateProgress, 50); // Update every 50ms

    return () => {
      // Clean up on component unmount
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [activeIndex]); // This effect runs whenever the activeIndex changes

  return (
    <div className="carousel-wrapper">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false}
        onSlide={() => setProgress(0)} // Reset progress when a slide transition starts
      >
        <Carousel.Item className="carousel-item-fixed-height">
          <img
            className="d-block w-100 img-fluid"
            style={{
              maxWidth: '800px',
              maxHeight: '400px',
              objectFit: 'contain', // Ensure the image maintains its aspect ratio
              width: '100%',        // Set width to 100% to scale down the image
              height: 'auto',       // Maintain aspect ratio by adjusting height
            }}
            src="https://images.pexels.com/photos/29086857/pexels-photo-29086857/free-photo-of-young-graduate-celebrating-achievement-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item-fixed-height">
          <img
            className="d-block w-100 img-fluid"
            src="https://via.placeholder.com/800x400?text=Second+slide"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item-fixed-height">
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Third+slide"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Custom Progress Bar */}
      <div className="carousel-progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default UncontrolledExample;
