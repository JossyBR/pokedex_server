// const express = require("express");
import express from "express";

import pokemonControllers from "../controllers/pokemon.controllers.js";

const router = express.Router();

router.get("/hello", pokemonControllers.hiTrainer);
router.post("/", pokemonControllers.createPokemon) 

export default router
