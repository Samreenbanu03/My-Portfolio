import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="nav-container">

        <NavLink
          to="/"
          className="logo"
        >
          <span className="logo-symbol">
            &lt;/&gt;
          </span>

          <span>
            Samreen<span className="logo-accent">.dev</span>
          </span>
        </NavLink>


        <nav className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </NavLink>


          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </NavLink>


          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Skills
          </NavLink>


          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Experience
          </NavLink>


          <NavLink
            to="/projects"
            className="nav-link"
          >
            Projects
          </NavLink>

          <NavLink
            to="/automation"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Automation
          </NavLink>

          <NavLink
            to="/cicd"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            CI/CD
          </NavLink>

          <NavLink
            to="/cloud"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Cloud
          </NavLink>

          <NavLink
            to="/certifications"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Certifications
          </NavLink>

          <NavLink
            to="/contact"
            className="nav-link"
          >
            Contact
          </NavLink>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;