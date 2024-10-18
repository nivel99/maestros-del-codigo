<?php 

// Incluimos los archivos 'Post.php' y 'Category.php' para poder usar las clases que contienen
require 'Post.php';
require 'Category.php';

// Creamos una nueva instancia de la clase Post, pasándole un objeto de la clase Category como parámetro
$post = new Post(new Category);

// Creamos una nueva instancia de la clase Category
$category = new Category();

// Llamamos al método getAll() de la clase Post, que devuelve todos los posts publicados
echo $post->getAll();
echo "<br>";

// Llamamos al método getAll() de la clase Category, que devuelve todas las categorías publicadas
echo $category->getAll();
echo "<br>";

// Llamamos al método getCategoriesFromPost() de la clase Post, que obtiene las categorías asociadas a los posts
echo $post->getCategoriesFromPost();
?>
