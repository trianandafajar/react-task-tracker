import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center bg-indigo-600 text-white px-4 py-4 rounded-md shadow">
      <h1 className="text-xl font-bold">{title}</h1>
      {location.pathname === "/" && (
        <Button
          onClick={onAdd}
          color={showAdd ? "#dc2626" : "#16a34a"} // red / green
          text={showAdd ? "Close" : "Add"}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
