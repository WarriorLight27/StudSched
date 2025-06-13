import React from "react";
import "./Home.css"; // Create this CSS file for custom styling

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to <span>StudSched</span> 📚</h1>
        <p>Your personal study planner—simplified, smart, and stylish.</p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose StudSched?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🧠 Smart Planner</h3>
            <p>Organize your study sessions efficiently with intelligent planning tools.</p>
          </div>
          <div className="feature-card">
            <h3>⏰ Reminders</h3>
            <p>Get timely notifications so you never miss a study session.</p>
          </div>
          <div className="feature-card">
            <h3>📈 Progress Tracker</h3>
            <p>Stay on top of your goals with visual performance tracking.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;