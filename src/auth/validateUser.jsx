import { Nav } from "react-bootstrap";
import { Home } from "../app/home";
const axios = require("axios").default;

function activateUser() {
  const email = document.getElementById("email").value;
  const token = "$2b$10$vyWUBnIw88o61c0GvXnaEeyjLjztHutiacsy6LFdvSqlQfL/GvJjW";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .post(
      "http://localhost:3100/user/activateuser",
      {
        email: email,
      },
      config
    )
    .then(function (response) {
      window.location.href = "http://localhost:3000/login";
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function ValidateUser() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#1C2842" }}>
      <div className="container d-flex justify-content-center align-items-center h-100 ">
        <div className="card w-20 ">
          <div className="card-body shadow-lg ">
            <h5 className="card-title d-flex justify-content-center align-items-center">
              ACTIVATE USER
            </h5>

            <div className="form-outline mb-4">
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                placeholder="Email"
              />
            </div>

            <Nav.Link>
              <button className="btn btn-success " onClick={activateUser}>
                ACTIVATE
              </button>
            </Nav.Link>
          </div>
        </div>
      </div>
    </section>
  );
}
