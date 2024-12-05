import React, { useEffect } from 'react';
import GLightbox from 'glightbox'; // Import GLightbox JavaScript
import 'glightbox/dist/css/glightbox.min.css'; // Import GLightbox CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const MyGallery = () => {
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

  return (
    <div className="container my-5">
      <h2>My Gallery with Descriptions</h2>
      <div className="row">
        {/* Image 1 (Triggers YouTube Video) */}
        <div className="col-md-4 col-sm-6 mb-4">
          <a
            href="https://youtu.be/Ga6RYejo6Hk" // YouTube Video URL
            className="glightbox"
            data-glightbox="video" // Specify it's a video
            data-title="Sample Video"
            data-description="<p>This is an amazing YouTube video!</p>"
            data-descPosition="bottom" // Set description position for this video
          >
            <img
              src="https://biati-digital.github.io/glightbox/demo/img/large/gm1.jpg"
              alt="Video Thumbnail"
              className="img-fluid"
            />
          </a>
        </div>
        {/* Image 2 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <a
            href="https://biati-digital.github.io/glightbox/demo/img/large/gm2.jpg"
            className="glightbox"
            data-glightbox="image"
            data-title="Sample Image 2"
            data-description="<p><em>Another beautiful image</em> captured from nature!</p>"
            data-descPosition="top"
          >
            <img
              src="https://biati-digital.github.io/glightbox/demo/img/large/gm2.jpg"
              alt="Image 2"
              className="img-fluid"
            />
          </a>
        </div>
        {/* Image 3 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <a
            href="https://biati-digital.github.io/glightbox/demo/img/large/gm3.jpg"
            className="glightbox"
            data-glightbox="image"
            data-title="Sample Image 3"
            data-description="<p>This is an <strong>amazing</strong> view of the mountains!</p>"
            data-descPosition="left"
          >
            <img
              src="https://biati-digital.github.io/glightbox/demo/img/large/gm3.jpg"
              alt="Image 3"
              className="img-fluid"
            />
          </a>
        </div>
        {/* Image 4 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <a
            href="https://biati-digital.github.io/glightbox/demo/img/large/gm4.jpg"
            className="glightbox"
            data-glightbox="image"
            data-title="Sample Image 4"
            data-description="<p>The best moment captured in a photo.</p>"
            data-descPosition="right"
          >
            <img
              src="https://biati-digital.github.io/glightbox/demo/img/large/gm4.jpg"
              alt="Image 4"
              className="img-fluid"
            />
          </a>
        </div>
        {/* Image 5 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <a
            href="https://biati-digital.github.io/glightbox/demo/img/large/gm5.jpg"
            className="glightbox"
            data-glightbox="image"
            data-title="Sample Image 5"
            data-description="<p>Nature’s beauty captured in this breathtaking landscape.</p>"
            data-descPosition="bottom"
          >
            <img
              src="https://biati-digital.github.io/glightbox/demo/img/large/gm5.jpg"
              alt="Image 5"
              className="img-fluid"
            />
          </a>
        </div>
        {/* Image 6 */}
        <div className="col-md-4 col-sm-6 mb-4">
          <a
            href="https://biati-digital.github.io/glightbox/demo/img/large/gm6.jpg"
            className="glightbox"
            data-glightbox="image"
            data-title="Sample Image 6"
            data-description="<p><strong>Unforgettable</strong> landscape from the viewfinder.</p>"
            data-descPosition="top"
          >
            <img
              src="https://biati-digital.github.io/glightbox/demo/img/large/gm6.jpg"
              alt="Image 6"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyGallery;
