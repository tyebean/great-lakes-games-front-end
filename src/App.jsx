import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
// * Nav and Footer
import NavBarTyes from "./components/NavBar/NavBarTyes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// * template component imports
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profiles from "./pages/Profiles/Profiles";
import Landing from "./pages/Landing/Landing";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
// * our component imports
import GameDetails from "./components/GameDetails/GameDetails";
import GameList from "./pages/GameList/GameList";
// * service imports
import * as authService from "./services/authService";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  return (
    <div className="App">
      <NavBarTyes user={user} handleLogout={handleLogout} />
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
        path="/" 
        element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route 
        path="/games" 
        element={<GameList />} />
        <Route 
        path="/details" 
        element={<GameDetails />} />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route 
        path="/" 
        element={<GameList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
