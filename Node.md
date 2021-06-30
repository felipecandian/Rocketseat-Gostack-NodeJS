# Node

# Primeiros passos com Node Js

## Introdução

- [ ]  Instalação do Node
- [ ]  Requisitos
- [ ]  DOM e Eventos

## Iniciando o primeiro projeto

- [ ]  Abrir o terminal e digitar o seguinte comando:

Com terminal aberto:

```
yarn init -y
```

Com isso será criado o nosso package.json

- [ ]  O primeiro passo a ser feito será criar uma **PASTA** chamada **src,** que significa source, "fonte".
- [ ]  Depois criaremos um arquivo chamado index.js

---

Feito isso instalaremos nossa primeira dependência chamada Express:

É um microframeworking, com isso poderá criar rotas para retornos, e também gerenciar o middle

- [ ]  **Instalar o Express**

```
yarn add express -D
```

Começaremos dentro de "**`index.js`**"

```jsx
//Começando importando o express dentro de uma variável chamada express
const express = require('express');

//Declarando uma variavel app
const app = express();

//Escutaremos uma porta
app.listen(3333);
```

Precisaremos escutar uma porta:
```jsx
//Começando importando o express dentro de uma variável chamada express
const express = require('express');

//Declarando uma variavel app
const app = express();

//Usaremos o método get e o endereço que quer acessar
app.get('/projects', (request,response) => {
return response.send('Hello World');
});

//Escutaremos uma porta
app.listen(3333);
```