document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");

    // Define los platos principales, postres, bebidas y acompañamientos
    const platosPrincipales = [
        { name: "Langosta a la Parrilla", price: "$125", image: "LangostaParrilla.jpg", description: "Langosta fresca a la parrilla, servida con mantequilla de ajo y limón." },
        { name: "Paella de Mariscos", price: "100", image: "PaellaMarisco.jpeg", description: "La clásica paella española con una variedad de mariscos frescos, arroz y azafrán." },
        { name: "Tacos de Pescado", price: "$70", image: "TacosPescado.jpeg", description: "Tortillas de maíz rellenas de pescado a la parrilla, acompañadas de repollo y salsa de chipotle." },
        { name: "Salmón a la Parrilla", price: "$100", image: "Salmon.jpeg", description: "Filete de salmón fresco a la parrilla, glaseado con una salsa de miel y mostaza." },
        { name: "Coctel de Mariscos", price: "$70", image: "Coctel.jpeg", description: "Copa de cristal con mariscos frescos con salsa de tomate, aguacate picado, cilantro y cebolla." },
        { name: "Ceviche de Mariscos", price: "$90", image: "Ceviche.jpg", description: "Platillo con camarones, ostiones, jaiba, chile y limón." }
    ];

    const postres = [
        { name: "Tarta de Limón", price: "$40", image: "Tarta.jpeg", description: "Tarta casera de limón con una base de galletas y crema de limón fresca." },
        { name: "Cheesecake de Fresa", price: "$40", image: "Cheesecake.jpeg", description: "Cheesecake cremoso con salsa de fresa fresca." },
        { name: "Tiramisú", price: "$50", image: "Tiramisu.jpeg", description: "Postre italiano hecho con capas de bizcocho, mascarpone y café." },
        { name: "Crepas de Nutella", price: "$60", image: "Crepa.jpg", description: "Crepas rellenas de crema de avellanas y cubiertas con salsa de chocolate." },
        { name: "Helado de Coco", price: "$25", image: "Helados.jpg", description: "Helado cremoso de coco servido con salsa de chocolate y nueces." }
    ];

    const bebidas = [
        { name: "Margarita de Mango", price: "$70", image: "MargaritaMango.jpg", description: "Refrescante margarita con sabor a mango, servida con sal en el borde del vaso." },
        { name: "Coca-Cola", price: "$25", image: "Coca.jpeg", description: "Vaso de cristal con Coca-Cola." },
        { name: "Limonada de Fresa", price: "$30", image: "LimonadaFresa.jpg", description: "Limonada fresca mezclada con puré de fresa y decorada con rodajas de limón." },
        { name: "Margarita", price: "$70", image: "Margarita.jpg", description: "Cóctel de tequila, triple sec y jugo de lima." },
        { name: "Piña Colada", price: "$80", image: "PinaColada.png", description: "Cóctel tropical de ron, crema de coco y jugo de piña." },
        { name: "Mojito", price: "$80", image: "Mojito.jpeg", description: "Refrescante cóctel cubano de ron, menta, azúcar y lima." },
        { name: "Vino Blanco", price: "$90", image: "Vino.jpeg", description: "Una selección de vinos blancos de la región, perfectos para maridar con mariscos." }
    ];

    const acompanamientos = [
        { name: "Arroz Blanco", price: "$30", image: "Arroz.jpeg", description: "Arroz blanco cocido al vapor, perfecto para acompañar cualquier plato de mariscos." },
        { name: "Maíz a la Parrilla", price: "$30", image: "MaizParrila.jpg", description: "Mazorcas de maíz asadas a la parrilla con mantequilla y especias." },
        { name: "Puré de Papas", price: "$35", image: "PurePapa.jpeg", description: "Papas cocidas y machacadas con mantequilla y leche." },
        { name: "Espárragos al Horno", price: "$25", image: "EsparragosHorno.jpg", description: "Espárragos frescos horneados con aceite de oliva y ajo." },
        { name: "Ensalada Caprese", price: "$25", image: "EnsaladaCaprese.jpg", description: "Ensalada fresca con tomate, mozzarella y albahaca, aliñada con aceite de oliva y vinagre balsámico." }
    ];

    // Función para agregar elementos al menú
    function agregarPlatos(alimento, categoria) {
        alimento.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");
            menuItem.innerHTML = `
                <img src="img/${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p class="description">${item.description}</p>
                <p class="price">${item.price}</p>
            `;
            categoria.appendChild(menuItem);
        });
    }

    // Agregar funcionalidad a los botones
    const platosBtn = document.getElementById("platos-btn");
    const postresBtn = document.getElementById("postres-btn");
    const bebidasBtn = document.getElementById("bebidas-btn");
    const acompanamientosBtn = document.getElementById("acompanamientos-btn");

    platosBtn.addEventListener("click", function() {
        mostrarPlatos(platosPrincipales);
    });

    postresBtn.addEventListener("click", function() {
        mostrarPlatos(postres);
    });

    bebidasBtn.addEventListener("click", function() {
        mostrarPlatos(bebidas);
    });

    acompanamientosBtn.addEventListener("click", function() {
        mostrarPlatos(acompanamientos);
    });

    // Función para mostrar los platos en el menú
    function mostrarPlatos(platos) {
        // Limpia el contenido existente del menú
        menu.innerHTML = "";
        // Agrega los nuevos platos al menú
        agregarPlatos(platos, menu);
    }
});






