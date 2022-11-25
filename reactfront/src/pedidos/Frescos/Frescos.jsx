import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
//import CompCreatePedidoPrueb from './CreatePrueba'
//import {useForm} from 'react-hook-form'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Home from '../../home/home'
import Table from 'react-bootstrap/Table'
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {CSVLink} from 'react-csv'
//import ReactExport from 'react-export-excel';
//import { DownloadTableExcel } from 'react-export-table-to-excel';
//import ReactHTMLTableToExcel from 'react-html-table-to-excel';
//pdf

import { Document, Page } from 'react-pdf';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const URI = 'http://localhost:9000/frescos/'


class Frescos extends Component {
    state={
        data:[],
        modalInsertar: false,
        modalEliminar: false,
        form:{
            id:'',
            categoria: '',
            articulos: '',
            cantidad: '',
            fecha_entrega: ''
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
                      categoria: transporte.categoria,
                      articulos: transporte.articulos,
                      cantidad: transporte.cantidad,
                      fecha_entrega: transporte.fecha_entrega
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
  


render(){
    const {form}=this.state;
 return(
    <>
        <div className='homefres'>
        <Home/> 
        </div>

    <div className="frescos">
        
        <div className='cabezerafres'>
          <button className="btnfres btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}><FontAwesomeIcon icon={faPlus} /></button>
          <h5 className='titulofres'>Maestro de frescos</h5>
        </div>
        <div className='btnexportarfres'>
            {/* <button className='expofres'><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
            <button className='expofres'><i className="fa-sharp fa-solid fa-file-excel"></i></button> */}
            
           {/* <CSVLink data={form} filename={"tablafrescos.csv"}> <button className='expofres'><i className="fa-sharp fa-solid fa-file-excel"></i></button></CSVLink>  */}

           <ReactHTMLTableToExcel
                   
                    className="fa-sharp fa-solid fa-file-excel"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    >
          <button className='expofres'><i className="fa-sharp fa-solid fa-file-excel"></i></button></ReactHTMLTableToExcel>
          </div>
          {/* <Document file="table-to-xls" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
        
      </Document> */}
      {/* <a href="./Frescos" > <button>Ir a PDF</button></a>
          <div>
                <object
                table='table-to-xls'
                type="application/pdf"
                
                >
                  <button className='expofres'><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
                  </object>
                  
            </div> */}
        
        {/* <Button className="btnNuevo btn btn-success mr-2 btn-sm" type='submit' onClicks={handleShow} />  */}
         <div className='containertablafres'>
           <div className='row'>
            <div className='col'>
                <Table striped bordered hover className='tablafres' id='table-to-xls'>
                    <thead >
                        <tr className='acciones'>
                            <th>Id</th>
                            <th>Categoria</th>
                            <th className='campofres'>Articulos</th>
                            <th className='campofres'>Cantidad</th>
                            <th className='campofres'>Fech entrega</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='acciones2'>
                    {this.state.data.map (transporte => {
                        return(
                        <tr>
                            <td>{transporte.id}</td>
                            <td>{transporte.categoria}</td>
                            <td className='campofres'>{transporte.articulos}</td>
                            <td className='campofres'>{transporte.cantidad}</td>
                            <td className='campofres'>{transporte.fecha_entrega}</td>
                            <td>
                            <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                                <button className="btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                                {"   "}
                                <button className="btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                            </td>
                        </tr>
                        )
                        })}
                    </tbody>
                    {/* <tbody className='acciones2'>
                        {transportes.map ( (transporte) => (
                            <tr key={transporte.id}>
                                <td>{transporte.id}</td>
                                <td>{transporte.categoria}</td>
                                <td>{transporte.articulos}</td>
                                <td>{transporte.cantidad}</td>
                                <td>{transporte.fecha_entrega}</td>
                                <td className=''>
                                    <div className='btnacciones'>
                                        <Link to={`/VerPedidosFrescos/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-magnifying-glass"></i></Link>
                                        <Link to={`/EditPedidosFrescos/${transporte.id}`} className='botonesacciones btn'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() =>deleteTransporte(transporte.id)} className='botonesacciones btn'><i className="fa-solid fa-trash"></i></button>

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                </Table>

                <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                  <h5>Pedido frescos</h5>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label for="formGroupExampleInput2" className="fecha form-label">Ingrese fecha de entrega</label>
                    <input  type='date' name='fecha_entrega' className="fechainfo form-control" id='fecha_entrega' onChange={this.handleChange} value={form?form.fecha_entrega: ''} required={true}></input>
                  
                    <select className="fechainfo form-select" name='categoria' id='categoria' onChange={this.handleChange} value={form?form.categoria: ''} required={true}>
                    <option selected>Seleccione categoria</option>
                    <option>Carne</option>
                        <option>Verdura</option>
                </select>
                    <br />
                    <select className="fechainfo form-select" name='articulos' id='articulos' onChange={this.handleChange} value={form?form.articulos: ''} required >
                          <option selected>Seleccione articulo</option>
                          <option >Carne vaca</option>
                          <option>pollo</option>
                          <option>chancho</option>
                      </select>
                    <br />
                    <label htmlFor="capital_bursatil">Ingrese cantidad</label>
                    <input className="form-control" type="text" name="cantidad" id="cantidad" onChange={this.handleChange} value={form?form.cantidad:''} required={true}/>
                  </div>
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
export default Frescos


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