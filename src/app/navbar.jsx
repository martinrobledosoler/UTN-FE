import { useEffect } from "react";
import { useState } from "react";

const axios = require("axios").default;

function Render() {
  const [element, setElements] = useState([]);

  useEffect(() => {
    const obetnerElements = async () => {
      const be = "http://localhost:3100/job";
      const resultado = await axios.get(be);
      //console.log(resultado.data.data.results);

      var respuesta = resultado.data.data.results;
      var auxTechName = [];

      respuesta.map((escritura) => {
        auxTechName.push(escritura.company.display_name);
        //console.log(auxTechName);
      });

      setElements(auxTechName);
    };
    obetnerElements();
  }, []);
}

function renderResults(results) {
  const searchWrapper = document.querySelector(".wrapper");
  const resultWrapper = document.querySelector(".results");

  const aviso = (param) => {};

  if (!results.length) {
    return searchWrapper.classList.remove("show");
  }
  let content = results
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");

  searchWrapper.classList.add("show");
  resultWrapper.innerHTML = `<ul>${content}</ul>`;
}

function eventos() {
  let searchable = [
    "Php",
    "JavaScript",
    "C++",
    "Phyton",
    "C#",
    "Larvel",
    "React",
    "Nest",
    "Next",
    "Axios",
  ];

  // const input = document.getElementById("search").value;
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("onkeyup", () => {});

  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
}

export function MyNavbar() {
  console.log(Render());
  return (
    <div className="container col-lg-12 show">
      <div className="wrapper">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Jobs"
          autoComplete="chrome-off"
          className="form-control "
          onKeyUp={eventos}
        />
        <button className="btn btn-link " style={{ display: "none" }}>
          <i className="fa fa-search"></i>
        </button>

        <div
          className="results container col-lg-11"
          style={{
            position: "absolute",
            color: "black",
            backgroundColor: "white",
          }}
        ></div>
      </div>
    </div>
  );
}
