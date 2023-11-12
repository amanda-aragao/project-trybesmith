# Trybesmith

O projeto **Trybesmith** foi desenvolvido como uma loja virtual de itens medievais, especialmente aqueles feitos sob encomenda, como espadas personalizadas. A aplicação é construída como uma API utilizando Typescript e Sequelize.

## Tecnologias Utilizadas

- MySQL
- Node.js
- Docker
- Express
- Sequelize
- JWT



## Instruções

1. Clone este repositório:

   ```bash
   git clone git@github.com:amanda-aragao/project-trybesmith.git
Acesse o diretório do projeto e instale as dependências:

2. Acesse o diretório do projeto e instale as dependências:

   ```bash
   npm install 

3. Inicie os containers do compose trybesmith_api e trybesmith_db:

   ```bash
  docker-compose up -d --build

4. Acesse o terminal interativo do container criado pelo compose:

   ```bash
    docker-compose exec it trybesmith_api bash

5. Instale as dependências dentro do container:

   ```bash
   npm install 


## Endpoints
### Login
* POST /login: Cria um login ao usuário.

### Products
* POST /categories: Cria um novo produto na loja.
* GET /posts: Lista todos os produtos.

<img src="./src/diagram-der.png">

#### Desenvolvido por Amanda Aragão - 2023.