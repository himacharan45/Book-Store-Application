import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; 

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="heroSection">
        <h1>Welcome to Our Online Book Store</h1>
        <p>Discover a world of knowledge with our vast collection of books.</p>
        <Link to="/books" className="exploreButton">
          Explore Books
        </Link>
      </div>
    </div>
  );
};

export default Home;
