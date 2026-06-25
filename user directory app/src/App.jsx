import Header from "./components/Header";
import UserList from "./components/UserList";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <UserList />
          </>
        }
      />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}
export default App;
