import { Link } from "react-router-dom";

const CpatpContent = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Capaian Pembelajaran</h1>
      <Link to="/dashboard/course/lesson/">
        <button className="border p-2 bg-blue-400">Next</button>
      </Link>
    </div>
  );
};

export default CpatpContent;
