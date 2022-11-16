import React from "react";
import Table from 'react-bootstrap/Table';


const Configuracion = () =>{
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
    <div class="container">
    <div class="row">
      {/* <div class="col-9">.col-9</div> */}
      <label>Maestro de Ususarios</label>
      <div class="col-6">
          {/* grilla */}
          <Table striped bordered hover className='tabla'>
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
                {/* <tbody className='acciones2'>
                    {transportes.map ( (transporte) => (
                        <tr key={transporte.id}>
                            <td>{transporte.id}</td>
                            <td>{transporte.descripcion}</td>
                            <td>{transporte.marca}</td>
                            <td>{transporte.modelo}</td>
                            <td>{transporte.patente}</td>
                            <td className=''>
                                
                            </td>
                        </tr>
                    ))}
                </tbody> */}
            </Table>

      </div>
  
      {/* dividir la pantalla a la mitad */}
  
      <div class="col-6">
          {/* form */}
          <form class="row g-3">
              <div class="col-md-2">
                  <input type="Id" class="form-control" id="inputId" placeholder='Códigos'/>
              </div>
              <div class="col-md-5">
                  <input type="text" class="form-control" id="inputUsuario" placeholder='Usuario'/>
              </div>
              <div class="col-md-5">
                  <input type="Password" class="form-control" id="inputContraseña" placeholder='Contraseña'/>
              </div>
              
              <div class="col-md-6">
                  <input type="text" class="form-control" id="inputNombre" placeholder='Nombre'/>
              </div>
              <div class="col-md-6">
                  <input type="text" class="form-control" id="inputApellido" placeholder='Apellido'/>
              </div>
              <div class="col-6">
                  <input type="text" class="form-control" id="inputAddress" placeholder="Número de Celular"/>
              </div>
              <div class="col-6">
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Email"/>
              </div>
              <div class="col-md-6">
                    <select id="inputState" class="form-select" placeholder="Puesto" >
                    <option selected>Elige...</option>
                    <option selected>Cocinero</option>
                    <option selected>Encargado</option>
                    <option selected>Administrativo</option>
                    <option selected>Capataz</option>
                  </select>
              </div>
              <div class="col-md-6">
                    <select id="inputState" class="form-select" placeholder="Ubicación" >
                    <option selected>Elige...</option>
                    <option selected>Santa Isabel</option>
                    <option selected>Otros</option>
                    <option selected>Teode</option>
                    <option selected>Venado t</option>
                  </select>
              </div>
              
                <label>Tipo de usuario</label>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Nivel 1 
                    </label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Nivel 2
                    </label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Nivel 3
                    </label>
                  </div>
                  <div class="form-check col-md-4">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck"> Anula Usuario </label>
                  </div>
              <div class="col-4">
                  <button type="submit" class="btn btn-primary">Guardar</button>
              </div>
              <div class="col-4">
                  <button type="submit" class="btn btn-primary">Cancelar</button>
              </div>
          </form>
      </div>
  
      
    </div>
  </div>
     


    )
}

export default Configuracion;




/*  ejemplos  */ 

// <form class="form-floating">
//   <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
//   <label for="floatingInputInvalid">Entrada inválida</label>
// </form>
