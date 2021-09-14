import React, { useState , useEffect  } from "react";
import { Link } from "react-router-dom";

function Search(props) {
  const [input, setInput] = useState("");

  const handleinput = (e) => {
    setInput(e.target.value);
  
   };
useEffect(()=>{
  if (input.trim().length !== 0) {
    props.Search(input);
}  else if(input.trim().length===0){
 props.reset()
 setInput("")
}
} , [input])
 
   

  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.Search(input);
    setInput("");
  };
  return (
    <div style={{ display: "flex" }}>
      <Link style={{ textDecoration: "none" }} to="/">
        <span>&#8592;</span>
      </Link>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <input
          style={{ width: "90%", position: "absolute", top: "0" }}
          value={input}
          onChange={handleinput}
          type="text"
        />
        <button style={{ right: "50px", position: "absolute", top: "0" }}>
          search
        </button>
      </form>
    </div>
  );
}

export default Search;
