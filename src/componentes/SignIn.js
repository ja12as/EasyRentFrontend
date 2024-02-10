import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignIn.css';

 // Importamos la URL base de nuestro backend desde el archivo de configuración
import API_BASE_URL from '../services/DataBaseConection';

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API_BASE_URL}/login`, formData); // Utilizamos la URL base para construir la URL completa del endpoint
      console.log('Inicio de sesión exitoso!');
      // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }

    setLoading(false);
  };

  return (
    <body className="d-flex align-items-center py-4">
      <main className="form-signin">
        <form className="formulario" onSubmit={handleSubmit}>
          <div className='container-img'>
            <h3 className="title ">Iniciar Sesión</h3>
            <div className="img">
              <img className="image " src="../3.png" alt="Imagen" />
            </div>
          </div>
          <br />
          <br />
          <h6>Ingrese correo</h6>
          <div className="form-floating">
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" required />
            <label htmlFor="email">Correo Electrónico</label>
          </div>
          <h6>Ingrese Contraseña</h6>
          <div className="form-floating">
            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" id="remember" name="remember" checked={formData.remember} onChange={handleChange} />
            <label className="form-check-label" htmlFor="remember">Recordar</label>
          </div>
          <button className="btnclick btn-primary w-100 py-2" type="submit" disabled={loading}>{loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}</button>
        </form>
      </main>
    </body>
  );
};
