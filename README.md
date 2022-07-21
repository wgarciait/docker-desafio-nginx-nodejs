# Desafio Full Cycle Módulo Docker
## Desafio Nginx -> Nodejs -> MySQL

Nesse desafio é colocado em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

# Executar a aplicação
```
docker-compose up -d --build
```
# Acessar a aplicação via browser
```
localhost:8080
```
