export default function IngredientList(props){
    const listt = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return(
        <>
            <h2>Ingredients so far:</h2>
            <ul>{listt}</ul>
            <button disable={props.isLoading} onClick={props.getRecipe}>Get Recipe</button>
        </>
    )
}