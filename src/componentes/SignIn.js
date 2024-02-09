import React from 'react'
import '../styles/SignIn.css';

export const SignIn = () => {
  return (
    <>
          <body className="d-flex align-items-center py-4 ">
              {/* contenedor entre el body y el formulario */}
              <main className="form-signin">
                  <form className="formulario" >
                      {/* contenedor titulo e img del form */}
                      <div className='container-img'>
                          <h3 className="title ">Iniciar <br></br>Sesion</h3>
                          <div className="img">
                            <img className="image " src="../3.png" ></img>
                          </div>
                      </div>
                      <br></br>
                      <br></br>
                      <h6>Ingrese correo</h6>
                      <div className="form-floating">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label for="floatingInput">Correo Electronico</label>
                      </div>
                      <h6>Ingrese Contraseña</h6>
                      <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                          <label for="floatingPassword">Contraseña</label>
                      </div>
                      <div className="form-check text-start my-3">
                          <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                              Recordar
                          </label>
                      </div>
                      <button className="btnclick btn-primary w-100 py-2" type="submit">Iniciar Sesion</button>
                  </form>
              </main>
              <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                  crossorigin="anonymous"></script>
          </body>
    </>
  )
}
