# N2_LPIII

Foi utilizado o MongoDB Atlas como banco de dados e o envio das requisições foi feito pelo Postman.


### Como realizar as Requisições: 

#### Sala:
http://localhost:3000/rooms

* buscar sala pelo ID - GET - http://localhost:3000/rooms/<id>
* modificar sala existente por ID - PATCH - http://localhost:3000/rooms/<id>
* Listar todas as salas - GET - http://localhost:3000/rooms
* criar uma nova sala - POST - http://localhost:3000/rooms



#### Usuario:
http://localhost:3000/users
 
* buscar um único usuario por nome - GET - http://localhost:3000/users/<nome>
* deletar usuario por ID - DELETE - http://localhost:3000/users/<id>
* Listar todos usuário - GET - http://localhost:3000/users 
* criar novo usuario - POST - http://localhost:3000/users 



Para criar e alterar classes, coloque as informações da classe no BODY da requisição no postman como arquivo JSON como os exemplos a baixo:
 
 {
 
    "nome" : "Fulano",
    "sobrenome" : "Ciclano"
 
}
 
 {
 
    "nome" : "sala",
    "lotacao" : 56
 
}
