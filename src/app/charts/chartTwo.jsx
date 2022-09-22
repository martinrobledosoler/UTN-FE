import { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";

const axios = require("axios").default;

export function ChartTwo() {
  const [salary, setSalary] = useState({});

  useEffect(() => {
    const getSalary = async () => {
      const api = "http://localhost:3100/job/salary";
      const results = await axios.get(api);

      setSalary(results.data.data.histogram);
    };

    getSalary();
  }, []);

  const data = [
    { name: "P-1", average: salary[10000] },
    { name: "P-2", average: salary[20000] },
    { name: "P-3", average: salary[30000] },
    { name: "P-4", average: salary[40000] },
    { name: "P-5", average: salary[50000] },
    { name: "P-6", average: salary[60000] },
    { name: "P-7", average: salary[70000] },
  ];
  const config = {
    data,
    padding: "auto",
    xField: "name",
    yField: "average",
    xAxis: {
      tickCount: 5,
    },
  };
  return <Column {...config} />;
}
