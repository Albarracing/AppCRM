import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Telefono.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:9000/telefono/'

const CompCreatetelefono = () => {
    



     
  const navigate = useNavigate()
  //procedimiento guardar
  const store = async (e) =>{
  e.preventDefault()
  await axios.post(URI, {  })
  navigate('/telefono')

  }


    return(
        <>
        {/* <Modal className='modal modal-dialog-scrollable' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='titulo'>Regargas telefonicas</Modal.Title>
        </Modal.Header> */}

     <div className='creartelefono'>
         <form onSubmit={store} className='formtelefono'>
        {/* <Modal.Body className='cuerpo' > */}
        <h5 className='recargas'>Recargas telefonicas</h5>
                <div className='tel'>
                 <label className="cantidad form-label">Ingrese cliente</label>
                 {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
                 <input className="inputtelefono form-control form-control-sm" type="text" aria-label=".form-control-sm example" required={true} placeholder='Nombre y apellido' ></input>
                 <label className="cantidad form-label">Empresa telefonica</label>
                 <input className="inputtelefono form-control form-control-sm" type="text" aria-label=".form-control-sm example" required={true}></input>
                 <label className="cantidad form-label">Numero de linea</label>
                 <input className="inputtelefono form-control form-control-sm" type="text" aria-label=".form-control-sm example" required={true} ></input>
                 <label className="cantidad form-label">importe de la carga</label>
                 <input className="inputtelefono form-control form-control-sm" type="text" aria-label=".form-control-sm example" required={true} ></input>
                 <select className="categoria form-select" aria-label="Default select example">
                 <option selected className="categoria" required={true}>Pago del consumo</option>
                 <option value="1">PAGO AL INTENDENTE</option>
                 <option value="2">DESCONTAR A EMPRESA CONTRATADORA</option>
                 <option value="3">REEMBOLSABLE</option>
                 <option value="3">DEBE AL INTENDENTE</option>
                  </select>
                  <Button type='submit' className='btnguardartel btn-sm' variant="primary">
                      Guardar
                    </Button> 
        </div>
            
             {/* <div className="mb-1">
                 <label for="formGroupExampleInput2" className="fecha form-label">Ingrese fecha de entrega</label>
                 <input  type='date' className="calendario form-control" id="formGroupExampleInput2"/>
             </div> */}
            
      {/* <tbody>
        {pedidos.map ((pedido) =>(
            <tr key={pedido.id}>
            <td>{pedido.id}</td>
            <td>{pedido.articulo}</td>
            <td>{pedido.cantidad}</td>
            <td>{pedido.fecha}</td>
            </tr>
            ))}
        </tbody> */}
  
        
        </form>
    </div>
      </>
    )
}

export default CompCreatetelefono