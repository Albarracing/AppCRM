import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import transporteRoutes from './routes/routes.js'
import frescosrouter from './routes/FrescosRoutes.js'
import secosrouter from './routes/SecosRoutes.js'
import telefonorouter from './routes/TelefonoRoutes.js'
import logisticarouter from './routes/LogisticaRoute.js'
import combustiblerouter from './routes/CombustibleRoute.js'
import informerouter from './routes/InformesRoutes.js'
import configuracionrouter from './routes/ConfiguracionRoutes.js'
const app = express()


app.use(cors())
app.use(express.json())
app.use('/transporte', transporteRoutes)
app.use('/frescos',  frescosrouter )
app.use('/secos', secosrouter )
app.use('/logistica', logisticarouter)
app.use('/telefono', telefonorouter)
app.use('/combustible', combustiblerouter)
app.use('/informes', informerouter)
app.use('/configuracion', configuracionrouter)
try{
    await db.authenticate()
    console.log('conexion exitosa a la db')
} catch (error){
    console.log(`el error de conexion es:${error}`)
}
// app.get('/',(req, res) =>{
//     res.send('hola mundo')
// })

app.listen(9000, ()=>{
    console.log('corriendo en http://localhost:9000/')
})