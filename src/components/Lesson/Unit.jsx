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
    <div className="grid grid-cols-2 gap-4">
      {
        Units.map((unit, index) => {
          return (
            <Link to={unit._id} key={index} className="border">
              <h1>{unit.title}</h1>
              <p>{unit.description}</p>
            </Link>
          )
        })
      }
    </div>
  );
};

export default Unit;
