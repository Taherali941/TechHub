import './FeaturedProducts.css';
// Import images from the assets folder
import headphonesImage from '../assets/product-arduino.jpg';
import watchImage from '../assets/product-camera.jpg';
import mouseImage from '../assets/product-esp32.jpg';
import speakerImage from '../assets/product-headphones-pro.jpg';

// Sample product data (can be replaced with props or API data)
const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: '$99.99',
    image: headphonesImage,
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: '$149.99',
    image: watchImage,
  },
  {
    id: 3,
    title: 'Gaming Mouse',
    price: '$49.99',
    image: mouseImage,
  },
  {
    id: 4,
    title: 'Bluetooth Speaker',
    price: '$79.99',
    image: speakerImage,
  },
  {
    id: 5,
    title: 'Smart Watch',
    price: '$149.99',
    image: watchImage,
  },
  // Add more products as needed
];

const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product-box" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">{product.price}</p>
            <button className='product-button'>add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
