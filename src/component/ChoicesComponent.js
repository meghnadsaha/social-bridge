// In your React component (e.g., `MyComponent.js`)

import React, { useEffect } from 'react';
// Import Choices.js and its minified CSS
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

const ChoicesComponent = () => {
  useEffect(() => {
    // Initialize Choices.js on the select element after component mounts
    const choices = new Choices('#my-select', {
      removeItemButton: true, // Example option to show remove button
      // You can add more configuration options here
    });

    return () => {
      choices.destroy(); // Clean up when component unmounts
    };
  }, []);

  return (
    <div>
      <h2>Choose Your Options</h2>
      <select id="my-select" multiple>
        <option value="option-1">Option 1</option>
        <option value="option-2">Option 2</option>
        <option value="option-3">Option 3</option>
      </select>
    </div>
  );
};

export default ChoicesComponent;
