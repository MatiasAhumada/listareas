import { Button, ListGroup } from "react-bootstrap";
import { borrarTareaAPI, consultarApi } from "../helpers/queris";
import Swal from "sweetalert2";


const ItemTarea = (props) => {
 
  
  const borrarTarea = () => {
    Swal.fire({
      title: "Esta seguro de eliminar este Tarea?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar!",
      cancelButtonText: "Cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
      
        borrarTareaAPI(props.id._id).then((respuesta) => {
          if (respuesta.status === 200) {
     
            consultarApi().then((respuesta) => {
              props.setTareas(respuesta);
            });
            Swal.fire("Borrado!", "Su Tarea a sido borrado!", "success");
          } else {
            Swal.fire(
              "Se produjo un error",
              "intente realizar esta operacion en otro momento!",
              "error"
            );
          }
        });
      }
    });
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {props.nombreTarea}
      <Button variant="danger" onClick={borrarTarea}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
