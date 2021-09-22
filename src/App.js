import './App.css';
import { useState } from "react";

var font = "Poppins"

const bookDB = {
  SelfHelp: [
    { name: "Soft Skills by John Sonmez", rating: "Rating : 5/5" },
    { name: "The power of habbit", rating: "Rating : 3/5" },
    { name: "Atomic Habits", rating: "Rating : 3.5/5" },
    { name: "Your brain on porn", rating: "Rating : 4/5" }
  ],

  Finance: [
    {
      name: "Rich Dad Poor Dad",
      rating: "Rating : 5/5"
    },
    {
      name: "Think and Grow Rich",
      rating: "Rating : 5/5"
    },
    {
      name: "The monk who sold his farari",
      rating: "Rating : 4/5"
    },
    {
      name: "Psycology of money",
      rating: "Rating : 5/5"
    }
  ],
  Fiction: [
    {
      name: "Marvel",
      rating: "Rating : 5/5"
    },
    {
      name: "Agatha Cristy",
      rating: "Rating : 3/5"
    },
    {
      name: "Game of Thrones",
      rating: "Rating : 5/5"
    },
    {
      name: "The Flash",
      rating: "Rating : 4/5"
    }
  ],
  Manga: [
    {
      name: "Naruto",
      rating: "Rating : 5/5"
    },
    {
      name: "Boruto - Naruto next generations",
      rating: "Rating : 5/5"
    },
    {
      name: "Pokemon",
      rating: "Rating : 5/5"
    },
    {
      name: "Death Note",
      rating: "Rating : 5/5"
    }
  ]
};

function App() {
  const [selectedGenre, setGenre] = useState("Manga");
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
          <button key ={genre} onClick={() => genreClickHandler(genre)}
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
