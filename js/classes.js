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
    constructor(id,titulo,ano,genero,duracao,cartaz,sinopse,direcao,elenco,classificacao,avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.sinopse=sinopse;
        this.cartaz=cartaz;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=null;
    }
    setBtnDetalhes=() =>{
        this.btnDetalhes =document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class","btnDetalhesFilme");
    }
    getBtnDetalhes=()=>{
        return this.btnDetalhes
    }
    getDetalhesFilmes = async ()=>{

        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img"); 
        imgCartaz.setAttribute("src", this.cartaz);

        let cardBody = document.createElement("div"); 
        cardBody.setAttribute("class","card-detalhes");

        let divDetalhes = document.createElement("div"); 
        divDetalhes.setAttribute("class","informacoes" );

        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");

        let divAnoProducao = document.createElement("div"); 
        divAnoProducao.setAttribute("style", "flex-grow:1;"); 
        
        let detalhes = document.createElement("div");
        detalhes.setAttribute("class", "card mb-3");
        detalhes.setAttribute("class", "row");
        let imagem = document.createElement("div");
        imagem.setAttribute("class", "col-mb-4");
        let img = document.createElement("img");
        img.setAttribute("class", "img-fluid");
        img.setAttribute("style", "rounded-start")
        let cardc  = document.createElement("div");
        cardc.setAttribute("class","col-md-8");
        let cardbody = document.createElement("div");
        cardbody.setAttribute("class","card-body");
        let cardh5 = document.createElement("h5");
        cardh5.setAttribute("class","card-title");
        let cardp = document.createElement("p");
        cardp.setAttribute("class","card-text");
        let cardpp = document.createElement("p");
        cardpp.setAttribute("class","card-text");
        let small = document.createElement("small");
        small.setAttribute("class","text-muted");
        cardh5.appendChild(document.createTextNode(this.titulo));
        
    }
    getCard = async ()=>{
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display: flex; justify-content: space-around; text-align: center; font-weight: 700;");
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);


        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }
    
}
/*class Detalhes{
    constructor(titulo,ano,id,tipo,poster){
    this.titulo=titulo;
    this.ano=ano;
    this.id=id;
    this.tipo=tipo;
    this.poster=poster;
}
}*/
