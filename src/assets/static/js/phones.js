const generateId = () => `id${Math.round(Math.random() * 1e8).toString(16)}`;

const phones = [
    {
        id: "id5a8f",
        title: "iPhone 12 Pro 256gb",
        price: 460000,
        description: "El iPhone 12 Pro tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas (1). Con el nuevo Ceramic Shield, es cuatro veces más resistente a las caídas (2). Y te permite tomar fotos increíbles con poca luz gracias a un nuevo sistema de cámaras Pro y un rango de zoom óptico de 4x. También puedes grabar, editar y reproducir video en Dolby Vision con calidad cinematográfica, tomar retratos con modo Noche y disfrutar experiencias de realidad aumentada de última generación con el escáner LiDAR. El iPhone 12 Pro viene con el potente chip A14 Bionic y es compatible con los nuevos accesorios MagSafe que se adhieren magnéticamente a tu iPhone y brindan una carga inalámbrica más rápida (3). Una infinidad de posibilidades que no dejarán de sorprenderte.",
        thumbnails:["https://i.imgur.com/JPyzT3y.jpeg", "https://iphonemarketar.com/cdn/shop/files/photo1703193465_1.jpg?v=1703194500", "https://iphonemarketar.com/cdn/shop/files/photo1703193465_2.jpg?v=1703194506", "https://iphonemarketar.com/cdn/shop/files/photo1703193465_3.jpg?v=1703194511", "https://iphonemarketar.com/cdn/shop/files/photo1703193465_4.jpg?v=1703194517", "https://iphonemarketar.com/cdn/shop/files/photo1703193465_5.jpg?v=1703194523", "https://iphonemarketar.com/cdn/shop/files/photo1703193465_6.jpg?v=1703194528"],
        new: false
    },
    {
        id: "idf1b2",
        title: "iPhone 11 128gb",
        price: 350000,
        decription: "El iPhone 11 tiene un sistema de dos cámaras que incorpora la cámara más popular del mundo. Toma fotos espectaculares con poca luz gracias al modo Noche. Puedes grabar videos en 4K con rango dinámico extendido y estabilización cinemática. Además, la batería dura todo el día para que hagas más y cargues menos. También es resistente al agua hasta por 30 minutos a una profundidad máxima de 2 metros. El iPhone 11 trae el chip más rápido en un smartphone y Face ID más seguro. Es un gran salto para el iPhone.",
        thumbnails: ["https://www.compraensanjuan.com/fotos_articulos/2222152_3.jpg", "https://iphonemarketar.com/cdn/shop/files/photo1703193579_2.jpg?v=1703194409", "https://iphonemarketar.com/cdn/shop/files/photo1703193579_3.jpg?v=1703194414", "https://iphonemarketar.com/cdn/shop/files/photo1703193579_4.jpg?v=1703194418", "https://iphonemarketar.com/cdn/shop/files/photo1703193579_5.jpg?v=1703194424"],
        new: false
    },
    {
        id: "idc7e9",
        title: "iPhone 14 Pro 256gb",
        price: 600000,
        description: "El iPhone 14 Pro tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas (1). Con el nuevo Ceramic Shield, es cuatro veces más resistente a las caídas (2). Y te permite tomar fotos increíbles con poca luz gracias a un nuevo sistema de cámaras Pro y un rango de zoom óptico de 4x. También puedes grabar, editar y reproducir video en Dolby Vision con calidad cinematográfica, tomar retratos con modo Noche y disfrutar experiencias de realidad aumentada de última generación con el escáner LiDAR. El iPhone 14 Pro viene con el potente chip A14 Bionic y es compatible con los nuevos accesorios MagSafe que se adhieren magnéticamente a tu iPhone y brindan una carga inalámbrica más rápida (3). Una infinidad de posibilidades que no dejarán de sorprenderte.",
        thumbnails: ["https://i.imgur.com/w5vSLxF.jpg", "https://iphonemarketar.com/cdn/shop/files/photo1703193436_1.jpg?v=1703194581", "https://iphonemarketar.com/cdn/shop/files/photo1703193436_2.jpg?v=1703194588", "https://iphonemarketar.com/cdn/shop/files/photo1703193436_3.jpg?v=1703194592"],
        new: false
    },
    {
        id: "id9be6",
        title: "Apple iPhone 11 (128gb) - Negro",
        price: 350000,
        description: "El iPhone 11 es una obra maestra de la ingeniería de Apple, diseñado para brindar una experiencia móvil incomparable a sus usuarios. Equipado con un sistema de doble cámara de calidad profesional, este dispositivo permite capturar momentos extraordinarios con una claridad excepcional y una precisión impresionante, incluso en condiciones de poca luz, gracias a su innovador modo Noche. Su potente chip A13 Bionic garantiza un rendimiento sin igual, con capacidades de procesamiento y gráficos que superan cualquier expectativa, mientras que su impresionante pantalla Liquid Retina HD ofrece colores vibrantes y detalles realistas que hacen que cada imagen y video cobren vida. Además, el iPhone 11 cuenta con una batería de larga duración que te permite disfrutar de tu contenido favorito durante todo el día sin interrupciones, junto con características como Face ID y resistencia al agua, que ofrecen comodidad y tranquilidad adicionales. En resumen, el iPhone 11 es mucho más que un teléfono inteligente; es una herramienta versátil y poderosa que te ayuda a explorar, crear y conectarte con el mundo que te rodea de maneras nuevas y emocionantes.",
        thumbnails: ["https://http2.mlstatic.com/D_NQ_NP_969883-MLA80810065652_112024-O.webp", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-21ala_s_00.43.00.png?v=1703130239", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-21ala_s_00.43.07.png?v=1703130239", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-21ala_s_00.43.15.png?v=1703130238", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-21ala_s_00.43.26.png?v=1703130239"],
        new: true
    },
    {
        id: "id2a1d",
        title: "Apple iPhone 11 (64gb) - Negro",
        price: 300000,
        description: "El iPhone 11 es una obra maestra de la ingeniería de Apple, diseñado para brindar una experiencia móvil incomparable a sus usuarios. Equipado con un sistema de doble cámara de calidad profesional, este dispositivo permite capturar momentos extraordinarios con una claridad excepcional y una precisión impresionante, incluso en condiciones de poca luz, gracias a su innovador modo Noche. Su potente chip A13 Bionic garantiza un rendimiento sin igual, con capacidades de procesamiento y gráficos que superan cualquier expectativa, mientras que su impresionante pantalla Liquid Retina HD ofrece colores vibrantes y detalles realistas que hacen que cada imagen y video cobren vida. Además, el iPhone 11 cuenta con una batería de larga duración que te permite disfrutar de tu contenido favorito durante todo el día sin interrupciones, junto con características como Face ID y resistencia al agua, que ofrecen comodidad y tranquilidad adicionales. En resumen, el iPhone 11 es mucho más que un teléfono inteligente; es una herramienta versátil y poderosa que te ayuda a explorar, crear y conectarte con el mundo que te rodea de maneras nuevas y emocionantes.",
        thumbnails: ["https://http2.mlstatic.com/D_965662-MLA70229649576_072023-O.jpg", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-21ala_s_00.43.00.png?v=1703130239", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-21ala_s_00.43.07.png?v=1703130239", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-21ala_s_00.43.15.png?v=1703130238", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-21ala_s_00.43.26.png?v=1703130239"],
        new: true
    },
    {
        id: "id6f8c",
        title: "Apple iPhone 12 (128gb) - Blanco",
        price: 430000,
        description: "El iPhone 12 es un testimonio de la continua innovación y excelencia de Apple en el mundo de la tecnología móvil. Con su impresionante pantalla Super Retina XDR de borde a borde, este dispositivo ofrece una experiencia visual inigualable, con colores vibrantes y detalles nítidos que hacen que cada imagen cobre vida. Equipado con el potente chip A14 Bionic, el iPhone 12 proporciona un rendimiento excepcional y una eficiencia energética superior, lo que te permite realizar múltiples tareas, jugar juegos intensivos y disfrutar de experiencias multimedia de alta calidad sin problemas. Además, su sistema de cámara avanzado te permite capturar fotos y videos impresionantes en cualquier situación, desde retratos artísticos hasta paisajes expansivos, mientras que características como la carga inalámbrica MagSafe y la resistencia al agua ofrecen comodidad y durabilidad adicionales. En resumen, el iPhone 12 es una combinación perfecta de estilo y rendimiento, diseñado para aquellos que exigen lo mejor en tecnología móvil",
        thumbnails: ["https://www.manzanasusadas.com/resources/archivosbd/productos_galeria/vender-iphone-iphone-12-y-iphone-12-mini-apple-segunda-mano-321620220225142911-15-355x355.jpeg", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-14ala_s_16.56.11.png?v=1702584644", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-14ala_s_16.56.16.png?v=1702584644&width=1100", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-14ala_s_16.56.24.png?v=1702584644"],
        new: true
    },
    {
        id: "id7b3a",
        title: "Apple iPhone 12 (64gb)",
        price: 400000,
        description: "El iPhone 12 es un testimonio de la continua innovación y excelencia de Apple en el mundo de la tecnología móvil. Con su impresionante pantalla Super Retina XDR de borde a borde, este dispositivo ofrece una experiencia visual inigualable, con colores vibrantes y detalles nítidos que hacen que cada imagen cobre vida. Equipado con el potente chip A14 Bionic, el iPhone 12 proporciona un rendimiento excepcional y una eficiencia energética superior, lo que te permite realizar múltiples tareas, jugar juegos intensivos y disfrutar de experiencias multimedia de alta calidad sin problemas. Además, su sistema de cámara avanzado te permite capturar fotos y videos impresionantes en cualquier situación, desde retratos artísticos hasta paisajes expansivos, mientras que características como la carga inalámbrica MagSafe y la resistencia al agua ofrecen comodidad y durabilidad adicionales. En resumen, el iPhone 12 es una combinación perfecta de estilo y rendimiento, diseñado para aquellos que exigen lo mejor en tecnología móvil",
        thumbnails: ["https://i.imgur.com/GwnQyCO.jpeg", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.50.12.png?v=1702584662", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.50.21.png?v=1702584662"],
        new: true
    },
    {
        id: "id0e9d",
        title: "Apple iPhone 13 (128 GB) - Azul medianoche",
        price: 480000,
        description: "El iPhone 13 representa la excelencia en la innovación tecnológica y el diseño elegante. Con su impresionante pantalla Super Retina XDR, este dispositivo ofrece colores vibrantes y detalles nítidos que hacen que cada experiencia visual sea cautivadora. Equipado con el potente chip A15 Bionic, el iPhone 13 brinda un rendimiento excepcional y una eficiencia energética líder en su clase, permitiéndote disfrutar de tus aplicaciones y juegos favoritos con fluidez y rapidez. Además, su avanzado sistema de cámaras te permite capturar fotos y videos de alta calidad en cualquier entorno, mientras que funciones como Face ID y resistencia al agua ofrecen comodidad y tranquilidad en el uso diario. En resumen, el iPhone 13 es una obra maestra de la ingeniería que redefine los estándares de la tecnología móvil, diseñado para aquellos que buscan lo mejor en rendimiento, estilo y funcionalidad.",
        thumbnails: ["https://i.imgur.com/ofQeIjX.jpg", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.33.17.png?v=1702584688", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.33.27.png?v=1702584688", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.33.33.png?v=1702584688", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.33.53.png?v=1702584688"],
        new: true
    },
    {
        id: "id4c5b",
        title: "Apple iPhone 13 (256gb) - Blanco",
        price: 500000,
        description: "El iPhone 13 representa la excelencia en la innovación tecnológica y el diseño elegante. Con su impresionante pantalla Super Retina XDR, este dispositivo ofrece colores vibrantes y detalles nítidos que hacen que cada experiencia visual sea cautivadora. Equipado con el potente chip A15 Bionic, el iPhone 13 brinda un rendimiento excepcional y una eficiencia energética líder en su clase, permitiéndote disfrutar de tus aplicaciones y juegos favoritos con fluidez y rapidez. Además, su avanzado sistema de cámaras te permite capturar fotos y videos de alta calidad en cualquier entorno, mientras que funciones como Face ID y resistencia al agua ofrecen comodidad y tranquilidad en el uso diario. En resumen, el iPhone 13 es una obra maestra de la ingeniería que redefine los estándares de la tecnología móvil, diseñado para aquellos que buscan lo mejor en rendimiento, estilo y funcionalidad.",
        thumbnails: ["https://i.imgur.com/jTPGrBa.jpg", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-14ala_s_16.53.56.png?v=1702584705", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-14ala_s_16.54.01.png?v=1702584705", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-14ala_s_16.54.09.png?v=1702584705"],
        new: true
    },
    {
        id: "id8d2f",
        title: "Apple iPhone 14 (128gb) - Rojo",
        price: 600000,
        description: "El iPhone 14 es una maravilla tecnológica que fusiona diseño elegante con un rendimiento excepcional. Con una pantalla Super Retina XDR brillante y vívida, este dispositivo ofrece una experiencia visual cautivadora que redefine los límites de la calidad de imagen en un smartphone. Impulsado por el potente chip A14 Bionic, el iPhone 14 garantiza un rendimiento rápido y fluido, lo que te permite realizar múltiples tareas sin problemas y disfrutar de tus aplicaciones favoritas con la máxima eficiencia. Con una cámara Pro avanzada, puedes capturar momentos inolvidables con una claridad y detalle asombrosos, mientras que características innovadoras como Face ID y carga MagSafe añaden comodidad y seguridad a tu vida diaria. En resumen, el iPhone 14 es una combinación perfecta de estilo, potencia y funcionalidad, diseñado para aquellos que buscan lo mejor en tecnología móvil",
        thumbnails: ["https://i.imgur.com/Be16HU9.jpg", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.47.36.png?v=1702584735", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.47.41.png?v=1702584735", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.47.48.png?v=1702584735&width=1100", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.47.58.png?v=1702584735"],
        new: true
    },
    {
        id: "id1e5c",
        title: "Apple iPhone 15 (128gb) - Negro",
        price: 7500000,
        description: "El iPhone 15 Pro representa la cúspide de la innovación tecnológica en el mundo de los smartphones. Con una combinación magistral de diseño elegante y funcionalidad avanzada, este dispositivo redefine los estándares de excelencia en la industria móvil. Equipado con una pantalla Super Retina XDR de última generación, el iPhone 15 Pro ofrece una experiencia visual incomparable, con colores vibrantes y negros profundos que hacen que cada imagen cobre vida.",
        thumbnails: ["https://acdn-us.mitiendanube.com/stores/001/116/601/products/15-gray-de9c53b4939abd21ec17356533064935-1024-1024.jpeg", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.40.21.png?v=1702584759", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.40.28.png?v=1702584759", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.40.59.png?v=1702584759"],
        new: true
    },
    {
        id: "idb9a3",
        title: "Apple iPhone 15 (256gb)",
        price: 800000,
        description: "El iPhone 15 Pro representa la cúspide de la innovación tecnológica en el mundo de los smartphones. Con una combinación magistral de diseño elegante y funcionalidad avanzada, este dispositivo redefine los estándares de excelencia en la industria móvil. Equipado con una pantalla Super Retina XDR de última generación, el iPhone 15 Pro ofrece una experiencia visual incomparable, con colores vibrantes y negros profundos que hacen que cada imagen cobre vida.",
        thumbnails: ["https://i.imgur.com/A6DDFhb.jpg", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.42.11.png?v=1702584598", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.42.16.png?v=1702584598", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.42.24.png?v=1702584598"],
        new: true
    },
    {
        id: "id4f7e",
        title: "Apple iPhone 15 Pro (128gb) - Titanio Natural",
        price: 850000,
        description: "El iPhone 15 Pro representa la cúspide de la innovación tecnológica en el mundo de los smartphones. Con una combinación magistral de diseño elegante y funcionalidad avanzada, este dispositivo redefine los estándares de excelencia en la industria móvil. Equipado con una pantalla Super Retina XDR de última generación, el iPhone 15 Pro ofrece una experiencia visual incomparable, con colores vibrantes y negros profundos que hacen que cada imagen cobre vida.",
        thumbnails: ["https://http2.mlstatic.com/D_NQ_NP_755720-MLA77768541725_072024-O.webp", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.45.11.png?v=1702584781", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.45.19.png?v=1702584781", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.45.26.png?v=1702584781", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.45.34.png?v=1702584781", "https://iphonemarketar.com/cdn/shop/files/CapturadePantalla2023-12-13ala_s_21.45.42.png?v=1702584781"],
        new: true
    }

];

export default phones;

