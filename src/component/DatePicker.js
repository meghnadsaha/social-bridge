import React, { useEffect } from 'react';
import flatpickr from 'flatpickr';  // Import Flatpickr
import 'flatpickr/dist/flatpickr.css';  // Import the CSS for styling

const DatePicker = () => {
  useEffect(() => {
    // Initialize flatpickr on the input element
    flatpickr("#myDatePicker", {
      // Options can be added here
      dateFormat: "Y-m-d",
    });
  }, []);

  return (
    <div>
      <input type="text" id="myDatePicker" placeholder="Select a date" />
    </div>
  );
};

export default DatePicker;
