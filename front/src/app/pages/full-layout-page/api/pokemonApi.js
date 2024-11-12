import axios from "axios";
///crear una instancia
 export const pokemonApi=axios.create({
    baseURL:'https://pokeapi.co/api/v2/'
 });