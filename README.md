Movie Search Website

This repository contains the source code for a movie search website built using Node.js, Express.js, EJS, and MongoDB. Users can search for movies based on specific criteria such as title, runtime, year, and genre. The website also supports pagination to load additional results.

Table of Contents

Features
Installation
Usage
File Structure
Features

Search movies by title, runtime, year, and genre
Filter by category
Pagination to load more results
Responsive design using Bootstrap
Installation

Clone the repository:

--git clone https://github.com/yourusername/movie-search-website.git

Change directory to the project folder:

--cd movie-search-website

Install the required dependencies:

--npm install

Update the MongoDB connection string in the express file with your own credentials.

Usage

Start the server:

--npm start

Open your browser and navigate to http://localhost:5003.

File Structure

index.ejs 1: Main template file containing the structure of the webpage, search form, and movie results.
movie-list.ejs: A partial template file for displaying movie results when loading more results using pagination.
index.js: Main server file that handles routing, MongoDB connection, and middleware configuration.
sample.js: A file defining the movie schema and model for use with MongoDB.
Main Template (index.ejs)
The main template file contains the basic structure of the webpage, including the header, navigation bar, search form, and movie results. It also includes a script for loading more movies using the Fetch API.

Movie List Partial (movie-list.ejs)
The movie list partial file is a smaller template that is used for displaying movie results when loading more results with pagination. It contains the same movie information as the main template, but is specifically designed for appending new results to the existing movie list.

Express Server (index.js)
The express file is the main server file that sets up the middleware, connects to MongoDB, and handles routing for the application. The server listens for requests on the specified port and responds with the appropriate content.

Movie Schema (sample.js)
The movie schema file defines the structure of the movie documents in the MongoDB database. It includes fields for the movie's title, plot, genres, runtime, rating, release date, production countries, and year. The schema is used to create a Mongoose model for querying and modifying the movie data in the database.

Enjoy using the movie search website!
