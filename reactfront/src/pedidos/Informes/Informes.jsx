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
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

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
            fecha_estadia:'',
            cantidad_changos:'',
            cant_almuerzo_changos:'',
            cant_cena_changos:'',
            ingreso_changos:'',
            ingreso_changos_hora:'',
            salida_changos:'',
            salida_changos_hora:'',
            cantidad_chofer:'',
            cantidad_almuerzo_chofer:'',
            cantidad_cena_chofer:'',
            ingreso_chofer:'',
            ingreso_chofer_hora:'',
            salida_chofer:'',
            salida_chofer_hora:'',
            cant_estadia_cober_prop:'',
            cant_almuer_estadia_cober_prop:'',
            cant_cena_estadia_cober_prop:'',
            ingre_estadia_cober_prop:'',
            ingre_hora_estadia_cober_prop:'',
            sali_estadia_cober_prop:'',
            sali_hora_estadia_cober_prop:'',
            chango_por_llegar_dia:'',
            chango_por_llegar_hora:'',
            chango_por_salir_cant:'',

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
                fecha_estadia: transporte.fecha_estadia,
                cant_almuerzo_changos: transporte.cant_almuerzo_changos,
                cant_cena_changos: transporte.cant_cena_changos,
                ingreso_changos:transporte.ingreso_changos,
                ingreso_changos_hora: transporte.ingreso_changos_hora,
                salida_changos: transporte.salida_changos,
                salida_changos_hora: transporte.salida_changos_hora,
                cantidad_chofer:transporte.cantidad_chofer,
                cantidad_almuerzo_chofer: transporte.cantidad_almuerzo_chofer,
                cantidad_cena_chofer: transporte.cantidad_cena_chofer,
                ingreso_chofer: transporte.ingreso_chofer,
                ingreso_chofer_hora: transporte.ingreso_chofer_hora,
                salida_chofer:transporte.salida_chofer,
                salida_chofer_hora: transporte.salida_chofer_hora,
                cant_estadia_cober_prop: transporte.cant_estadia_cober_prop,
                cant_almuer_estadia_cober_prop: transporte.cant_almuer_estadia_cober_prop,
                cant_cena_estadia_cober_prop: transporte.cant_cena_estadia_cober_prop,
                ingre_estadia_cober_prop:transporte.ingre_estadia_cober_prop,
                ingre_hora_estadia_cober_prop: transporte.ingre_hora_estadia_cober_prop,
                sali_estadia_cober_prop: transporte.sali_estadia_cober_prop,
                sali_hora_estadia_cober_prop: transporte.sali_hora_estadia_cober_prop,
                chango_por_llegar_dia:transporte.chango_por_llegar_dia,
                chango_por_llegar_hora:transporte.chango_por_llegar_hora,
                chango_por_salir_cant:transporte.chango_por_salir_cant,
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
            {/* <button className='expofres'><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
            <button className='expofres'><i className="fa-sharp fa-solid fa-file-excel"></i></button> */}
            <ReactHTMLTableToExcel
                   
                   className="fa-sharp fa-solid fa-file-excel"
                   table="table-to-xls"
                   filename="Informes"
                   sheet="Informes"
                   >
         <button className='expo'><i className="fa-sharp fa-solid fa-file-excel"></i></button></ReactHTMLTableToExcel>
        </div>
        
           
        
        
         <div className='containertablacom'>
           <div className='row'>
            <div className='col'>
                <Table striped bordered hover className='tablainfo' size="sm" id='table-to-xls'>
                    <thead >
                        <tr className='accionescombu'>
                            <th>Id</th>
                            <th>Fecha</th> 
                            <th className='camposcombu'>Intendencia</th>
                            <th>Km recorridos</th>
                            <th>Km total</th>
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
                            <td>{transporte.cant_estadias}</td>
                            <td>{transporte.cant_km}</td>
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
              <Modal isOpen={this.state.modalInsertar} className='modalcombus modal-dialog modal-dialog-scrollable'>
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
                        <option>KWS-ISABEL</option>
                        <option>SANPA-ISABEL</option>
                        <option>BAYER-ISABEL</option>
                        <option>SINGENTA-ISABEL</option>
                        <option>CORTEVA-ISABEL</option>
                        <option>CORTEVA-VENADO</option>
                        <option>KWS-RAWSON</option>
                        <option>KWS-SALTO</option>
                        <option>KWS-ALFONSO</option>
  
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
                    <hr/>
                    <h5>Control de estadias</h5>
                    <label for="formGroupExampleInput2" className="form-label">Fecha estadia</label>
                    <input  type='date' name='fecha_estadia' className="fechainfo form-control" id='fecha_estadia' onChange={this.handleChange} value={form?form.fecha_estadia: ''} required={true}></input>
                    {/* <select className="fechainfo form-select" name='intendencia' id='intendencia' onChange={this.handleChange} value={form?form.intendencia: ''} required={true}>
                        <option selected>Cliente</option>
                        <option>KWS-ISABEL</option>
                        <option>SANPA-ISABEL</option>
                        <option>BAYER-ISABEL</option>
                        <option>SINGENTA-ISABEL</option>
                        <option>CORTEVA-ISABEL</option>
                        <option>CORTEVA-VENADO</option> 
                        <option>KWS-RAWSON</option>
                        <option>KWS-SALTO</option>
                        <option>KWS-ALFONSO</option>
  
                    </select> */}
                    <label>Cantidad de changos</label>
                    <input className="form-control" type="text" name="cantidad_changos" id="cantidad_changos" onChange={this.handleChange} value={form?form.cantidad_changos:''}/>
                    <label>Cantidad almuerzo changos </label>
                    <input className="form-control" type="text" name="cant_almuerzo_changos" id="cant_almuerzo_changos" onChange={this.handleChange} value={form?form.cant_almuerzo_changos:''}/>
                    <label>Cantidad cena changos </label>
                    <input className="form-control" type="text" name="cant_cena_changos" id="cant_cena_changos" onChange={this.handleChange} value={form?form.cant_cena_changos:''}/>
                    <label for="formGroupExampleInput2" className="form-label">Ingreso chango</label>
                    <input  type='date' name='ingreso_changos' className="fechainfo form-control" id='ingreso_changos' onChange={this.handleChange} value={form?form.ingreso_changos: ''} required={true}></input>
                    <input  type='time' name='ingreso_changos_hora' className="fechainfo form-control" id='ingreso_changos_hora' onChange={this.handleChange} value={form?form.ingreso_changos_hora: ''} required={true}></input>

                    <label for="formGroupExampleInput2" className="form-label">Salida chango</label>
                    <input  type='date' name='salida_changos' className="fechainfo form-control" id='salida_changos' onChange={this.handleChange} value={form?form.salida_changos: ''} required={true}></input>
                    <input  type='date' name='salida_changos_hora' className="fechainfo form-control" id='salida_changos_hora' onChange={this.handleChange} value={form?form.salida_changos_hora: ''} required={true}></input>

                    <label>Cantidad chofer </label>
                    <input className="form-control" type="text" name="cantidad_chofer" id="cantidad_chofer" onChange={this.handleChange} value={form?form.cantidad_chofer:''}/>
                    <label>Cantidad almuerzo chofer </label>
                    <input className="form-control" type="text" name="cantidad_almuerzo_chofer" id="cantidad_almuerzo_chofer" onChange={this.handleChange} value={form?form.cantidad_almuerzo_chofer:''}/>
                    <label>Cantidad cena chofer</label>
                    <input className="form-control" type="text" name="cantidad_cena_chofer" id="cantidad_cena_chofer" onChange={this.handleChange} value={form?form.cantidad_cena_chofer:''}/>
                    <label for="formGroupExampleInput2" className="form-label">Ingreso chofer</label>
                    <input  type='date' name='ingreso_chofer' className="fechainfo form-control" id='ingreso_chofer' onChange={this.handleChange} value={form?form.ingreso_chofer: ''} required={true}></input>
                    <input  type='time' name='ingreso_chofer_hora' className="fechainfo form-control" id='ingreso_chofer_hora' onChange={this.handleChange} value={form?form.ingreso_chofer_hora: ''} required={true}></input>

                    <label for="formGroupExampleInput2" className="form-label">Salida chofer</label>
                    <input  type='date' name='salida_chofer' className="fechainfo form-control" id='salida_chofer' onChange={this.handleChange} value={form?form.salida_chofer: ''} required={true}></input>
                    <input  type='time' name='salida_chofer_hora' className="fechainfo form-control" id='salida_chofer_hora' onChange={this.handleChange} value={form?form.salida_chofer_hora: ''} required={true}></input>

                    <label>Cantidad estadia cobertura propia</label>
                    <input className="form-control" type="text" name="cant_estadia_cober_prop" id="cant_estadia_cober_prop" onChange={this.handleChange} value={form?form.cant_estadia_cober_prop:''}/>
                    <label>Cantidad almuerzo estadia cobertura propia</label>
                    <input className="form-control" type="text" name="cant_almuer_estadia_cober_prop" id="cant_almuer_estadia_cober_prop" onChange={this.handleChange} value={form?form.cant_almuer_estadia_cober_prop:''}/>
                    <label>Cantidad cena cobertura propia</label>
                    <input className="form-control" type="text" name="cant_cena_estadia_cober_prop" id="cant_cena_estadia_cober_prop" onChange={this.handleChange} value={form?form.cant_cena_estadia_cober_prop:''}/>
                    <label for="formGroupExampleInput2" className="form-label">ingreso estadia cobertura propia</label>
                    <input  type='date' name='ingre_estadia_cober_prop' className="fechainfo form-control" id='ingre_estadia_cober_prop' onChange={this.handleChange} value={form?form.ingre_estadia_cober_prop: ''} required={true}></input>
                    <input  type='time' name='ingre_hora_estadia_cober_prop' className="fechainfo form-control" id='ingre_hora_estadia_cober_prop' onChange={this.handleChange} value={form?form.ingre_hora_estadia_cober_prop: ''} required={true}></input>

                    <label for="formGroupExampleInput2" className="form-label">Salida estadia cobertura propia</label>
                    <input  type='date' name='sali_estadia_cober_prop' className="fechainfo form-control" id='sali_estadia_cober_prop' onChange={this.handleChange} value={form?form.sali_estadia_cober_prop: ''} required={true}></input>
                    <input  type='time' name='sali_hora_estadia_cober_prop' className="fechainfo form-control" id='sali_hora_estadia_cober_prop' onChange={this.handleChange} value={form?form.sali_hora_estadia_cober_prop: ''} required={true}></input>

                    <label for="formGroupExampleInput2" className="form-label">Chango por llegar-dia</label>
                    <input  type='date' name='chango_por_llegar_dia' className="fechainfo form-control" id='chango_por_llegar_dia' onChange={this.handleChange} value={form?form.chango_por_llegar_dia: ''} required={true}></input>
                    <input  type='time' name='chango_por_llegar_hora' className="fechainfo form-control" id='chango_por_llegar_hora' onChange={this.handleChange} value={form?form.chango_por_llegar_hora: ''} required={true}></input>

                    <label>Chango por salir cantidad</label>
                    <input className="form-control" type="text" name="chango_por_salir_cant" id="chango_por_salir_cant" onChange={this.handleChange} value={form?form.chango_por_salir_cant:''}/>



                    {/* <label>Cantidad de bidones al dispencer </label>
                    <input className="form-control" type="text" name="hielo_complejo" id="hielo_complejo" onChange={this.handleChange} value={form?form.hielo_complejo:''}/>  */}
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