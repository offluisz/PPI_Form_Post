import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true})); 

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.post('/submit', (req,res) =>{
    const name = req.body.name;
    const type = req.body.type;
    res.send(`Name: ${name}, Type: ${type}`);
    console.log(`Name: ${name}, Type: ${type}`);
});

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    server.listen(PORT,()=>{
        console.log(`Servidor rodando na porta: ${PORT}`)
    });
}

export default server;