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


        <div className='ListaFilmes  sm:grid md:grid-cols-3 xl:grid-cols-3 3xl:flex flex-colunm  itens-center bg-2'>
            {
                filmes.map(
                    filme =>(
                        <div className="cardFilme flex flex-col m-6 bg-3 align-middle p-3"  key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/w92/${filme.poster_path}`} className='size-9/12 flex align-middle' alt="" />
                        <h1 >{filme.title}</h1>
                        <p className='text-xs'>{filme.release_date}</p>
                        <Link to={`${filme.id}`} className='bg-purple-800 w-6/12'>Saiba Mais</Link>
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