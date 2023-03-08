let ator= new Ator(1,"JOWNE WAYNE");
console.log(ator);

let diretor= new Diretor(1,"Alfred Hitchcock");
console.log(diretor);

let inputBuscarFilme= document.querySelector("#input-buscar-filme");
let btnBuscarFilme= document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () =>{
    if(inputBuscarFilme.value.lengh > 0){
        let filmes= new Array();
        fetch("http://www.omdapi.com/?apikey=ed5e5ad5&s="+inputBuscarFilme.value,{mode:"cors"})
        .then((resp)=> resp.json())
        .then((resp)=>{
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme= new Filme(
                    item.imdbId,
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
            })
            
        })
    }
    return false;
}
let listarFilmes= async (filmes)=>{
    let listaFilmes= await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML= "";
    console.log(listaFilmes);
    if(filmes.lenght > 0){
        filmes.forEach(async(filme)=>{
            listaFilmes.appendChild(await filme.getCard());
        })
    }
}
