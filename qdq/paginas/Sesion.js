import React, { useState } from "react";

function Sesion() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const [tipos, setTipos] = useState('');
    const [registrado, setRegistrado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena
    );

    if (usuarioEncontrado) {
      alert (`¡Bienvenido, ${usuarioEncontrado.nombreUsuario}!`);
    } else {
      alert('El usuario y/o contraseña es incorrecto. Por favor, completa el formulario de registro.');
      setMostrarRegistro(true);
    }
  };
  return (
    <div className="container">
      
      
      
      {!mostrarRegistro ? (
        <form onSubmit={handleSubmit}>
          <br/>
          <h1 className="titulo">Inicie Sesión</h1>
          <div className="form-group">
            <label htmlFor="icorreo">Nombre de Usuario</label>
            <input
              type="text"
              className="form-control"
              id="icorreo"
              name="nombreUsuario"
              placeholder="Ingrese nombre de usuario"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ipassword">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="ipassword"
              name="contraseña"
              placeholder="Ingrese contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </form>
        
      ) : (
      
        <div className="container">
          {registrado ? (
            <Sesion /> 
          ) : (
            <form onSubmit={handleSubmit}>                                
              <div className="form-group">
              <h1 className="titulo">Registrate</h1>
                <label htmlFor="iusuario">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  id="iusuario"
                  name="usuario"
                  placeholder="Ingrese usuario"
                />
              </div>
              <div className="form-group">
                <label htmlFor="icontraseña">Contraseña</label>
                <input
                  type="text"
                  className="form-control"
                  id="icontraseña"
                  name="contraseña"
                  placeholder="Ingrese contraseña"
                />
              </div>
              <div className="form-group">
                <label htmlFor="icontrasenaV">Repita contraseña</label>
                <input
                  type="text"
                  className="form-control"
                  id="icontrasenaV"
                  name="contraseñaV"
                  placeholder="Repita contraseña"
                />
              </div>
              <div className="form-group">
                <label htmlFor="itipo">Tipo de documento</label>
                <select
                  className="form-control"
                  id="itipo"
                  name="tipos"
                  value={tipos}
                  onChange={(e) => setTipos(e.target.value)} // Actualizar el estado del tipo al cambiar la selección
                >
                  <option value="1">DNI</option>
                  <option value="2">CE</option>              
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="idni">DNI</label>
                <input
                  type="text"
                  className="form-control"
                  id="idni"
                  name="dni"
                  placeholder="Ingrese DNI"
                />
              </div>
              <div className="form-group">
                <label htmlFor="icorreo">Correo</label>
                <input
                  type="text"
                  className="form-control"
                  id="icorreo"
                  name="icorreo"
                  placeholder="Ingrese correo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="itelefono">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  id="itelefono"
                  name="telefono"
                  placeholder="Ingrese teléfono (7 a 9 dígi­tos)"
                />
              </div>
              
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="itos" name="tos" />
                <label htmlFor="itos" className="form-check-label">
                  Acepto Terminos y condiciones del servicio?
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
            </form>
          )}
        </div>
      )}
     
     
    </div>
    
  );
}

export default Sesion;


const usuarios = [
  { nombreUsuario: 'usuario1', contrasena: 'contraseña1'},
  { nombreUsuario: 'usuario2', contrasena: 'contraseña2'},
  { nombreUsuario: 'usuario3', contrasena: 'contraseña3'},
  { nombreUsuario: 'usuario4', contrasena: 'contraseña4'},
  { nombreUsuario: 'usuario5', contrasena: 'contraseña5'}
];