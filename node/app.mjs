import express from 'express';
import cors from 'cors';

//importamos la conexion a la BD
import db from "./database/db.js";
// importamos nuestro enrutador
import blogRoutes from './routes/routes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/blogs',blogRoutes);//Este sera la pagina principal de la appWeb

try {
    await db.authenticate();
    console.log('Conexion exitosa a la DB');
} catch (error) {
    console.log(`El error en la conexion es: ${error}`);
}
app.get('/',(req, res)=>{
    res.send('Hola mundo');
    });

app.listen(8000,()=>{
    console.log('Server UP running in http://localHost:8000/');
});