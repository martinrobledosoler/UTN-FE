import { useState, useEffect } from "react";
import { TinyLine } from "@ant-design/plots";

const axios = require("axios").default;

function getSalary() {
  axios
    .get("http://localhost:3100/job/salary")
    .then(function (response) {
      //console.log(response.data.data.histogram);

      let salary = response.data.data.histogram;
      console.log(salary);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function ChartTres() {
  getSalary();

  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 60,
    autoFit: false,
    data,
    smooth: true,
  };
  return <TinyLine {...config} />;
}
