require("dotenv").config();

const express = require("express");

const app = express();

const bd = require('./bd')

app.use(express.json());


app.listen(process.env.PORT, () =>{ 
    console.log("App is running server nodejs");
});

app.get("/Professor", async(req,res)=> {
    const results = await bd.consultaProfessor();
    res.json(results);
}
);

app.get("/Aluno", async(req,res)=> {
    const results = await bd.consultaAluno();
    res.json(results);
}
);

app.get("/Escola", async(req,res)=> {
    const results = await bd.consultaEscola();
    res.json(results);
}
);

app.get("/Curso", async(req,res)=> {
    const results = await bd.consultaCurso();
    res.json(results);
}
);

app.get("/Matricula", async(req,res)=> {
    const results = await bd.consultaMatricula();
    res.json(results);
}
);

app.delete('/Professor/:id', async(req,res)=> {
    await bd.excluirProfessor(parseInt(req.params.id));
    res.sendStatus(201);
}
);

app.patch('/Professor/', async(req,res)=> {
    await bd.atualizarProfessor(req.body.idProfessor,req.body.nome, req.body);
    res.sendStatus(201);
}
);

app.delete('/Aluno/:id', async(req,res)=> {
    await bd.excluirAluno(parseInt(req.params.id));
    res.sendStatus(201);
}
);

app.patch('/Aluno/', async(req,res)=> {
    await bd.atualizarAluno(req.body.idAluno,req.body.nome, req.body);
    res.sendStatus(201);
}
);

app.delete('/Escola/:id', async(req,res)=> {
    await bd.excluirEscola(parseInt(req.params.id));
    res.sendStatus(201);
}
);

app.patch('/Escola/', async(req,res)=> {
    await bd.atualizarEscola(req.body.idEscola,req.body.nome, req.body);
    res.sendStatus(201);
}
);

app.delete('/Curso/:id', async(req,res)=> {
    await bd.excluirCurso(parseInt(req.params.id));
    res.sendStatus(201);
}
);

app.patch('/Curso/', async(req,res)=> {
    await bd.atualizarCurso(req.body.idCurso,req.body.nome, req.body);
    res.sendStatus(201);
}
);

app.delete('/Matricula/:id', async(req,res)=> {
    await bd.excluirMatricula(parseInt(req.params.id));
    res.sendStatus(201);
}
);

app.patch('/Matricula/', async(req,res)=> {
    await bd.atualizarMatricula(req.body.Aluno_idAluno,req.body.nome, req.body);
    res.sendStatus(201);
}
);

