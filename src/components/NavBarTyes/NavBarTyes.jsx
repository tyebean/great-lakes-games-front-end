import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const NavBarTyes = ({ user, handleLogout }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {user ?
        <nav className="navbar navbar-expand-lg bg-light">
          <Link className="navbar-brand" to="/" onClick={() => setExpanded(expanded ? false : "expanded")}>
            <img 
            src="/assets/mystery_block.png" 
            width="30" 
            height="30"
            className="d-inline-block align-top" 
            alt="a question block icon from mario">
            </img>
            Welcome, {user.name}
        </Link>
          <button
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/games" onClick={() => setExpanded(expanded ? false : "expanded")}>Games</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/profiles" onClick={() => setExpanded(expanded ? false : "expanded")}>Profiles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/changePassword" onClick={() => setExpanded(expanded ? false : "expanded")}>Change Password</Link>
          </li>
          {/* <li className="nav-item">
            <Link 
            className="nav-link"
            to="" onClick={handleLogout} >LOG OUT</Link>
          </li> */}
        </ul>
        </div>
        </nav>
      :
        <nav className="navbar navbar-expand-lg navbnavbar-dark bg-dark">
          <button
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="navbar-toggler" 
          type="button" data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/games">Games</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Log In</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
        }
    </>
  )
}

export default NavBarTyes
