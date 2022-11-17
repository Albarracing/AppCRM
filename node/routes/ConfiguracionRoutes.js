import express from "express";
import { crearConfiguracion, deleteConfiguracion, getConfiguracion, getAllConfiguracions, updateConfiguracion } from "../controllers/ConfiguracionController.js";

const configuracionrouter = express.Router()

configuracionrouter.get('/', getAllConfiguracions)
configuracionrouter.get('/:id', getConfiguracion)
configuracionrouter.post('/', crearConfiguracion)
configuracionrouter.put('/:id', updateConfiguracion)
configuracionrouter.delete('/:id', deleteConfiguracion)

export default configuracionrouter