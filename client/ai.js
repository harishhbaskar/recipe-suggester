const getRecipeFromMistral =async (ingredients) => {

    try{
        const response = await fetch("http://localhost:5000/api/recipe",{
            method:"POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({ingredients:ingredients}),
        });

        const data = await response.json()

        if (!response.ok){
            throw new Error(data.error || "idk bro sum went wrong")
        }

        return data.recipe
    }catch(err){
        console.log(`errror:${err.message}`)
        return null
    }
}

export default getRecipeFromMistral