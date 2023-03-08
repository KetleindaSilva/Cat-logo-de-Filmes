class Ator{
    constructor(id,nome){
        this.nome=nome;
        this.id=id;
    }
}
class Diretor{
    constructor(id,nome){
        this.nome=nome;
        this.id=id;
    }
}
class Filme{
    constructor(id,titulo,ano,categoria,cartaz,direcao,atores,classificacao,avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.categoria=categoria;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.atores=atores;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
    }
    getCard=async ()=>{
        let card =document.createElement("div");
        card.setAttribute("class","card");
        let imgCartaz=document.createElement("img");
        imgCartaz.setAttribute("class","card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody =document.createElement("div");
        cardBody.setAttribute("class","card-body");
        let hCardTitle =document.createElement("h5");
        hCardTitle.setAttribute("class","card-title");
        let divDetalhes =document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content:space-around;");
        let divGenero =document.createElement("div");
        divGenero.setAttribute("style","flex-grow:1");
        let divAnoDuracao =document.createElement("div");
        divAnoDuracao.setAttribute("style","flex-grow:1");
        let divAnoProducao =document.createElement("div");
        divAnoProducao.setAttribute("style","flex-grow:1");
        let divClassificacao =document.createElement("div");
        divClassificacao.setAttribute("style","flex-grow:1");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(document.createTextNode(divGenero));
        divDetalhes.appendChild(document.createTextNode(divAnoProducao));
        divDetalhes.appendChild(document.createTextNode(divClassificacao));
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
        return card;
    }
}
let direcao = [
    new Diretor(1,"Lana Wachowski"),
    new Diretor(2,"Lilly Wachowski"),
]
let elenco = [
    new Ator(1,"Keanu Reeves"),
    new Ator(2,"Carrie-Anne Moss"),
    new Ator(3,"Laurence Fischburne"),
    new Ator(4,"Joe Pantaloiano"),
    new Ator(5,"Hugo Weaving"),
    new Ator(6,"Antony Ray Parker"),
]
let sinopse = "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia."
let cartaz="https://cdn.ome.lt/AD3QGEDWUBKncwHsM3hvHkRPZnM=/987x0/smart/uploads/conteudo/fotos/matrix_resurrections.jpg"
let genero = ["Ação","Aventura","Ficção cientifica"];
let filme= new Filme(
    1,
    "Matrix",
    1999,
    genero,
    102,
    sinopse,
    cartaz,
    direcao,
    elenco,
    14,
    null
);
console.log(filme);