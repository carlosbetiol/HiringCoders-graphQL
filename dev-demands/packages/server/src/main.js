// observar a diferenca quando se usa o express ao esperar e executar os endpoints
import express from 'express';
import cors from 'cors';

const server = express();

// uma forma de resolver mas nao recomendado, necessario colocar na chamada direto
//server.use(cors());

server.get('/status', (_, response) => {
    response.send({
        status: 'Okay'
    });
});

const enableCors = cors({origin: 'http://localhost:3000' })

server
    .options('/authenticate', enableCors)
    .post(
    '/authenticate', 
    enableCors, 
    express.json(), 
    (request, response) => {
        console.log(
        'E-Mail', request.body.email,
        'Senha', request.body.password
    );
    response.send({
        Okay: true,
    });
});


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'; // se for vazio, nulo, undefined retorna 127...

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}`)
});
