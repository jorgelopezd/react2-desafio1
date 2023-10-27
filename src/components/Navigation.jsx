import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger p-3" variant="dark">
      <Link to="/" className="text-white ms-3 text-decoration-none">
        🏠 Home
      </Link>
      <Link to="/Contact" className="text-white ms-3 text-decoration-none">
        📒 Contacto
      </Link>
      <Navbar.Brand className="ms-auto">Happy Cake 🍰</Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
