import { Header } from "./header";
import { Footer } from "./footer";
import { BarChart } from "./chart";
import { ChartTres } from "./chartTres";

export function Stadistics() {
  return (
    <div className=" Header and Footer" style={{ backgroundColor: "#F3F3F3" }}>
      <section className="Header">
        <Header />
      </section>
      <div className="container my-3 col-lg-8 shadow-lg">
        <h3>TOP FIVE BEST COMPANIES WHITH MORE JOBS AVILABLE</h3>
        <br />
        <BarChart />
        <hr />
        <h5>
          In this graph you can see the availability of vacant positions for the
          main technological development companies.
        </h5>
        <br />
      </div>
      <br />
      <br />
      <div className="container my-3 col-lg-8 border shadow-lg">
        <h3>CURRENT SALARY DISTRIBUTION FOR DEVELOPERS</h3>
        <br />
        <ChartTres />
        <hr />
        <h5>
          In this graph we can see the average salary offered by companies to
          developers and the amount of the same that are charged that amount
        </h5>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
}
