import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>e-Shop</h3>
          <p>
            Your one-step for all your needs. Shop with us and experience the
            best online shopping experiences.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Shop</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
        </div>
        <form>
          <input type="email" />
          <button>Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
