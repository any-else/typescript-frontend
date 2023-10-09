import "./App.css";
import { Routes, Route } from "react-router-dom";
import ManageUser from "./pages/admin/ManageUser/ManageUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ManageUser />} />
    </Routes>
  );
}

export default App;
