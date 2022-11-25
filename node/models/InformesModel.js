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
    bolsa_hielo:{type:DataTypes.NUMBER},
    hielo_trafic :{type:DataTypes.NUMBER},
    observaciones: {type: DataTypes.STRING},
    semillero_hielo: {type: DataTypes.STRING},
    agua_complejo:{type: DataTypes.STRING},
    hielo_complejo:{type: DataTypes.STRING},

    fecha_estadia:{type:DataTypes.DATE},
    cantidad_changos:{type:DataTypes.NUMBER},
    cant_almuerzo_changos:{type:DataTypes.NUMBER},
    cant_cena_changos:{type:DataTypes.NUMBER},
    ingreso_changos:{type:DataTypes.DATE},
    ingreso_changos_hora:{type:DataTypes.TIME},
    salida_changos:{type:DataTypes.DATE},
    cantidad_chofer:{type:DataTypes.NUMBER},
    cantidad_almuerzo_chofer:{type:DataTypes.NUMBER},
    cantidad_cena_chofer:{type:DataTypes.NUMBER},
    ingreso_chofer:{type:DataTypes.DATE},
    ingreso_chofer_hora:{type:DataTypes.TIME},
    salida_chofer:{type:DataTypes.DATE},
    salida_chofer_hora:{type:DataTypes.TIME},
    cant_estadia_cober_prop:{type:DataTypes.NUMBER},
    cant_almuer_estadia_cober_prop:{type:DataTypes.NUMBER},
    cant_cena_estadia_cober_prop:{type:DataTypes.NUMBER},
    ingre_estadia_cober_prop:{type:DataTypes.DATE},
    ingre_hora_estadia_cober_prop:{type:DataTypes.TIME},
    sali_estadia_cober_prop:{type:DataTypes.DATE},
    sali_hora_estadia_cober_prop:{type:DataTypes.TIME},
    chango_por_llegar_dia:{type:DataTypes.DATE},
    chango_por_llegar_hora:{type:DataTypes.TIME},
})

export default InformesModel