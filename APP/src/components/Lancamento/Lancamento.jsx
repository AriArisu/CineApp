import { useState, useEffect } from 'react';

function Lancamento() {

    const [filmes, setFilmes] = useState([])

    useEffect( ()=> {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return ( 
        <>



        <div className='ListaFilmes px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center '>
            {
                filmes.map(
                    filme =>(
                        <div className="cardFilme flex-row " key={filme.date}>
                        <img src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} alt="" />
                        <h1 >{filme.title}</h1>   
                        </div>                      
                    )
                )
            }
        </div>
<div/>
</>
     );
}

export default Lancamento;