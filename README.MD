# Node e Sequelize: de JavaScript para Typescript

## Objetivo 

Projeto utilizado para demonstrar a migração de um projeto feito pelos alunos em JavaScript para TypeScript.

### Tecnologias Utilizadas

NodeJS<br/>
Nodemon<br/>
NPX<br/>
TypeScript<br/>
Sequelize<br/>

### Como rodar o projeto

- Clone o projeto para o seu ambiente, remova o `.example` do arquivo `.env.example` e altere as variáveis de acordo com as suas informações.<br/>
- Rode o comando `npm install` para instalar as dependências do projeto.<br/>
- Compile o projeto! Para isto você pode rodar o comando `tsc` a cada vez que fizer alguma alteração, ou uma das opções:<br/>
  - Rode o comando `npm run start` para rodar o `nodemon` e escutar alterações nos arquivos em tempo real e reiniciar a aplicação a cada alteração salva<br/>
  - Rode o comando `npm run dev` para compilar a aplicação uma única vez e deixá-la em execução (ignorando as alterações nos arquivos).<br/>
- Para criar as tabelas no banco de dados, execute o comando `npx sequelize db:migrate`.<br/>
- Caso queira popular o banco de dados com alguns dados de teste, preencha o arquivo `pacientes.xlsx` como quiser e então rode o comando `npx sequelize db:seed:all`<br/>

### Model base: Paciente

`nome`: string;<br/>
`email`: string;<br/>
`idade`: number;<br/>

### Rotas disponíveis

`[ GET ] /pacientes` → Lista todos os pacientes cadastrados <br/>
`[ GET ] /paciente/:id` → Busca um paciente por ID <br/>
`[ POST ] /paciente/criar` → Cria um novo paciente <br/>
`[ PUT ] /paciente/:id` → Atualiza um paciente <br/>
`[ DELETE ] /paciente/:id` → Apaga um paciente <br/>
`[ POST ] /pacientes/import` → Importa um arquivo na extensão .xlsx para a tabela pacientes <br/>

### TO DO

✅ Modificar os Models para funcionar corretamente no TypeScript<br/>
🟩 Criar rotas, controllers e adaptar os models dos demais módulos (Atendimentos e Psicólogos).<br/>
🟩 Aplicar boas práticas no projeto como um todo:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟩 SOLID<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟩 Camada de Repositório e de Serviço<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟩 Criar os Testes Unitários<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟩 Criar os Testes de Integração

<br/><br/>
##### Made with 💜 by [Jhonatan](https://github.com/jhonatanjunio)
