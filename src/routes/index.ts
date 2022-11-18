import express from "express";
import pacientesController from "../controllers/pacientesController";
// import psicologosController from "../controllers/psicologosController";
// import atendimentosController from "../controllers/atendimentosController";
// import loginValidation from "../validations/login/login";
// import psicologoCreateValidation from "../validations/psicologos/create";
import byIdValidation from "../validations/psicologos/getOne";
// import psicologoUpdateValidation from "../validations/psicologos/update";
// import authController from "../controllers/authController";
// import atendimentoCreateValidation from "../validations/atendimentos/create";
// import dashboardController from "../controllers/dashboardController";
// import auth from "../middlewares/auth";
import pacienteCreateValidation from "../validations/pacientes/create";
import pacienteUpdateValidation from "../validations/pacientes/update";
const routes = express.Router();

// routes.post("/login", loginValidation, authController.login);

// routes.get("/psicologos", psicologosController.listPsicologos);
// routes.get("/psicologo/:id", byIdValidation, psicologosController.byIdPsicologo);
// routes.post("/psicologo/criar", psicologoCreateValidation, psicologosController.createPsicologo);
// routes.put("/psicologo/:id", psicologoUpdateValidation, psicologosController.updatePsicologo);
// routes.delete("/psicologo/:id", byIdValidation, psicologosController.deletePsicologo);

// routes.get("/atendimentos", atendimentosController.listAtendimentos);
// routes.get("/atendimento/:id", byIdValidation, atendimentosController.byIdAtendimentos);
// routes.post("/atendimento/criar", auth, atendimentoCreateValidation, atendimentosController.createAtendimento);

routes.get("/pacientes", pacientesController.listPacientes);
routes.get("/paciente/:id", byIdValidation, pacientesController.byIdPaciente);
routes.post("/paciente/criar", pacienteCreateValidation, pacientesController.createPaciente);
routes.put("/paciente/:id", pacienteUpdateValidation, pacientesController.updatePaciente);
routes.delete("/paciente/:id", byIdValidation, pacientesController.deletePaciente);

// routes.get("/dashboard/numero-pacientes", dashboardController.numberPacientes);
// routes.get("/dashboard/numero-atendimentos", dashboardController.numberAtendimentos);
// routes.get("/dashboard/numero-psicologos", dashboardController.numberPsicologos);
// routes.get("/dashboard/media-atendimentos", dashboardController.averageAtendimentos);

export default routes;