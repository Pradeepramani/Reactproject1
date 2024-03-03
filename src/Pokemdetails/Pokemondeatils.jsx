import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './pokemondeatils.css'

 function Pokemondetails()
{
    const [happy,sethappy]=useState({})

    const {id}=useParams();
    async function download()
    {
    
     const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
     const data1=response.data;
     console.log(response)
     sethappy(
        {
            name:data1.name,
            type:data1.types,
            img:data1.sprites.other.dream_world.front_default

        }
     )
    }

   
    useEffect(()=>{download()},[id])
    if (happy.name )
    {
    return(
        <>
        <div className="details">

        
        <h1>{happy.name}</h1>
        <img src={happy.img}/>
        <div className="type">

        <h5> Type:</h5>{happy.type.map((element)=>
         <span key={element.type.name}> {element.type.name}</span> )
         
         }
         {/* <h1>{happy.type}</h1> */}

        </div>
        </div>
        </>
       
    )
    }
    else{
    return(
        <>
        <h1>all good</h1>
        </>
    )
    }

}

export default Pokemondetails;