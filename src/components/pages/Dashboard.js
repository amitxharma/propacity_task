import React, { useContext } from "react";
import Header from "../common/Header";
import Nav from "../common/Nav";
import prof from "../../images/main.jpg";
import "../style/dashboard.css";
import DetailsContex from "../../contex/DetailsContex";

// Dashboard page
const Dashboard = () => {
  const { setMenu, menu } = useContext(DetailsContex);

  return (
    <div>
      <Header dash={true} />
      <div className="full-container">
        <div className="first">
          <Nav />
        </div>
        {menu && <Nav setMenu={setMenu} />}
        <div className="second">
          <div className="dashboard">
            <div className="dash">
              <img src={prof} alt="star" />
              <h1>Welcome to Star Wars Dashboard</h1>
              <p>
                Star Wars is an American epic space opera multimedia franchise
                created by George Lucas, which began with the eponymous 1977
                film and quickly became a worldwide pop culture phenomenon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
