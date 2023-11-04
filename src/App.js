import logo from "./logo.svg";
import "./App.css";
import TableComponent from "./table";
import Timer from "./timer";
import HookComponent from "./hook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hook" element={<HookComponent />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
