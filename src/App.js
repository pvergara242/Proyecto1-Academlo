import React from 'react';
import Login from './components/Login';
import Loading from './components/Loading';
import Registro from './components/Registro';
import Task from './components/Task';



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Registro:true,
      Login:true,
       Task:true,
      showView: "Loading"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showView: "Registro"});
    },2000);
  }
  toLogin= ( )=>{
    this.setState({ showView: "Login" });
  }
  toRegistro= ( )=>{
    this.setState({ showView: "Registro" });
  }
  toTask= ( )=>{
    this.setState({ showView: "Task" });
  }
    render() {
      switch (this.state.showView) {
        case "Loading":
          return (
            <div>
            <Loading/>
          </div>
          );
        case "Registro":
          return (
            <div>
            <Registro toLogin={this.toLogin}/>
          </div>
          );
        case "Login":
          return (
            <div>
              <Login toRegistro={this.toRegistro} toTask={this.toTask}/>
            </div>
          );
          case "Task":
            return (
              <div>
                <Task toTask={this.toTask}/>
              </div>
            );
          default:
            return
      
    }
  }
}


