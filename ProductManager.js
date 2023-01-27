import { promises as fs } from "fs";

class ProductManager {
    constructor(path) {
        this.path = path;
    }
        async addProduct(object) {
        try {
            const read = await fs.readFile(this.path, "utf8");
            const data = JSON.parse(read);
            const objCode = data.map((product) => product.code);
            const objExist = objCode.includes(object.code);
            if (objExist) {
            console.log("Codigo existente, intente otro por favor");
        } else if (Object.values(object).includes("")) {
            console.log(
                "Debes completar todos los campos para poder ingresar un producto"
            );
        } else {
            let id;
            id = data.length + 1;
            const newObject = { ...object, id };
            data.push(newObject);
            await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8");
            return console.log(`Agregaste el producto con el id: ${newObject.id} correctamente`);
        }
        } catch (error) {
            throw error;
        }
    }

    async getProducts() {
        try {
            const read = await fs.readFile(this.path, "utf8");
            return JSON.parse(read);
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            const read = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(read);
            const product = data.find((product) => product.id === id);
            if (product) {
            return product;
        } else {
            console.log("Not Found");
        }
        } catch (error) {
            throw error;
        }
    }

    async deleteProduct(id) {
        try {
            const read = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(read);
            const productoEliminado = JSON.stringify(
                data.find((product) => product.id === id)
            );
            const newData = data.filter((product) => product.id !== id);
            await fs.writeFile(this.path, JSON.stringify(newData), "utf-8");
            return console.log(`El producto ${productoEliminado} ha sido eliminado correctamente`);
        } catch (error) {
            throw error;
        }
    }

    async updateProduct(id, entry, value) {
        try {
            const read = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(read);
            const index = data.findIndex((product) => product.id === id);
            if(!data[index][entry]){
            throw Error
            }
            data[index][entry] = value;
            await fs.writeFile(this.path, JSON.stringify(data, null, 2));
            return console.log(data); 
        } catch (error) {
            console.log('Not found');
        }
    }
}
const products = new ProductManager("./productos.json");

await products.updateProduct(3, "stock", 32)
await products.addProduct({title: "God of War", description: "juego digital ps3", price: 340, thumbnail:"img", code: 444, stock:3 });
await products.deleteProduct(4);

























































































/* desafio 1 */



/* class ProductManager {
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


console.log("El producto seleccionado es:" + prods.getProductById(3)); */

