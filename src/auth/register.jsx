import { Nav } from "react-bootstrap";
import { ValidateUser } from "./validateUser";
const axios = require("axios").default;

function vereficationMail(email) {
  const token = "$2b$10$vyWUBnIw88o61c0GvXnaEeyjLjztHutiacsy6LFdvSqlQfL/GvJjW";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .post(
      "http://localhost:3100/user/mail",
      {
        email: email,
        url: "http://localhost:3000/validateUser",
      },
      config
    )
    .then(function (response) {
      alert("Please check your Email, to reset validate your user");
    })
    .catch(function (error) {
      console.log(error);
    });
}

function submit() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const token = "$2b$10$vyWUBnIw88o61c0GvXnaEeyjLjztHutiacsy6LFdvSqlQfL/GvJjW";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .post(
      "http://localhost:3100/user",
      {
        name: username,
        email: email,
        password: password,
      },
      config
    )
    .then(function (response) {
      vereficationMail(email);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function Register() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#1C2842" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-lg rounded-4 "
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5 ">Register</h3>

                <section className="mb-5">
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="username"
                      className="form-control form-control-lg"
                      placeholder="Username"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    className="form-control form-control-lg btn  btn-outline-primary btn-lg btn-block"
                    type="submit"
                    onClick={() => submit()}
                  >
                    Register
                  </button>
                </section>

                <hr />
                <section>
                  <Nav.Link href="/login">Login</Nav.Link>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
