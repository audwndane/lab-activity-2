import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MovieList from "./MovieList";
import Row from "./Row";
import "./App.css";

const App = () => {
  const trendingNow = [
    { id: 1, title: "Movie 1", image: "./movie1.jpg" },
    { id: 2, title: "Movie 2", image: "./movie2.jpg" },
    { id: 3, title: "Movie 3", image: "./movie3.jpg" },
    { id: 4, title: "Movie 4", image: "./movie4.jpg" },
    { id: 1, title: "Movie 1", image: "./movie1.jpg" },
    { id: 2, title: "Movie 2", image: "./movie2.jpg" },
    { id: 3, title: "Movie 3", image: "./movie3.jpg" },
    { id: 4, title: "Movie 4", image: "./movie4.jpg" },
  ];

  const becauseYouWatched = [
    { id: 5, title: "Movie 5", image: "/movie5.jpg" },
    { id: 6, title: "Movie 6", image: "/movie6.jpg" },
    { id: 7, title: "Movie 7", image: "/movie7.jpg" },
    { id: 8, title: "Movie 8", image: "/movie8.jpg" },
    { id: 5, title: "Movie 5", image: "/movie5.jpg" },
    { id: 6, title: "Movie 6", image: "/movie6.jpg" },
    { id: 7, title: "Movie 7", image: "/movie7.jpg" },
    { id: 8, title: "Movie 8", image: "/movie8.jpg" },
  ];

  const continueWatching = [
    { id: 9, title: "Movie 9", image: "/movie9.jpg" },
    { id: 10, title: "Movie 10", image: "/movie10.jpg" },
    { id: 11, title: "Movie 11", image: "/movie11.jpg" },
    { id: 22, title: "Movie 22", image: "/movie12.jpg" },
    { id: 9, title: "Movie 9", image: "/movie9.jpg" },
    { id: 10, title: "Movie 10", image: "/movie10.jpg" },
    { id: 11, title: "Movie 11", image: "/movie11.jpg" },
    { id: 22, title: "Movie 22", image: "/movie12.jpg" },
  ];

  return (
    <div className="App">
      <Navbar />
      <Row title="Trending Now" movies={trendingNow} />
      <Row title="Because you watched" movies={becauseYouWatched} />
      <Row title="Continue watching for Josh Dane" movies={continueWatching} />
      <Footer />
    </div>
  );
};

export default App;
