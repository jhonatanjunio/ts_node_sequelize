import { ERRORS } from "../constants/errors";
import { Request, Response, NextFunction } from 'express';
import { Paciente, TPaciente } from "../models/Pacientes";
import { read } from 'xlsx';

import xlsx from 'xlsx';

const pacienteController = {

    async listPacientes(req: Request, res: Response, next: NextFunction) {
        try {
            const listarPaciente = await Paciente.findAll();
            res.status(200).json(listarPaciente);
        } catch (error) {
            next(error);
        }
    },

    async byIdPaciente(req: Request, res: Response, next: NextFunction) {
        try {

            const { id } = req.params;

            const paciente = await Paciente.findOne({
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

    async createPaciente(req: Request, res: Response, next: NextFunction) {
        try {
            const { nome, email, idade } = req.body;
            const paciente = await Paciente.create({ nome, email, idade });

            res.status(201).json(paciente)
        } catch (error) {
            next(error)
        }
    },

    async updatePaciente(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { nome, email, idade } = req.body;


            await Paciente.update(
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

            const paciente = await Paciente.findByPk(id);

            if (!paciente) {
                res.status(400).json(ERRORS.PACIENTES.ID)
            };

            res.status(200).json(paciente)
        } catch (error) {
            next(error)

        }
    },

    async deletePaciente(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = await req.params;

            const paciente = await Paciente.findOne({
                where: {
                    id,
                }
            });

            if (!paciente) {
                res.status(404).json(ERRORS.PACIENTES.ID)
            };

            await Paciente.destroy({
                where: {
                    id,
                },
            });

            res.sendStatus(204)

        } catch (error) {
            next(error)
        }
    },

    async importarPacientes(req: Request, res: Response, next: NextFunction) {

        const { file } = req;

        if (!file) {
            res.status(500).json({ success: false, message: "Arquivo não informado" });
        }

        const fileExtension: string = file?.originalname.split(".")[1]!;

        if (fileExtension != "xlsx") {
            res.status(500).json({ success: false, message: "Formato de arquivo aceito: xlsx" });
        }

        try {

            const pacienteXlsx = read(file?.buffer);
            const xlsxToJson: TPaciente[] = xlsx.utils.sheet_to_json(pacienteXlsx.Sheets[pacienteXlsx.SheetNames[0]]);

            for (const line in xlsxToJson) {
                let { nome, email, idade } = xlsxToJson[line];
                await Paciente.create({
                    nome,
                    email,
                    idade
                });
            }

        } catch (error: any) {
            res.status(500).json({ success: false, message: "Ocorreu um erro no servidor. "});
        }

        res.status(200).json({ success: true, message: "✅ Pacientes importados com sucesso!" });
    }



};

export default pacienteController