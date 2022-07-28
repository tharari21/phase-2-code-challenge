import React, {useState} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <Header />
      <SearchBar searchText={searchText} onChange={handleChange} />
      <RandomButton />
      <PlaneteersContainer searchText={searchText} />
    </div>
  );
}

export default App;
