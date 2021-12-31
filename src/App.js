import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
