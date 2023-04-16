# **Send Email Microservice RabbitMQ**

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/neliocursos/exemplo-readme/blob/main/LICENSE)

# Autor

👤 Cauã Soares

💼 https://www.linkedin.com/in/ocauasoares

# Sobre o projeto

## Deploy na plataforma Render:

🚀 https://send-email-microservice-rabbitmq.onrender.com <br>

⚠️ **ATENÇÃO:** O link do Deploy pode demorar um pouco para carregar porque o serviço hiberna por inatividade.

Esse é um microserviço de envial email com **filas**, desenvolvido usando a ferramenta de **mensageria** chamada RabbitMQ.

# Estrutura do projeto

![Estrutura](https://raw.githubusercontent.com/ocsoares/images/master/LINK--)

Esse projeto foi desenvolvido apenas para usar as técnicas de **mensageria**, então a segurança e autenticação **não** foi o foco principal.

## Use-cases e módulos

![Use-cases e módulos](https://raw.githubusercontent.com/ocsoares/images/master/LINK--)

## Publish

![Publish](https://raw.githubusercontent.com/ocsoares/images/master/LINK--)

## Consumer

![Consumer](https://raw.githubusercontent.com/ocsoares/images/master/LINK--)

## RabbitMQ Management

![RabbitMQ Management](https://raw.githubusercontent.com/ocsoares/images/master/LINK--)

# Principais tecnologias e bibliotecas utilizadas

-   TypeScript
-   NestJS
-   Docker
-   RabbitMQ
-   Nodemailer
-   PostgreSQL
-   Prisma
-   Jest
-   Swagger (documentação)

## Características e funcionalidades do projeto:

### Estrutural 🛠️

-   Clean Code
-   SOLID
-   Clean Architecture
-   PostgreSQL e RabbitMQ usados no **Docker**
    <br>
    <br>

### Funcionalidades 🎯

-   O usuário pode enviar um **email** para qualquer outro email que especificar no body da requisição.
-   O email que será responsável por enviar é definido por meios das **variáveis de ambiente** e passados para o módulo do **Nodemailer**.

# Documentação

Documentação feita com a ferramenta Swagger na rota **/docs**

![Documentação](https://raw.githubusercontent.com/ocsoares/images/master/LINK--)

# Executar o projeto localmente

Pré-requisitos: Typescript, NodeJS e Docker

```bash
# clonar o repositório
git clone https://github.com/ocsoares/Send-Email-Microservice-RabbitMQ

# instalar as bibliotecas
npm install

# criar um arquivo .env na pasta raíz do projeto

# configurar esse .env baseado no arquivo .env.example

# transpilar os arquivos do projeto para .js
npm run build

# iniciar o container do docker
docker-compose up

# executar o projeto
npm start
```
