import React,{useState,useEffect} from 'react';
import {TableBody,TableRow as StyledTableRow ,TableHead,TableContainer,Table, TableCell as StyledTableCell} from '@material-ui/core';
import {Form,DropdownButton,ButtonGroup ,Dropdown} from 'react-bootstrap';
import moment from "moment";
import './Task.css';

function Task(props){
    const [rows,setrows] = useState([]);
    const [form, setform] = useState({});
    const [editForm, setEditForm] = useState({});
    const [filterDate, setFilterDate] = useState("");
    
    useEffect(()=>{
      obtenerTareas();
    },[])
    
   const obtenerTareas= () => {
      fetch("https://academlo-todolist.herokuapp.com/tasks", {
          method: "GET",
          headers: { "content-type": "application/json" },
      }) .then( response => response.json()).then( results => {setrows(results.results)} )
    };
    const agregarTareas = (event) => {
         event.preventDefault();
          fetch("https://academlo-todolist.herokuapp.com/tasks", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(form)
    })};
    const actualizarTareas= (event, _id) => {
        event.preventDefault();
        fetch("https://academlo-todolist.herokuapp.com/tasks/" + editForm._id, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(editForm)
    })};
     const eliminarTareas= (event, _id) => {
        event.preventDefault();
        fetch("https://academlo-todolist.herokuapp.com/tasks/" + _id, {
          method: "DELETE",
    })};
  
    const handleInputChange = (e) => {
      e.persist();
      setform(form => ({...form, [e.target.name]: e.target.value}));
      console.log(form);
    }
   
    const editInputValue = (event) => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value });
    };
    const Click= (Task) => {
      setEditForm(Task);
    };
    const onChangeSelect = (task) => {
      let today = moment(); 
      console.log('today: ', today);
      let startOfWeek = moment().startOf("week");
      let endOfWeek = moment().endOf("week");
      let startOfNextWeek = moment(endOfWeek).add(1, "seconds");
      let endOfNextWeek = moment(endOfWeek).add(7, "days");
      console.log('task: ', task);
      console.log('task.date moment: ',task.date);
      console.log('endOfNextWeek: ', endOfNextWeek);
      
      switch (filterDate) {
        case "today":
          if (moment(task.date).isSame(today, "day")) {
            return true;
          }
          return false;
        case "week":
          if (moment(task.date).isBetween(startOfWeek, endOfWeek)) {
            return true;
          }
          return false;
        case "nextWeek":
          if (moment(task.date).isBetween(startOfNextWeek, endOfNextWeek)) {
            return true;
          }
          return false;
        default:
          return true;
      }
    };
        return (
            <TableContainer>
              <Form  onSubmit={agregarTareas} editForm={editForm} editInputValue={editInputValue}
                      >
                    <Form.Group >
                      <Form.Label>Contenido</Form.Label>
                      <Form.Control name="content" className="input" type="text" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group >
                      <Form.Label>Fecha</Form.Label>
                      <Form.Control name="date" className="fecha" type="date" onChange={handleInputChange}/>
                      <button  className="agregar">
                          Agregar Tareas 
                      </button>
                    </Form.Group>
                </Form>
                
                <Form onSubmit={(event)=>{actualizarTareas(event)}}  editInputValue={editInputValue}
                      >
                    <Form.Group >
                      <Form.Label>Contenido</Form.Label>
                      <Form.Control name="content" className="input" type="text" value={editForm.content} onChange={editInputValue}/>
                    </Form.Group>
                    <Form.Group >
                      <Form.Label>Fecha</Form.Label>
                      <Form.Control name="date" className="fecha" type="date" value={editForm.date} onChange={editInputValue}/>
                      <button  className="agregar">
                        Actualizar Tareas 
                      </button>
                    </Form.Group>
                </Form> 
                <select className="select" onChange={(event) => setFilterDate(event.target.value)}>
                    <option value="all">Todas</option>
                    <option value="today">Hoy</option>
                    <option value="week">De la semana</option>
                    <option value="nextWeek">Proxima semana</option>
                </select>
                <h1>LISTA DE TAREAS</h1>
              <Table className="tabla" aria-label="customized table">
                <TableHead >
                  <StyledTableRow >
                    <StyledTableCell name="content" type="text" align="left" onChange={handleInputChange}>Contenido</StyledTableCell>
                    <StyledTableCell name="date" type="date" align="left" onChange={handleInputChange}>FECHA</StyledTableCell>
                    <StyledTableCell type="text" align="left">ACCIONES</StyledTableCell>
                  </StyledTableRow >
                </TableHead>
                <TableBody>
                  {rows.filter((task) => onChangeSelect(task)).map((row) => (
                    <StyledTableRow  key={row.name}>
                      <StyledTableCell  align="left" onChange={handleInputChange}>{row.content}</StyledTableCell>
                      <StyledTableCell   align="left" onChange={handleInputChange}>{row.date}</StyledTableCell>
                      <StyledTableCell  className="acciones"  align="left">{row.acciones}
                      <button className="actualizar" onClick={()=>{Click(row)}}>
                          EDITAR
                      </button>
                      <button className="eliminar" onClick={(event)=>{eliminarTareas(event, row._id)}}>
                          ELIMINAR 
                      </button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
      );
                  
      }

export default Task;