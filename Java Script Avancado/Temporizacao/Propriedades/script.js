function Animal(){
    this.raca = "Cao";
    this.nome = "Lulu";
    this.idade = 200;
    this.peso = 10;

    this.fazerXixi = function() {
        console.log("xiiiiii...");
    }
    this.comer = function(kg) {
        console.log("huumm...");
        this.peso = this.peso + (kg/2 );
    }

}

var lulu = new Animal();
lulu.raca = "Gato";
lulu.nome = "Lulu";

var xuxu = new Animal();
xuxu.raca = "Cao";
xuxu.nome = "Xuxu";

