import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "./api/pixabay";
import CategoryModal from "./components/CategoryModal";
import SortModal from "./components/SortModal";

const App = () => {
  const dispatch = useDispatch();
  const { images, category, currentPage, sortBy } = useSelector(
    (state) => state
  );
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const data = await fetchImages(category, currentPage, sortBy);
      dispatch({ type: "SET_IMAGES", payload: data });
    };

    loadImages();
  }, [category, currentPage, sortBy, dispatch]);

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch({ type: "SET_PAGE", payload: currentPage - 1 });
    }
  };

  const handleNext = () => {
    dispatch({ type: "SET_PAGE", payload: currentPage + 1 });
  };

  return (
    <div className="App">
      <div className="pagination-buttons">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={() => setShowCategoryModal(true)}>
          Select Category
        </button>
        <button onClick={() => setShowSortModal(true)}>Sort</button>{" "}
        {/* כפתור חדש */}
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="image-grid">
        {images.slice(0, 9).map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.webformatURL} alt={image.tags} />
            <div className="image-overlay">
              <p>
                Views: {image.views} | ID: {image.id} | Downloads:{" "}
                {image.downloads}
              </p>
            </div>
          </div>
        ))}
      </div>
      {showCategoryModal && (
        <CategoryModal
          show={showCategoryModal}
          onClose={() => setShowCategoryModal(false)}
        />
      )}
      {showSortModal && (
        <SortModal
          show={showSortModal}
          onClose={() => setShowSortModal(false)}
        />
      )}{" "}
      {/* הצגת המודל */}
    </div>
  );
};

export default App;
