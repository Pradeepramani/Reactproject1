import './Pokemon.css'
function Pokemon({id,name,img})
{

return(
    <>
    <div className='pokemon'>
    <h1>{id}</h1>
    <h1>{name}</h1>
    <img src={img} alt="pokemonimage"></img>
    </div>
  
    </>
)
}


export default Pokemon;