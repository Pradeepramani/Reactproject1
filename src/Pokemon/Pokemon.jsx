import './Pokemon.css'
import {Link} from 'react-router-dom'
import Pokemondetails from '../Pokemdetails/Pokemondeatils';
function Pokemon({id,name,img})
{

return(
    <>
    <Link to={`/pokemon/${id}`} className='pokemon'>
    
    <div >
    {/* <h1>{id}</h1> */}
    <h1>{name}</h1>
    <img src={img} alt="pokemonimage"></img>
        </div>
    </Link>
    </>
)
}


export default Pokemon;