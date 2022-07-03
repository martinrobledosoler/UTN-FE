import { Nav } from "react-bootstrap";
const axios = require("axios").default;

function activateUser(email) {
  const token = "$2b$10$vyWUBnIw88o61c0GvXnaEeyjLjztHutiacsy6LFdvSqlQfL/GvJjW";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .put(
      "http://localhost:3100/user/mail",
      {
        email: email,
        url: "http://localhost:3000",
      },
      config
    )
    .then(function (response) {
      alert("Please check your Email, to activate your user");
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
