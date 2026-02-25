import express from 'express';

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true})); 


server.use(express.static('public'));

server.post('/submit', (req,res) =>{
    const name = req.body.name;
    const type = req.body.type;
    res.send(`Name: ${name}, Type: ${type}`);
    console.log(`Name: ${name}, Type: ${type}`);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>{
    console.log(`Servidor rodando na porta: ${PORT}`)
});