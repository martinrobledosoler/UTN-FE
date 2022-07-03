export function Footer() {
  return (
    <footer>
      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "#1C2842" }}
      >
        <div className="row text-light p-5 ">
          <div className="col-xs-12 col-md-9 col-lg-2">
            <img
              src="/hw-logowhiteDos.png"
              width="150xpx"
              height="150px"
              alt="from devs to devs"
              className="mx-3 rounded"
            />

            <p className="text-light mt-4 mx-3">From devs 2 devs</p>
            <p className="text-light mx-3">Tucuman-Argentina</p>
            <a
              href="#"
              className="text-secondary mt-3 text-decoration-none mx-2"
            >
              Terms and Conditions
            </a>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-8">
            <p className="h5 mb-3 text-center">About Us?</p>
            <div className="mb-2">
              <p
                className="text-secondary text-decoration-none mx-5 text-center "
                style={{ fontSize: "22px", fontFamily: "serif" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facilis nesciunt facere libero vitae optio adipisci aperiam
                placeat fuga. Maiores quasi saepe excepturi aut culpa est in
                magnam voluptatibus asperiores!
              </p>
            </div>
          </div>

          <div className="  col-12 col-md-6 col-lg-2 ">
            <p className="h5 mb-3 container d-flex justify-content-end">
              Contact
            </p>
            <div className="mb-2 container ">
              <a className="text-secondary text-decoration-none " href="#">
                <img
                  src="/logotipo-de-gmail.png"
                  width="20px"
                  height="20px"
                  className="mx-2"
                />
                Gmail
              </a>
            </div>
            <div className="mb-2 container">
              <a className="text-secondary text-decoration-none" href="#">
                <img
                  src="/facebook1.png"
                  width="20px"
                  height="20px"
                  className="mx-2"
                />
                Facebook
              </a>
            </div>
            <div className="mb-2 container ">
              <a className="text-secondary text-decoration-none" href="#">
                <img
                  src="/gorjeo1.png"
                  width="20px"
                  height="20px"
                  className="mx-2"
                />
                Twitter
              </a>
            </div>
            <div className="mb-2 container ">
              <a className="text-secondary text-decoration-none" href="#">
                <img
                  src="/github.png"
                  width="20px"
                  height="20px"
                  className="mx-2"
                />
                Github
              </a>
            </div>
          </div>

          <div className="col-xs-12 ">
            <p className="text-white text-center mt-5">
              WebSite created by Martin Robledo Soler and Gabriel Barragán
              Cativa - 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
