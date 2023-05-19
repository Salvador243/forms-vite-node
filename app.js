import express from 'express';
import { createConnection } from './db.js';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import exceljs from 'exceljs';
import archiver from 'archiver';

const app = express();
app.use(cors()); // Permite todas las peticiones CORS
app.use(express.json());

// Configura el almacenamiento de archivos con Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const phone = req.body.whatsapp_phone;
        const folderPath = `src/assets/${phone}`;
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }
        cb(null, folderPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = getFileExtension(file.originalname);
        let fieldName;
        if (file.fieldname.includes('gallery_photo')) {
            fieldName = 'gallery_photo';
        } else if (file.fieldname.includes('main_photo')) {
            fieldName = 'main_photo';
        } else if (file.fieldname.includes('video')) {
            fieldName = 'video';
        } else if (file.fieldname.includes('song')) {
            fieldName = 'song';
        }
        const fileName = `${fieldName}_${uniqueSuffix}.${fileExtension}`;
        req.body[file.fieldname] = `src/assets/${req.body.whatsapp_phone}/${fileName}`;

        cb(null, fileName);
    },
});

// Utilidad para obtener la extensión de un archivo
const getFileExtension = (fileName) => {
    const fileParts = fileName.split('.');
    return fileParts[fileParts.length - 1];
};

// Configura Multer con el almacenamiento personalizado
const upload = multer({ storage });


app.get('/', async (req, res) => {
    try {
        res.send('API funcionando');
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error en el servidor');
    }
});

const uploadFields = ['gallery_photo_1', 'gallery_photo_2', 'gallery_photo_3', 'gallery_photo_4', 'gallery_photo_5', 'gallery_photo_6', 'main_photo'];

app.use(upload.any());

app.post("/register", async (req, res) => {
    const body = req.body;
    const uploadMiddleware = uploadFields.filter(field => field in body);

    if (uploadMiddleware.length > 0) {
        upload.array(uploadMiddleware, 1)(req, res, () => {

        });
    }

    let type_event = body.type_event;
    let attende_name = body.attende_name;
    let event_date = body.event_date;
    let religious_ceremony_time = body.religious_ceremony_time;
    let reception_time = body.reception_time;
    let religious_ceremony_address = body.religious_ceremony_address;
    let reception_address = body.reception_address;
    let religious_ceremony_message = body.religious_ceremony_message;
    let reception_message = body.reception_message;
    let whatsapp_phone = body.whatsapp_phone;
    let gallery_photo_1 = body.gallery_photo_1;
    let gallery_photo_2 = body.gallery_photo_2;
    let gallery_photo_3 = body.gallery_photo_3;
    let gallery_photo_4 = body.gallery_photo_4;
    let gallery_photo_5 = body.gallery_photo_5;
    let gallery_photo_6 = body.gallery_photo_6;
    let main_photo = body.main_photo;
    let video = body.video;
    let song = body.song;


    let query = `INSERT INTO form (
        event_type,
        attendee_name,
        event_date,
        religious_ceremony_time,
        reception_time,
        religious_ceremony_address,
        reception_address,
        religious_ceremony_message,
        reception_message,
        whatsapp_phone,
        gallery_photo_1,
        gallery_photo_2,
        gallery_photo_3,
        gallery_photo_4,
        gallery_photo_5,
        gallery_photo_6,
        main_photo,
        video,
        song
    ) VALUES (
        "${type_event}",
        "${attende_name}",
        "${event_date}",
        "${religious_ceremony_time}",
        "${reception_time}",
        "${religious_ceremony_address}",
        "${reception_address}",
        "${religious_ceremony_message}",
        "${reception_message}",
        "${whatsapp_phone}",
        "${gallery_photo_1 ? gallery_photo_1 : ''}",
        "${gallery_photo_2 ? gallery_photo_2 : ''}",
        "${gallery_photo_3 ? gallery_photo_3 : ''}",
        "${gallery_photo_4 ? gallery_photo_4 : ''}",
        "${gallery_photo_5 ? gallery_photo_5 : ''}",
        "${gallery_photo_6 ? gallery_photo_6 : ''}",
        "${main_photo ? main_photo : ''}",
        "${video ? video : ''}",
        "${song ? song : ''}"
    );`;

    try {
        const connection = await createConnection();
        const [results] = await connection.query(query);
        connection.end();
        Object.keys(body).forEach(key => delete body[key]);
        res.status(200).send('Query completado exitosamente');
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        Object.keys(body).forEach(key => delete body[key]);
        res.status(500).send('Error en el servidor');
    }
});

app.get("/getforms", async (req, res) => {
    try {
        const connection = await createConnection();
        const [results] = await connection.query('SELECT * FROM form');
        connection.end();
        res.status(200).send(results);
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error en el servidor');
    }
});

app.get("/getreport", async (req, res) => {
    try {
        const connection = await createConnection();
        const [rows] = await connection.query('SELECT * FROM form');
        connection.end();

        const workbook = new exceljs.Workbook();
        const worksheet = workbook.addWorksheet('Datos');

        const headers = [
            "ID",
            "TIPO EVENTO",
            "NOMBRE DEL FESTEJADO",
            "FECHA EVENTO",
            "HORA DE CEREMONIA RELIGIOSA",
            "HORA DE LA RECEPCIÓN",
            "DIRECCIÓN CEREMONIA RELIGIOSA",
            "DIRECCIÓN RECEPCIÓN",
            "MENSAJE ESPECIAL PARA CEREMONIA RELIGIOSA",
            "MENSAJE ESPECIAL PARA LA RECEPCIÓN",
            "TELÉFONO CON WHATSAPP PARA CONFIRMAR ASISTENCIA"];
        worksheet.addRow(headers);

        // Agrega los datos de cada fila
        rows.forEach((row) => {
            let type = "";
            if (row.event_type == "1") {
                type = "Boda"
            } else if (row.event_type == "2") {
                type = "XV años"
            } else if (row.event_type == "3") {
                type = "Cumpleaños"
            } else if (row.event_type == "4") {
                type = "Bautizo"
            } else if (row.event_type == "5") {
                type = "Revelación"
            } else if (row.event_type == "6") {
                type = "Graduación"
            } else if (row.event_type == "7") {
                type = "Posada"
            }
            const values = [
                row.id,
                type,
                row.attendee_name,
                row.event_date,
                row.religious_ceremony_time,
                row.reception_time,
                row.religious_ceremony_address,
                row.reception_address,
                row.religious_ceremony_message,
                row.reception_message,
                row.whatsapp_phone
            ];
            worksheet.addRow(values);
        });

        workbook.xlsx.writeBuffer().then((buffer) => {
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename="archivo.xlsx"');

            res.send(buffer);
        });
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error en el servidor');
    }
});

app.get("/d/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const connection = await createConnection();
        const [row] = await connection.query(`SELECT * FROM form WHERE id = ${id};`);
        connection.end();

        let directory_complete = row[0]["main_photo"];
        const regex = /^(.*\/\d+)/;
        const match = directory_complete.match(regex);

        if (match && match[1]) {
            // Ruta al directorio o archivos que deseas comprimir
            const sourcePath = match[1];

            // Crea un archivo ZIP en memoria
            const archive = archiver('zip', { zlib: { level: 9 } });

            // Configura los encabezados de respuesta
            res.attachment('archivo.zip');

            // Conecta el archivo ZIP a la respuesta HTTP
            archive.pipe(res);

            // Agrega los archivos o directorios al archivo ZIP
            archive.directory(sourcePath, false);

            // Finaliza el archivo ZIP
            archive.finalize();

            // Maneja eventos de error durante la creación del archivo ZIP
            archive.on('error', (err) => {
                console.error('Error al crear el archivo ZIP:', err);
                res.status(500).send('Error en el servidor');
            });
        } else {
            console.log('No se encontró ninguna coincidencia.');
        }

    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error en el servidor');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor API escuchando en el puerto ${PORT}`);
});
