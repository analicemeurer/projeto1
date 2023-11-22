require("dotenv").config();

async function connect(){
    const mysql = require("mysql2/promise"); 
    const conexao = mysql.createPool (process.env.CONNECTION_STRING); 
    return conexao;
    }

    async function consultaProfessor(){
        const conn = await connect(); 
        const result = await conn.query("select * from Professor;"); 
        return (result[0]);
        }

    async function consultaAluno(){
        const conn = await connect(); 
        const result = await conn.query("select * from Aluno;"); 
        return (result[0]);
        }


    async function consultaEscola(){
        const conn = await connect(); 
        const result = await conn.query("select * from Escola;"); 
        return (result[0]);
        }


    async function consultaCurso(){
        const conn = await connect(); 
        const result = await conn.query("select * from Curso;"); 
        return (result[0]);
        }

    async function consultaMatricula(){
        const conn = await connect(); 
        const result = await conn.query("select * from Matricula;"); 
        return (result[0]);
        }

    async function excluirProfessor(id){
        const conn = await connect();
        await conn.query('delete from Professor where idProfessor=?', id);
        }

    async function atualizarProfessor(id, nome, cpf, formacao, salario){
        const conn = await connect();
        const values = [nome, cpf, formacao, salario, id];
        await conn.query('update Professor set nome=?, cpf=?, formacao=?, salario=?', id);
        }

    async function excluirAluno(id){
        const conn = await connect();
        await conn.query('delete from Aluno where idAluno=?', id);
        }
    
    async function atualizarAluno(id, nome, cpf, endereco, cidade, estado, salario){
        const conn = await connect();
        const values = [nome, cpf, endereco, cidade, estado, salario, id];
        await conn.query('update Aluno set nome=?, cpf=?, endereco=?, cidade=?, estado=?, salario=?', id);
        }

    async function excluirEscola(id){
        const conn = await connect();
        await conn.query('delete from Escola where idEscola=?', id);
        }
        
    async function atualizarEscola(id, nome, cnpj, endereco, cidade, estado){
        const conn = await connect();
        const values = [nome, cnpj, endereco, cidade, estado, id];
        await conn.query('update Escola set nome=?, cnpj=?, endereco=?, cidade=?, estado=?', id);
        }

    async function excluirCurso(id){
        const conn = await connect();
        await conn.query('delete from Curso where idCurso=?', id);
        }
            
    async function atualizarCurso(id, nome, ementa, carga_horaria, Professor_idProfessor, Escola_idEscola){
        const conn = await connect();
        const values = [nome, ementa, carga_horaria, Professor_idProfessor, Escola_idEscola, id];
        await conn.query('update Curso set nome=?, ementa=?, carga_horaria=?, Professor_idProfessor=?, Escola_idEscola=?', id);
        }

    async function excluirMatricula(id){
        const conn = await connect();
        await conn.query('delete from Matricula where idMatricula=?', id);
        }
                
    async function atualizarMatricula(id, Aluno_idAluno, Curso_idCurso, ano_matricula){
        const conn = await connect();
        const values = [Aluno_idAluno, Curso_idCurso, ano_matricula, id];
        await conn.query('update Matricula set Aluno_idAluno=?, Curso_idCurso=?, ano_matricula=?', id);
        }

    module.exports = {
        consultaProfessor,
        consultaMatricula,
        consultaAluno,
        consultaEscola,
        consultaCurso,
        excluirProfessor,
        atualizarProfessor,
        excluirAluno,
        atualizarAluno,
        excluirEscola,
        atualizarEscola,
        excluirCurso,
        atualizarCurso,
        excluirMatricula,
        atualizarMatricula
               
    }


