import mysql from 'mysql2/promise';

const createConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'forms',
        });
        console.log('Conexión exitosa a MySQL');
        return connection;
    } catch (error) {
        console.error('Error al conectar a MySQL:', error);
        throw error;
    }
};

export { createConnection };
