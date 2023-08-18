import "./App.css";
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewUser from "./components/ViewUser";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} exact />
          <Route path="/add" element={<AddUser />} exact />
          <Route path="/edit/:id?" element={<EditUser />} exact />
          <Route path="/user/:id?" element={<ViewUser />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
