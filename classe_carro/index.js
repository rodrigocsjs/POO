class Carro {



    constructor(marca, modelo, ano, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidadeAtual = 0;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    getMarca() {
        return this.marca;
    }

    setMarca(marca) {
        this.marca = marca;
    }

    getModelo() {
        return this.modelo;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    getAno() {
        return this.ano;
    }

    setAno(ano) {
        this.ano = ano;
    }

    getVelocidadeAtual() {
        return this.velocidadeAtual;
    }

    setVelocidadeAtual(velocidade) {
        this.velocidadeAtual = velocidade;
    }

    getVelocidadeMaxima() {
        return this.velocidadeMaxima;
    }

    setVelocidadeMaxima(velocidade) {
        this.velocidadeMaxima = velocidade;
    }


    exibirInformacoes() {
        console.log("Marca:", this.getMarca());
        console.log("Modelo:", this.getModelo());
        console.log("Ano:", this.getAno());
        console.log("Velociade Atual:", this.getVelocidadeAtual());
        console.log("Velociade Máxima:", this.getVelocidadeMaxima());
    }


    acelerar(quantidade) {
        if (quantidade > 0) 
            {
            while ((this.getVelocidadeAtual() <= this.getVelocidadeMaxima()) && (quantidade > 0)) 
            {
                let vel = this.getVelocidadeAtual();
                vel++;
                this.setVelocidadeAtual(vel);
                quantidade--;
            }
        }

    }


    frear(quantidade) {
        if (quantidade > 0) 
         {
            while ((this.getVelocidadeAtual() > 0) && (quantidade > 0))
             {
                let vel = this.getVelocidadeAtual();
                vel--;
                this.setVelocidadeAtual(vel);
                quantidade--;
            }
        }
       
    }


    parar() {
        this.frear(this.getVelocidadeAtual());
    }


}

let car1 = new Carro("Ford", "Edge", 1995, 200);


car1.exibirInformacoes();


while(car1.getVelocidadeAtual() < car1.getVelocidadeMaxima())
{
    car1.acelerar(1);
}

console.log("\n velocidade atual > ",car1.getVelocidadeAtual());


console.log("--------------------------------------------------------")

let car2 =  new Carro("Fiat","Uno",2000,180);


car2.setVelocidadeAtual(10);
car2.exibirInformacoes();


while(car2.getVelocidadeAtual() > 0)
{
 car2.frear(1);
}


console.log( "\n velocidade atual > ",car2.getVelocidadeAtual());
