import React from "react";
import "../../App.css";
import "../../responsive.app.css";
const Navbarone = () => {
  return (
    <>
      {/* Left Side */}
      <div className="d-flex justify-content-between align-items-center header-bg-color pt-2 pb-2 ps-4 pe-4">
        <div className="d-none d-lg-flex align-items-center">
          <p className="bg-primary m-0">Logo</p>
          <p className="m-0 col-9 ms-2 header-heading ">
            EVERY ORDER CAN HELP END CHILDHOOD HUNGER
          </p>
        </div>

        {/* Right Side */}

        <div className="d-flex col-12 col-lg-5 justify-content-between header-right-items ">
          <div className="m-0">
            <p className="m-0 ">
              <a
                className="nav-link d-none custom-dropdown-toggle CUSTOMER-SUPPORT-no-dropdown"
                to="#"
                role="button"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3vw"
                  height="3vh"
                  fill="currentColor"
                  class="bi bi-chat-left-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                CUSTOMER SUPPORT
              </a>
              <ul className="list-unstyled m-0 CUSTOMER-SUPPORT-styling">
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-toggle custom-dropdown-toggle "
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3vw"
                      height="3vh"
                      fill="currentColor"
                      class="bi bi-chat-left-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    CUSTOMER SUPPORT
                  </a>
                  <ul className="dropdown-menu d-none CUSTOMER-SUPPORT-dropdown">
                    <li>
                      <a className="dropdown-item" to="#">
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
              </ul>
            </p>
          </div>

          <div className=" d-flex nav-bar-one-sm">
            <p className="m-0  align-items-center">
              <a
                className="nav-link d-none custom-dropdown-toggle "
                to="#"
                role="button"
                // data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3vw"
                  height="3vh"
                  fill="currentColor"
                  class="bi bi-person-fill "
                  viewBox="0 0 16 16"
                  // style={{ marginRight: "5px" }}
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                MY Account
              </a>
              <ul className="list-unstyled m-0 my-account-lg">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle custom-dropdown-toggle "
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3vw"
                      height="3vh"
                      fill="currentColor"
                      class="bi bi-person-fill "
                      viewBox="0 0 16 16"
                      // style={{ marginRight: "5px" }}
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    MY Account
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" to="#">
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
              </ul>
            </p>

            <p className="m-0 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3vw"
                height="3vh"
                fill="currentColor"
                class="bi bi-minecart"
                viewBox="0 0 16 16"
                style={{ marginRight: "3px" }}
              >
                <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4M.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7z" />
              </svg>
              <span className="header-righ-my-cart">MY CART </span>(0)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbarone;
