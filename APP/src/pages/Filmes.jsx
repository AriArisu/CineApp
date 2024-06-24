import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Pesquisa from '../components/Pesquisa/Pesquisa';



function Filmes() {


    const [filmes, setFilmes] = useState([])

    useEffect( ()=> {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])

    return ( 
        <>

<Pesquisa/>


        <div className='ListaFilmes px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center '>
            {
                filmes.map(
                    filme =>(
                        <div className="cardFilme flex-row w-m  " key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} alt="" />
                        <h1 >{filme.title}</h1>   
                        <Link to={`${filme.id}`} className='bg-purple-800'>Saiba Mais</Link>
                        </div>                      
                    )
                )
            }
        </div>
<div/>
</>
     );
}

export default Filmes;