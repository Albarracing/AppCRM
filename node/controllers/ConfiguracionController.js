//importo el modelo
import ConfiguracionModel from "../models/ConfiguracionModel.js";

//metodos del crud

//mostrar todos los articulos
export const getAllConfiguracions = async (req, res) =>{
    try{
        const configuracion = await ConfiguracionModel.findAll()
        res.json(configuracion)
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un articulo
export const getConfiguracion = async (req, res) =>{
    try{
        const configuracion = await ConfiguracionModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(configuracion[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//crear un pedido
export const crearConfiguracion = async (req, res) => {
    try{
        await ConfiguracionModel.create(req.body)
        res.json({"message":"Pedido creado correctamente"})
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un pedido
export const updateConfiguracion = async (req, res) =>{
    try{
        await ConfiguracionModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({"message":"PEdido actualizado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}

//eliminar un pedido
export const deleteConfiguracion = async (req, res) =>{
    try{
        await ConfiguracionModel.destroy({
            where:{id: req.params.id}
        })
        res.json({"message":"Pedido eliminado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}