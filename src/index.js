const express = require('express');

const app = express();

app.use(express.json());

const project = [];

app.get('/project', (request, response) => {
  const { title, owner } = request.query;
  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/project', (request, response) => {
  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/project/:id', (request, response) => {
  const { id } = request.params;
  
  console.log(id);
  
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/project/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.listen(3333, () => {
	console.log('Back-end started🚀');
});
