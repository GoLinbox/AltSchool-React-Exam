import { NavLink } from "react-router-dom";

function Navigation() {
  const menuIcon = (event) => {
    event.preventDefault();
    var x = document.getElementById("navBar");
    if (x.style.width === "60%") {
      x.style.width = "0%";
    } else {
      x.style.width = "60%"
    }
  };
  return (
    <section className="main-container">
      <div className="nav-bar">
        <section className="logo">
          <img className="logo-img" src={"/Logo/GoLinbox-1.png"} alt="Logo" />
        </section>
        <section className="nav" id="navBar">
          <section className="nav-wrap">
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#03c7f8" } : { color: "#b9f2fc" }
              }
              className="navigate"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#99317c" } : { color: "#b9f2fc" }
              }
              className="navigate"
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#99317c" } : { color: "#b9f2fc" }
              }
              className="navigate"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#99317c" } : { color: "#b9f2fc" }
              }
              className="navigate"
              to="/error-test"
            >
              Test
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#99317c" } : { color: "#b9f2fc" }
              }
              className="navigate"
              to="/users"
            >
              Users
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "#b9f2fc" } : { color: "#b9f2fc" }
              }
              className="contact"
              to="/contact"
            >
              Contact
            </NavLink>
            <section className="contact-details">
              <a href="mailto:jrmholawale@gmail.com">
                <i class="fa fa-envelope" aria-hidden="true" title="Email Us" alt="Email"></i>
              </a>
              <a href="tel:09033644307">
                <i class="fa fa-phone-square" aria-hidden="true" title="Phone" alt="Tel"></i>
              </a>
            </section>
          </section>
        </section>
        <section className="menu">
          <a href="javascripts:void(0)" onClick={menuIcon}>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </section>
      </div>
    </section>
  );
}

export default Navigation;
