import React from "react";
import './Login.css';

function Login (props){
  const  cambiarRegistro= ()=>{
    props.toRegistro();
  
  
     fetch('https://academlo-todolist.herokuapp.com/login', {
    method: 'post',
    body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
    }),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then( (response) => {
    if (response.ok) {
         response.json();
        return alert.show("las credenciales son incorrectas ") 

    } else {
        return 
    }
});
};

        return(
            <div className="container-1">
                <div className="row-1">
                    <div className="card-1">
                       <form
                          >
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
                          <button className="login">Login</button>
                          <button  onClick={cambiarRegistro} className="registrase1">Registrase</button>
                        
                        </form> 
                    </div>
                </div>
            </div>

        );
      

    }
export default Login;

