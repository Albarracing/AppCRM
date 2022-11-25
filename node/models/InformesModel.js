//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const InformesModel = db.define('informes',{

    fecha: {type:DataTypes.DATE},
    nomre_int: {type: DataTypes.STRING},
    intendencia: {type: DataTypes.STRING},
    cant_estadias:{type:DataTypes.NUMBER},
    cant_km:{type:DataTypes.NUMBER},
    fac_extra: {type: DataTypes.BOOLEAN},
    desc_fec_extra: {type: DataTypes.STRING},
    bidones_util :{type:DataTypes.NUMBER},
    bidones_recar :{type:DataTypes.NUMBER},
    bidones_nuevos :{type:DataTypes.NUMBER},
    bidones_trafic :{type:DataTypes.NUMBER},
    bidones_dispencer :{type:DataTypes.NUMBER},
    bolsa_hielo :{type:DataTypes.NUMBER},
    hielo_trafic :{type:DataTypes.NUMBER},
    observaciones: {type: DataTypes.STRING},
    semillero_hielo: {type: DataTypes.STRING},
    agua_complejo:{type: DataTypes.STRING},
    hielo_complejo:{type: DataTypes.STRING},
})

export default InformesModel