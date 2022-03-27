import { Link } from "react-router-dom";

const NavBarTyes = ({ user, handleLogout }) => {
  return (
    <>
    {user ?
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        {/* we can put an image favicon here that links to home? */}
        {/* <a className="navbar-brand" href="#">Navbar</a> */} 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/games">Games</Link>
      </li>
      <li className="nav-item active">
      <Link className="nav-link" to="/profiles">Profiles</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/changePassword">Change Password</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="" onClick={handleLogout}>LOG OUT</Link>
      </li>
    </ul>
  </div>
</nav>

:

<nav className="navbar navbar-expand-lg navbar-light bg-light">
{/* we can put an image favicon here that links to home? */}
{/* <a className="navbar-brand" href="#">Navbar</a> */} 
<button className="navbar-toggler" type="button" data-toggle="collapse"        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
