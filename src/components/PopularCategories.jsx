import './PopularCategories.css';

// You can replace these with any icon components or images you like
const categories = [
  { id: 1, name: 'Hardware', icon: '🖥️' },
  { id: 2, name: 'Gaming', icon: '🎮' },
  { id: 3, name: 'IoT', icon: '📡' },
  { id: 4, name: 'Electronics', icon: '🔌' },
];

const PopularCategories = () => {
  return (
    <div className="popular-categories">
      {categories.map((category) => (
        <div key={category.id} className="category-box">
          <div className="category-icon">{category.icon}</div>
          <div className="category-text">{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default PopularCategories;
