import { Categories } from "../assets/mockData";
import Hero from "../assets/images/hero-img.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>SHOP BY CATEGORIES</div>
            <ul>
              {Categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={Hero} alt="" />
            <div>
              <p>Vijay | Fancy Store</p>
              <h2>Welcome to e-Shop </h2>
              <p>MILLIONS + PRODUCTS</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
