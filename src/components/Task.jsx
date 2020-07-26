import React from 'react';


function Task(){
    
    obtenerTareas= (event) => {
        event.preventDefault();
        fetch("https://academlo-todolist.herokuapp.com/tasks", {
          method: "GET",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(this.state)
    });
    agregarTareas = (event) => {
        event.preventDefault();
        fetch("https://academlo-todolist.herokuapp.com/tasks", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(this.state)
    });
    actualizarTareas= (event,Id) => {
        event.preventDefault();
        fetch("https://academlo-todolist.herokuapp.com/tasks/" + Id, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(this.state)
    });
    eliminarTareas= (event,Id) => {
        event.preventDefault();
        fetch("https://academlo-todolist.herokuapp.com/tasks/" + Id, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(this.state)
    });
    
    
        return (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="right">Id</StyledTableCell>
                    <StyledTableCell align="right">Contenido</StyledTableCell>
                    <StyledTableCell align="right">Fecha</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.Id}</StyledTableCell>
                      <StyledTableCell align="right">{row.Contenido}</StyledTableCell>
                      <StyledTableCell align="right">{row.Fecha}</StyledTableCell>
                      <button onClick={this.obtenerTareas.bind(this)}>
                          Obtener Tareas
                      </button>
                      <button onClick={this.agregarTareas.bind(this)}>
                          Agregar Tareas 
                      </button>
                      <button onClick={this.actualizarTareas.bind(this, Task.Id)}>
                          Actualizar Tareas 
                      </button>
                      <button onClick={this.eliminarTareas.bind(this,Task.Id)}>
                          Eliminar Tareas
                      </button>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
      }
}
}
}
}


export default Task;