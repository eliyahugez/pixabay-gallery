import axios from "axios";

export const fetchImages = async (category, page, sortBy = "id") => {
  const API_KEY = "25540812-faf2b76d586c1787d2dd02736";
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${category}&page=${page}&order=${sortBy}`
  );
  return response.data.hits;
};
