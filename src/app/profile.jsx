import { Footer } from "./footer";
import { Header } from "./header";
import Select from "react-select";
import { Button } from "react-bootstrap";
import { async } from "rxjs";
const axios = require("axios").default;

let options = [];
let values = [];
let techDb = [];

async function RenderPreferences() {
  const token = "$2b$10$vyWUBnIw88o61c0GvXnaEeyjLjztHutiacsy6LFdvSqlQfL/GvJjW";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .get("http://localhost:3100/technologies", config)
    .then(function (response) {
      const optionsArr = response.data;
      for (let option in optionsArr) {
        options.push({
          value: optionsArr[option].name,
          label: optionsArr[option].name,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function techUser() {
  let technologies = [];
  for (let i in values) {
    technologies.push(values[i].value);
  }

  const token = "$2b$10$vyWUBnIw88o61c0GvXnaEeyjLjztHutiacsy6LFdvSqlQfL/GvJjW";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .post(
      "http://localhost:3100/techuser",
      {
        email: sessionStorage.getItem("email"),
        tech: technologies,
      },
      config
    )
    .then(function (response) {
      document.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function getTechnologies() {
  const token = "$2b$10$vyWUBnIw88o61c0GvXnaEeyjLjztHutiacsy6LFdvSqlQfL/GvJjW";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .post(
      "http://localhost:3100/techuser/gettech",
      {
        email: sessionStorage.getItem("email"),
      },
      config
    )
    .then(function (response) {
      const divJobs = document.getElementById("databaseElements");
      let content = "";
      for (let i of response.data) {
        content += `<li>${i}</li>`;
      }
      divJobs.innerHTML = `<ul>${content}</ul>`;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function Profile() {
  RenderPreferences();
  const email = sessionStorage.getItem("email");

  const onedropDownChange = (value) => {
    values = value;
  };
  getTechnologies();
  return (
    <div className="content">
      <Header />
      <section>
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div
              className="col-lg-6 my-4 pt-3 shadow-lg d-flex justify-content-center border rounded "
              style={{ float: "center", backgroundColor: "#DBDBDB" }}
            >
              <li style={{ listStyle: "none" }}>
                <div className=" my-4" style={{ color: "#1C2842" }}>
                  <h4 id="emailUser">{email}</h4>
                </div>
              </li>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h2 className="container col-lg-2" style={{ float: "center" }}>
          Preferences
        </h2>
      </div>

      <section
        className="container col-lg-5 d-flex my-2 shadow-lg"
        style={{ backgroundColor: "#DBDBDB" }}
      >
        <div
          style={{
            width: "540px",
            marginLeft: "5%",
            marginTop: "2%",
            marginBottom: "2%",
          }}
        >
          <Select
            id="optionsTech"
            options={options}
            onChange={onedropDownChange}
            isMulti
          />
          <div className="my-3 ">
            <p>Technologies allready on the DataBase</p>
          </div>
          <div id="databaseElements" className="my-3"></div>
          <div className="d-grid gap-2 mt-4">
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={() => techUser()}
            >
              Done
            </Button>
          </div>
        </div>
      </section>

      <div
        className="container col-lg-4 my-5 rounded shadow-lg"
        style={{
          float: "center",
          fontFamily: "sans-serif",
          backgroundColor: "#DBDBDB",
        }}
      >
        <p>
          ● Here you can choose your preferences in terms of languages ​​and
          frameworks that you usually work with, with this we will send you an
          email every week recommending the best work proposals that suit your
          given preferences.
        </p>
      </div>
      <section className=" container  d-block "></section>

      <Footer />
    </div>
  );
}
