import { Nav } from "react-bootstrap";

export function ResetPassword() {
    return (
      <section className="vh-100" style={{backgroundColor: "#CCFACA"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-lg rounded-4 " style={{borderRadius: "1rem"}}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5 ">Reset Password</h3>
  
                  <section className="mb-5">
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Email"
                    />
                  </div>
  
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="New password"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="passwordConfirm"
                      className="form-control form-control-lg"
                      placeholder="Confirm new password"
                    />
                  </div>
  
                  <button
                    className="form-control form-control-lg btn  btn-outline-secondary btn-lg btn-block"
                    type="submit"
                  >
                    Reset Password
                  </button>
                  </section>

                  <hr />
                  <section>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }