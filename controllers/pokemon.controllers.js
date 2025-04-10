import Pokemon from "../models/pokemon.model.js";

const hiTrainer = async (req, res) => {
    try {
        console.log("Controller")
        res.status(200).send("Hola desde el controlador")
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const createPokemon = async (req, res) => {
    // console.log("create pokemon", req.body)
    // res.staus(201).send("pokemon created")
    try {
        const pokemon = new Pokemon (req.body)
        await pokemon.save()
        return res.satus(201).json(pokemon)
    } catch (error) {
        res.status(500).send(error)
    }
}

export default {
    hiTrainer, 
    createPokemon
}