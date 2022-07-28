import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({ addPlaneteer }) {
  async function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    console.log("For the advanced deliverables", randomPlaneteer);
    const req = await fetch("http://localhost:8003/planeteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(randomPlaneteer),
    });
    const newPlaneteer = await req.json();
    addPlaneteer(newPlaneteer);
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
