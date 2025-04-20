import React from "react";
import IngredientList from "./components/IngredientsList.jsx";
import getRecipeFromMistral from "./ai.js"
import MistralRecipe from "./components/MistralRecipe.jsx";
import Spinner from "./components/spinner.jsx"

export default function Main(){
    const [ingredients,setIngredients] = React.useState(['tomaotoo'])

    const [recipe,setRecipe] = React.useState("")
    
    const[isLoading,setLoading] = React.useState(false)

    function addIngredients(formData){
        const newIngredient = formData.get("ingredient")
        if (newIngredient && newIngredient.trim() != ""){
            setIngredients(prevIngredients => [...prevIngredients,newIngredient]) 
        }
    }

    async function getRecipe(){

        if (ingredients.length === 0){
            console.log("No ingredients are added, to start fetching add ingredients")
            return;
        }

        setLoading(true)
        setRecipe("")

        try{
            console.log("Fetching recipe")
            const recipeMarkdown = await getRecipeFromMistral(ingredients) 
            console.log("Recipe fetched")
            setRecipe(recipeMarkdown || "")
        }catch(err){
            console.err("an error occured",err.message)
        }finally{
            setLoading(false)
        }


    }

    return(
        <main>
            <form action={addIngredients}>
                <input 
                    type = "text"
                    placeholder = "eg. tomato"
                    aria-label = "Add ingredients"
                    name = "ingredient" 
                />
                <button disabled={isLoading} >Add ingredient</button>
            </form>

            {ingredients.length > 0 && 
                < IngredientList 
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    isLoading={isLoading}/>}

            {isLoading && <Spinner />}
                    

            {recipe && !isLoading && <MistralRecipe recipe={recipe}/>}
        </main>
    )
}