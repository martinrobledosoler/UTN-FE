import { Column } from "@ant-design/plots";
import { useEffect } from "react";
import { useState } from "react";

const axios = require("axios").default;

export function BarChart() {
  //============================Aqui se conecta a la Api=====================================================
  const [nombre, setNombre] = useState([]);
  const [cantidad, setCantidad] = useState([]);

  useEffect(() => {
    const obetnerElementos = async () => {
      const be = "http://localhost:3100/job/stadistics";
      const resultado = await axios.get(be);
      //console.log(resultado.data.data.leaderboard);

      var respuesta = resultado.data.data.leaderboard;
      var auxNombre = [],
        auxCantidad = [];
      respuesta.map((elemento) => {
        auxNombre.push(elemento.canonical_name);
        auxCantidad.push(elemento.count);
      });
      setNombre(auxNombre);
      setCantidad(auxCantidad);
    };
    obetnerElementos();
  }, []);

  //=============================Estas son las const donde se arma la grafica=====================================================

  const data = [
    { name: nombre[0], vacancies: cantidad[0] },
    { name: nombre[1], vacancies: cantidad[1] },
    { name: nombre[2], vacancies: cantidad[2] },
    { name: nombre[3], vacancies: cantidad[3] },
    { name: nombre[4], vacancies: cantidad[4] },
  ];

  const configuracion = {
    data,
    xField: "name",
    yField: "vacancies",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  return <Column {...configuracion} />;
}
