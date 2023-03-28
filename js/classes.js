class Ator{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Diretor{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}


class Filme{
    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = null;
    }

    getCard = async () => {

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

    getBtnDetalhes = () => {

        return this.btnDetalhes;

    }

    setBtnDetalhes = () => {

        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");

    }

    getDetalhesFilme = () => {

        let cardDet = document.createElement('div');
        cardDet.setAttribute("class", "carddetalhes");

        let imgcard = document.createElement("img");
        imgcard.setAttribute("class", "imagemCardDetalhes");
        imgcard.setAttribute("src", this.cartaz);

        let BodyDetalhes = document.createElement("div");
        BodyDetalhes.setAttribute("class", "body-detalhes");
        let h5TituloDetalhes = document.createElement("h5");
        h5TituloDetalhes.setAttribute("class", "card-title");
        h5TituloDetalhes.appendChild(document.createTextNode(this.titulo));
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("class", "detalhescard");
        let divAno = document.createElement("div");
        divAno.setAttribute("class", "anocard");
        let divGenero = document.createElement("div");
        divGenero.setAttribute("class", "generocard");
        let divDuracao = document.createElement("div");
        divDuracao.setAttribute("class", "duracaocard");
        let divDirecao = document.createElement("div");
        divDirecao.setAttribute("class", "direcaocard");
        let divElenco = document.createElement("div");
        divElenco.setAttribute("class", "elencocard");
        let divAvaliacao = document.createElement("div");
        divAvaliacao.setAttribute("class", "avaliacaocard");
        let divSinopse = document.createElement("div");
        divSinopse.setAttribute("class", "sinopsecard");

        divAno.appendChild(document.createTextNode(this.ano));
        divGenero.appendChild(document.createTextNode(this.genero));
        divDuracao.appendChild(document.createTextNode(this.duracao));
        divDirecao.appendChild(document.createTextNode(this.direcao));
        divElenco.appendChild(document.createTextNode(this.elenco));
        divAvaliacao.appendChild(document.createTextNode(this.avaliacao));
        divSinopse.appendChild(document.createTextNode(this.sinopse));

        divDetalhes.appendChild(divAno);
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divDirecao);
        divDetalhes.appendChild(divElenco);
        divDetalhes.appendChild(divAvaliacao);
        divDetalhes.appendChild(divSinopse);
        cardDet.appendChild(imgcard);
        cardDet.appendChild(BodyDetalhes);
        BodyDetalhes.appendChild(h5TituloDetalhes);
        BodyDetalhes.appendChild(divDetalhes);

        let btnSalvar = document.createElement('button');
        btnSalvar.appendChild(document.createTextNode('Salvar'));
        btnSalvar.setAttribute('id', 'btnSalvar');
        divDetalhes.appendChild(btnSalvar);

        let btnFechar = document.createElement('button');
        btnFechar.appendChild(document.createTextNode('Fechar'));
        btnFechar.setAttribute('id', 'btnFechar');
        divDetalhes.appendChild(btnFechar);

        return cardDet;

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
