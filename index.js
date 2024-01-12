
//classe
class heroi{ //funcao dentro da classe
    constructor (nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    jogador(){
    console.log("Nome do jogador: " + this.nome)
    console.log("idade: "+ this.idade)
    console.log("Tipo de heroi: "+ this.tipo)
    console.log("---------------------")
    }
    atacar(){
    if(this.tipo == "mago")
    this.ataque = "magia"
    
    else if(this.tipo == "guerreiro")
    this.ataque = "espada"

    else if(this.tipo == "monge")
    this.ataque = "artes marciais"

    else if(this.tipo == "ninja")
    this.ataque = "shuriken"

    console.log("O " + this.tipo + " atacou usando "+ this.ataque)

}
} 
//objeto chamando a classe definindo parametros para a funcao
let tipoHeroi = new heroi("Israel", "50", "ninja")

tipoHeroi.jogador()
tipoHeroi.atacar()
