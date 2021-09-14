import React, { useState } from "react";
import Card from "./UI/Card";
import classes from "./header/ListSearches.module.css";
import * as BooksAPI from "../BookApi";

function CurrentlyReading(props) {
  const [shelf, setShelf] = useState("");

  const [currentShelf, setCurrentShelf] = useState("");

   
    const update = () => {
      BooksAPI.update({ book: currentShelf, shelf: shelf });
    };
    if(shelf!== ""){
      update();

    }


  return (
    <Card>
      <div>
        <h1 style={{ textAlign: "center" }}>currently read</h1>
        <div style={{ display: "flex" }}>
          {props.data
            .filter((currentdata) => {
              return currentdata.shelf === "currentlyReading";
            })
            .map((thisdata) => {
              return (
                <li style={{ listStyle: "none" }} key={thisdata.id}>
                  <div
                    style={{
                      backgroundImage: `url(${thisdata.imageLinks.smallThumbnail})` ?  `url(${thisdata.imageLinks.smallThumbnail})` : "./movie.jpg",
                    }}
                    className={classes.wrapper}
                  >
                    <h3>
                      <span>{thisdata.title}</span>
                    </h3>
                    <p>{thisdata.categories}</p>
                    
                    <p>{thisdata.authors}</p>


                    <a href={thisdata.infoLink}> view </a>
                    <select
                      onChange={(e) => {
                        setShelf(e.target.value);
                        setCurrentShelf(thisdata);
                      }}
                      defaultValue="currentlyReading"
                    >
                      <option disabled={true}>select</option>
                      <option value="none">none</option>
                      <option value="currentlyReading">currentlyReading</option>
                      <option value="wantToRead">wantToRead</option>
                      <option value="read">read</option>
                    </select>
                  </div>
                </li>
              );
            })}
        </div>
      </div>
    </Card>
  );
}

export default CurrentlyReading;
