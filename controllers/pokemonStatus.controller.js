import Pokemon from"../models/pokemon.model.js"
import fetchPokemon from "../service/fetchPokemon.js"

const changeStatusToViewByIdPokemon = async (req, res)=>{
    try {
       const statusInPokeapi = fetchPokemon(req.body.pokemon_id)
        if(statusInPokeapi == 404){
            return res.status(404).json({
                message:"Pokemon not exists",
                status:404,
                data:null
            })
        }
        const pokemon = new Pokemon(req.body)
        await pokemon.save()
        return res.status(201).json(pokemon)
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            status:error.status,
            data:error
        })
    }
}


const catchPokemonByIdPokemon =async (req,res)=>{
   
    try {
        const pokemon_id = req.params.pokemon_id
        const pokemonNew ={
            pokemon_id:pokemon_id,
                view:true,
                catch:true,
                in_team:false
            }
            let filter ={pokemon_id:pokemon_id}
            const pokemon =await Pokemon.findOneAndReplace(filter,pokemonNew,{new:true})
            if(!pokemon){
                return res.status(404).json({
                    message:"Pokemon not found",
                    status:404,
                    data:null
                })
            }
            return res.status(200).json({
                    message:"Ok",
                    status:200,
                    data:pokemon
                })
        } catch (error) {
        res.status(500).json({error});
    }
}

const inteamPokemonByIdPokemon = async (req, res) => {
    try {
        const pokemon_id = req.params.pokemon_id
        const status = req.body.in_team
        let pokemon = await pokemon.findOne({
            pokemon_id:pokemon_id
        })

        if(!pokemon){
            return res.status(404).json({
                message:"Pokemon not found",
                status:404,
                data:null
            })
        }
        return res.status(200).json({
            message:"Pokemon update in team",
            status:200,
            data:pokemon
        })
    } catch (error) {
        res.status(500).json({error});
    }
}




export default {
    changeStatusToViewByIdPokemon,
    catchPokemonByIdPokemon,
    inteamPokemonByIdPokemon
}