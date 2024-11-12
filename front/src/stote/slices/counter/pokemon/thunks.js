import { startLoadingPokemons, setPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../../app/pages/full-layout-page/api/pokemonApi";

export const getPokemons=(page=0)=>{
    //una funcion que retorna otra funcion 
    return async(dispatch, getState)=>{
       dispatch(startLoadingPokemons()); 
      {/*//realizar peticion http por medio de la fetch

      //const resp=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
      //const data= await resp.json();*/}


      const {data}=await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10}`)

      //console.log(resp);
      dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));

    }

}