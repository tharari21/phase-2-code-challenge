import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [searchText, setSearchText] = useState("");
  const [planeteers, setPlaneteers] = useState([]);
  const [sortByAge, setSortByAge] = useState(false);
  useEffect(() => {
    const getPlaneteers = async () => {
      const req = await fetch("http://localhost:8003/planeteers");
      const res = await req.json();
      setPlaneteers(res);
    };
    getPlaneteers();
  }, []);
  const addPlaneteer = (newPlaneteer) => {
    setPlaneteers([...planeteers, newPlaneteer])
  }

  const filteredPlaneteers = planeteers.filter(
    (planeteer) =>
      planeteer.name.toLowerCase().includes(searchText.toLowerCase()) ||
      planeteer.bio.toLowerCase().includes(searchText.toLowerCase())
  );
  if (sortByAge) {
    filteredPlaneteers.sort((a, b) => b.born - a.born)
  } else {
    // Pretty sure by default is sorted by ID but added in case
    filteredPlaneteers.sort((a, b) => a.id - b.id);
  }

  
  return (
    <div>
      <Header />
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        setSortByAge={setSortByAge}
      />
      <RandomButton addPlaneteer={addPlaneteer} />
      <PlaneteersContainer planeteers={filteredPlaneteers} />
    </div>
  );
}

export default App;
