import axios from 'axios'
import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './pokedeck.css'

function Pokedeck()
{
    const default_url='https://pokeapi.co/api/v2/pokemon/'
    const [datalist,setDatalist]=useState([])
    const [urlf,setUrlf]=useState(default_url)
    const [urlp,seturlp]=useState(default_url)
    const [url,seturl]=useState(default_url)
 
    async function import_pokemon()
    {

        const response=await axios.get(default_url ? url : default_url)
        const data=response.data.results
        const nextl=response.data.next;
        setUrlf(nextl)        
        const previousl=response.data.previous;
        seturlp(previousl)
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
                img:data.sprites.front_default
            }
        })
        setDatalist(check)
        
        // console.log(datalist)
       
    }

    useEffect(()=>{import_pokemon()},[url])

    return(
        <>
        <div className='imp'>
            
        <textarea className="textarea" name="" id="" cols="50" rows="5"></textarea>
        <div>
        <button onClick={()=>seturl(urlf)}>Next</button> 
        <button onClick={()=>seturl(urlp)}>Previous</button>

        </div> 

        </div>
      
        <div className='deck'>
        {datalist.map((element,index)=>(<Pokemon  key={index} id={element.id} name={element.name} img={element.img} />))}
        </div>
       
        </>
    )
}


export default Pokedeck;