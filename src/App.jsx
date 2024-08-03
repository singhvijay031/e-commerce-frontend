import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
