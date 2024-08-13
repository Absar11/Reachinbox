import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import OneBox from "./pages/OneBox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OneBox />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
