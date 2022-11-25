import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import DataTableCrudDemo from './pedidos/ShowPedidos'

import Notificaciones from './notificaciones/Notificaciones'
import Barra from './barra/Barra'

import Informes from './pedidos/Informes/Informes'

import CompCreatePedido from './pedidos/Frescos/CreatePedidosFrescos'
import Login from './login/Login';
import Home from './home/home';
import Configuracion from './configuracion/config'

import PedidoSecos from './pedidos/Secos/Secos';
import CompCreatePedidoSecos from './pedidos/Secos/CreatePedidosSecos'
import ComVerPedidoSecos from './pedidos/Secos/VerSecos'
import CompEditPedidoSecos from './pedidos/Secos/EditSecos'

import Logistica from './pedidos/Logistica/logistica'
import CompCreatePedidoLogistica from './pedidos/Logistica/CreatePedidoLogistica'
import EditPedidoLogistica from './pedidos/Logistica/EditLogistica'
import CompVerPedidoLogistica from './pedidos/Logistica/VerLogistica'

import Telefono from './pedidos/Telefono/Telefono'
import CompCreatetelefono from './pedidos/Telefono/CreateTelefono'
import ComEdittelefono from './pedidos/Telefono/EditTelefono'
import CompVertelefono from './pedidos/Telefono/VerTelefono'

import CompVerCombustible from './pedidos/combustible/VerCombustible'
import Combustible from './pedidos/combustible/Combustible'
import CompCreatePedidoCombustible from './pedidos/combustible/CreatePedidoCombustible'
import CompEditCombustible from './pedidos/combustible/EditCombustible'

import Frescos from './pedidos/Frescos/Frescos'
import CompCreatePedidoFrescos from './pedidos/Frescos/CreatePedidosFrescos'
import CompEditPedidoFrescos from './pedidos/Frescos/EditPedidosFrescos'
import CompVerPedidoFrescos from './pedidos/Frescos/VerPedidosFrescos'

import Prueba from './pedidos/Transporte/Prueba'
import CompCreatePedidoPrueba2 from './pedidos/Transporte/CreatePrueba2'
import CompEditStock from './pedidos/Transporte/EditPrueba'
import CompVerPrueba from './pedidos/Transporte/VerPrueba';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/notificaciones' element={ <Notificaciones/>} />
        <Route path='/notificaciones' element={ <Notificaciones/>} />

        <Route path='/Informes' element={ <Informes/>} />

        <Route path='/Vertransporte/:id' element={ <CompVerPrueba/>} /> 
        <Route path='/Edittransporte/:id' element={ <CompEditStock/>} />  
        <Route path='/Createtransporte' element={ <CompCreatePedidoPrueba2/>} />
        <Route path='/transporte' element={ <Prueba/>} />
            
            <Route path='/Vertelefono/:id' element={ <CompVertelefono/>} />
            <Route path='/Edittelefono/:id' element={ <ComEdittelefono/>} />
            <Route path='/telefono' element={ <Telefono/>} />
            <Route path='/Creartelefono' element={ <CompCreatetelefono/>} />


            <Route path='/Vercombustible/:id' element={ <CompVerCombustible/>} />
            <Route path='/Editcombustible/:id' element={ <CompEditCombustible/>} />
            <Route path='/pedidocombustible' element={ <CompCreatePedidoCombustible/>} />
            <Route path='/combustible' element={ <Combustible/>} />

            <Route path='/PedidosSecos' element={ <PedidoSecos/>} />
            <Route path='/Createsecos' element={ <CompCreatePedidoSecos/>} />
            <Route path='/VerPedidosSecos/:id' element={ <ComVerPedidoSecos/>} />
            <Route path='/EditPedidosSecos/:id' element={ <CompEditPedidoSecos/>} />

            <Route path='/Frescos' element={ <Frescos/>} />
            <Route path='/CreatePedidosFrescos' element={ <CompCreatePedidoFrescos/>} />
            <Route path='/EditPedidosFrescos/:id' element={ <CompEditPedidoFrescos/>} />
            <Route path='/VerPedidosFrescos/:id' element={ <CompVerPedidoFrescos/>} />

            <Route path='/logistica' element={ <Logistica/>} />
            <Route path='/CreatePedidologistica' element={ <CompCreatePedidoLogistica/>} />
            <Route path='/EditPedidologistica/:id' element={ <EditPedidoLogistica/>} />
            <Route path='/VerPedidologistica/:id' element={ <CompVerPedidoLogistica/>} />

            {/* <Route path='/pedidos' element={ <DataTableCrudDemo/>} /> */}
            <Route path='/configuracion' element={ <Configuracion/>} />
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
