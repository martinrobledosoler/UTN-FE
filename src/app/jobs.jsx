import { useState } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const axios = require("axios").default;

export function Jobs() {
  const searchValue = window.location.href.split("=")[1];

  const [element, setElements] = useState([]);
  useEffect(() => {
    const obetnerElementos = async () => {
      const resultado = await axios.get("http://localhost:3100/job", {
        params: {
          what: searchValue,
        },
      });

      setElements(resultado.data.data.results);
      console.log(resultado.data.data.results);
    };
    obetnerElementos();
  }, []);

  return (
    <div>
      <section className="Header">
        <Header />
      </section>

      <div
        className="container nav nav-pills nav-stacked shadow-lg "
        style={{
          height: "1500px",
          overflowY: "scroll",
          width: "3500px",
        }}
      >
        <div
          className=" container col-12 col-lg-10 col-sm-3 "
          style={{ fontFamily: "serif", fontSize: "17px" }}
        >
          {element.map((items, id) => {
            return (
              <li
                key={id}
                className="border border-light my-3 mx-3 shadow-lg my-5"
                style={{ listStyle: "none", fontSize: "18px" }}
              >
                <ul
                  className="text-light"
                  style={{
                    backgroundColor: "#1C2842",
                    fontSize: "25px",
                  }}
                >
                  {items.company.display_name}
                </ul>
                <ul className="mx-3">SALARY: $ {items.salary_min} </ul>
                <ul className="mx-3">POSITION: {items.title} </ul>
                <ul className="mx-3">
                  DESCRIPTION: {items.description.slice(0, 210)}...
                </ul>
                <ul className="mx-3">CONTRACT TIME: {items.contract_time}</ul>
                <Button
                  variant="outline-dark mx-5 mb-3"
                  href={items.redirect_url}
                  target="_blank"
                >
                  Go to job position...
                </Button>
              </li>
            );
          })}
        </div>
      </div>

      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}
