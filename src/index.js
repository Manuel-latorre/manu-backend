import ProductManager from "./ProductManager.js";
import express from 'express';

const app = express(); //app es igual a la ejecución de express
const PORT = 4000     //defino el puerto
const manager = new ProductManager("./src/productos.json")

app.use(express.urlencoded({extended: true}));  //permite realizar consultas en la URL(req.query)

app.get('/', (req, res) => {
    res.send("Este es mi server con express para desadio N3")
});



app.get('/products', async (req, res) => {
    const products = await manager.getProducts()
    
    let {limit} = req.query
    if(limit){
        res.send(products.slice(0, limit))
    }else{
        res.send(products)
    }
})


app.get('/products/:id', async (req, res) => {
    const product = await manager.getById(parseInt(req.params.id));
    console.log(product)
    res.send(product)
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
})