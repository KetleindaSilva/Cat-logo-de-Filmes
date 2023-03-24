
let inputBuscarFilme= document.querySelector("#input-buscar-filme");
let btnBuscarFilme= document.querySelector("#btn-buscar-filme");


btnBuscarFilme.onclick = () =>{
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=e539ebf5&s="+inputBuscarFilme.value, {mode: "cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            console.log(resp)
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
            listarFilmes(filmes);
        })
    }
    return false;
}



let detalhesFilme = async (id)=>{
    fetch("http://www.omdbapi.com/?apikey=e539ebf5&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=>{
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Director,
            resp.Awards,
            resp.imdbRating
        );
        document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());
        document.querySelector("#lista-filmes").style.display="none";
        document.querySelector("#mostrar-filme").style.display="flex";
        
    });
}
let listarFilmes = async (filmes)=> {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML="";
    mostrarFilme.innerHTML = "";
    document.querySelector("#mostrar-filme").innerHTML = "";
    document.querySelector("#mostrar-filme").style.display = "none";
    

    if (filmes.length > 0) {
        filmes.forEach(async(filme) => {
            console.log(filme);
            listaFilmes.appendChild( await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
        });
    }

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