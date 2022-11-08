import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from "axios";
import './Combustible.css'
import { useNavigate } from "react-router-dom";
//import './css/CreatePedidos.css'
const URI = 'http://localhost:9000/combustible/'


const CompCreatePedidoCombustible = () => {
    const [vehiculo, setVehiculo] = useState('')
    const [tipo_combustible, setTipCombus] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [comprobante, setComprobante] = useState('')
    const [importe, setImporte] = useState('')
    const [tipo_pago, setTipoPago] = useState('')
    const navigate = useNavigate()

    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, { vehiculo:vehiculo, tipo_combustible:tipo_combustible, cantidad:cantidad, comprobante:comprobante, importe:importe, tipo_pago:tipo_pago  })
        navigate('/combustible')

      
        }
return(
    <>
      
    <div className='crearprueba'>
        <form onSubmit={store}>
            <div className='combus'>
                        <div className='titulocom'>
                            <h5>Pedido combustible</h5>
                        </div>
                <select className="categoriacom form-select" aria-label="Default select example" required={true} value={vehiculo} onChange={(e)=> setVehiculo(e.target.value)}>
                        <option selected>Vehículo</option>
                        <option>Renault Kangoo Dominio:GOA563</option>
                        <option>Renault Kangoo Dominio:PCB159</option>
                        <option>Otros</option>
                    </select>
                    <select className="categoriacom form-select" aria-label="Default select example" required={true} value={tipo_combustible} onChange={(e)=> setTipCombus(e.target.value)}>
                        <option selected>Tipo de combustible</option>
                        <option>Gasoil</option>
                        <option>Nafta</option>
                        <option>GNC</option>
                        <option>Gas envasado</option>
                    </select>
                        <div className="mb-1">
                        <label className="cantidad form-label">Ingrese cantidad</label>
                        {/* <input type="text" className="texto1 form-control" id="formGroupExampleInput2"/> */}
                        <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example" required={true} value={cantidad} onChange={(e)=> setCantidad(e.target.value)}></input>
                    </div>
                    
                    <div className="mb-1">
                        <label  className="fecha form-label">Comprobante de referencia</label>
                        <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example" required={true} value={comprobante} onChange={(e)=> setComprobante(e.target.value)}></input>
                    </div>

                    <div className="mb-1">
                        <label for="formGroupExampleInput2" className="fecha form-label">Total a pagar</label>
                        <input className="cantidad2 form-control form-control-sm" type="text" aria-label=".form-control-sm example" required={true} value={importe} onChange={(e)=> setImporte(e.target.value)}></input>
                    </div>

                <div>
                <select className="categoriapago form-select" aria-label="Default select example" required={true} value={tipo_pago} onChange={(e)=> setTipoPago(e.target.value)}>
                        <option selected>Se paga o se debe</option>
                        <option>Se paga</option>
                        <option>Se anota en cuenta</option>
                </select>
                </div>
            </div>
        </form>
     </div> 
</>
    )
}

export default CompCreatePedidoCombustible