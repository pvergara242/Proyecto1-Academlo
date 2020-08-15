import React from "react";
import './Login.css';

function Login1(event, state,props){
    event.preventDefault();
    fetch(' https://academlo-todolist.herokuapp.com/login', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          "content-type": "application/json"
        }
      })
      .then( response => response.json()).then( results => {props.toTask()} )
      .catch((response) => {
        if (response.ok) {
            response.json();
            
            return alert("las credenciales son incorrectas") 
    
        } else {
            return alert("las credenciales son correctas") 
        }
    });
  }
  
  function Login(props) {
    const  cambiarRegistro = ()=>{
      props.toRegistro();
    
  }
  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
    console.log(inputs);
  }
  
  const [inputs, setInputs] = React.useState({email: '', password:''});
        return(
            <div className="container-1">
                <div className="row-1">
                    <div className="card-1">
                       <form onSubmit={(event) => Login1(event, inputs,props) }
            
                          >
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
                          <button className="login">Login</button>
                          <button  onClick={cambiarRegistro}  className="registrase1">Registrase  </button>
                        </form> 
                     
                    </div>
                </div>
            </div>

        );
      

    }
export default Login;

