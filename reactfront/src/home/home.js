
import 'primeicons/primeicons.css';
import React, { useState } from 'react';
import {
    
    FaBars,
    FaThList
}from "react-icons/fa";
import {FiSettings} from 'react-icons/fi'
import {TbMeat, TbGasStation, } from 'react-icons/tb'
import {MdOutlineEmojiFoodBeverage} from 'react-icons/md'
import {BsTelephone, BsTruck} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Barra from '../barra/Barra';

const Home = () =>{
    

    //   const[isOpen ,setIsOpen] = useState(false);
    //   const toggle = () => setIsOpen (!isOpen);
    //   const menuItem=[
  
    //       {
    //           path:"/",
    //           name:"Usuarios",
    //           icon:<AiOutlineUser/>,
    //       },
    //       {
    //           path:"/configuracion",
    //           name:"Configuracion",
    //           icon:<FiSettings/>
    //       },
    //       {
    //           path:"/Frescos",
    //           name:"Frescos",
    //           icon:<TbMeat/>
    //       },
             
    //       {
    //           path:"/PedidosSecos",
    //           name:"Secos",
    //           icon:<MdOutlineEmojiFoodBeverage/>
    //       },
    //       {
    //           path:"/logistica",
    //           name:"Logistica",
    //           icon:<FaThList/>
    //       },
    //       {
    //         path:"/telefono",
    //         name:"Telefono",
    //         icon:<BsTelephone/>
    //     },
    //     {
    //       path:"/transporte",
    //       name:"Transporte",
    //       icon:<BsTruck/>
    //   },
    //   {
    //     path:"/combustible",
    //     name:"Combustible",
    //     icon:<TbGasStation/>
    // },

    //   ]

     
      return (

        <div>
          {/* <Link className='iconouser' to='/notificaciones' onClick={()=>{ this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faBell} /></Link>  */}

          <Barra/>
          
           
          
          {/* <div className='homebarra'>
             <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                 <div className="top_section">
                     <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                     <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                         <FaBars onClick={toggle}/>
                     </div>
                 </div>
                 {
                     menuItem.map((item, index)=>(
                         <NavLink to={item.path} key={index} className="link" activeclassName="active">
                             <div className="icon">{item.icon}</div>
                             <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                         </NavLink>
                
                     ))
                    
                 }
             </div>

             </div> */}
          </div>
      );
  };
  
  export default Home


        //      <div className='nav'>
        //       {[false,].map((expand) => (
        //         <Navbar key={expand} bg="light" expand={expand} className="menu mb-3">
        //           <div className='menu3'>
        //           <Container fluid>  
                   
        //               <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
        //             <Navbar.Offcanvas className='menu2'
        //               id={`offcanvasNavbar-expand-${expand}`}
        //               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        //               position='left'
        //             >
                      
        //               <Offcanvas.Header closeButton className='menu2'>
        //                 <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>  
                         
        //                   </Offcanvas.Title>
        //               </Offcanvas.Header>
        //               <Offcanvas.Body className='menu3' >
        //                 <Nav className="justify-content-end flex-grow-1 pe-3">
        //                   <Nav.Link href="/configuracion">Configuracion<i className="iconhome fa-solid fa-gear"></i></Nav.Link>
        //                   <Nav.Link href="/informes">Informes<i className="iconhome fa-solid fa-clipboard"></i></Nav.Link>  
                         
        //                    <NavDropdown 
        //                     title="Reportes" after
        //                     id={`offcanvasNavbarDropdown-expand-${expand}`} >
                          
        //                     <NavDropdown.Item href="/pedidos">Frescos</NavDropdown.Item>
        //                     <NavDropdown.Item href="/PedidosSecos">Secos</NavDropdown.Item>
        //                     <NavDropdown.Item href="/logistica">Logistica</NavDropdown.Item>
        //                     <NavDropdown.Item href="/telefono">Telefono</NavDropdown.Item>


        //                   </NavDropdown>
        //                 </Nav>
                        
        //               </Offcanvas.Body>
                      
        //             </Navbar.Offcanvas>
        //           </Container>
        //           </div>
        //         </Navbar>
                
        //       ))}
        // </div>   
       






        // <div className='tarjetas'> 
        //   <div className=" col-12 lg:col-6 xl:col-3">
        //         <div className=" card mb-0">
        //             <div className=" flex justify-content-between mb-3">
        //                 <div>
        //                     <span className="block text-500 font-medium mb-3">Pedidos frescos</span>
        //                     <div className="text-900 font-medium text-xl">152</div>
        //                 </div>
        //                 <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{width: '2.5rem', height: '2.5rem'}}>
        //                     <i className="pi pi-shopping-cart text-blue-500 text-xl"/>
        //                 </div>
        //             </div>
        //             <span className="text-green-500 font-medium">24 new </span>
        //             <span className="text-500">since last visit</span>
        //       </div>
        //   </div>
        
        //   <div className=" col-12 lg:col-6 xl:col-3">
        //         <div className=" card mb-0">
        //             <div className="flex justify-content-between mb-3">
        //                 <div>
        //                     <span className="block text-500 font-medium mb-3">Pedidos secos</span>
        //                     <div className="text-900 font-medium text-xl">152</div>
        //                 </div>
        //                 <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{width: '2.5rem', height: '2.5rem'}}>
        //                     <i className="pi pi-shopping-cart text-blue-500 text-xl"/>
        //                 </div>
        //             </div>
        //             <span className="text-green-500 font-medium">24 new </span>
        //             <span className="text-500">since last visit</span>
        //       </div>
        //   </div>

        //   <div className=" col-12 lg:col-6 xl:col-3">
        //         <div className=" card mb-0">
        //             <div className="flex justify-content-between mb-3">
        //                 <div>
        //                     <span className="block text-500 font-medium mb-3">Pedidos logistica</span>
        //                     <div className="text-900 font-medium text-xl">152</div>
        //                 </div>
        //                 <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{width: '2.5rem', height: '2.5rem'}}>
        //                     <i className="pi pi-shopping-cart text-blue-500 text-xl"/>
        //                 </div>
        //             </div>
        //             <span className="text-green-500 font-medium">24 new </span>
        //             <span className="text-500">since last visit</span>
        //       </div>
        //   </div>

        // </div>
          
  



      

{/* <PanelMenu  style={{width:'300px'}}/>

      {[false,].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

   
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}

        
              {/* <NavDropdown
                   
                    title="Formularios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >

                <NavDropdown.Item href="/pedidos">Frescos</NavDropdown.Item>
                <NavDropdown.Item href="/pedidos">Secos</NavDropdown.Item>
                <NavDropdown.Item href="/logistica">Logistica</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Telefono</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item href="/configuracion"><i className="fa-solid fa-gear"></i>Configuracion</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Transporte</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Informes</NavDropdown.Item> */}
                {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  
                </Form> */}
        


            
        {/* <div className='acciones'> 
                    <div className="card1 w-30" >
                        <a href='/configuracion'> <button >
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-gear"></i>Configuracion</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button> </a>
                   </div>
                   
                   <div className="card1 w-30">
                    <a href='/logistica'>  <button >
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-truck"></i>Logistica</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/pedidos'> <button href="/pedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-carrot"></i>Frescos</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/PedidosSecos'><button href="/Nuevopedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-sharp fa-solid fa-lemon"></i>Secos</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/pedidos'><button href="/pedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-phone"></i>Telefono</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>

                   <div className="card1 w-30">
                   <a href='/pedidos'> <button href="/pedidos">
                        <div className="card-body" >
                            <h5 className="card-title"><i className="icono fa-solid fa-clipboard"></i>Informes</h5>
                            <p className="descripcion card-tex card-text">formularios</p>
                        </div>
                        </button></a>
                   </div>
               </div> */}
            
      