import React, { useEffect, useRef } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';
import 'overlayscrollbars/styles/overlayscrollbars.css';

const MyComponent = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      // Initialize OverlayScrollbars on the container
      OverlayScrollbars(scrollContainerRef.current, {
        className: 'os-theme-dark', // Optional theme
        resize: 'both',             // Resize behavior
        sizeAutoCapable: true,      // Auto size the scrollbar
      });
    }
  }, []);

  return (
    <div>
      <div
        ref={scrollContainerRef}
        style={{ height: '100px', overflow: 'auto' }}
      >
        <p>Content goes here...</p>
        <p>More content to make scrolling appear. Add as much as needed.</p>
        <p>More content...</p>
      </div>
    </div>
  );
};

export default MyComponent;
