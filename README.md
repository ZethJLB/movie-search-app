<h1>Movie Search Website</h1>

<p>This repository contains the source code for a movie search website built using Node.js, Express.js, EJS, and MongoDB. Users can search for movies based on specific criteria such as title, runtime, year, and genre. The website also supports pagination to load additional results.</p>

<h2>Table of Contents</h2>
<ol>
<li>Features</li>
<li>Installation</li>
<li>Usage</li>
<li>File Structure</li>
</ol>
<h2>Features</h2>
<ul>
<li>Search movies by title, runtime, year, and genre</li>
<li>Filter by category</li>
<li>Pagination to load more results</li>
<li>Responsive design using Bootstrap</li>
</ul>

<h1>Installation</h1>

<h2>Clone the repository:</h2>

<h4><code>git clone https://github.com/ZethJLB/movie-search-app.git</code></h4>

<h3>Change directory to the project folder:</h3>

<h4><code>cd movie-search-website</code></h4>

<h3>Install the required dependencies:</h3>

<h4><code>npm install</code></h4>

<h3>Update the MongoDB connection string in the express file with your own credentials.</h3>

<h1>Usage</h1>

<h3>Start the server:</h3>

<h4><code>npm start</code></h4>
or
<h4><code>nodemon index.js</code></h4>

<h3>Open your browser and navigate to http://localhost:5003.</h3>

<h1>File Structure</h1>

<p>index.ejs 1: Main template file containing the structure of the webpage, search form, and movie results.</p>
<p>movie-list.ejs: A partial template file for displaying movie results when loading more results using pagination.</p>
<p>index.js: Main server file that handles routing, MongoDB connection, and middleware configuration.</p>
<p>sample.js: A file defining the movie schema and model for use with MongoDB.</p>

<h2>Main Template (index.ejs)</h2>
The main template file contains the basic structure of the webpage, including the header, navigation bar, search form, and movie results. It also includes a script for loading more movies using the Fetch API.

<h2>Movie List Partial (movie-list.ejs)</h2>
<p>The movie list partial file is a smaller template that is used for displaying movie results when loading more results with pagination. It contains the same movie information as the main template, but is specifically designed for appending new results to the existing movie list.</p>

<h2>Express Server (index.js)</h2>
<p>The express file is the main server file that sets up the middleware, connects to MongoDB, and handles routing for the application. The server listens for requests on the specified port and responds with the appropriate content.</p>

<h2>Movie Schema (sample.js)</h2>
<p>The movie schema file defines the structure of the movie documents in the MongoDB database. It includes fields for the movie's title, plot, genres, runtime, rating, release date, production countries, and year. The schema is used to create a Mongoose model for querying and modifying the movie data in the database.</p>

<h2>Enjoy using the movie search website!<h2>
