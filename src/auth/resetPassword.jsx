const axios = require("axios").default;

function submit() {
  alert("aqui");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const token = "$2b$10$vyWUBnIw88o61c0GvXnaEeyjLjztHutiacsy6LFdvSqlQfL/GvJjW";
  const id = 32;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .put(
      `http://localhost:3100/user/updatepassword/${id}`,
      {
        email: email,
        password: password,
      },
      config
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function ResetPassword() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#1C2842" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-lg rounded-4 "
              style={{ borderRadius: "1rem" }}
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
                    className="form-control form-control-lg btn  btn-outline-primary btn-lg btn-block"
                    type="submit"
                    onClick={() => submit()}
                  >
                    Reset Password
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
