import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import Films from "./components/pages/Films";
import Vehicles from "./components/pages/Vehicles";
import Starships from "./components/pages/Starships";
import Species from "./components/pages/Species";
import Planets from "./components/pages/Planets";
import People from "./components/pages/People";
import { useContext } from "react";
import DetailsContex from "./contex/DetailsContex";
import Details from "./components/common/Details";
import DeleteModal from "./components/common/DeleteModal";
// import Nav from "./components/common/Nav";

function App() {
  const { asideDisplay, setAsideDisplay, modal } = useContext(DetailsContex);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/films" element={<Films />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/species" element={<Species />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/people" element={<People />} />
      </Routes>
      {asideDisplay && <Details setAsideDisplay={setAsideDisplay} />}
      {modal && <DeleteModal />}
    </div>
  );
}

export default App;
