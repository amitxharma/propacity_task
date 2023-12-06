import React, { useContext, useEffect, useState } from "react";
import Header from "../common/Header";
import Nav from "../common/Nav";
import Top from "../common/Top";
import Grid from "../common/Grid";
import List from "../common/List";
import axios from "axios";
import DetailsContex from "../../contex/DetailsContex";
import Loader from "../common/Loader";

const Species = () => {
  // species page
  const [grid, setgrid] = useState(true);
  const [species, setSpecies] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const { search, setSearch, menu, setMenu } = useContext(DetailsContex);
  const list = ["Name", "Designation", "Language", ""];
  // fetching the species data
  useEffect(() => {
    setIsLoader(true);
    setSearch("");
    axios
      .get("https://swapi.dev/api/species")
      .then((res) => {
        setSpecies(res.data.results);
        setFilter(res.data.results);
        setIsLoader(false);
      })
      .catch(() => console.log("error"));
  }, [setSearch]);
  // filter the data as soon as the user search something
  useEffect(() => {
    if (search) {
      const filter = species.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filter);
    } else {
      //if the search bar empty it put the whole species data
      setFilter(species);
    }
  }, [search, species]);
  return (
    <div>
      <Header />
      <div>
        <div className="full-container">
          <div className="first">
            <Nav specie={species} />
          </div>
          {menu && <Nav setMenu={setMenu} specie={species} />}
          {isLoader ? (
            <Loader />
          ) : (
            <div className="second">
              <div className="container">
                <Top grid={grid} setgrid={setgrid} title="Species" />
                {grid ? (
                  <div className="grid-contain">
                    {filter.map((specie, index) => (
                      <Grid specie={specie} index={index + 1} />
                    ))}
                  </div>
                ) : (
                  <table>
                    <tr className="table-header">
                      {list.map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                    {filter.map((specie, index) => (
                      <List specie={specie} index={index + 1} />
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

export default Species;
