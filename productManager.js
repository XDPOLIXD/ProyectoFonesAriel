class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.log("Ya existe un producto con el mismo código.");
            return;
        }

        const newProduct = {
            id: this.productIdCounter++,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };

        this.products.push(newProduct);
        console.log("Producto agregado con éxito.");
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.log("Producto no encontrado.");
        }
    }
}

// Ejemplo de uso
const productManager = new ProductManager();
productManager.addProduct("producto prueba 1", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

const allProducts = productManager.getProducts();
console.log("Todos los productos:", allProducts);

const productById = productManager.getProductById(1);
console.log("Producto por ID:", productById);

const nonExistentProduct = productManager.getProductById(3); // Producto no existente
