import React from "react";
import "./PopularCategories.css";

const PopularCategories = () => {
  const categories = [
    { icon: "⌚", title: "Electronics" },
    { icon: "💻", title: "computer" },
    { icon: "💡", title: "Iot" },
    { icon: "🎮", title: "Gaming" },
  ];

  return (
    <section className="categories-section">
      <h2 className="categories-heading">Popular Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <a key={index} href="#" className="category-card">
            <div className="category-content">
              <span className="category-icon">{category.icon}</span>
              <p className="category-title">{category.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
