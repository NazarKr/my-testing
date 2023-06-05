import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UsersList } from "./components/UserList/UserList";
import Home from "./pages/HomePage/Home";
import { useEffect } from "react";
// import { selectOperetion } from "./redux/selectors";
import { useDispatch } from "react-redux";
// import Loader from "./components/Loader/Loader";
import { fetchAllUsers } from "./redux/operetions";
import Layout from "./components/Layout/layout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem("persist:root"));

    if (userFromStorage === null) {
      dispatch(fetchAllUsers());
    }
  }, [dispatch]);
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <Loader /> */}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/followers" element={<UsersList />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
