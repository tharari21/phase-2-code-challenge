import React, { useState, useEffect } from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ searchText }) {
  const [planeteers, setPlaneteers] = useState([]);

  useEffect(() => {
    const getPlaneteers = async () => {
      const req = await fetch("http://localhost:8003/planeteers");
      const res = await req.json();
      setPlaneteers(res);
    };
    getPlaneteers();
  }, []);

  const filteredPlaneteers = planeteers.filter(
    (planeteer) =>
      planeteer.name.toLowerCase().includes(searchText.toLowerCase()) ||
      planeteer.bio.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ul className="cards">
      {/* render a list of <Planeteer> components in here */}
      {filteredPlaneteers.map((planeteer) => (
        <Planeteer key={planeteer.id} planeteer={planeteer} />
      ))}
    </ul>
  );
}

export default PlaneteersContainer;
