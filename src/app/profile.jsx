import { Footer } from "./footer";
import { Header } from "./header";

export function Profile() {
  return (
    <div className="content">
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-8 my-4 pt-3 shadow-lg">
            <h4>UserName</h4>
            <p>Nombre del Usuario</p>
            <h4>Mail</h4> <p>Usuario@Gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
