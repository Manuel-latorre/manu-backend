class ProductManager {
    constructor (){
        this.products = [];
    }

    addProduct(producto){
        const codeProducto = this.products.map((product) => product.code);
        const productoRep = codeProducto.includes(producto.code);

        if (productoRep){
            console.log("Este codigo de producto ya esta cargado en nuestro sistema, por favor ingrese otro");
        }
        else if(Object.values(producto).includes("")) {
            console.log("Debe completar todos los campos para que el producto pueda ser ingresado, intente de nuevo")
        }else{
            let id;
            this.products.length === 0 ? (id = 1) : (id = this.products.length + 1);
            const newProduct = {...producto, id};
            this.products.push(newProduct);
        }

    }


    getProducts(){
        return this.products;
    }

    getProductById(id){
        const findProductById = this.products.find((product) => id === product.id);
        if(findProductById){
            return JSON.stringify(findProductById);
        }else{
            console.log("Not Found");
        }
    }
}

const prods = new ProductManager();

console.log(prods);

prods.addProduct({
    title: "Remera Adidas Argentina Campeon Mundial 2022",
    description: "Remera 100% algodon 3 estrellas argentina campeon",
    price: 11999,
    thumbnail: "https://www.adidas.com.ar/",
    code: 9888,
    stock: 103,
});


prods.addProduct({
    title: "Gorra Adidas Argentina",
    description: "Gorra Visera Curva Seleccion Argentina 2022",
    price: 7999,
    thumbnail: "https://www.adidas.com.ar/",
    code: 1233,
    stock: 5,
})

prods.addProduct({
    title: "Pantalon Seleccion Argentina 2022",
    description: "Pantalon Deportivo Zip Seleccion Argentina 2022",
    price: 19999,
    thumbnail: "https://www.adidas.com.ar/",
    code: 1233,
    stock: 34,
})

prods.addProduct({
    title: "Al-Rhila Oficial",
    description: "Balon Oficial Mundial 2022 Qatar",
    price: 34566,
    thumbnail: "https://www.adidas.com.ar/",
    code: 6622,
    stock: 12,
})

console.log("El producto seleccionado es:" + prods.getProductById(3));