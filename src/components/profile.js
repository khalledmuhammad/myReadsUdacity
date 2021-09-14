import React, { useState, useEffect } from "react";
import CurrentlyReading from "./CurrentlyReading";
import Read from "./read";
import WantToRead from "./WantToRead";
import Heading from "./header/Heading";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BookApi";


function Profile() {
  const [data, setData] = useState([]);
  const [update, setupdate] = useState(0);

  useEffect(() => {
    BooksAPI.getAll().then((data) => setData(data));
    return ()=>{
      setupdate(!update)
    }
  }, );
        



  return (
    <>
      <header>
        <Heading />
      </header>
      <main style={{ marginTop: "10rem", position: "relative" }}>
        <Link style={{ zIndex: "100" }} className="add" to="/search">
          <span style={{ borderRadius: "25%" , position:'fixed', backgroundColor:"red"}}>
            <img
              alt="addBook"
              className="add-icon"
              src="https://img.icons8.com/ios-glyphs/70/000000/plus.png"
            />
          </span>
        </Link>
        <CurrentlyReading data={data} />
        <Read   data={data} />
        <WantToRead  data={data} />
      </main>
    </>
  );
}

export default Profile;
