import React, { useContext, useEffect, useState } from "react";
import Header from "../common/Header";
import Nav from "../common/Nav";
import Top from "../common/Top";
import Grid from "../common/Grid";
import List from "../common/List";
import axios from "axios";
import DetailsContex from "../../contex/DetailsContex";
import Loader from "../common/Loader";

const Planets = () => {
  // Planets page
  const [grid, setgrid] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const { search, setSearch, menu, setMenu } = useContext(DetailsContex);
  const list = ["Name", "Diameter", "Terrain", ""];
  // fetching the Planets data
  useEffect(() => {
    setIsLoader(true);
    setSearch("");
    axios
      .get("https://swapi.dev/api/planets")
      .then((res) => {
        setPlanets(res.data.results);
        setFilter(res.data.results);
        setIsLoader(false);
      })
      .catch(() => console.log("error"));
  }, [setSearch]);

  // filter the data as soon as the user search something

  useEffect(() => {
    if (search) {
      const filter = planets.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filter);
    } else {
      //if the search bar empty it put the whole Planets data

      setFilter(planets);
    }
  }, [search, planets]);
  return (
    <div>
      <Header />
      <div>
        <div className="full-container">
          <div className="first">
            <Nav planet={planets} />
          </div>
          {menu && <Nav setMenu={setMenu} planet={planets} />}
          {isLoader ? (
            <Loader />
          ) : (
            <div className="second">
              <div className="container">
                <Top grid={grid} setgrid={setgrid} title="Planets" />
                {grid ? (
                  <div className="grid-contain">
                    {filter.map((planet, index) => (
                      <Grid planet={planet} index={index + 1} />
                    ))}
                  </div>
                ) : (
                  <table>
                    <tr className="table-header">
                      {list.map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                    {filter.map((planet, index) => (
                      <List planet={planet} index={index + 1} />
                    ))}
                  </table>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Planets;
