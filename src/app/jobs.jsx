import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Footer } from "./footer";
import { Header } from "./header";
import { useEffect } from "react";
import { Pagination } from "./pagination";

const axios = require("axios").default;

export function Jobs() {
  const [element, setElements] = useState([]);

  useEffect(() => {
    const obetnerElementos = async () => {
      const be = "http://localhost:3100/job";
      const resultado = await axios.get(be);

      setElements(resultado.data.data.results);

      // console.log(resultado);
      //console.log(resultado.data.data.results);
    };
    obetnerElementos();
  }, []);

  function PopUp(prop) {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);

    return (
      <>
        <Button onClick={() => setLgShow(true)} variant="outline-success">
          More
        </Button>

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          {/* TRAER UN ELEMENTO EN ESPEFICO DEL ARRAY */}

          {element.map((items) => {
            return (
              <div
                className="elements rounded-4"
                key={items.id}
                style={{
                  listStyle: "none",
                  padding: "10px 15px",
                  fontFamily: "sans-serif",
                }}
              >
                <ul>Company: {items.company.display_name}</ul>
                <ul>Salary: ${items.salary_min} </ul>
                <ul>Availability: {items.contract_time}</ul>
                <ul>Descrition: {items.description}</ul>
                <ul>Location: {items.location.area}</ul>

                <Modal.Footer>
                  <Button variant="outline-danger" onClick={handleClose}>
                    Close
                  </Button>
                  <a
                    className="btn btn-outline-primary"
                    href={items.redirect_url}
                  >
                    More Info
                  </a>
                </Modal.Footer>
              </div>
            );
          })}
        </Modal>
      </>
    );
  }

  return (
    <div>
      <section className="Header">
        <Header />
      </section>
      <div
        className="container col-12 col-lg-8 col-sm-3 "
        style={{ fontFamily: "serif", fontSize: "17px" }}
      >
        <div className="card-body ">
          {element.map((items, id) => {
            return (
              <li
                key={id}
                className="border border-dark my-3 mx-3 shadow-lg "
                style={{ listStyle: "none", fontSize: "18px" }}
              >
                <ul
                  className=" text-light"
                  style={{ backgroundColor: "#1C2842 ", fontSize: "25px" }}
                >
                  {items.company.display_name}
                </ul>
                <ul className="mx-3">SALARY: $ {items.salary_min} </ul>
                <ul className="mx-3">DESCRIPTION: {items.description}</ul>
                <div className="mx-5 my-3">
                  <PopUp key={id} />
                </div>
              </li>
            );
          })}
          <br />
        </div>
        <div className="container">
          <Pagination />
        </div>
      </div>
      <section className="Footer">
        <Footer />
      </section>
    </div>
  );
}
