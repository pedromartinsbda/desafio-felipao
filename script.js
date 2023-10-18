class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi("magia", 100, "mago");
const heroi2 = new Heroi("espada", 35, "guerreiro");
const heroi3 = new Heroi("artes marciais", 32, "monge");
const heroi4 = new Heroi("shuriken", 17, "ninja");

heroi2.atacar();
