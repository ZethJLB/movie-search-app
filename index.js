// Import required libraries and the movie model
const express = require("express");
const mongoose = require("mongoose");
const Sample = require("./models/sample");

const app = express();

// Set up middleware
app.set("view engine", "ejs");
app.use(express.static("public"));

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://zlachica13:SeventyFive75.@webdev.izsh1er.mongodb.net/movie-sample?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error(err);
  });

// Route to render the movies EJS template
app.get("/", async (req, res) => {
  // Initialize variables for search, filter, category, pagination, and query building

  const search = req.query.search;
  const filter = req.query.filter;
  const category = req.query.category;
  let categories = [];
  const page = parseInt(req.query.page) || 1; // Add this line
  const limit = 5; // Add this line
  let selectedCategory = "";
  let showResults = false;
  let query = {};

  try {
    // Build the query based on search, filter, and category

    if (search && filter) {
      showResults = true;
      switch (filter) {
        case "title":
          query.title = { $regex: search, $options: "i" };
          break;
        case "runtime":
          if (!isNaN(parseInt(search, 10))) {
            query.runtime = parseInt(search, 10);
          }
          break;
        case "year":
          if (!isNaN(parseInt(search, 10))) {
            query.year = parseInt(search, 10);
          }
          break;
        case "genres":
          query.genres = { $in: [search] };
          break;
        default:
          break;
      }

      // If the category is selected
      if (category) {
        query.genres = { $in: [category] };
        selectedCategory = category;
      }
    }
    // Fetch categories and movies, then render the index template

    categories = await Sample.distinct("genres");
    const movies = await Sample.find(query)
      .skip((page - 1) * limit)
      .limit(limit); // Modify this line
    res.render("index", {
      movies: movies,
      categories: categories,
      selectedCategory: selectedCategory,
      search: search,
      filter: filter,
      showResults: showResults,
    });
    console.log("Query: " + search);
    console.log("Filter: " + filter);
    console.log("Genre: " + category);
    console.log("Results: " + movies);
  } catch (err) {
    console.error(err);
    res.send("Error");
  }
});

app.get("/load-more", async (req, res) => {
  // Initialize variables for search, filter, category, pagination, and query building

  const search = req.query.search;
  const filter = req.query.filter;
  const category = req.query.category;
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  let query = {};

  try {
    // Build the query based on search, filter, and category
    if (search && filter) {
      showResults = true;
      switch (filter) {
        case "title":
          query.title = { $regex: search, $options: "i" };
          break;
        case "runtime":
          if (!isNaN(parseInt(search, 10))) {
            query.runtime = parseInt(search, 10);
          }
          break;
        case "year":
          if (!isNaN(parseInt(search, 10))) {
            query.year = parseInt(search, 10);
          }
          break;
        case "genres":
          query.genres = { $in: [search] };
          break;
        default:
          break;
      }

      // If the category is selected
      if (category) {
        query.genres = { $in: [category] };
        selectedCategory = category;
      }
    }
    // Fetch movies and render the movie-list partial template
    const movies = await Sample.find(query).skip(skip).limit(limit);
    res.render("partials/movie-list", { movies: movies });
  } catch (err) {
    console.error(err);
    res.send("Error");
  }
});

// Start the server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
