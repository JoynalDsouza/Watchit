import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route,Navigate } from "react-router-dom";
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
        <Route path="*" element={<Navigate replace to="/" /> } />
      </Routes>
    </>
  );
}

export default App;
