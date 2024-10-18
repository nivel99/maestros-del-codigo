<?php
// Definimos la clase Post
class Post {
    // Atributo protegido para almacenar una instancia de la clase Category
    protected $category;

    /* Constructor de la clase Post. Se ejecuta al crear una nueva instancia de Post. 
       Recibe un objeto de la clase Category como parámetro e inicializa el atributo $category con dicho objeto. */
    public function __construct(Category $category){
        $this->category = $category;
    }

    // Método que devuelve un mensaje indicando que se muestran todos los posts publicados
    public function getAll(){
        return 'Todos los post publicados';
    }

    // Método que utiliza el objeto $category para obtener las categorías asociadas a los posts
    public function getCategoriesFromPost(){
        return $this->category->getAll();
    }
}
?>
