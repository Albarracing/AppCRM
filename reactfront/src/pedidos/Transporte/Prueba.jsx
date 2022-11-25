import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
//import CompCreatePedidoPrueb from './CreatePrueba'
//import {useForm} from 'react-hook-form'
import './transporte.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Home from '../../home/home'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const URI = 'http://localhost:9000/transporte/'

class DataTableCrudDemo extends Component {
    state={
        data:[],
        modalInsertar: false,
        modalEliminar: false,
        form:{
            id:'',
            descripcion:'',
            marca:'',
            modelo:'' ,
            patente:'' ,
            patente_acop:'',
            carga_max:'', 
            ven_seguro:'',
            ven_patente:'',
            ven_armat:'',
            ven_vtv:''
    
        }   }
        
        //  const [transportes, setTransporte] = useState([])
        //  useEffect(()=>{
        //     getTransportes()
        //  },[])

        // //mostrar todos los transportes
        // const getTransportes = async () =>{
        //     const res = await axios.get(URI)
        //     setTransporte(res.data)
        // }
        // //procedimiento para eliminar un transporte
        // const deleteTransporte = async (id) =>{
          
        //     await axios.delete(`${URI}${id}`)
        //     getTransportes()
        // }
        // const {register, handleSubmit} = useForm();

        // const onSubmit = (data) =>{
        //   console.log(data)
        // }

        //  const [show, setShow] = useState(false);

        //  const handleClose = () => setShow(false);
        //  const handleShow = () => setShow(true);
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
                id:transporte.id,
                descripcion:transporte.descripcion,
                marca:transporte.marca,
                modelo:transporte.modelo ,
                patente:transporte.patente ,
                patente_acop:transporte.patente_acop,
                carga_max:transporte.carga_max, 
                ven_seguro:transporte.ven_seguro,
                ven_patente:transporte.ven_patente,
                ven_armat:transporte.ven_armat,
                ven_vtv:transporte.ven_vtv
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
    <>
        <div className='hometrans'>
        <Home/> 
        </div>

    <div className="transporte">
        
        <div className='cabezeratransporte'>
          {/* <Link to='/Createtransporte' className="btnNuevo btn btn-success mr-2 btn-sm"><i className='fas fa-plus'></i></Link> */}
          <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}><FontAwesomeIcon icon={faPlus} /></button>
          <h5 className='titulotrans'>Maestro de vehículo</h5>
          
        </div>
        <div className='btnexportar'>
            <button className='expotrans'><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
            <button className='expotrans'><i className="fa-sharp fa-solid fa-file-excel"></i></button>
        </div>
        {/* <Button className="btnNuevo btn btn-success mr-2 btn-sm" type='submit' onClicks={handleShow} />  */}
         <div className='containertablatrans'>
           <div className='row'>
            <div className='col'>
                <Table striped bordered hover className='tablatrans' size="sm">
                    <thead >
                        <tr className='acciones'>
                            <th>Id</th>
                            <th>Descripcion</th>
                            <th className='campostrans'>Marca</th>
                            <th className='campostrans'>Patente</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map(transporte=>{
                    return(
                        <tr className='acciones2'>
                            <td >{transporte.id}</td>
                            <td>{transporte.descripcion}</td>
                            <td className='campostrans'>{transporte.marca}</td>
                            <td className='campostrans'>{transporte.patente}</td>
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
                            <tr key={transporte.id}>
                                <td>{transporte.id}</td>
                                <td>{transporte.descripcion}</td>
                                <td>{transporte.marca}</td>
                                <td>{transporte.modelo}</td>
                                <td>{transporte.patente}</td>
                                <td className=''>
                                    <div className='btnacciones'>
                                        <Link to={`/Vertransporte/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-magnifying-glass"></i></Link>
                                        <Link to={`/Edittransporte/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() =>deleteTransporte(transporte.id)} className='botonesacciones btn'><i className="fa-solid fa-trash"></i></button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                    </tbody>
                </Table>

                <Modal isOpen={this.state.modalInsertar} className='modalcombus'>
                <ModalHeader className='modalhedertrans' style={{display: 'block'}}>
                
                 <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>X</span> 
                 <h5 >Alta de transporte</h5>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                  <label htmlFor="id">ID</label>
                    <div className='primercampo'>
                    
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <input className="form-control" type="text" name="descripcion" id="descripcion" placeholder='Descripción' onChange={this.handleChange} value={form?form.descripcion:''}/>
                    </div>
                    <br />
                    <div className='segundocampo'>
                    <h5>Datos del vehículo</h5>
                    <hr/>
                    </div>
                    <div className='segundoinput'>
                    <input className="form-control" type="text" name="marca" id="marca" placeholder='Marca' onChange={this.handleChange} value={form?form.marca:''}/>
                    <input className="form-control" type="text" name="modelo" id="modelo" placeholder='Modelo' onChange={this.handleChange} value={form?form.modelo:''}/>
                    <input className="form-control" type="text" name="patente" id="patente" placeholder='Patente' onChange={this.handleChange} value={form?form.patente:''}/>
                    <input className="form-control" type="text" name="patente_acop" id="patente_acop" placeholder='Patente acoplado' onChange={this.handleChange} value={form?form.patente_acop:''}/>
                    <input className="form-control" type="text" name="carga_max" id="carga_max" placeholder='Carga maxima' onChange={this.handleChange} value={form?form.carga_max:''}/>
                    </div>
                    <div className='tercercampo'>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h5>Datos adicionales</h5>
                    <hr/>
                    </div>
                   
                    <div className='tercerinput'>
                <h5>Vencimiento seguro</h5> <h5>Vencimiento patente</h5>
                <input  type='date' className="calendario form-control" name="ven_seguro" id="ven_seguro" placeholder='Carga maxima' onChange={this.handleChange} value={form?form.ven_seguro:''}/>
                <input  type='date' className="calendario form-control" name="ven_patente" id="ven_patente" placeholder='Carga maxima' onChange={this.handleChange} value={form?form.ven_patente:''} />
            
                <h5>Vencimiento armat</h5> <h5>Vencimiento VTV</h5>
                <input  type='date' className="calendario form-control" name="ven_armat" id="ven_armat" placeholder='Carga maxima' onChange={this.handleChange} value={form?form.ven_armat:''}/>
                <input  type='date' className="calendario form-control" name="ven_vtv" id="ven_vtv" placeholder='Carga maxima' onChange={this.handleChange} value={form?form.ven_vtv:''}/>
                </div>
                  </div>
                    <br/>
                    <br/>
                    <br />
                    <br/>
                    <br/>
                    <br/>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
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
</>
)
}
}
export default DataTableCrudDemo


 {/* <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>nombre</label>
            <input type='text'{...register('nombre')}></input>
        </div>
        <div>
            <label>direccion</label>
            <input type='text'{...register('direccion')}></input>
        </div>
        <div>
            <label>edad</label>
            <input type='text'{...register('edad')}></input>
        </div>
        <input type='submit' value='enviar'></input>
    </form>
    </div> */}