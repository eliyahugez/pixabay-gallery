import React, { useState } from "react";
import { useDispatch } from "react-redux";

const CategoryModal = ({ show, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: "SET_CATEGORY", payload: selectedCategory });
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-form">
          <label>Select Category:</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="choice">Your choice</option>
            <option value="sports">Sports</option>
            <option value="work">Work</option>
            <option value="animals">Animals</option>
            <option value="woman">Woman</option>
            <option value="car">Car</option>
            <option value="business">Business</option>
            {/* הוסיפו אפשרויות נוספות */}
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
