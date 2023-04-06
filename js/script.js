
let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let mostrarFilme = document.querySelector("#mostrar-filme");
let listaFilme = document.querySelector("#lista-filme");

btnBuscarFilme.onclick = () => {

    if (inputBuscarFilme.value.length > 0) {
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=e539ebf5&s=" + inputBuscarFilme.value, { mode: "cors" })
            .then((resp) => resp.json())
            .then((resp) => {
                resp.Search.forEach(item => {
                    console.log(item);
                    let filme = new Filme(
                        item.imdbID,
                        item.Title,
                        item.Year,
                        null,
                        null,
                        null,
                        item.Poster,
                        null,
                        null,
                        null,
                        null
                    );
                    filmes.push(filme);
                });
                listarFilmes(filmes);
            })

    }
    mostrarFilme.style.display = "none";
    return false;
}



let detalhesFilme = async (id) => {
    fetch("https://www.omdbapi.com/?apikey=e539ebf5&i=" + id)
        .then((resp) => resp.json())
        .then((resp) => {
            console.log(resp);
            let filme = new Filme(
                resp.imdbID,
                resp.Title,
                resp.Year,
                resp.Genre.split(", "),
                resp.Runtime,
                resp.Plot,
                resp.Poster,
                resp.Director,
                resp.Actors.split(", "),
                resp.Awards,
                resp.imdbRating
            )
            console.log(filme);
            mostrarFilme.style.display = "flex";
            mostrarFilme.appendChild(filme.getDetalhesFilme());


            document.querySelector("#btnFechar").onclick = () => {
                document.querySelector("#lista-filmes").style.display = "flex";
                document.querySelector("#mostrar-filme").innerHTML = "";
                document.querySelector("#mostrar-filme").style.display = "none";
            }
            document.querySelector("#btnSalvar").onclick = () => {
                SalvarFilme(filme);
            }
            document.querySelector("#btnDesfavorito").onclick = () => {
                Desfavoritar(filme);
            }
            document.querySelector("#btnEditar").onclick = () => {
                Editar(filme);
            }
            document.querySelector("#lista-filmes").style.display = "none";
            document.querySelector("#mostrar-filme").style.display = "flex";
        });
}

let SalvarFilme = (filme) => {
    let filmesString = localStorage.getItem('filmesFavoritos');
    let filmes = null;
    if (filmesString) {
        filmes = JSON.parse(filmesString);
        filmes.push(filme);
    } else {
        filmes = [filme];
    }
    filmes = JSON.stringify(filmes);
    localStorage.setItem('filmesFavoritos', filmes);
}


let navFavoritos = document.querySelector("#nav-favoritos");



let mostraFavoritos = () => {
    let filmesFavoritos = localStorage.getItem('filmesFavoritos');
    filmesFavoritos = JSON.parse(filmesFavoritos);
    let filmes = new Array();
    filmesFavoritos.forEach((item) => {
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            item.genero,
            item.duracao,
            item.cartaz,
            item.cartaz,
            item.direcao,
            item.elenco,
            item.classificacao,
            item.avaliacao,
        )
        filmes.push(filme);
    });
    listarFilmes(filmes);
}

navFavoritos.onclick = () => {
    mostraFavoritos();
}

let Desfavoritar = (id) => {
    let filmesFavoritos = JSON.parse(localStorage.getItem('filmesFavoritos'));
    let Id = (filme) => filme.id == id;
    let deletar = filmesFavoritos.find(Id);
    filmesFavoritos.splice(deletar, 1);
    localStorage.setItem('filmesFavoritos', JSON.stringify(filmesFavoritos));

    mostraFavoritos();
}

    let listarFilmes = async (filmes) => {
        let listaFilmes = await document.querySelector("#lista-filmes");
        listaFilmes.style.display = "flex";
        listaFilmes.innerHTML = "";
        document.querySelector("#mostrar-filme").innerhtml = "";
        if (filmes.length > 0) {
            filmes.forEach(async (filme) => {
                console.log(filme);
                listaFilmes.appendChild(await filme.getCard());
                filme.getBtnDetalhes().onclick = () => {
                    listaFilmes.style.display = "none";
                    detalhesFilme(filme.id);
                };
            });
        }


    }


