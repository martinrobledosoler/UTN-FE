import {
  Nav,
  Navbar,
  Button,
  Form,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import { Home } from "./home";
import { Profile } from "./profile";
import { Stadistics } from "./stadistics";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { getAllElements } from "@antv/g2plot/lib/utils";
import { MyNavbar } from "./navbar";

function browser() {
  const techs = [{ name: "JavaScript" }, { name: "PHP" }, { name: "C#" }];

  const form = document.querySelector("form");
  //const button = document.querySelector();
  const result = document.querySelector("#options");

  const filter = () => {
    result.innnerHTML = "";
    const text = form.value.toLowerCase();
    for (let tech of techs) {
      let name = tech.name.toLowerCase();
      if (name.indexOf(text) !== -1) {
        result.innerHTML += `
        <li>${tech.name}</li>
        `;
      }
    }
  };
}

export function Header() {
  return (
    <div className="App">
      <div style={{ paddingBottom: "3%", backgroundColor: "#1C2842" }}>
        <Navbar
          variant="dark"
          sticky="top"
          expand="sm"
          collapseOnSelect
          className="d-flex justify-content-between align-items-center"
        >
          <Navbar.Brand>
            <img
              src="/hw-logowhiteDos.png"
              width="80px"
              height="80px"
              alt="from devs to devs"
              className="mx-3"
            />
          </Navbar.Brand>
          <Navbar.Toggle className="coloring mx-3" />
          <Navbar.Collapse>
            <Nav>
              <Link to="/" className="mx-2 text-decoration-none text-light">
                Home
              </Link>
              <Link
                to="/profile"
                className="mx-2 text-decoration-none text-light"
              >
                Profile
              </Link>
              <Link
                to="/stadistics"
                className="mx-2 text-decoration-none text-light"
              >
                Stadistics
              </Link>
            </Nav>
            <Button
              //variant="outline-light"
              href="/Login"
              className="btn btn-light text-dark btn-lg rounded-pill ms-auto mx-3"
            >
              Login
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <div className="container" style={{ marginTop: "0%" }}></div>
        <MyNavbar />
      </div>
    </div>
  );
}
