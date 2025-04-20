import express from 'express';
import {getRecipe} from "../Controllers/getRecipe.js"


const recipeRouter = express.Router()

recipeRouter.post('/recipe',getRecipe);

export default recipeRouter