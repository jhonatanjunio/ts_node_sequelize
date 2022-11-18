import Atendimentos from "./Atendimentos";
import Pacientes from "./Pacientes";
import Psicologos from "./Psicologos";

Atendimentos.belongsTo(Psicologos, {
    foreignKey: "psicologos_id"
});

Psicologos.hasMany(Atendimentos, {
    foreignKey: "psicologos_id"
});

Atendimentos.belongsTo(Pacientes, {
    foreignKey: "pacientes_id"
});

Pacientes.hasMany(Atendimentos, {
    foreignKey: "pacientes_id"
});

export { Atendimentos, Psicologos, Pacientes };

