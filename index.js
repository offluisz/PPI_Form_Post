const express = require('express');
const loginRouter = require('./routes/indexRoute');
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'ejs');
server.set('views', './views');


server.get('/', (req, res) => {
    res.render('index');
});

server.use("/", loginRouter);

server.post('/submit', (req, res) => {
  const { name, type } = req.body;
  res.send(`Name: ${name}, Type: ${type}`);
  console.log(`Name: ${name}, Type: ${type}`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});