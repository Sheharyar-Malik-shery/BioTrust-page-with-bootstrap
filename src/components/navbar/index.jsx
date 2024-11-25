import React from "react";
import logo from "../../assets/logo.png";
import "../../app.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-center navbar-expand-lg bg-body-tertiary ps-3 pe-4">
        <div className="container-fluid d-flex justify-content-between ">
          <div className="navbar-brand" t0="#">
            <img
              src={logo}
              alt="logo error"
              style={{ height: "50px", width: "120px" }}
            />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
              style={{
                color: "grey",
                fontWeight: "bold",
              }}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <button
              class="navbar-toggler custom-menubtn-color"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
                border: "none",
                color: "white",
              }}
            >
              <span
                class="navbar-toggler-icon custom-menubtn-color"
                style={{
                  border: "none",
                  outline: "none",
                }}
              ></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ width: "50%" }}
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    backgroundColor: "rgb(13,79,154)",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  SHOP
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item " to="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link navbar-items-color"
                  aria-current="page"
                  to="#"
                >
                  QUALITY
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link navbar-items-color"
                  aria-current="page"
                  to="#"
                >
                  MISSION
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link navbar-items-color"
                  aria-current="page"
                  to="#"
                  // style={{ color: " rgb(13,79,154)" }}
                >
                  REFER A FRIEND
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link navbar-items-color"
                  aria-current="page"
                  to="#"
                >
                  #BIOTRUST
                </a>
              </li>
            </ul>
          </div>

          <div className="d-none d-lg-flex">
            <form
              className="d-flex border border-secondary-subtle rounded bg-white"
              role="search"
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ outline: "none", border: "none" }}
              />
              <button className="btn btn-outline-none" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
