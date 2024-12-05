import React, { useEffect, useState } from 'react';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    textInputs: [],
    multipleSelect: [],
    singleSelect: '',
  });

  const [choicesInstances, setChoicesInstances] = useState({
    multipleSelect: null,
    singleSelect: null,
  });

  useEffect(() => {
    // Initialize Choices.js for multiple select
    const multipleSelectChoices = new Choices('#multiple-select', {
      removeItemButton: true,
      maxItemCount: 5, // Limits the number of selected items
      searchEnabled: true,
      placeholder: true,
    });

    const singleSelectChoices = new Choices('#single-select', {
      removeItemButton: false,
      searchEnabled: false,
      placeholder: true,
    });

    setChoicesInstances({
      multipleSelect: multipleSelectChoices,
      singleSelect: singleSelectChoices,
    });

    // Cleanup on component unmount
    return () => {
      if (multipleSelectChoices) multipleSelectChoices.destroy();
      if (singleSelectChoices) singleSelectChoices.destroy();
    };
  }, []);

  const handleTextInputChange = (event) => {
    if (event.key === 'Enter' && event.target.value.trim()) {
      if (formData.textInputs.length < 5) {
        setFormData((prev) => ({
          ...prev,
          textInputs: [...prev.textInputs, event.target.value],
        }));
      }
      event.target.value = ''; // Reset input field
    }
  };

  const removeTextInput = (index) => {
    const updatedTextInputs = [...formData.textInputs];
    updatedTextInputs.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      textInputs: updatedTextInputs,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Log the form data or handle submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Text Inputs */}
      <div>
        <h3>Text Inputs (Limit to 5)</h3>
        <input
          type="text"
          placeholder="Press Enter to add text"
          onKeyDown={handleTextInputChange}
        />
        <ul>
          {formData.textInputs.map((input, index) => (
            <li key={index}>
              {input} <button type="button" onClick={() => removeTextInput(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Multiple Select Input */}
      <div>
        <h3>Multiple Select</h3>
        <select
          id="multiple-select"
          multiple
          value={formData.multipleSelect}
          onChange={(e) => setFormData((prev) => ({
            ...prev,
            multipleSelect: Array.from(e.target.selectedOptions, (option) => option.value),
          }))}
        >
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
          <option value="option-4">Option 4</option>
          <option value="option-5">Option 5</option>
        </select>
      </div>

      {/* Single Select Input */}
      <div>
        <h3>Single Select</h3>
        <select
          id="single-select"
          value={formData.singleSelect}
          onChange={(e) => setFormData((prev) => ({
            ...prev,
            singleSelect: e.target.value,
          }))}
        >
          <option value="" disabled>Select an option</option>
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
