import express from 'express';
import cors from 'cors';


import recipeRouter from "./Routes/recipeRoutes.js"


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api',recipeRouter)


app.listen(port,()=> {
    console.log(`server is running on http://localhost:${port}`)
})


