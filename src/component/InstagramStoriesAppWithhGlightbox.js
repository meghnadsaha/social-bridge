import React, { useEffect } from 'react';
import GLightbox from 'glightbox'; // Import GLightbox for lightbox functionality
import 'glightbox/dist/css/glightbox.min.css'; // Import GLightbox CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const InstagramStoriesAppWithGLightbox = () => {
  useEffect(() => {
    // Initialize GLightbox with all available options
    const lightbox = GLightbox({
      selector: '.glightbox',  // Use CSS selector to target lightbox items
      skin: 'clean',           // Apply a skin to the lightbox. You can style this skin using CSS.
      openEffect: 'zoom',      // Zoom effect when opening the lightbox
      closeEffect: 'zoom',     // Zoom effect when closing the lightbox
      slideEffect: 'slide',    // Slide transition effect for slide change
      moreText: 'See more',    // Text for descriptions on mobile devices
      moreLength: 60,          // Show more link after a certain number of characters in description
      closeButton: true,       // Show or hide the close button
      touchNavigation: true,   // Enable touch navigation (swiping on mobile)
      keyboardNavigation: true, // Enable keyboard navigation
      closeOnOutsideClick: true, // Close lightbox when clicking outside the active slide
      startAt: 0,              // Start the lightbox at a specific index
      width: '900px',          // Default width for inline elements (images, iframes)
      height: '506px',         // Default height for inline elements
      zoomable: true,          // Enable zooming on images
      loop: true,              // Loop the slides when reaching the end
      draggable: true,         // Enable mouse drag to go to the next/previous slide
      descPosition: 'bottom',  // Global description position (can be overridden per slide)
    });

    // Clean up the GLightbox instance when the component unmounts
    return () => {
      lightbox.destroy();
    };
  }, []);

  // Stories data with image/video URLs and titles
  const stories = [
    {
      title: "John Doe",
      slides: [
        {
          url: 'https://images.pexels.com/photos/29086857/pexels-photo-29086857/free-photo-of-young-graduate-celebrating-achievement-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          type: 'image',
          description: "Graduating with honors!",
        },
        {
          url: 'https://images.pexels.com/photos/3932864/pexels-photo-3932864.jpeg?auto=compress&cs=tinysrgb&w=1200',
          type: 'image',
          description: "The big day!",
        },
      ],
    },
    {
      title: "Jane Smith",
      slides: [
        {
          url: 'https://images.pexels.com/photos/7951623/pexels-photo-7951623.jpeg?auto=compress&cs=tinysrgb&w=1200',
          type: 'image',
          description: "Celebrating life!",
        },
        {
          url: 'https://videos.pexels.com/video-files/8448263/8448263-hd_1080_1920_24fps.mp4',
          type: 'video',
          description: "Adventure time!",
        },
      ],
    },
    {
      title: "Jhon Doe",
      slides: [
        {
          url: 'https://images.pexels.com/photos/7679888/pexels-photo-7679888.jpeg?auto=compress&cs=tinysrgb&w=1200',
          type: 'image',
          description: "Serenity in nature",
        },
        {
          url: 'https://images.pexels.com/photos/698922/pexels-photo-698922.jpeg?auto=compress&cs=tinysrgb&w=1200',
          type: 'image',
          description: "Exploring the outdoors",
        },
      ],
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Instagram Stories with GLightbox</h1>

      <div className="row">
        {stories.map((story, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <h5 className="text-center">{story.title}</h5>
            <div className="row">
              {story.slides.map((slide, idx) => (
                <div key={idx} className="col-12 mb-3">
                  <a
                    href={slide.url}
                    className="glightbox"
                    data-glightbox={slide.type} // Specify whether it's an image or video
                    data-title={story.title}
                    data-description={slide.description}
                  >
                    <img
                      src={slide.url}
                      alt={slide.description}
                      className="img-fluid"
                      style={{ borderRadius: '8px' }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramStoriesAppWithGLightbox;
