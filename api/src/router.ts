import express, { Request, Response } from 'express';
import { Consultas } from './Consultas';
import { Auth } from './util/Auth';

const router = express.Router();

router.post('/login', Auth.validacaoUsuario);

router.get('/', (req: Request, res: Response) => { res.send('Hello World!') });

router.get('/rota-protegida', Auth.verifyToken, (req: Request, res: Response) => { res.send('Rota protegida, se você está vendo essa mensagem é porque está autenticado no sistema') });

router.get('/pessoas', Auth.verifyToken, Consultas.todos);

export { router }