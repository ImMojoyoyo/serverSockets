import { Router, Request, Response} from 'express';

export const router = Router();

router.get('/chat:id', (req: Request, res : Response) =>{
    const id = req.params.id;

    res.json({
        ok: 'true', 
        mensaje: 'Todo esta bien',
        id
    })

});

router.post('/chat:id', (req: Request, res : Response) =>{
    
    const id = req.params.id;
    const name = req.body.name;
    const lastname = req.body.lastname;
    
    res.json({
        ok: 'true', 
        name,
        lastname, 
        id, 
        
    });

});