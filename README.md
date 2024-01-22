## Description

O cvcontract-project é um projeto que gera um contrato de compra e venda automaticamente em PDF utilizando os dados fornecidos para a transação. O intuito da criação deste projeto foi de aprender sobre a geração e estilização de arquivos .pdf através do código back-end. 

Para isso, foi criado um CRUD utilizando o inicializador do NestJS e adaptado de acordo com as necessidades do projeto, utilizando a entidade "Transaction" para armazenar todos os dados necessários das pessoas envolvidas na transação para preencher o arquivo PDF do contrato de compra e venda, tais como os dados do adquirente, transmissor e emissor do contrato. Para criar o arquivo PDF, um rota de acesso foi definida assim como uma "service" responsável por criar o arquivo .pdf e o estilizar, através da biblioteca PDFKit.

Durante o desenvolvimento deste projeto foram utilizadas as tecnologias NestJS com TypeScript para o desenvolvimento do código; SQLite com TypeORM como banco de dados e ORM responsável pelas alterações no banco; PDFKit como biblioteca responsavél pela criação e edição do documento .pdf gerado; e Node.js como interpretador do código.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Author - [Nícolas dos Anjos Nunes](https://www.linkedin.com/in/nicolasanunes/)

## License

Nest is [MIT licensed](LICENSE).
