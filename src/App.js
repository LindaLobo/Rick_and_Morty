import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})

  const url = "https://rickandmortyapi.com/api/character";
  // console.log(url)

  const fetchChararters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        setInfo(data.info)
      } )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchChararters(url);
  }, []);

  const onPrevious = () => {
    fetchChararters(info.prev)
  }

  const onNext = () => {
    fetchChararters(info.next)
  }

  return (
    <Fragment>
      <Navbar brand={"rick and morty"} />
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </Fragment>
  );
}

export default App;
