const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

const API_KEY = "25540812-faf2b76d586c1787d2dd02736";

app.use(cors());

app.get("/api/images", async (req, res) => {
  try {
    const { category = "nature", page = 1 } = req.query;
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${category}&per_page=9&page=${page}`
    );

    let images = response.data.hits;

    if (sortBy) {
      images = images.sort((a, b) => {
        if (sortBy === "id") return a.id - b.id;
        if (sortBy === "date") return new Date(a.date) - new Date(b.date);
      });
    }

    res.json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
