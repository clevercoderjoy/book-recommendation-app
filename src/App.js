import './App.css';
import { useState } from "react";

var font = "Poppins"

const bookDB = {
  SelfHelp: [
    { name: "7 Habits of Highly Effective people", rating: "Rating : 5/5" },
    { name: "How to win friends and influence people", rating: "Rating : 4/5" },
    { name: "Who moved my cheese?", rating: "Rating : 3.5/5" },
    { name: "Atomic Habits", rating: "Rating : 4/5" }
  ],

  finance: [
    {
      name: "Almanac of Naval Ravikant",
      rating: "Rating : 5/5"
    },
    {
      name: "Psycology of money",
      rating: "Rating : 5/5"
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "Rating : 4/5"
    },
    {
      name: "Think and Grow Rich",
      rating: "Rating : 4/5"
    }
  ],
  fiction: [
    {
      name: "Harry Potter Series",
      rating: "Rating : 4.5/5"
    },
    {
      name: "The DaVinci Code",
      rating: "Rating : 5/5"
    },
    {
      name: "Lord of the Rings",
      rating: "Rating : 3/5"
    },
    {
      name: "Feluda and Professor Shonku",
      rating: "Rating : 4/5"
    }
  ]
};

function App() {
  const [selectedGenre, setGenre] = useState("fiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App" style={{fontFamily: {font}}}>
      <h1>Book Recommender </h1>
      <p style={{ fontFamily: {font}, margin: "1rem auto",  textAlign: "center", fontWeight: "bold" }}>
        {" "}
        Books in the library{" "}
      </p>

      <div style={{textAlign: "center",}}>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.3rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 3rem"
            }}>
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                fontFamily: {font},
                textAlign: "center",
                padding: "1rem",
                width: "70%",
                margin: "auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
