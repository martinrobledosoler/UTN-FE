import { Nav } from "react-bootstrap";
const axios = require("axios").default;

function vereficationMail() {
  alert("Alerta");
  let email = document.getElementById("email").value;
  const token = "$2b$10$vyWUBnIw88o61c0GvXnaEeyjLjztHutiacsy6LFdvSqlQfL/GvJjW";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .post(
      "http://localhost:3100/user/mail",
      {
        email: email,
        url: "http://localhost:3000/resetPassword",
      },
      config
    )
    .then(function (response) {
      alert("Please check your Email, to reset your password");
    })
    .catch(function (error) {
      console.log(error);
    });
}
export function ForgotYourPassword() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#1C2842" }}>
      <div className="container d-flex justify-content-center align-items-center h-100 ">
        <div className="card w-75 ">
          <div className="card-body shadow-lg ">
            <h5 className="card-title">¿FORGOT YOUR PASSWORD?</h5>
            <hr />
            <p className="card-text">We can help you solve this problem.</p>
            <p>Just click "IT's me" and enter your email address. </p>
            <p>In a few minutes you can reset your password from your email</p>
            <input
              type="text"
              placeholder="Enter your Mail"
              className="form-control "
              id="email"
            />
            <br />
            <Nav.Link onClick={vereficationMail}>
              <button className="btn btn-danger">IT's Me</button>
            </Nav.Link>
          </div>
        </div>
      </div>
    </section>
  );
}
