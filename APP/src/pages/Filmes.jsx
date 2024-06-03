import data from '../../artigos.json';
import Fotter from '../components/Footer/Fotter';
import Pesquisa from '../components/Pesquisa/Pesquisa';

function Filmes() {
    console.log(data)
    return ( 
        <>

<Pesquisa/>

        <div className='align-middle'>
        <h1>Filmes</h1>
        {
            data.map(
                filme =>(
                    <>
                    <h1 key={filme.title}>{filme.title}</h1>
                    <img src={filme.image} alt="" />
                    </>
                )
            )
        }
        </div>

        <Fotter/>
        </>
     );
}

export default Filmes;