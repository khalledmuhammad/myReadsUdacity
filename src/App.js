import Search from "./components/header/search";
import "./App.css";
import React, { useState , useEffect } from "react";
import * as BooksAPI from "./BookApi";
import Profile from "./components/profile";
import ListSearches from "./components/header/ListSearches";
import { Route, Redirect } from "react-router-dom";

/*  const SearchTerms=[
  'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
]  */
function App() {
  const [data, setData] = useState([]);
  const [update, setupdate] = useState(true);

  useEffect(() => {
    return ()=>{
      setupdate(!update)
    }
  }, );
        const handlreset=()=>{
          setData([])
        }

  const handleSearch = (entered) => {
    for (let i = 0; i < entered.length; i++) {
      if (entered.length > 0) {
        BooksAPI.search(entered).then((res) => {
          if (res.error) {
            setData([]);
          } else {
            setData(res);
          }
          

        }
        );
      } else {
        setData([]);
      }
    }
  };
  
  const imageLink = "";

  return (
    <>
      <Route exact path="/profile">
        <Redirect to="/" />
      </Route>

      <Route exact path="/">
        <Profile />
      </Route>

      <Route path="/search">
        <Search Search={handleSearch}
        reset={handlreset}
        />
        <ul className="container">
          {data.map((data) => {
            return (
              <li key={data.id}>
                <ListSearches
                  id={data.id}
                  title={data.title}
                  imageLink={
                    data.imageLinks ? data.imageLinks.smallThumbnail : imageLink
                  }
                  categories={data.categories}
                  infoLink={data.infoLink}
                  author={data.authors ? data.authors : "no Author"}
                  shelf={data.shelf}
                />
              </li>
            );
          })}
        </ul>
      </Route>
    </>
  );
}

export default App;
