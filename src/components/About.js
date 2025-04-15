import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-lg shadow text-center">
      <h4 className="text-xl font-bold text-gray-700 mb-4">Version 1.0.0</h4>
      <Link
        to="/"
        className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Go Back
      </Link>
    </div>
  );
};

export default About;
