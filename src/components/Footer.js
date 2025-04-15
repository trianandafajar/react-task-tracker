import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 text-center text-sm text-gray-500 border-t pt-4">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      <Link to="/about" className="text-blue-500 hover:underline">
        About
      </Link>
    </footer>
  );
};

export default Footer;
