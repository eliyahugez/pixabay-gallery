import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SortModal = ({ show, onClose }) => {
  const [sortBy, setSortBy] = useState("id");
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSubmit = () => {
    dispatch({ type: "SET_SORT", payload: sortBy });
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
          <label>Sort By:</label>
          <select value={sortBy} onChange={handleSortChange}>
            <option value="choice">Your choice</option>
            <option value="id">ID</option>
            <option value="latest">Latest</option>
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SortModal;
