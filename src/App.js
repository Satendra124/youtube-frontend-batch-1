import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoComponent from "./components/VideoComponent";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/video" element={<VideoComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
