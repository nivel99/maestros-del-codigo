// Definición de la clase Category
class Category {
    // Método que devuelve un mensaje indicando que se muestran todas las categorías publicadas
    getAll(): string {
        return 'Todas las categorías publicadas';
    }
}

// Definición de la clase Post
class Post {
    // Atributo protegido para almacenar una instancia de la clase Category
    protected category: Category;

    // Constructor de la clase Post. Recibe un objeto de la clase Category como parámetro
    constructor(category: Category) {
        this.category = category;
    }

    // Método que devuelve un mensaje indicando que se muestran todos los posts publicados
    getAll(): string {
        return 'Todos los posts publicados';
    }

    // Método que utiliza el objeto category para obtener las categorías asociadas a los posts
    getCategoriesFromPost(): string {
        return this.category.getAll();
    }
}

// Código principal
// Creamos una nueva instancia de la clase Category
const category = new Category();

// Creamos una nueva instancia de la clase Post, pasándole el objeto de la clase Category como parámetro
const post = new Post(category);

// Llamamos al método getAll() de la clase Post
console.log(post.getAll());
console.log("<br>");

// Llamamos al método getAll() de la clase Category
console.log(category.getAll());
console.log("<br>");

// Llamamos al método getCategoriesFromPost() de la clase Post
console.log(post.getCategoriesFromPost());

//Para ejecutar primero es npx tsc ejemplo2.ts luego node ejemplo2.js