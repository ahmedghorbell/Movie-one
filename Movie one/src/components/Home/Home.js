import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to MOVIE ONE!</h1>
      </header>
      <main className="main">
        <section className="hero">
          <h2 className="hero-title">Watch Amazing Movies</h2>
          <p className="hero-description">
            The movies can be filtered by names, stars, and descriptions.
          </p>
          <Link to="/movies">
            <button className="hero-button"> Get Started</button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
