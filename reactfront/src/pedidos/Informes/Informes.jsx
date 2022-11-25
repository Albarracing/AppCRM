import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Home from '../../home/home'
import Table from 'react-bootstrap/Table'
import './Informes.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MdImportExport } from 'react-icons/md';
const URI = 'http://localhost:9000/informes/'

class Informes extends Component {
    state={
        data:[],
        modalInsertar: false,
        modalEliminar: false,
        form:{
            id:'',
            fecha:'',
            nomre_int:'',
            intendencia:'',
            cant_estadias:'',
            cant_km:'',
            fac_extra:'',
            desc_fec_extra:'',
            bidones_util:'',
            bidones_recar:'',
            bidones_nuevos:'',
            bidones_trafic:'',
            bidones_dispencer:'',
            bolsa_hielo:'',
            hielo_trafic:'',
            observaciones:'',
            semillero_hielo:'',
            agua_complejo:'',
            hielo_complejo:'',
            tipoModal:'',
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
                fecha: transporte.fecha,
                nomre_int:transporte.nomre_int,
                intendencia:transporte.intendencia,
                cant_estadias:transporte.cant_estadias,
                cant_km:transporte.cant_km,
                fac_extra:transporte.fac_extra,
                desc_fec_extra:transporte.desc_fec_extra,
                bidones_util:transporte.bidones_util,
                bidones_recar:transporte.bidones_recar,
                bidones_nuevos:transporte.bidones_nuevos,
                bidones_trafic:transporte.bidones_trafic,
                bidones_dispencer:transporte.bidones_dispencer,
                bolsa_hielo:transporte.bolsa_hielo,
                hielo_trafic:transporte.hielo_trafic,
                observaciones:transporte.observaciones,
                semillero_hielo:transporte.semillero_hielo,
                agua_complejo:transporte.agua_complejo,
                hielo_complejo:transporte.hielo_complejo,
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
  <div className="informes">
    
         <div className='homeinfo'>
        <Home/> 
        </div>

    
        
        <div className="agregarinfo" >
          <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}><FontAwesomeIcon icon={faPlus} /></button>
          <h5 className='tituloinfo'>Informes diarios</h5>
          {/* <button className='expo' ><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
            <button className='expo'><i className="fa-sharp fa-solid fa-file-excel"></i></button> */}
        </div>
        <div className='btnexportarfres'>
            <button className='expofres'><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
            <button className='expofres'><i className="fa-sharp fa-solid fa-file-excel"></i></button>
        </div>
        
           
        
        
         <div className='containertablacom'>
           <div className='row'>
            <div className='col'>
                <Table striped bordered hover className='tablainfo' size="sm">
                    <thead >
                        <tr className='accionescombu'>
                            <th>Id</th>
                            <th>Fecha</th> 
                            <th className='camposcombu'>Intendencia</th>
                            
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map(transporte=>{
                    return(
                        <tr className='acciones2 '>
                            <td >{transporte.id}</td>
                            <td>{transporte.fecha}</td>
                            <td className='camposcombu'>{transporte.intendencia}</td>
                            
                            <td>
                                <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                                {"   "}
                                <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>

                                <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                            </td>
                        </tr>
                    )
                    })}
                    
                    </tbody>
                </Table>
              <Modal isOpen={this.state.modalInsertar} className='modalcombus'>
                <ModalHeader className='modalhederr' style={{display: 'block'}}>
                  {/* <span  style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span> */}
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                  <h5 className='infodia'>Informes diarios</h5>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label for="formGroupExampleInput2" className="form-label">Ingrese fecha del informe</label>
                    <input  type='date' name='fecha' className="fechainfo form-control" id='fecha' onChange={this.handleChange} value={form?form.fecha: ''} required={true}></input>
                  
                    <select className="fechainfo form-select" name='intendencia' id='intendencia' onChange={this.handleChange} value={form?form.intendencia: ''} required={true}>
                        <option selected>Intendencia</option>
                        <option>KWS-Complejo</option>
                        <option>KWS-Campamento</option>
                        <option>CORTEVA-Santa Isabel</option>
                        <option>CORTEVA-Venado Tuerto</option>
                        <option>BAYER</option>
                        <option>SANPA</option>
                        <option>ZUCO</option>
                    </select>
                    <label htmlFor="capital_bursatil">Kilometros semillero</label>
                    <input className="form-control" type="text" name="cant_estadias" id="cant_estadias" onChange={this.handleChange} value={form?form.cant_estadias:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Kilometros total </label>
                    <input className="form-control" type="text" name="cant_km" id="cant_km" onChange={this.handleChange} value={form?form.cant_km:''}/>
                    {/* <br/>
                    <br/> */}
                    {/* <select className="fechainfo form-select" aria-label="Default select example" required={true} name="fac_extra" id="fac_extra" onChange={this.handleChange} value={form?form.fac_extra:''}>
                        <option selected>Hubo facturacion extra</option>
                        <option>Si</option>
                        <option>No</option>
                    </select> */}
                    {/* <br/> */}
                    {/* <label>Que servicio o producto debemos facturar? </label>
                    <input className="form-control" type="text" name="desc_fec_extra" id="desc_fec_extra" onChange={this.handleChange} value={form?form.desc_fec_extra:''}/> */}
                    {/* <br/> */}
                    <label>Bidones utilizados para el semillero/campo</label>
                    <input className="form-control" type="text" name="bidones_util" id="bidones_util" onChange={this.handleChange} value={form?form.bidones_util:''}/>
                    <br/>
                     <label>kilos de hielo para el semillero/campo </label>
                    <input className="form-control" type="text" name="semillero_hielo" id="semillero_hielo" onChange={this.handleChange} value={form?form.semillero_hielo:''}/>
                    <br/>
                   <label>Cantidad de bidones utilizados para complejo </label>
                    <input className="form-control" type="text" name="agua_complejo" id="agua_complejo" onChange={this.handleChange} value={form?form.agua_complejo:''}/>
                    <br/>
                    <label>Cantidad de kilos de hielo utilizados para complejo </label>
                    <input className="form-control" type="text" name="bidones_trafic" id="bidones_trafic" onChange={this.handleChange} value={form?form.bidones_trafic:''}/>
                    <br/>
                    <label>Cantidad de bidones al dispencer </label>
                    <input className="form-control" type="text" name="hielo_complejo" id="hielo_complejo" onChange={this.handleChange} value={form?form.hielo_complejo:''}/> 
                    {/* <br/>
                    <label htmlFor="capital_bursatil">Cantidad de bolsas de hielo/semillero </label>
                    <input className="form-control" type="text" name="bolsa_hielo" id="bolsa_hielo" onChange={this.handleChange} value={form?form.bolsa_hielo:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Cuantas de bolsas fueron a la trafic</label>
                    <input className="form-control" type="text" name="hielo_trafic" id="hielo_trafic" onChange={this.handleChange} value={form?form.hielo_trafic:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Observaciones/Novedades</label>
                    <input className="form-control" type="text" name="observaciones" id="observaciones" onChange={this.handleChange} value={form?form.observaciones:''}/>
                    <br/> */}
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
export default Informes