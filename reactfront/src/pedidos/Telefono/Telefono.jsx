import React, { useState, useEffect, useRef, Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Home from '../../home/home'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './Telefono.css'
import CompCreatetelefono from './CreateTelefono'
//import './DataTableDemo.css';
const URI = 'http://localhost:9000/telefono/'



class Telefono extends Component {
//     const [transportes, setTransporte] = useState([])
//     useEffect(()=>{
//        getTransportes()
//     },[])

//    //mostrar todos los transportes
//    const getTransportes = async () =>{
//        const res = await axios.get(URI)
//        setTransporte(res.data)
//    }


//    //procedimiento para eliminar un transporte
//    const deleteTransporte = async (id) =>{
     
//        await axios.delete(`${URI}${id}`)
//        getTransportes()
//    }
state={
    data:[],
    modalInsertar: false,
    modalEliminar: false,
    form:{
        id:'',
        nombre:'', 
        empresa_tel:'',
        numero_linea:'',
        importe:'',
        tipo_de_pago:''
    }
}

peticionGet=()=>{
    axios.get(URI).then(response=>{
      this.setState({data: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
}

peticionPost=async()=>{
    delete this.state.form.id;
   await axios.post(URI,this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionGet();
    }).catch(error=>{
      console.log(error.message);
    })
}
  
  peticionPut=()=>{
    axios.put(URI+this.state.form.id, this.state.form).then(response=>{
      this.modalInsertar();
      this.peticionGet();
    })
}
  
  peticionDelete=()=>{
    axios.delete(URI+this.state.form.id).then(response=>{
      this.setState({modalEliminar: false});
      this.peticionGet();
    })
}

modalInsertar=()=>{
    this.setState({modalInsertar: !this.state.modalInsertar});
  }
  
  seleccionarEmpresa=(transporte)=>{
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: transporte.id,
        nombre: transporte.nombre,
        empresa_tel: transporte.empresa_tel,
        numero_linea: transporte.numero_linea,
        importe: transporte.importe,
        tipo_de_pago: transporte.tipo_de_pago
      }
    })
  }

  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
    }

    componentDidMount() {
    this.peticionGet();
}

render(){
    const {form}=this.state; 
return(
  <div className="telefono">
    <div className='hometel'>
    <Home/> 
    </div>


    
    <div className='cabezeratele'>
      {/* <Link to='/Creartelefono' className="btnNuevo btn btn-success mr-2 btn-sm"><i className='fas fa-plus'></i></Link> */}
      <button className="botontel btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}><FontAwesomeIcon icon={faPlus} /></button>
      <h5 className='titulotel'>Maestro de telefonos</h5>
    </div>
    
    <div className='btnexportartel'>
        <button className='expotel' size="sm"><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
        <button className='expotel' size="sm"><i className="fa-sharp fa-solid fa-file-excel"></i></button>
    </div>
    {/* <Button className="btnNuevo btn btn-success mr-2 btn-sm" type='submit' onClicks={handleShow} />  */}
     <div className='containertablatel'>
       <div className='row'>
        <div className='col'>
            <Table striped bordered hover className='tablatel' size="sm">
                <thead >
                    <tr className='accionestel'>
                        <th>Id</th>
                        <th className='compotel'>Nombre</th>
                        <th className='compotel'>Empresa tel</th>
                        <th>Numero</th>
                        <th className='compotel'>Importe</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(transporte=>{
                    return(
                        <tr className='acciones2 '>
                            <td >{transporte.id}</td>
                            <td className='compotel'>{transporte.nombre}</td>
                            <td className='compotel'>{transporte.empresa_tel}</td>
                            <td>{transporte.numero_linea}</td>
                            <td className='compotel'>{transporte.importe}</td>
                            <td>
                                <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                                <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                                {"   "}
                                <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                            </td>
                        </tr>
                    )
                    })}
                {/* <tbody className='acciones2'>
                    {transportes.map ( (transporte) => (
                        <tr className='lineas' key={transporte.id}>
                            <td>{transporte.id}</td>
                            <td >{transporte.descripcion}</td>
                            <td className='acciones1'>{transporte.marca}</td>
                            <td className='acciones1'>{transporte.modelo}</td>
                            <td className='acciones1'>{transporte.patente}</td>
                            <td className=''>
                                <div className='btnacciones'>
                                    <Link to={`/Vertelefono/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-magnifying-glass"></i></Link>
                                    <Link to={`/Edittelefono/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={() =>deleteTransporte(transporte.id)} className='botonesacciones btn'><i className="fa-solid fa-trash"></i></button>

                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody> */}
                </tbody>
            </Table>
                <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                  <h5>Recargas telefonicas</h5>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="capital_bursatil">Ingrese cliente</label>
                    <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre:''} required={true}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Empresa telefonica</label>
                    <input className="form-control" type="text" name="empresa_tel" id="empresa_tel" onChange={this.handleChange} value={form?form.empresa_tel:''} required={true}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Numero de linea</label>
                    <input className="form-control" type="text" name="numero_linea" id="numero_linea" onChange={this.handleChange} value={form?form.numero_linea:''} required={true}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Importe a pagar</label>
                    <input className="form-control" type="text" name="importe" id="importe" onChange={this.handleChange} value={form?form.importe:''} required/>
                    <br/>
                    <select className="categoriacom form-select" aria-label="Default select example" required={true} name="tipo_de_pago" id="tipo_de_pago" onChange={this.handleChange} value={form?form.tipo_de_pago: ''} >
                        <option selected>Pago del consumo</option>
                        <option>Pago al intendente</option>
                        <option>Descontar a la empresa contratadora</option>
                        <option>Reembolsable</option>
                        <option>Debe al intendente</option>
                    </select>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal==='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
                  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la pedido: {form && form.id}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
        </div>
    </div>
    </div>
 </div>


    )
  }
}

export default Telefono