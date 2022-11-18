import { ERRORS } from "../constants/errors";
import { Request, Response, NextFunction } from 'express';
import { Pacientes }  from "../models";



const pacientesController = {
    
    async listPacientes(req: Request, res: Response, next: NextFunction) {
       try {
           const listarPacientes = await Pacientes.findAll();   
           res.status(200).json(listarPacientes);              
       } catch (error) {
           next(error);           
       }
    },

    async byIdPaciente(req: Request, res: Response, next: NextFunction) {
       try {

           const {id} = req.params;
                     
           const paciente = await Pacientes.findOne({
               where: {
                   id,
               }
           });


           if (!paciente) {
               res.status(404).json(ERRORS.PACIENTES.ID)                                
           };

        res.status(200).json(paciente)

       } catch (error) {
           next(error)
       }              
       
    },

    async createPaciente(req: Request,res: Response, next:NextFunction) {
       try {
           const { nome, email, idade } = req.body;

           const newPaciente = await Pacientes.create({
               nome,
               email,
               idade

           });

          res.status(201).json(newPaciente)
       } catch (error) { 
           next(error)            
       }
    },

    async updatePaciente(req:Request,res:Response, next:NextFunction) {
       try {
           const { id } = req.params;
           const { nome, email, idade } = req.body;  


           await Pacientes.update(
               {
                   nome,
                   email,
                   idade

               },
               {
                   where: {
                   id,
                   }
               }
           );

           const paciente = await Pacientes.findByPk(id);

           if (!paciente) {
            res.status(400).json(ERRORS.PACIENTES.ID)                                
        };

           res.status(200).json(paciente)
       } catch (error) {
        next(error)
           
       }
    },

    async deletePaciente(req:Request,res:Response,next:NextFunction) {
       try {
           const {id} = await req.params;

           const paciente = await Pacientes.findOne({
               where: {
                   id,
               }
           });

           if (!paciente) {
               res.status(404).json(ERRORS.PACIENTES.ID)                                
           };

           await Pacientes.destroy({
               where:{
                id,
               },
           });
           
           res.sendStatus(204)
           
       } catch (error) {
           next(error)          
       }
    },

    
       
};

export default pacientesController