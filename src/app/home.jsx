import { Header } from "./header";
import { Footer } from "./footer";

export function Home() {
  return (
    <div>
      {/* {alert(sessionStorage.getItem("token"))} */}
      <section id="header">
        <Header />
      </section>

      <section className="container shadow-lg my-5">
        <div className="d-flex flex-row-reverse ">
          <div className="d-flex flex-row-reverse col-lg-4 col-md-6 col-sm-5 d-none d-md-block  ">
            <img
              src="/imgOne.jpg"
              width="700px"
              className=" d-flex flex-row rounded-circle my-3 img-fluid "
            />
          </div>
          <div className="p-2  text-center mx-3 p-5 d-flex col-lg-7 col-md-6 col-sm-7">
            <p style={{ fontSize: "20px", fontFamily: "serif" }}>
              Home Work is an open source project with the purpose of
              facilitating the search and obtaining work for both amateur
              developers and those with a proven track record. Beyond being used
              for practical purposes as a final project for the higher Technical
              career in Programming its objective is to be of help to the
              developer community in World, the idea is to make one only
              powerfull in diverse plataform to make easy the job find process
            </p>
          </div>
        </div>

        <div className="d-flex ">
          <div className="d-flex  col-lg-4 col-md-6 col-sm-5 d-none d-md-block">
            <img
              src="/imgTwo.jpg"
              width="400px"
              className="d-flex flex-row rounded-circle my-3 img-fluid "
            />
          </div>
          <div className="p-2 text-center mx-5 p-5 d-flex col-lg-7 col-md-6 ">
            <p style={{ fontSize: "20px", fontFamily: "serif" }}>
              We encourage you to be part of comunity, adding orders workpage
              and develop the best practices in the project. You can find the
              source code and documentation in github. Remember this is from
              developers 2 developers. Good luck!
            </p>
          </div>
        </div>
      </section>

      <section id="footer" className="mt-5">
        <Footer />
      </section>
    </div>
  );
}
