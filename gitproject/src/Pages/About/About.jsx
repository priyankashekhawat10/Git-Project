import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>About Nykaa</h1>
          <p>
            Nykaa is India’s leading beauty and fashion destination.
            We provide premium products, trusted brands, and an amazing
            shopping experience for millions of customers.
          </p>

          <button>Explore More</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt=""
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make beauty and fashion accessible to everyone.
          We combine innovation, technology, and trust to deliver the best
          shopping experience.
        </p>
      </section>

      {/* Stats Section */}
      <section className="stats">

        <div className="card">
          <h1>40M+</h1>
          <p>Happy Customers</p>
        </div>

        <div className="card">
          <h1>5000+</h1>
          <p>Brands</p>
        </div>

        <div className="card">
          <h1>1200+</h1>
          <p>Stores</p>
        </div>

        <div className="card">
          <h1>10+</h1>
          <p>Years Experience</p>
        </div>

      </section>

      {/* Team Section */}
      <section className="team">

        <h2>Our Team</h2>

        <div className="team-container">

          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt=""
            />
            <h3>Falguni Nayar</h3>
            <p>Founder & CEO</p>
          </div>

          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt=""
            />
            <h3>Marketing Team</h3>
            <p>Creative Experts</p>
          </div>

          <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt=""
            />
            <h3>Support Team</h3>
            <p>Customer Happiness</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;