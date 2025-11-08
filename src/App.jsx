import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout/Layout.jsx"
import { Home } from "./pages/Home/Home.jsx"
import { FilmDetails } from "./pages/FilmDetails/FilmDetails.jsx"
import { Movie } from "./pages/Movie/Movie.jsx"
import { Favourite } from "./pages/Favourite/Favourite.jsx"
import { Cast } from "./pages/Cast/Cast.jsx"
import { Review } from "./pages/Review/Review.jsx"
import { Trailer } from "./pages/Trailer/Trailer.jsx"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/FilmDetails" element={<FilmDetails />}>
            <Route path="Cast" element={<Cast />}/>
            <Route path="Review" element={<Review />}/>
            <Route path="Trailer" element={<Trailer />}/>
          </Route>
          <Route path="/Movie" element={<Movie />}/>
          <Route path="/Favourite" element={<Favourite />}/>
        </Route>
      </Routes>
  )
}

export default App
