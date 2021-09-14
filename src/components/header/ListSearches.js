import React, { useState , useEffect  } from "react";
import classes from "./ListSearches.module.css";
 import * as BooksAPI from "../../BookApi";
 
function ListSearches(props) {
  const bookId = props.id;
  const [update , setUpdate] =useState(true)



  const [current, setCurrent] = useState([]); 
  BooksAPI.get(bookId).then((res) => setCurrent(res));
  

  const handleSelect=(e) => {
   
    console.log(e.target.value, current);
    if (current.shelf !== e.target.value) {
      BooksAPI.update({ book: current, shelf: e.target.value });
    }
  }
 useEffect(()=>{
   return()=>{
     setUpdate(!update)
   }
 } , [current.shelf])


  const imageLink = props.imageLink;
  return (
    <div
      style={{ backgroundImage: `url(${imageLink})` }}
      className={classes.wrapper} >
      <h3>
        <span>{props.title}</span>
      </h3>
      <p>{props.categories}</p>
      <p>{props.author}</p>

      <a href={props.infoLink}> view </a>
      <select value={current.shelf} onChange={handleSelect}>
        <option  disabled={true}>
          select
        </option>
        <option value="none">none</option>
        <option value="currentlyReading">currentlyReading</option>
        <option value="wantToRead">wantToRead</option>
        <option value="read">read</option>
      </select>
    </div>
  );
}

export default ListSearches;
