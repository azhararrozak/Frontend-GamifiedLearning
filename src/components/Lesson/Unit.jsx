import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UnitService from "../../services/unit.service";

const Unit = () => {
  const [Units, setUnits] = useState([]);

  useEffect(() => {
    UnitService.getUnits().then((response) => {
      setUnits(response.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
      {Units.map((unit, index) => {
        return (
          <Link to={unit._id} key={index} className="bg-accent text-primary p-4 rounded-md">
            <h1 className="font-bold mb-3">{unit.title}</h1>
            <p className="opacity-2">{unit.description}</p>
            <p className="my-2 font-bold italic">
              {unit.lessons.length === 0
                ? "Belum Ada Materi"
                : `${unit.lessons.length} Materi`}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Unit;
