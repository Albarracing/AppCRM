import React from "react";
import axios from "axios";
import { useEffect, useState, } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import Form from 'react-bootstrap/Form'
const URI = 'http://localhost:9000/transporte/'

const CompEditStock = () =>{
   // const[id, setId] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [patente, setPatente] = useState('')
    const [patente_acop, setPatenteAcop] = useState ('')
    const [ven_seguro, setVenSeguro] = useState ('')
    const [ven_armat, setVenArmat] = useState ('')
    const [ven_vtv, setVenVtv] = useState ('')
    const [carga_max, setCargaMax] = useState ('')
    const [ven_patente, setVenPatente] = useState ('')
    const navigate = useNavigate()
    const {id} = useParams()

    

    //procedimiento para editar
    const update = async (e) =>{
        e.preventDefault()
        await axios.put(URI+id,{
           
            descripcion:descripcion,
            marca:marca,
            modelo:modelo,
            patente:patente,
            ven_seguro:ven_seguro,
            ven_armat:ven_armat,
            ven_vtv:ven_vtv,
            carga_max:carga_max,
            ven_patente:ven_patente

        })
        navigate('/prueba')
    }

    useEffect( () => {
        getTransporteById()
    },[])

    const getTransporteById = async () =>{
        const res = await axios.get(URI+id)

        setDescripcion(res.data.descripcion)
        setMarca(res.data.marca)
        setModelo(res.data.modelo)
        setPatente(res.data.patente)
        setVenSeguro(res.data.ven_seguro)
        setVenArmat(res.data.ven_armat)
        setVenVtv(res.data.ven_vtv)
        setCargaMax(res.data.carga_max)
        setVenPatente(res.date.ven_patente)
    }
    return(
        <div className='crearprueba'>
         <form onSubmit={update}>
                <div className='primercampo'>
                <input className="codigo form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Descripción' value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}  ></input>
                   
                   <Form.Check required  label="Anular" feedbackType="invalid"/>
               </div>

               <div className='segundocampo'>
                   <h5>Datos del vehículo</h5>
                   <hr/>
               </div>
               <div className='segundoinput'>
               {/* value={marca} onChange={(e)=> setMarca(e.target.value)} */}
                   <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Marca' value={marca} onChange={(e)=> setMarca(e.target.value)} ></input> 
                   {/* value={modelo} onChange={(e)=> setModelo(e.target.value)} */}
                   <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Modelo' value={modelo} onChange={(e)=> setModelo(e.target.value)} ></input>
                   {/* value={patente} onChange={(e)=> setPatente(e.target.value)} */}
                   <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Patente' value={patente} onChange={(e)=> setPatente(e.target.value)} ></input>
                   <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Patente acoplado' value={patente_acop} onChange={(e)=> setPatenteAcop(e.target.value)}></input>
                   <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example" placeholder='Carga maxima' value={carga_max} onChange={(e)=> setCargaMax(e.target.value)}></input>
                   <Form.Check required  label="Refrigerado"  feedback="You must agree before submitting."  feedbackType="invalid"/>
               </div>
               <br/>
               <br/>
               <br/>
               <div className='tercercampo'>
                   <h5>Datos adicionales</h5>
                   <hr/>
               </div>
                <div className='tercerinput'>
                <h5>Vencimiento seguro</h5> <h5>Vencimiento patente</h5>
                <input  type='date' className="calendario form-control" id="formGroupExampleInput2" value={ven_seguro} onChange={(e)=> setVenSeguro(e.target.value)}/>
                <input  type='date' className="calendario form-control" id="formGroupExampleInput2" value={ven_patente} onChange={(e)=> setVenPatente(e.target.value)}/>
                
                  <h5>Vencimiento armat</h5> <h5>Vencimiento VTV</h5>
                  <input  type='date' className="calendario form-control" id="formGroupExampleInput2" value={ven_armat} onChange={(e)=> setVenArmat(e.target.value)}/>
                <input  type='date' className="calendario form-control" id="formGroupExampleInput2" value={ven_vtv} onChange={(e)=> setVenVtv(e.target.value)}/>
               </div>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
                <button type="submit" className="btn btn-primary">guardar</button>
            </form>
        </div>
    )
}

export default CompEditStock