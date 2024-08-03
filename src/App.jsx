import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
