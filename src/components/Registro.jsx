import React, { useState } from "react";
import './Registro.css'


function Registro1(event, state){
  event.preventDefault();
  fetch(' https://academlo-todolist.herokuapp.com/register', {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        "content-type": "application/json"
      }
    })
    .then( response => response.json()).then( results => console.log(results) )
    .catch((response) => {
      if (response.ok) {
          response.json();
          return alert("se ha registrado exitosamente") 
  
      } else {
          return alert("los datos son incorrectos") 
      }
  });
}

function Registro(props) {
  const  cambiarLogin = ()=>{
    props.toLogin();
  
}

const handleInputChange = (e) => {
  e.persist();
  setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
  console.log(inputs);
}
const [inputs, setInputs] = React.useState({name: '',lastname:'', email: '', password:''});
        return(
            <div className="container">
                <div className="row">
                    <div className="card">
              <form onSubmit={(event) => Registro1(event, inputs)}
                  >
                    <label htmlFor="">Bienvenido!</label>
                  <label>Ingrese su nombre </label>
                  <input
                    name="name"   
                    type="text"
                    placeholder="ingrese el nombre"
                    onChange={e=>handleInputChange(e)} 
                  />
                  <label>Ingrese su apellido</label>
                  <input
                    name="lastname"
                    type="text"
                    placeholder="ingrese el apellido"
                    onChange={e=>handleInputChange(e)} 
                  />
                  <label>Ingrese su email </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="ingrese el email"
                    onChange={e=>handleInputChange(e)} 
                  />
                  <label>Ingrese su contraseña </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="ingrese la contraseña"
                    onChange={e=>handleInputChange(e)} 
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

