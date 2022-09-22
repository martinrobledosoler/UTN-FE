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
import axios from "axios";

function getValidate() {
  const token = sessionStorage.getItem("token");
  axios
    .post(" http://localhost:3100/auth/validate", {
      token: token,
    })
    .then(function (response) {
      if (response.data == false) {
        if (window.location.href !== "http://localhost:3000/") {
          window.location.href = "http://localhost:3000/";
        }
        unableElement();
      } else {
        sessionStorage.setItem("email", response.data.email);
        enableElement();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function unableElement() {
  document.getElementById("profile").style.visibility = "hidden";
  document.getElementById("stadistics").style.visibility = "hidden";
  document.getElementById("logout").style.visibility = "hidden";
}

function enableElement() {
  document.getElementById("login").style.visibility = "hidden";
  document.getElementById("profile").style.visibility = "visible";
  document.getElementById("stadistics").style.visibility = "visible";
  document.getElementById("logout").style.visibility = "visible";
}

function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("email");
  window.location.href = "http://localhost:3000/";
}

export function Header() {
  getValidate();
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
            <a href="http://localhost:3000/">
              <img
                src="/hw-logowhiteDos.png"
                width="80px"
                height="80px"
                alt="from devs to devs"
                className="mx-3"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle className="coloring mx-3" />
          <Navbar.Collapse>
            <Nav>
              <Link to="/" className="mx-2 text-decoration-none text-light">
                Home
              </Link>
              <Link
                to="/profile"
                id="profile"
                className="mx-2 text-decoration-none text-light"
              >
                Profile
              </Link>
              <Link
                to="/stadistics"
                id="stadistics"
                className="mx-2 text-decoration-none text-light"
              >
                Stadistics
              </Link>
            </Nav>
            <Button
              href="/Login"
              id="login"
              className="btn btn-light text-dark btn-lg rounded-pill ms-auto mx-3"
              style={{ position: "absolute", float: "right" }}
            >
              Login
            </Button>
            <Button
              href="#"
              id="logout"
              className="btn btn-light text-dark btn-lg rounded-pill ms-auto mx-3 "
              onClick={() => logout()}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <div className="container" style={{ marginTop: "0%" }}></div>

        <MyNavbar />
      </div>
    </div>
  );
}
