import { Atendimento } from "./Atendimentos";
import { Paciente } from "./Pacientes";
import { Psicologo } from "./Psicologos";

Atendimento.belongsTo(Psicologo, {
    foreignKey: "psicologos_id"
});

Psicologo.hasMany(Atendimento, {
    foreignKey: "psicologos_id"
});

Atendimento.belongsTo(Paciente, {
    foreignKey: "pacientes_id"
});

Paciente.hasMany(Atendimento, {
    foreignKey: "pacientes_id"
});

export { Atendimento, Psicologo, Paciente };

