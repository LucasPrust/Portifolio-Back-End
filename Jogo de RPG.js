class Jogador {
  constructor(nome, vida, ataque) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
  }

  atacar(alvo) {
    console.log(`${this.nome} ataca ${alvo.nome} causando ${this.ataque} de dano.`);
    alvo.receberDano(this.ataque);
  }

  receberDano(dano) {
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
  }
}

class Guerreiro extends Jogador {
  constructor(nome, vida, ataque, forca) {
    super(nome, vida, ataque);
    this.forca = forca;
  }

  atacar(alvo) {
    const danoTotal = this.ataque + this.forca;
   console.log(`${this.nome} (Guerreiro) ataca com força total causando ${danoTotal} de dano.`);
    alvo.receberDano(danoTotal);
  }
}

class Mago extends Jogador {
  constructor(nome, vida, ataque, mana) {
    super(nome, vida, ataque);
    this.mana = mana;
  }

  lancarFeitico(alvo) {
    const custoMana = 10;
    const danoFeitico = this.ataque * 2;

    if (this.mana >= custoMana) {
      this.mana -= custoMana;
      console.log(`${this.nome} (Mago) lança feitiço em ${alvo.nome} causando ${danoFeitico} de dano. Mana restante: ${this.mana}`);
      alvo.receberDano(danoFeitico);
    } else {
      console.log(`${this.nome} não tem mana suficiente para lançar feitiço. Mana atual: ${this.mana}`);
    }
  }
}

const JogadorBase = new Jogador("Aventureiro", 100, 15)
const guerreiro = new Guerreiro("Thorg", 100, 15, 10);
const mago = new Mago("Eldrin", 80, 12, 30);

guerreiro.atacar(mago);     
mago.lancarFeitico(guerreiro); 
JogadorBase.atacar(guerreiro)
mago.mana = 5
mago.lancarFeitico(guerreiro)
