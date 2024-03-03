import axios from 'axios'
import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './pokedeck.css'

function Pokedeck()
{
    const default_url='https://pokeapi.co/api/v2/pokemon/'
    // const [datalist,setDatalist]=useState([])
    // const [urlf,setUrlf]=useState(default_url)
    // const [urlp,seturlp]=useState(default_url)
    // const [url,seturl]=useState(default_url)

    const [pokemondetails,setpokemondetails]=useState(
        {
           datalist:[],
           urlf:default_url,
           urlp:default_url,
           url1:default_url 
        }
    )
 
    async function import_pokemon()
    {

        const response=await axios.get(pokemondetails.url1 ? pokemondetails.url1 : default_url)
        const data=response.data.results
        const nextl=response.data.next;
        // setUrlf(nextl)        
        const previousl=response.data.previous;
        // seturlp(previousl)
        // console.log(data)
        const pokemonlist=data.map((element)=>axios.get(element.url))
        const pokemon=await axios.all(pokemonlist)
        // setDatalist(pokemon)
        console.log(pokemon)
        const check=pokemon.map((element)=>{element.data
        
            const data=element.data

            return{
                id:data.id,
                name:data.name,
                img:data.sprites.other.dream_world.front_default
            }
        })
        // setDatalist(check)

        setpokemondetails((state)=>({
            ...state, 
            urlf:nextl,
            urlp:previousl,
            datalist:check}))
        // setpokemondetails((state)=>({...state,datalist:check}))
        
        // console.log(datalist)
       
    }

    useEffect(()=>{import_pokemon()},[pokemondetails.url1])

    return(
        <>
        
        <div className='imp'>
            <h1>Pokemon deck</h1>
        <textarea className="textarea" name="" id="" cols="50" rows="5"></textarea>
        <div>
        <button onClick={()=>setpokemondetails((state)=>({...state,url1:state.urlf}))}>Next</button> 
        {/* <button onClick={()=>seturl(urlp)}>Previous</button> */}
        <button onClick={()=>setpokemondetails((state)=>({...state,url1:state.urlp}))}>Previous</button>


        </div> 

        <h1>Pokemon details</h1>
        </div>
      
        <div className='deck'>
        {pokemondetails.datalist.map((element,index)=>(<Pokemon  key={index} id={element.id} name={element.name} img={element.img} />))}
        </div>
       
        </>
    )
}


export default Pokedeck;