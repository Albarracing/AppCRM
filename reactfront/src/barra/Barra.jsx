import './home.css'
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
import {AiOutlineUser, AiOutlineFileDone} from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Barra = () =>{
    
  
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[

      {
          path:"/",
          name:"Usuarios",
          icon:<AiOutlineUser/>,
      },
      {
          path:"/configuracion",
          name:"Configuracion",
          icon:<FiSettings/>
      },
      {
        path:"/Informes",
        name:"Informes",
        icon:<AiOutlineFileDone/>
      },
      {
          path:"/Frescos",
          name:"Frescos",
          icon:<TbMeat/>
      },
         
      {
          path:"/PedidosSecos",
          name:"Secos",
          icon:<MdOutlineEmojiFoodBeverage/>
      },
      {
          path:"/logistica",
          name:"Logistica",
          icon:<FaThList/>
      },
      {
        path:"/telefono",
        name:"Feléfono",
        icon:<BsTelephone/>
    },
    {
      path:"/transporte",
      name:"Transporte",
      icon:<BsTruck/>
  },
  {
    path:"/combustible",
    name:"Combustible",
    icon:<TbGasStation/>
},
  ]
 
  return (
<div>
    <div className='homebarra'>
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
    {/* <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la pedido: {form && form.id}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal> */}
</div>
</div>

);
};

export default Barra