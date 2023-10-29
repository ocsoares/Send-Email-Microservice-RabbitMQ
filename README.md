# **Send Email Microservice RabbitMQ**

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/neliocursos/exemplo-readme/blob/main/LICENSE)

# Autor

👤 Cauã Soares

💼 https://www.linkedin.com/in/ocauasoares

# Sobre o projeto

## Deploy na plataforma Render:

🚀 https://send-email-microservice-rabbitmq.onrender.com <br>

Esse é um microsserviço de enviar email com **filas**, desenvolvido usando a ferramenta de **mensageria** chamada **RabbitMQ**.

⚠️ **ATENÇÃO**: O email definido no **deploy** para enviar os emails é: nodevalidation12@gmail.com

# Estrutura do projeto

![Estrutura](https://raw.githubusercontent.com/ocsoares/images/master/send-email-microservice-rabbitmq/structure.png)

Esse projeto foi desenvolvido para usar as técnicas de **mensageria**, mas também a segurança e autenticação foram implementadas usando **JWT** (JSON Web Token)

## Módulos e use-cases

![Módulos](https://raw.githubusercontent.com/ocsoares/images/master/send-email-microservice-rabbitmq/modules.png)

![Email use-cases](https://raw.githubusercontent.com/ocsoares/images/master/send-email-microservice-rabbitmq/email-use-cases.jpg)

## Publish

![Publish](https://raw.githubusercontent.com/ocsoares/images/master/send-email-microservice-rabbitmq/publish.png)

## Consumer

![Consumer](https://raw.githubusercontent.com/ocsoares/images/master/send-email-microservice-rabbitmq/consumer.jpg)

## RabbitMQ Management

![RabbitMQ Management](https://raw.githubusercontent.com/ocsoares/images/master/send-email-microservice-rabbitmq/rabbitmq-management.jpg)

# Principais tecnologias e bibliotecas utilizadas

-   TypeScript
-   NestJS
-   Docker
-   RabbitMQ
-   Nodemailer
-   JWT
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

-   Autenticação e proteção da rota com **JWT**
-   O usuário pode enviar um **email** para qualquer outro email que especificar no body da requisição.
-   O email que será responsável por enviar é definido por meios das **variáveis de ambiente** e passados para o módulo do **Nodemailer**.

# Documentação

Documentação feita com a ferramenta Swagger na rota **/docs**

![Documentação](https://raw.githubusercontent.com/ocsoares/images/master/send-email-microservice-rabbitmq/docs.png)

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
