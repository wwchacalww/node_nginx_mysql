# Iniciando com Docker - Desafio Nginx com Node.js
## Curso Full Cycle 3.0 - Repositório do desafio do curso Docker

### Desafio
[ X ] Quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js.<br />
[ X ] A aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people. <br />
[ X ] O retorno da aplicação node.js para o nginx deverá ser: <br /> 
- "\<h1>Full Cycle Rocks!\</h1>" <br />
- Lista de nomes cadastrada no banco de dados <br />

[ X ] Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

### Solução
- Começo montando o docker-compose com mysql com volumes direcionado para /mysql
- Crio a imagem do node com acesso ao mysql e crio a table people
- Coloco a imagem do node no docker-compose
- Crio a imagem do Nginx com proxy reverso 