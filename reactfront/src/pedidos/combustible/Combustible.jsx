import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Home from '../../home/home'
import Table from 'react-bootstrap/Table'
import './Combustible.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MdImportExport } from 'react-icons/md';
const URI = 'http://localhost:9000/combustible/'

class Combustible extends Component {
    state={
        data:[],
        modalInsertar: false,
        modalEliminar: false,
        form:{
            id:'',
            vehiculo:'',
            tipo_combustible:'',
            cantidad:'',
            comprobante:'',
            importe:'',
            tipo_pago:'',
            tipoModal: ''
        }
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
                vehiculo: transporte.vehiculo,
                tipo_combustible: transporte.tipo_combustible,
                cantidad: transporte.cantidad,
                comprobante: transporte.comprobante,
                importe: transporte.importe,
                tipo_pago: transporte.tipo_pago
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
  <div className="combustible">
    
         <div className='homecombus'>
        <Home/> 
        </div>

    
        
        <div className="agregarcombus" >
          <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}><FontAwesomeIcon icon={faPlus} /></button>
          <h5 className='titulocombus'>Maestro de combustible</h5>
          {/* <button className='expo' ><i className="fa-sharp fa-solid fa-file-pdf"></i></button>
            <button className='expo'><i className="fa-sharp fa-solid fa-file-excel"></i></button> */}
        </div>

        
           
        
        
         <div className='containertablacom'>
           <div className='row'>
            <div className='col'>
                <Table striped bordered hover className='tablacombus' size="sm">
                    <thead >
                        <tr className='accionescombu'>
                            <th>Id</th>
                            <th>Vehículo</th>
                            <th className='camposcombu'>Tipo combus</th>
                            <th className='camposcombu'>Cantidad</th>
                            <th className='camposcombu'>Importe</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map(transporte=>{
                    return(
                        <tr className='acciones2 '>
                            <td >{transporte.id}</td>
                            <td>{transporte.vehiculo}</td>
                            <td className='camposcombu'>{transporte.tipo_combustible}</td>
                            <td className='camposcombu'>{transporte.cantidad}</td>
                            <td className='camposcombu'>{transporte.importe}</td>
                            <td>
                            <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                                <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                                {"   "}

                                <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                            </td>
                        </tr>
                    )
                    })}
                    
                    </tbody>
                </Table>
              <Modal isOpen={this.state.modalInsertar} className='modalcombus'>
                <ModalHeader className='modalhedercom' style={{display: 'block'}}>
                 <span  style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span> 
                  <h5>Combustible</h5>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    
                    <select className="categoriacom form-select" aria-label="Default select example" required={true} name="vehiculo" id="vehiculo" onChange={this.handleChange} value={form?form.vehiculo: ''}>
                        <option selected>Vehículo</option>
                        <option>Renault Kangoo Dominio:GOA563</option>
                        <option>Renault Kangoo Dominio:PCB159</option>
                        <option>Otros</option>
                    </select>
                    
                    <select className="categoriacom form-select" aria-label="Default select example" required={true} name="tipo_combustible" id="tipo_combustible" onChange={this.handleChange} value={form?form.tipo_combustible: ''}>
                        <option selected>Tipo de combustible</option>
                        <option>Gasoil</option>
                        <option>Nafta</option>
                        <option>GNC</option>
                        <option>Gas envasado</option>
                    </select>
                    <br/>
                    <label htmlFor="capital_bursatil">Ingrese cantidad</label>
                    <input className="form-control" type="text" name="cantidad" id="cantidad" onChange={this.handleChange} value={form?form.cantidad:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Comprobante de referencia</label>
                    <input className="form-control" type="text" name="comprobante" id="comprobante" onChange={this.handleChange} value={form?form.comprobante:''}/>
                    <br/>
                    <label htmlFor="capital_bursatil">Total a pagar</label>
                    <input className="form-control" type="text" name="importe" id="importe" onChange={this.handleChange} value={form?form.importe:''}/>
                    <br/>
                    <br/>
                    <select className="form-select" aria-label="Default select example" required={true} name="tipo_pago" id="tipo_pago" onChange={this.handleChange} value={form?form.tipo_pago:''}>
                        <option selected>Se paga o se debe</option>
                        <option>Se paga</option>
                        <option>Se anota en cuenta</option>
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
export default Combustible

























// const DataTableCrudDemo = () => {

    // let emptyProduct = {
    //     id: null,
    //     name: '',
    //     image: null,
    //     description: '',
    //     category: null,
    //     price: 0,
    //     quantity: 0,
    //     rating: 0,
    //     inventoryStatus: 'INSTOCK'
    // };

    // const [products, setProducts] = useState(null);
    // const [productDialog, setProductDialog] = useState(false);
    // const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    // const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    // const [product, setProduct] = useState(emptyProduct);
    // const [selectedProducts, setSelectedProducts] = useState(null);
    // const [submitted, setSubmitted] = useState(false);
    // const [globalFilter, setGlobalFilter] = useState(null);
    // const toast = useRef(null);
    // const dt = useRef(null);
    // const productService = new ProductService();

    // useEffect(() => {
    //     productService.getProducts().then(data => setProducts(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // const formatCurrency = (value) => {
    //     return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // }

    // const openNew = () => {
    //     setProduct(emptyProduct);
    //     setSubmitted(false);
    //     setProductDialog(true);
    // }

    // const hideDialog = () => {
    //     setSubmitted(false);
    //     setProductDialog(false);
    // }

    // const hideDeleteProductDialog = () => {
    //     setDeleteProductDialog(false);
    // }

    // const hideDeleteProductsDialog = () => {
    //     setDeleteProductsDialog(false);
    // }

    // const saveProduct = () => {
    //     setSubmitted(true);

    //     if (product.name.trim()) {
    //         let _products = [...products];
    //         let _product = {...product};
    //         if (product.id) {
    //             const index = findIndexById(product.id);

    //             _products[index] = _product;
    //             toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
    //         }
    //         else {
    //             _product.id = createId();
    //             _product.image = 'product-placeholder.svg';
    //             _products.push(_product);
    //             toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    //         }

    //         setProducts(_products);
    //         setProductDialog(false);
    //         setProduct(emptyProduct);
    //     }
    // }

    // const editProduct = (product) => {
    //     setProduct({...product});
    //     setProductDialog(true);
    // }

    // const confirmDeleteProduct = (product) => {
    //     setProduct(product);
    //     setDeleteProductDialog(true);
    // }

    // const deleteProduct = () => {
    //     let _products = products.filter(val => val.id !== product.id);
    //     setProducts(_products);
    //     setDeleteProductDialog(false);
    //     setProduct(emptyProduct);
    //     toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    // }

    // const findIndexById = (id) => {
    //     let index = -1;
    //     for (let i = 0; i < products.length; i++) {
    //         if (products[i].id === id) {
    //             index = i;
    //             break;
    //         }
    //     }

    //     return index;
    // }

    // const createId = () => {
    //     let id = '';
    //     let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     for (let i = 0; i < 5; i++) {
    //         id += chars.charAt(Math.floor(Math.random() * chars.length));
    //     }
    //     return id;
    // }

    // const importCSV = (e) => {
    //     const file = e.files[0];
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //         const csv = e.target.result;
    //         const data = csv.split('\n');

    //         // Prepare DataTable
    //         const cols = data[0].replace(/['"]+/g, '').split(',');
    //         data.shift();

    //         const importedData = data.map(d => {
    //             d = d.split(',');
    //             const processedData = cols.reduce((obj, c, i) => {
    //                 c = c === 'Status' ? 'inventoryStatus' : (c === 'Reviews' ? 'rating' : c.toLowerCase());
    //                 obj[c] = d[i].replace(/['"]+/g, '');
    //                 (c === 'price' || c === 'rating') && (obj[c] = parseFloat(obj[c]));
    //                 return obj;
    //             }, {});

    //             processedData['id'] = createId();
    //             return processedData;
    //         });

    //         const _products = [...products, ...importedData];

    //         setProducts(_products);
    //     };

    //     reader.readAsText(file, 'UTF-8');
    // }

    // const exportCSV = () => {
    //     dt.current.exportCSV();
    // }

    // const confirmDeleteSelected = () => {
    //     setDeleteProductsDialog(true);
    // }

    // const deleteSelectedProducts = () => {
    //     let _products = products.filter(val => !selectedProducts.includes(val));
    //     setProducts(_products);
    //     setDeleteProductsDialog(false);
    //     setSelectedProducts(null);
    //     toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    // }

    // const onCategoryChange = (e) => {
    //     let _product = {...product};
    //     _product['category'] = e.value;
    //     setProduct(_product);
    // }

    // const onInputChange = (e, name) => {
    //     const val = (e.target && e.target.value) || '';
    //     let _product = {...product};
    //     _product[`${name}`] = val;

    //     setProduct(_product);
    // }

    // const onInputNumberChange = (e, name) => {
    //     const val = e.value || 0;
    //     let _product = {...product};
    //     _product[`${name}`] = val;

    //     setProduct(_product);
    // }

    // const [show, setShow] = useState(false);

    //  const handleClose = () => setShow(false);
    //  const handleShow = () => setShow(true);

    //  const leftToolbarTemplate = () => {
    //     return (
    //         <React.Fragment className='hola'>
               
    //         </React.Fragment>
    //     )
    // }

    // const rightToolbarTemplate = () => {
    //     return (
    //         <React.Fragment className='export'>
    //             {/* <FileUpload mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php" accept=".csv" chooseLabel="Import" className="mr-2 inline-block" onUpload={importCSV} />
    //             <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} /> */}
    //         </React.Fragment>
    //     )
    // }

    // const imageBodyTemplate = (rowData) => {
    //     return <img src={`images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    // }

    // const priceBodyTemplate = (rowData) => {
    //     return formatCurrency(rowData.price);
    // }

    // const ratingBodyTemplate = (rowData) => {
    //     return <Rating value={rowData.rating} readOnly cancel={false} />;
    // }

    // const statusBodyTemplate = (rowData) => {
    //     return <span className={` product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    // }

    // const actionBodyTemplate = (rowData) => {
    //     return (
    //         <React.Fragment>
    //             <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
    //             <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
    //         </React.Fragment>
    //     );
    // }

    // const header = (
    //     <div className="tabla table-header">
    //         {/* ----botn para crearnuevo pedido */}
    //         <Button icon="pi pi-plus" className="btnNuevo p-button-success mr-2 btn-sm" onClick={handleShow} />
    //         {/* <Button className='btn-volver' href='/home'><i className="fa-solid fa-arrow-left"></i></Button> */}
    //         <h5 className="productosfres mx-0 my-1">Combustible</h5>
    //         <span className="p-input-icon-left"> 
    //             <i className="pi pi-search" />
                
    //             <InputText  type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
    //         </span>
    //     </div>
    // );
   
    // const productDialogFooter = (
    //     <React.Fragment>
    //         <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
    //         <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
    //     </React.Fragment>
    // );
    // const deleteProductDialogFooter = (
    //     <React.Fragment >
    //         <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
    //         <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
    //     </React.Fragment>
    // );
    // const deleteProductsDialogFooter = (
    //     <React.Fragment >
    //         <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
    //         <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
    //     </React.Fragment>
    // );

    // return (
    //     <div className="datatable-crud-demo">
    //         <Toast ref={toast} />

    //         <div className=" card">
    //             <Toolbar className=" mb-4" left={leftToolbarTemplate} ></Toolbar>
                {/* esto va arribar al lado de left={leftToolbarTemplate} right={rightToolbarTemplate} */}
                // <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                //     dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                //     paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                //     currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                //     globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                //     <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
                //     <Column field="code" header="Id" sortable style={{ minWidth: '12rem' }}></Column>
                //     <Column field="name" header="Nombre" sortable style={{ minWidth: '16rem' }}></Column>
                //     <Column field="name" header="Cantidad" sortable style={{ minWidth: '16rem' }}></Column>
                //     <Column field="name" header="Fecha" sortable style={{ minWidth: '16rem' }}></Column>
                    {/* <Column field="image" header="Image" body={imageBodyTemplate}></Column> */}
                     {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>  */}
                    // <Column field="category" header="Descripcion" sortable style={{ minWidth: '10rem' }}></Column>
                    {/* <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column> */}
            //         <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
            //     </DataTable>
            // </div>

            // <CompCreatePedidoCombustible show={show} handleClose={handleClose}/>
//         </div> 
//     );
// }

// export default DataTableCrudDemo