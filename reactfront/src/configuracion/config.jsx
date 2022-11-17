//import { convertRoutesToDataRoutes } from "@remix-run/router/dist/utils";
import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './config.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const URI = 'http://localhost:9000/configuracion/'


class Configuracion extends Component {
    state={
        data:[],
        modalInsertar: false,
        modalEliminar: false,
        form:{
            id:'',
            usuario:'',
            contraseña:'',
            nombre:'',
            apellido:'',
            telefono:'',
            email:'',
            puesto:'',
            ubicacion:'',
            tip_usuario:'',
            tipoModal: '',
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
            usuario: transporte.usuario,
            contraseña: transporte.contraseña,
            nombre: transporte.nombre,
            apellido: transporte.apellido,
            telefono: transporte.telefono,
            email: transporte.email,
            puesto: transporte.puesto,
            ubicacion: transporte.ubicacion,
            tip_usuario: transporte.tip_usuario,
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
    //    <div>
    //         <form>
    //             <div class="form-row">
    //                 <div class="col-md-4 mb-3">
    //                 <label for="validationServer01">First name</label>
    //                 <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required/>
    //                 <div class="valid-feedback">
    //                     Looks good!
    //                 </div>
    //                 </div>
    //                 <div class="col-md-4 mb-3">
    //                 <label for="validationServer02">Last name</label>
    //                 <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required/>
    //                 <div class="valid-feedback">
    //                     Looks good!
    //                 </div>
    //                 </div>
    //                 <div class="col-md-4 mb-3">
    //                 <label for="validationServerUsername">Username</label>
    //                 <div class="input-group">
    //                     <div class="input-group-prepend">
    //                     <span class="input-group-text" id="inputGroupPrepend3">@</span>
    //                     </div>
    //                     <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required/>
    //                     <div class="invalid-feedback">
    //                     Please choose a username.
    //                     </div>
    //                 </div>
    //                 </div>
    //             </div>
    //             <div class="form-row">
    //                 <div class="col-md-6 mb-3">
    //                 <label for="validationServer03">City</label>
    //                 <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required/>
    //                 <div class="invalid-feedback">
    //                     Please provide a valid city.
    //                 </div>
    //                 </div>
    //                 <div class="col-md-3 mb-3">
    //                 <label for="validationServer04">State</label>
    //                 <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required/>
    //                 <div class="invalid-feedback">
    //                     Please provide a valid state.
    //                 </div>
    //                 </div>
    //                 <div class="col-md-3 mb-3">
    //                 <label for="validationServer05">Zip</label>
    //                 <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required/>
    //                 <div class="invalid-feedback">
    //                     Please provide a valid zip.
    //                 </div>
    //                 </div>
    //             </div>
    //             <div class="form-group">
    //                 <div class="form-check">
    //                 <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
    //                 <label class="form-check-label" for="invalidCheck3">
    //                     Agree to terms and conditions
    //                 </label>
    //                 <div class="invalid-feedback">
    //                     You must agree before submitting.
    //                 </div>
    //                 </div>
    //             </div>
    //             <button class="btn btn-primary" type="submit">Submit form</button>
    //         </form>
    //    </div>
    <div className="container">
    <div className="row">
      {/* <div class="col-9">.col-9</div> */}
      <h5 className="titulocon">Maestro de Ususarios</h5>
      <div className="col">
          {/* grilla */}
          <Table striped bordered hover className='tablacon'>
                <thead >
                    <tr className='acciones'>
                        <th>Id</th>
                        <th>Usuario</th>
                        <th>Cargo</th>
                        <th>Acciones</th>
                        {/*<th>Importe</th>
                        <th>Acciones</th> */}
                    </tr>
                </thead>
                 <tbody>
                 {this.state.data.map(transporte=>{
                    return(
                        <tr>
                            <td>{transporte.id}</td>
                            <td>{transporte.usuario}</td>
                            <td>{transporte.puesto}</td>
                            <td className=''>
                            <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                                <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                                {"   "}

                                <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                            
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>

      </div>
  
      {/* dividir la pantalla a la mitad */}
  
      <div  className="conte col-6">
          {/* form */}
          <form  className="row g-3">

               <div  className="col-md-2">
                  <input type="text"  className="id form-control" id="id" name="id" placeholder='Códigos' readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
               </div> 
              <div className="usuario">    
              <input type="text"  className="form-control" placeholder='Usuario' name="usuario" id="usuario" onChange={this.handleChange} value={form?form.usuario:''}/>
              <input type="Password"  className="form-control" placeholder='Contraseña' name="contraseña" id="contraseña" onChange={this.handleChange} value={form?form.contraseña:''}/>

              </div>
              <div className="nombreape">
              <input type="text"  className="form-control" placeholder='Nombre' name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre:''}/>
              <input type="text"  className="form-control" placeholder='Apellido' name="apellido" id="apellido" onChange={this.handleChange} value={form?form.apellido:''}/>
              </div>
             
                <div className="celemail">
                <input type="text" className="form-control" placeholder="Número de Celular" name="telefono" id="telefono" onChange={this.handleChange} value={form?form.telefono:''}/>
              <input type="text" className="form-control" placeholder="Email" name="email" id="email" onChange={this.handleChange} value={form?form.email:''}/>

                </div>
             
              {/* <div  className="usuarios col-md-5"> 
              <input type="text"  className="ususarios2 form-control" id="inputUsuario" placeholder='Usuario'/>
               </div>
              
              <div  className="usuarios col-md-6">
              <input type="Password"  className="ususarios2 form-control" id="inputContraseña" placeholder='Contraseña'/>

              </div>
              <div  className="usuarios col-md-6">
              <input type="text"  className="form-control" id="inputNombre" placeholder='Nombre'/>

              </div>
              <div className="usuarios col-6">
              <input type="text"  className="form-control" id="inputApellido" placeholder='Apellido'/>

              </div>
              <div className="usuarios col-6">
              <input type="text" className="form-control" id="inputAddress" placeholder="Número de Celular"/>

              </div>
              <div className="usuarios col-6">
                 
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Email"/>

              </div> */}
            
              <div className="puesto col-md-6">
                    <select className="form-select" placeholder="Puesto" name="puesto" id="puesto" onChange={this.handleChange} value={form?form.puesto:''} >
                    <option selected>Elige...</option>
                    <option>Cocinero</option>
                    <option>Encargado</option>
                    <option>Administrativo</option>
                    <option>Capataz</option>
                  </select>
              </div>
              <div className="ubicacion col-md-6">
                    <select className="form-select" placeholder="Ubicación" name="ubicacion" id="ubicacion" onChange={this.handleChange} value={form?form.ubicacion:''}>
                    <option selected>Elige...</option>
                    <option>Santa Isabel</option>
                    <option>Otros</option>
                    <option>Teode</option>
                    <option>Venado t</option>
                  </select>
              </div>
              
                <label>Tipo de usuario</label>
                <div className="tipusua">
                  <div className="nivel1 form-check col-md-4">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Nivel 1 
                    </label>
                  </div>
                  <div className="form-check col-md-4">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Nivel 2
                    </label>
                  </div>
                  <div className="form-check col-md-4">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Nivel 3
                    </label>
                  </div>
                  </div>
                  <div className="anular form-check col-md-4">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck"> Anula Usuario </label>
                </div>
                  
            <div className="botonesconfig">
            {this.state.tipoModal==='insertar'?
                    <button className="btncon btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btncon btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btncon btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
            </div>
              <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la pedido: {form && form.id}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
        </form>
      </div>
    </div> 
</div>


    )
}
}
export default Configuracion;




 /*  ejemplos  */ 

// <form class="form-floating">
//   <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
//   <label for="floatingInputInvalid">Entrada inválida</label>
// </form> */}


