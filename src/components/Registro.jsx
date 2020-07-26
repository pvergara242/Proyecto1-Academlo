import React from "react";
import './Registro.css'

function Registro(props) {
  const  cambiarLogin = ()=>{
    props.toLogin();
    
    fetch('https://academlo-todolist.herokuapp.com/register', {
    method: 'post',
    body: JSON.stringify({
      body: JSON.stringify(this.state) 
    }),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((response) => {
    if (response.ok) {
        response.json();
        return alert.show("las credenciales son incorrectas") 

    } else {
        return 
    }
});
};


        return(
            <div className="container">
                <div className="row">
                    <div className="card">
              <form
                  >
                    <label htmlFor="">Bienvenido!</label>
                  <label>Ingrese su nombre </label>
                  <input
                    name="nombre"   
                    type="text"
                    placeholder="ingrese el nombre"
                  />
                  <label>Ingrese su apellido</label>
                  <input
                    name="apellido"
                    type="text"
                    placeholder="ingrese el apellido"
                  />
                  <label>Ingrese su email </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="ingrese el email"
                  />
                  <label>Ingrese su contraseña </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="ingrese la contraseña"
                  />
                   <input type="submit" value="Registrarse" className="registrarse"/>
                   <button  onClick={cambiarLogin}>Login</button>
            </form> 
                    </div>
                </div>
            </div>
           
        );
    }
  
  

export default Registro;

