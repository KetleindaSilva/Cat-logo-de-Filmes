
let inputBuscarFilme= document.querySelector("#input-buscar-filme");
let btnBuscarFilme= document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () =>{
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=e539ebf5&s="+inputBuscarFilme.value)
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme= new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null,
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }
    return false;
}

let listarFilmes = (filmes)=> {
    let listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    //console.log(listaFilmes);
    if (filmes.length > 0) {
        filmes.forEach((filme) => {
            console.log(filme);
            listaFilmes.appendChild( filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
        });
    }

}
let detalhesFilme = async (id)=>{
    let filmes = new Array();
    fetch("https://www.omdbapi.com/?apikey=e539ebf5&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=>{
        console.log(resp);
        let filme = new Filme(
            resp.Title,
            resp.Year,
            resp.imdbID,
            resp.Type,
            resp.Poster,
        );
        filmes.push(filme);
    })
}

/*
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
console.log(filme);*/
