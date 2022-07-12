# Neste projeto crio uma api para fazer aluguel de casas.

### com varias rotas para requisicoes e feito em node.js
### para iniciar o servidor basta usar o yarn dev.
### todas as rotas estao configuradas


## *Primeiro e necessario fazer login usando o metodo de cadastro

### http://localhost:3333/sessions => abrindo chaves e colocando o email pode criar ou fazer requisicao

## *Tipos de rotas e utilidades

### http://localhost:3333/houses => (tipo post) cadastra a casa.
### http://localhost:3333/houses => (tipo get) procura as casas cadastradas no sistema.
### http://localhost:3333/houses => (tipo put) atualiza a informacao.
### http://localhost:3333/houses => (tipo delete) deleta a informacao da casa.

## *Reservas de casa

### http://localhost:3333/houses/( COLOQUE O ID DA CASA CADASTRADA AQUI )/reserve => (tipo put) ira cadastra a reserva
### http://localhost:3333/reserves => (tipo get) ira listar as casas cadastradas
### http://localhost:3333/reserves/cancel => (tipo delet) ira cancelar a reserva
