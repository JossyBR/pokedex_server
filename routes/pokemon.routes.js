// const express = require("express");
import express from "express";

import pokemonControllers from "../controllers/pokemon.controllers.js";
import pokemonStatusController from "../controllers/pokemonStatus.controller.js"

const router = express.Router();

router.get("/hello", pokemonControllers.hiTrainer);
router.get("/", pokemonControllers.getPokemons);
router.get("/:pokemon_id", pokemonControllers.getPokemonByIdPokemon);
router.post("/", pokemonControllers.createPokemon);
router.post("/view", pokemonStatusController.changeStatusToViewByIdPokemon);
router.put("/catch/:pokemon_id", pokemonStatusController.catchPokemonByIdPokemon)
router.put("/inteam/:pokemon_Id", pokemonStatusController.inteamPokemonByIdPokemon)


// router.get("/",pokemonControllers.getPokemons)
// router.get("/:pokemon_id",pokemonControllers.getPokemonByIdPokemon)


export default router
