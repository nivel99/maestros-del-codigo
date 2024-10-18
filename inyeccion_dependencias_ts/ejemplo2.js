// Definición de la clase Category
var Category = /** @class */ (function () {
    function Category() {
    }
    // Método que devuelve un mensaje indicando que se muestran todas las categorías publicadas
    Category.prototype.getAll = function () {
        return 'Todas las categorías publicadas';
    };
    return Category;
}());
// Definición de la clase Post
var Post = /** @class */ (function () {
    // Constructor de la clase Post. Recibe un objeto de la clase Category como parámetro
    function Post(category) {
        this.category = category;
    }
    // Método que devuelve un mensaje indicando que se muestran todos los posts publicados
    Post.prototype.getAll = function () {
        return 'Todos los posts publicados';
    };
    // Método que utiliza el objeto category para obtener las categorías asociadas a los posts
    Post.prototype.getCategoriesFromPost = function () {
        return this.category.getAll();
    };
    return Post;
}());
// Código principal
// Creamos una nueva instancia de la clase Category
var category = new Category();
// Creamos una nueva instancia de la clase Post, pasándole el objeto de la clase Category como parámetro
var post = new Post(category);
// Llamamos al método getAll() de la clase Post
console.log(post.getAll());
console.log("<br>");
// Llamamos al método getAll() de la clase Category
console.log(category.getAll());
console.log("<br>");
// Llamamos al método getCategoriesFromPost() de la clase Post
console.log(post.getCategoriesFromPost());
//Para ejecutar primero es npx tsc ejemplo2.ts luego node ejemplo2.js
