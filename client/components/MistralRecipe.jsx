import ReactMarkdown from 'react-markdown'

export default function MistralRecipe(props){
    return(
        <>
            <h3>Here is what is recommend:</h3>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </>
    )
}