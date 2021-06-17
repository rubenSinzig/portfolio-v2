import logo from "../images/logo-portfolio.png";

const Nav = () => {
  return (
    <div className="menu-wrapper">
      {/* Logo */}
      <div className="logo-wrapper">
        {/* Add link to Home */}
        <a href="#">
          <img className="logo" src={logo} alt="Logo"></img>
        </a>
      </div>

      {/* burger menu */}
      {/* <div className="burger-menu-wrapper"></div> */}

      {/* Nav */}
      <nav className="nav-wrapper">
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Projects</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
