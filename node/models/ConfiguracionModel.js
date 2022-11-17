//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const ConfiguracionModel = db.define('usuarios',{
    usuario:{type: DataTypes.STRING},
    contraseña:{type: DataTypes.STRING},
    nombre :{type: DataTypes.STRING},
    apellido :{type: DataTypes.STRING},
    telefono :{type: DataTypes.NUMBER},
    email :{type: DataTypes.STRING},
    puesto:{type: DataTypes.STRING},
    ubicacion:{type: DataTypes.STRING},
    tip_usuario:{type: DataTypes.STRING}

})

export default ConfiguracionModel