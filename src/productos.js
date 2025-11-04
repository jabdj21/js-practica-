
const productos = [
    {
        "nombre": "Processador AMD Ryzen 5 3600, AM4, 3.6GHz",
        "img": "/processador-amd-ryzen-5-3600-100100000031box-jXdm89-L.jpg",
        "price": 191,
        "description": "El procesador AMD Ryzen 5 3600 es un procesador de escritorio desbloqueado de 6 núcleos y 12 hilos con una velocidad base de 3.6GHz . Es compatible con el socket AM4 y cuenta con una caché L1 total de 384KB. Este procesador tiene un reloj de aumento máximo de hasta 4.2GHz y utiliza el enfriador Wraith Spire . Es compatible con memoria DDR4 de hasta 3200MT/s y tiene una versión de PCI Express de 4.0. El TDP (potencia de diseño térmico) de este procesador es de 65W.",
        "category": 1
    },
    {
        "nombre": "Processador AMD Ryzen 7 5800X, AM4, 3.8GHz",
        "img": "/processador-amd-ryzen-7-5800x-100100000063wof-g3T5mn-L.jpg",
        "price": 295,
        "description": "El procesador AMD Ryzen 7 5800X es un procesador de escritorio desbloqueado con 8 núcleos y 16 hilos . Tiene una velocidad base de 3.8GHz y puede alcanzar una velocidad de impulso de hasta 4.7GHz, dependiendo de la carga de trabajo. Este procesador utiliza el socket AM4 y cuenta con una caché L3 de 32MB. Tiene un TDP de 105W y es compatible con memoria DDR4. El Ryzen 7 5800X utiliza la arquitectura Zen 3 de AMD y se fabrica en un nodo de producción de 7 nm. Es importante destacar que este procesador no incluye un enfriador de CPU en la caja, por lo que se recomienda utilizar un sistema de enfriamiento adecuado.",
        "category": 1
    },
    {
        "nombre": "Processador AMD Ryzen 9 5900X, AM4, 3.7 GHz",
        "img": "/processador-amd-ryzen-9-5900x-100100000061wof-Bjt4U3-L.jpg",
        "price": 260,
        "description": "El procesador AMD Ryzen 9 5900X es un procesador de escritorio desbloqueado con 12 núcleos y 24 hilos . Tiene una velocidad base de 3.7GHz y puede alcanzar una velocidad de impulso de hasta 4.8GHz, dependiendo de la carga de trabajo. Este procesador utiliza el socket AM4 y cuenta con una caché L3 de 64MB. Tiene un TDP de 105W y es compatible con memoria DDR4. El Ryzen 9 5900X utiliza la arquitectura Zen 3 de AMD y se fabrica en un nodo de producción de 7 nm. Es importante destacar que este procesador requiere una actualización de BIOS en algunas placas base para funcionar a su máximo potencial. Se recomienda verificar la compatibilidad antes de la compra.",
        "category": 1
    },
    {
        "nombre": "Processador Intel Core i3-10100F, LGA 1200, 3.6 GHz",
        "img": "/processador-intel-core-i3-10100f-bx8070110100f-CTk878-L.jpg",
        "price": 120,
        "description": "El procesador Intel Core i3-10100F es un procesador de escritorio con 4 núcleos y 8 hilos. Tiene una velocidad base de 3.6 GHz y no cuenta con la tecnología de Turbo Boost de Intel para aumentar la velocidad en cargas de trabajo intensivas. Este procesador utiliza el socket LGA 1200 y tiene un TDP de 65W. Cuenta con una caché L3 de 6MB y es compatible con memoria DDR4. Es importante tener en cuenta que este procesador no incluye gráficos integrados, por lo que se requiere una tarjeta gráfica dedicada para su funcionamiento.",
        "category": 1
    },
    {
        "nombre": "Processador Intel Core i3-10100, LGA 1200, 3.6 GHz",
        "img": "/processador-intel-core-i3-10100f-bx8070110100f-CTk878-L.jpg",
        "price": 105,
        "description": "El procesador Intel Core i3-10100 es un procesador de escritorio con 4 núcleos y 8 hilos. Tiene una velocidad base de 3.6 GHz y puede alcanzar una velocidad de impulso de hasta 4.3 GHz, dependiendo de la carga de trabajo. Este procesador utiliza el socket LGA 1200 y tiene un TDP de 65W. Cuenta con una caché L3 de 6MB y es compatible con memoria DDR4. El Core i3-10100 también incluye gráficos integrados Intel UHD Graphics 630 . Es importante tener en cuenta que este procesador es adecuado para tareas de uso general y no está diseñado para aplicaciones de alto rendimiento o juegos intensivos.",
        "category": 1
    },
    {
        "nombre": "Processador Intel Core i5-11600K, LGA 1200, 3.9 GHz",
        "img": "/processador-intel-core-i5-11600k-bx8070811600k-ATXe46-L.jpg",
        "price": 209,
        "description": "El procesador Intel Core i5-11600K es un procesador de escritorio de la 11ª generación de Intel. Tiene 6 núcleos y 12 hilos, con una velocidad base de 3.9 GHz y una velocidad de impulso de hasta 4.9 GHz. Utiliza el socket LGA 1200 y tiene un TDP de 125W. Cuenta con una caché L3 de 12MB y es compatible con memoria DDR4. El Core i5-11600K también incluye gráficos integrados Intel UHD Graphics 750 . Este procesador es adecuado para tareas de uso general y también ofrece un buen rendimiento en juegos cuando se combina con una tarjeta gráfica adecuada.",
        "category": 1
    },
    {
        "nombre": "Processador Intel Core i7-11700K, LGA 1200, 3.6 GHz",
        "img": "/processador-intel-core-i7-11700k-bx8070811700k-dHBH99-L.jpg",
        "price": 320,
        "description": "El procesador Intel Core i7-11700K es un procesador de escritorio de la 11ª generación de Intel. Tiene 8 núcleos y 16 hilos, con una velocidad base de 3.6 GHz y una velocidad de impulso de hasta 5.0 GHz. Utiliza el socket LGA 1200 y tiene un TDP de 125W. Cuenta con una caché L3 de 16MB y es compatible con memoria DDR4. El Core i7-11700K también incluye gráficos integrados Intel UHD Graphics 750. Este procesador ofrece un excelente rendimiento en tareas de uso intensivo, como edición de video, renderizado 3D y juegos. Es una opción popular para usuarios que requieren un alto rendimiento en sus sistemas.",
        "category": 1
    },
    {
        "nombre": "Processador Intel Core i7-9700K, LGA 1151, 3.6 GHz 8-Core",
        "img": "/processador-intel-core-i7-11700k-bx8070811700k-dHBH99-L.jpg",
        "price": 235,
        "description": "El procesador Intel Core i7-9700K es un procesador de escritorio de la 9ª generación de Intel. Tiene 8 núcleos y 8 hilos, con una velocidad base de 3.6 GHz y una velocidad de impulso de hasta 4.9 GHz. Utiliza el socket LGA 1151 y tiene un TDP de 95W. Cuenta con una caché L3 de 12MB y es compatible con memoria DDR4. El Core i7-9700K también incluye gráficos integrados Intel UHD Graphics 630 . Este procesador ofrece un excelente rendimiento en tareas de uso intensivo, como edición de video, renderizado 3D y juegos. Es una opción popular para usuarios que requieren un alto rendimiento en sus sistemas.",
        "category": 1
    },
    {
        "nombre": "Processador Intel Core i9-11900K, LGA 1200, 3.5 GHz",
        "img": "/processador-intel-core-i9-11900k-bx8070811900k-sX5Lj2-L.jpg",
        "price": 570,
        "description": "El procesador Intel Core i9-11900K es un procesador de escritorio de la 11ª generación de Intel. Tiene 8 núcleos y 16 hilos, con una velocidad base de 3.5 GHz y una velocidad de impulso de hasta 5.3 GHz. Utiliza el socket LGA 1200 y tiene un TDP de 125W. Cuenta con una caché L3 de 16MB y es compatible con memoria DDR4. El Core i9-11900K también incluye gráficos integrados Intel UHD Graphics 750 . Este procesador ofrece un rendimiento excepcional en tareas de uso intensivo, como edición de video, renderizado 3D y juegos. Es una opción de gama alta para usuarios que requieren el máximo rendimiento en sus sistemas.",
        "category": 1
    },
    {
        "nombre": "Cooler para Processador Scythe Ninja 5, Intel/AMD",
        "img": "/cooler-processador-scythe-ninja-5-vL48Js-L.jpg",
        "price": 45,
        "description": "El Scythe Ninja 5 es un cooler para procesador de alto rendimiento diseñado para sistemas Intel y AMD. Cuenta con un diseño de torre única con una altura de 155 mm y utiliza un ventilador de 120 mm para una excelente disipación de calor. El Scythe Ninja 5 utiliza un sistema de montaje fácil de usar y es compatible con los sockets Intel LGA 115x, LGA 1200 y AMD AM4, entre otros. Este cooler ofrece una excelente capacidad de enfriamiento y es ideal para usuarios que desean mantener sus procesadores a temperaturas óptimas durante tareas intensivas como juegos o renderizado.",
        "category": 2
    },
    {
        "nombre": "Cooler de processador PCYes Nótus A Hidráulico",
        "img": "/cooler-processador-pcyes-notus-a-qoy442-L.jpg",
        "price": 12,
        "description": "El cooler de procesador PCYes Nótus A Hidráulico es un dispositivo de enfriamiento diseñado para mantener la temperatura del procesador bajo control. Cuenta con un diseño de torre con un ventilador de 120 mm y utiliza un sistema de rodamiento hidráulico para un funcionamiento silencioso y eficiente. Este cooler es compatible con una variedad de sockets de procesador, incluyendo Intel y AMD. Proporciona una excelente disipación de calor y es ideal para usuarios que desean mantener su procesador en temperaturas óptimas durante tareas intensivas.",
        "category": 2
    },
    {
        "nombre": "Cooler de processador Cooler Master Hyper H411R Fluido Dinâmico",
        "img": "/cooler-processador-cooler-master-hyper-h411r-ir5Ew2-L.jpg",
        "price": 28,
        "description": "El Cooler Master Hyper H411R Fluido Dinâmico es un cooler de procesador de perfil bajo y compacto. Está diseñado para sistemas SFF (Small Form Factor) o cajas de PC compactas . Utiliza tecnología de enfriamiento de flujo dinámico para una disipación de calor eficiente. Este cooler cuenta con un ventilador de CPU compacto y de perfil bajo, lo que lo hace ideal para sistemas con limitaciones de espacio. Proporciona un enfriamiento efectivo para mantener la temperatura del procesador bajo control durante tareas intensivas.",
        "category": 2
    },
    {
        "nombre": "Cooler de processador Thermaltake Frio Extreme CLP0587",
        "img": "/cooler-processador-thermaltake-frio-extreme-clp0587-xG3I7r-L.jpg",
        "price": 90,
        "description": "El Cooler Thermaltake Frio Extreme CLP0587 es un disipador de calor para procesador de alto rendimiento . Cuenta con un diseño de doble torre y utiliza dos ventiladores de 140 mm para una excelente disipación de calor. Tiene una velocidad de ventilador de 1500 RPM y es compatible con sockets Intel 2011, 1156, 1366, 1155, 775 y AMD AM3+, AM2+, AM2 y FM1. El Cooler Thermaltake Frio Extreme CLP0587 tiene una capacidad de enfriamiento de hasta 250 W de TDP , lo que lo hace adecuado para procesadores de alto rendimiento. No cuenta con ventiladores RGB. Es una opción popular para usuarios que buscan un enfriamiento eficiente y confiable para sus procesadores.",
        "category": 2
    },
    {
        "nombre": "Water Cooler Deepcool Gammaxx L120 V2 RGB",
        "img": "/cooler-processador-deepcool-gammaxx-l120-v2-Bz9n9S-L.jpg",
        "price": 46,
        "description": "El Water Cooler Deepcool Gammaxx L120 V2 RGB es un sistema de enfriamiento líquido para CPU de alto rendimiento . Cuenta con un radiador de 120 mm y un ventilador PWM de 120 mm para una excelente disipación de calor. Este enfriador líquido está equipado con la tecnología Anti-leak Tech Inside, que garantiza la seguridad y previene fugas de líquido. Además, cuenta con un sistema de iluminación RGB integrado, que permite personalizar la apariencia del enfriador con una variedad de efectos y colores. Es compatible con una amplia gama de sockets de CPU, incluyendo AMD AM4, Intel LGA 1200, 1151, 1150, entre otros. El Water Cooler Deepcool Gammaxx L120 V2 RGB es una opción popular para aquellos que buscan un enfriamiento eficiente y estético para su CPU",
        "category": 2
    },
    {
        "nombre": "Water Cooler Thermaltake Water 3.0 Riing RGB 280",
        "img": "/cooler-processador-cooler-master-hyper-h411r-ir5Ew2-L.jpg",
        "price": 120,
        "description": "El Water Cooler Thermaltake Water 3.0 Riing RGB 280 es un sistema de enfriamiento líquido para CPU de alto rendimiento . Cuenta con un radiador de 280 mm y viene equipado con dos ventiladores Riing RGB de alta presión estática y función PWM. Este enfriador líquido está certificado por Tt LCS y ofrece una eficiencia y rendimiento excepcionales. Además, cuenta con un controlador de ventilador inteligente y un radiador de alta eficiencia. El Water Cooler Thermaltake Water 3.0 Riing RGB 280 es compatible con una amplia gama de sockets de CPU , incluyendo Intel LGA 2011-3, 2011, 1366, 1156, 1155, 1151, 1150 y AMD AM4. Su diseño incluye iluminación RGB personalizable, lo que permite crear efectos de iluminación impresionantes. Es una opción popular para aquellos que buscan un enfriamiento líquido de alto rendimiento con una estética llamativa.",
        "category": 2
    },
    {
        "nombre": "Placa de Vídeo Zotac NVIDIA GeForce RTX 2060, 6GB, GDDR6",
        "img": "/placa-video-zotac-geforce-rtx-2060-geforcertx2060gaming6gb-xm5w2F-L.jpg",
        "price": 418,
        "description": "La placa de video Zotac NVIDIA GeForce RTX 2060 es una tarjeta gráfica de alto rendimiento que ofrece una experiencia de juego inmersiva y realista. Cuenta con 6GB de memoria GDDR6, lo que permite un rendimiento fluido y rápido en juegos y aplicaciones exigentes. Esta tarjeta gráfica utiliza la arquitectura NVIDIA Turing y ofrece tecnologías avanzadas como trazado de rayos en tiempo real y núcleos de inteligencia artificial para mejorar la calidad visual y el rendimiento. La Zotac NVIDIA GeForce RTX 2060 es compatible con una amplia gama de juegos y aplicaciones, y es una opción popular entre los jugadores y creadores de contenido que buscan un rendimiento gráfico excepcional.",
        "category": 6
    },
    {
        "nombre": "Placa de Vídeo Gainward NVIDIA GeForce GTX 1650, 4GB D6 Ghost, GDDR6",
        "img": "/placa-video-gainward-geforce-gtx-1650-geforcegtx1650ghost4gb-xts49r-L.jpg",
        "price": 268,
        "description": "La placa de video Gainward NVIDIA GeForce GTX 1650, 4GB D6 Ghost, GDDR6 es una tarjeta gráfica de gama media que ofrece un buen rendimiento en juegos y aplicaciones. Cuenta con 4GB de memoria GDDR6, lo que permite un rendimiento fluido en resoluciones 1080p. Esta tarjeta gráfica utiliza la arquitectura NVIDIA Turing y ofrece características como sombreado de tasa variable y tecnología de trazado de rayos en tiempo real. La Gainward NVIDIA GeForce GTX 1650, 4GB D6 Ghost, GDDR6 es una opción popular para aquellos que buscan una tarjeta gráfica confiable y eficiente para juegos y tareas gráficas básicas.",
        "category": 6
    },
    {
        "nombre": "Placa de Vídeo Asus NVIDIA GeForce RTX 3090, 24GB, GDDR6X ROG STRIX GAMING",
        "img": "/placa-de-video-asus-rog-strix-rtx-3070-ti-o8g-gaming-19-gbps-8gb-gddr6x-ray-tracing-dlss-rgb-90yv0gw0-m0na00_1623333955_gg.jpg",
        "price": 917,
        "description": "La placa de video Asus NVIDIA GeForce RTX 3090 , 24GB, GDDR6X ROG STRIX GAMING es una tarjeta gráfica de gama alta diseñada para ofrecer un rendimiento excepcional en juegos y aplicaciones exigentes. Cuenta con 24GB de memoria GDDR6X, lo que permite un rendimiento fluido en resoluciones 4K y experiencias de realidad virtual inmersivas. Esta tarjeta gráfica utiliza la arquitectura NVIDIA Ampere y ofrece características avanzadas como trazado de rayos en tiempo real, inteligencia artificial y sombreado de tasa variable. El diseño de la ROG STRIX GAMING incluye un sistema de enfriamiento avanzado con ventiladores Axial-tech y una cubierta de metal para garantizar un rendimiento térmico óptimo. Además, cuenta con iluminación RGB personalizable para agregar un toque estético a tu sistema. La Asus NVIDIA GeForce RTX 3090 , 24GB, GDDR6X ROG STRIX GAMING es una opción ideal para jugadores entusiastas y creadores de contenido que buscan el máximo rendimiento gráfico.",
        "category": 6
    },
    {
        "nombre": "Placa de Vídeo PowerColor AMD Radeon RX 570, 4GB GDDR5",
        "img": "/placa-video-powercolor-radeon-rx-570-radeonrx5704gb-DAR334-L.jpg",
        "price": 553,
        "description": "La placa de video PowerColor AMD Radeon RX 570 , 4GB GDDR5 es una tarjeta gráfica de gama media que ofrece un buen rendimiento en juegos y aplicaciones. Cuenta con 4GB de memoria GDDR5 y utiliza la arquitectura AMD Polaris. Esta tarjeta gráfica ofrece un rendimiento sólido en resoluciones 1080p y es compatible con tecnologías como AMD CrossFireX y AMD Eyefinity. La PowerColor AMD Radeon RX 570 , 4GB GDDR5 cuenta con conectores de pantalla estándar, incluyendo DL DVI-D, HDMI y DisplayPort. Es una opción popular para aquellos que buscan una tarjeta gráfica confiable y eficiente para juegos y tareas gráficas básicas.",
        "category": 6
    },
    {
        "nombre": "Placa de Vídeo Asus TUF GAMING, AMD Radeon RX 6900 XT, 16GB, GDDR6",
        "img": "/placa-video-asus-radeon-rx-6900-xt-tufgamingradeonrx6900xt16gb-s64ojq-L.jpg",
        "price": 974,
        "description": "La placa de video Asus TUF GAMING , AMD Radeon RX 6900 XT , 16GB, GDDR6 es una tarjeta gráfica de alta gama diseñada para ofrecer un rendimiento excepcional en juegos y aplicaciones exigentes. Cuenta con 16GB de memoria GDDR6, lo que permite un rendimiento fluido en resoluciones 4K y experiencias de realidad virtual inmersivas. Esta tarjeta gráfica utiliza la arquitectura AMD RDNA 2 y ofrece características avanzadas como trazado de rayos en tiempo real y sombreado de tasa variable. El diseño de la tarjeta incluye una placa posterior ventilada que evita que el aire caliente se recircule en la matriz de enfriamiento , lo que ayuda a mantener la temperatura bajo control. Además, cuenta con el software GPU Tweak II de Asus, que permite ajustar parámetros críticos como las frecuencias del núcleo de la GPU, la frecuencia de la memoria y los ajustes de voltaje. La Asus TUF GAMING, AMD Radeon RX 6900 XT , 16GB, GDDR6 es una opción ideal para jugadores entusiastas y creadores de contenido que buscan el máximo rendimiento gráfico.",
        "category": 6
    },
    {
        "nombre": "Placa de Vídeo PowerColor Red Devil AMD Radeon RX 6700 XT, 12GB, GDDR6",
        "img": "/placa-video-powercolor-radeon-rx-6700-xt-radeonrx6700xtreddevil12gb-o6DXj4-L.jpg",
        "price": 1200,
        "description": "La placa de video PowerColor Red Devil AMD Radeon RX 6700 XT , 12GB , GDDR6 es una tarjeta gráfica de alta gama diseñada para ofrecer un rendimiento excepcional en juegos y aplicaciones exigentes. Cuenta con 12GB de memoria GDDR6, lo que permite un rendimiento fluido en resoluciones 1440p y 1080p. Esta tarjeta gráfica utiliza la arquitectura AMD RDNA 2 y ofrece características avanzadas como trazado de rayos en tiempo real y sombreado de tasa variable. El diseño de la tarjeta incluye un sistema de enfriamiento eficiente con tres ventiladores y una placa posterior de metal para una mejor disipación del calor. Además, cuenta con iluminación RGB personalizable para agregar un toque estético a tu sistema. La PowerColor Red Devil AMD Radeon RX 6700 XT , 12GB , GDDR6 es una opción ideal para jugadores entusiastas que buscan un rendimiento gráfico de alta calidad.",
        "category": 6
    },
    {
        "nombre": "Placa Madre Asus PRIME Z590-PLUS, Intel LGA1200, ATX, DDR4",
        "img": "/placa-mae-asus-prime-z590m-plus-jYd44z-L.jpg",
        "price": 180,
        "description": "La placa madre Asus PRIME Z590-PLUS es una placa madre ATX diseñada para procesadores Intel de la serie LGA1200. Cuenta con soporte para memoria DDR4 y ofrece una variedad de características y tecnologías para mejorar el rendimiento y la conectividad de tu sistema. Esta placa madre tiene un diseño robusto con componentes de alta calidad y una construcción duradera. Ofrece ranuras PCIe 4.0 para un rendimiento gráfico y de almacenamiento más rápido, así como múltiples puertos USB y conectividad LAN para una conectividad versátil. Además, la Asus PRIME Z590-PLUS cuenta con un diseño de enfriamiento eficiente para mantener la temperatura bajo control durante largas sesiones de uso intensivo. En resumen, esta placa madre es una opción confiable y de alto rendimiento para construir tu sistema basado en procesadores Intel de la serie LGA1200.",
        "category": 6
    },
    {
        "nombre": "Placa madre Gigabyte B550M Aorus Elite AMD AM4, mATX, DDR4",
        "img": "/placa-mae-gigabyte-b550m-aorus-elite-bZd7k5-L.jpg",
        "price": 120,
        "description": "La placa madre Gigabyte B550M Aorus Elite AMD AM4 es una placa madre de formato mATX diseñada para procesadores AMD de la serie AM4 . Cuenta con soporte para memoria DDR4 y ofrece una variedad de características y tecnologías para mejorar el rendimiento y la conectividad de tu sistema. Esta placa madre tiene un diseño duradero y confiable, con componentes de alta calidad. Ofrece ranuras PCIe 4.0 para un rendimiento gráfico y de almacenamiento más rápido, así como múltiples puertos USB y conectividad LAN para una conectividad versátil. Además, la Gigabyte B550M Aorus Elite AMD AM4 cuenta con un sistema de enfriamiento eficiente para mantener la temperatura bajo control durante largas sesiones de uso intensivo . En resumen, esta placa madre es una opción confiable y de alto rendimiento para construir tu sistema basado en procesadores AMD de la serie AM4.",
        "category": 3
    },
    {
        "nombre": "Placa Madre Asus ROG Strix X570-E Gaming, AM4, ATX, DDR4",
        "img": "/placa-mae-asus-rog-strix-x570-e-gaming-km49AQ-L.jpg",
        "price": 360,
        "description": "La placa madre Asus ROG Strix X570-E Gaming es una placa madre de formato ATX diseñada para procesadores AMD de la serie AM4 . Cuenta con soporte para memoria DDR4 y ofrece una variedad de características y tecnologías para mejorar el rendimiento y la conectividad de tu sistema. Esta placa madre tiene un diseño robusto y de alta calidad, con componentes duraderos. Ofrece ranuras PCIe 4.0 para un rendimiento gráfico y de almacenamiento más rápido, así como múltiples puertos USB y conectividad LAN para una conectividad versátil. Además, la Asus ROG Strix X570-E Gaming cuenta con un sistema de enfriamiento eficiente , incluyendo un ventilador personalizado de baja sonoridad con una vida útil de 60,000 horas. También ofrece una serie de características adicionales, como opciones de overclocking avanzadas, iluminación RGB personalizable y soporte para tecnologías de audio de alta calidad. En resumen, esta placa madre es una opción confiable y de alto rendimiento para construir tu sistema basado en procesadores AMD de la serie AM4.",
        "category": 3
    },
    {
        "nombre": "Placa Madre Gigabyte Z390 M Gaming, Intel LGA1151, mATX, DDR4",
        "img": "/placa-mae-asrock-z390-m-gaming-o9Ny5u-L.jpg",
        "price": 143,
        "description": "La placa madre Gigabyte Z390 M Gaming es una placa madre de formato mATX diseñada para procesadores Intel de la serie LGA1151. Cuenta con soporte para memoria DDR4 y ofrece una variedad de características y tecnologías para mejorar el rendimiento y la conectividad de tu sistema. Esta placa madre tiene un diseño duradero y confiable, con componentes de alta calidad. Ofrece ranuras PCIe 3.0 para un rendimiento gráfico y de almacenamiento rápido, así como múltiples puertos USB y conectividad LAN para una conectividad versátil. Además, la Gigabyte Z390 M Gaming cuenta con un sistema de enfriamiento eficiente para mantener la temperatura bajo control durante largas sesiones de uso intensivo. También ofrece soporte para iluminación RGB personalizable y tecnologías de audio de alta calidad. En resumen, esta placa madre es una opción confiable y de alto rendimiento para construir tu sistema basado en procesadores Intel de la serie LGA1151.",
        "category": 3
    },
    {
        "nombre": "Placa Madre Asus Prime B450M Gaming/BR Micro ATX, AM4 B450, DDR4",
        "img": "/placa-mae-asus-prime-b450m-gaming-wv2v34-L.jpg",
        "price": 90,
        "description": "La placa madre Asus Prime B450M Gaming/BR es una placa madre de formato micro ATX diseñada para procesadores AMD de la serie AM4 . Cuenta con soporte para memoria DDR4 y ofrece una variedad de características y tecnologías para mejorar el rendimiento y la conectividad de tu sistema. Esta placa madre tiene un diseño duradero y confiable, con componentes de alta calidad. Ofrece ranuras PCIe para un rendimiento gráfico y de almacenamiento rápido, así como múltiples puertos USB y conectividad LAN para una conectividad versátil. Además, la Asus Prime B450M Gaming/BR cuenta con soporte para iluminación Aura Sync RGB para personalizar el aspecto de tu sistema . En resumen, esta placa madre es una opción confiable y de alto rendimiento para construir tu sistema basado en procesadores AMD de la serie AM4.",
        "category": 3
    },
    {
        "nombre": "Placa Madre MSI MEG Z490 ACE, Intel LGA1200, ATX, DDR4",
        "img": "/placa-mae-msi-meg-z490-ace-pXzx38-L.jpg",
        "price": 2341,
        "description": "La placa madre MSI MEG Z490 ACE es una placa madre de formato ATX diseñada para procesadores Intel de la serie LGA1200 . Cuenta con soporte para memoria DDR4 y ofrece una variedad de características y tecnologías para mejorar el rendimiento y la conectividad de tu sistema. Esta placa madre está diseñada para ofrecer un rendimiento excepcional y está equipada con ranuras PCIe para un rendimiento gráfico y de almacenamiento rápido. También cuenta con múltiples puertos USB y conectividad LAN para una conectividad versátil. Además, la MSI MEG Z490 ACE ofrece soporte para iluminación RGB personalizable y tecnologías de audio de alta calidad . En resumen, esta placa madre es una opción confiable y de alto rendimiento para construir tu sistema basado en procesadores Intel de la serie LGA1200.",
        "category": 3
    },
    {
        "nombre": "Memória Crucial Ballistix 8GB DDR4 2666MHz",
        "img": "/memoria-ram-crucial-ballistix-8gb-ddr4-2666-mhz-cl16-udimm-preto-bl8g26c16u4b_1609871709_gg.jpg",
        "price": 35,
        "description": "LA Memória Crucial Ballistix 8GB DDR4 2666MHz é um módulo de memória RAM de 8GB que oferece uma velocidade de clock de 2666MHz. É um componente confiável e de alta qualidade, projetado para fornecer um desempenho estável e rápido em sistemas de computador. A tecnologia DDR4 oferece melhorias em relação às gerações anteriores de memória, proporcionando maior largura de banda e eficiência energética. A memória Crucial Ballistix é conhecida por sua confiabilidade e desempenho, sendo uma escolha popular entre os entusiastas de jogos e usuários que desejam melhorar o desempenho de seus sistemas.",
        "category": 4
    },
    {
        "nombre": "Memória Corsair Vengeance RGB Pro 8GB DDR4 3200MHz",
        "img": "/memoria-corsair-vengeance-pro-cmw8gx4m1z3200c16-jVap79-L.jpg",
        "price": 61,
        "description": "La memoria Corsair Vengeance RGB Pro 8GB DDR4 3200MHz es un módulo de memoria RAM de 8GB que ofrece una velocidad de clock de 3200MHz . Esta memoria está diseñada para ofrecer un rendimiento rápido y confiable en sistemas de computadora. Una de las características distintivas de la serie Vengeance RGB Pro es su iluminación RGB personalizable. Puedes personalizar los efectos de iluminación y los colores utilizando el software Corsair iCUE, que te permite sincronizar la iluminación con otros productos compatibles de Corsair, como ventiladores, teclados y refrigeradores. Además de su atractivo diseño RGB, la memoria Corsair Vengeance RGB Pro cuenta con un PCB de rendimiento personalizado para una calidad de señal óptima y estabilidad de rendimiento . También utiliza circuitos integrados cuidadosamente seleccionados para un potencial de overclocking extendido. En resumen, la memoria Corsair Vengeance RGB Pro 8GB DDR4 3200MHz es una opción popular para aquellos que buscan un rendimiento confiable y una estética personalizable en su sistema de computadora .",
        "category": 4
    },
    {
        "nombre": "Memória Kingston HyperX Fury RGB 8GB DDR4 3000MHz",
        "img": "/memoria-kingston-hyperx-fury-rgb-8-gb-hx430c15fb3a8-bin64H-L.jpg",
        "price": 54,
        "description": "La memoria Kingston HyperX Fury RGB 8GB DDR4 3000MHz es un módulo de memoria RAM de 8GB que ofrece una velocidad de clock de 3000MHz. Esta memoria forma parte de la serie HyperX Fury de Kingston, que se caracteriza por su rendimiento confiable y su diseño con iluminación RGB personalizabl.  La memoria HyperX Fury RGB utiliza tecnología DDR4 para ofrecer una mayor velocidad y eficiencia energética en comparación con las generaciones anteriores de memoria. Además, cuenta con perfiles XMP (Extreme Memory Profile) que permiten un fácil overclocking para obtener un rendimiento aún mayor.   Una de las características destacadas de la memoria HyperX Fury RGB es su iluminación RGB personalizable. Puedes personalizar los efectos de iluminación y los colores utilizando el software HyperX NGENUITY, lo que te permite sincronizar la iluminación con otros dispositivos compatibles de HyperX",
        "category": 4
    },
    {
        "nombre": "Memória Kingston HyperX Fury 8 GB DDR4 2666MHZ",
        "img": "/memoria-kingston-hyperx-fury-hx426c16fb38-u3v75j-L.jpg",
        "price": 33,
        "description": "La memoria Kingston HyperX Fury 8GB DDR4 2666MHz es un módulo de memoria RAM de 8GB que ofrece una velocidad de clock de 2666MHz . Esta memoria forma parte de la serie HyperX Fury de Kingston, que se caracteriza por su rendimiento confiable y su diseño elegante.",
        "category": 4
    },
    {
        "nombre": "Memória G.Skill TridentZ RGB 16 GB (2x8 GB) DDR4-3200",
        "img": "/memoria-gskill-trident-z-16gb-f43200c16d16gtzr-upZ77c-L.jpg",
        "price": 103,
        "description": "Memória G.Skill TridentZ RGB 16 GB (2x8 GB) DDR4-3200. La memoria TridentZ RGB utiliza tecnología DDR4 para ofrecer un rendimiento rápido y eficiente en sistemas de computadora. Además, cuenta con perfiles XMP (Extreme Memory Profile) que permiten un fácil overclocking para obtener un rendimiento aún mayor.",
        "category": 4
    },
    {
        "nombre": "Memória G.Skill Aegis 16 GB (2x8 GB) DDR4-3200",
        "img": "/memoria-gskill-aegis-f43200c16d16gis-v5Mo5B-L.jpg",
        "price": 120,
        "description": "descripcn corta Memória G.Skill Aegis 16 GB (2x8 GB) DDR4-3200. La memoria Aegis utiliza tecnología DDR4 para ofrecer un rendimiento rápido y eficiente en sistemas de computadora. Con su capacidad de 16GB, es ideal para tareas exigentes como juegos, edición de video y diseño gráfico.        ",
        "category": 4
    },
    {
        "nombre": "HDD Seagate 2TB Barracuda, SATA, 6GB/s",
        "img": "/hdd-seagate-skyhawk-barracuda2tb-wJ8e5F-L.jpg",
        "price": 52,
        "description": "El HDD Seagate 2TB Barracuda es un disco duro interno de 2TB que utiliza la interfaz SATA con una velocidad de transferencia de 6GB/s. Este disco duro forma parte de la serie Barracuda de Seagate, que se caracteriza por su rendimiento confiable y su capacidad de almacenamiento de alta capacidad.",
        "category": 5
    },
    {
        "nombre": "SSD Sandisk Plus 480GB, SATA, Leitura 535MB/s,  445MB/s",
        "img": "/ssd-sandisk-ssd-plus-sdssda480gg26-yA3J75-L.jpg",
        "price": 56,
        "description": "El SSD Sandisk Plus 480GB es un dispositivo de almacenamiento de estado sólido que utiliza la interfaz SATA. Ofrece una velocidad de lectura de hasta 535MB/s y una velocidad de escritura de hasta 445MB/s. El SSD Sandisk Plus está diseñado para ser hasta 20 veces más rápido que un disco duro tradicional, lo que significa que experimentarás tiempos de inicio y apagado más rápidos, así como una mayor velocidad en la carga de aplicaciones y una experiencia general más ágil y receptiva. ",
        "category": 5
    },
    {
        "nombre": "SSD Samsung 970 EVO Plus 1TB, M.2 NVMe, Leitura 3500MB/s,  3300MB/s",
        "img": "/ssd-samsung-970-evo-plus-970evoplus1tb-ma4uu6-L.jpg",
        "price": 145,
        "description": "SSD Samsung 970 EVO Plus 1TB, M.2 NVMe, Leitura 3500MB/s,  3300MB/s. Este SSD es conocido por su rendimiento excepcional y su capacidad de almacenamiento de alta capacidad. Con 1TB de espacio, proporciona una gran cantidad de almacenamiento para tus archivos, documentos y programas.",
        "category": 5
    },
    {
        "nombre": "HDD Toshiba P300 3.5 7200 RPM",
        "img": "/hdd-toshiba-p300-p3001tb-gre9S7-L.jpg",
        "price": 34,
        "description": "HDD Toshiba P300 3.5 7200 RPM. El Toshiba P300 3.5 7200 RPM es compatible con una variedad de dispositivos de escritorio y se instala internamente en la computadora. Es ideal para usuarios que necesitan una gran capacidad de almacenamiento y un rendimiento confiable para aplicaciones de uso general, como almacenamiento de archivos, reproducción de medios y juegos.",
        "category": 5
    },
    {
        "nombre": "SSD Gigabyte Aorus M.2-2280",
        "img": "/ssd-gigabyte-ud-pro-aorusrgb512gb-jbd7v5-L.jpg",
        "price": 87,
        "description": "El SSD Gigabyte Aorus M.2-2280 es un dispositivo de almacenamiento de estado sólido que utiliza el factor de forma M.2 2280. Viene en varias capacidades, como 256GB, 500GB, 1TB y 2TB, y utiliza la interfaz PCI-Express 4.0x4 y NVMe 1.3.",
        "category": 5
    },
    {
        "nombre": "SSD Lexar NM100 M.2-2280 ",
        "img": "/ssd-lexar-aorus-nm100256gb-wer98Q-L.jpg",
        "price": 31,
        "description": "El SSD Lexar NM100 M.2-2280 es un dispositivo de almacenamiento de estado sólido que utiliza el factor de forma M.2 2280 y la interfaz SATA III (6Gb/s). Viene en varias capacidades, como 128GB, 256GB y 512GB. Este SSD ofrece una mejora significativa en el rendimiento en comparación con los discos duros tradicionales. Con velocidades de lectura secuencial de hasta 550MB/s, el SSD Lexar NM100 permite un arranque más rápido del sistema operativo y una carga más rápida de aplicaciones y archivos.",
        "category": 5
    },
    {
        "nombre": "Gabinete Nox Hummer TGM ATX Mid Tower",
        "img": "/gabinete-nox-hummer-tgm-nxhummertgm-zg8ec8-L.jpg",
        "price": 345,
        "description": "Gabinete Nox Hummer TGM ATX Mid Tower. El gabinete Nox Hummer TGM ATX Mid Tower cuenta con una ventana de vidrio templado en el lateral, lo que permite mostrar los componentes internos de la computadora y agregar un toque estético. También tiene un sistema de iluminación RGB en el panel frontal y ventiladores preinstalados para una apariencia más llamativa.",
        "category": 11
    },
    {
        "nombre": "Gabinete Deepcool MATREXX 50 ATX Mid Tower ",
        "img": "/gabinete-deepcool-matrexx-50-matrexx50-mZZs74-L.jpg",
        "price": 432.8,
        "description": "Gabinete Deepcool MATREXX 50 ATX Mid Tower. El gabinete Deepcool MATREXX 50 ATX Mid Tower ofrece un amplio espacio interior para acomodar componentes de alta gama y sistemas de refrigeración avanzados . Tiene capacidad para hasta tres ventiladores frontales de 120 mm o dos ventiladores de 140 mm, así como un ventilador trasero de 120 mm. También tiene soporte para radiadores de hasta 360 mm en la parte frontal y superior.",
        "category": 11
    },
    {
        "nombre": "Gabinete Sharkoon M25 ATX Mid Tower (Branco)",
        "img": "/gabinete-sharkoon-m25-m25w-z3zGm5-L.jpg",
        "price": 49,
        "description": "El gabinete Sharkoon M25 ATX Mid Tower ofrece un amplio espacio interior para acomodar componentes de alta gama y sistemas de refrigeración avanzados. Tiene capacidad para hasta tres ventiladores frontales de 120 mm o dos ventiladores de 140 mm, así como un ventilador trasero de 120 mm. También tiene soporte para radiadores de hasta 360 mm en la parte frontal y superior.",
        "category": 11
    },
    {
        "nombre": "Gabinete Corsair Carbide 275R ATX Mid Tower ",
        "img": "/gabinete-corsair-carbide-275r-cc9011130ww-fn28rh-L.jpg",
        "price": 90,
        "description": "El gabinete Corsair Carbide 275R ATX Mid Tower ofrece un amplio espacio interior para acomodar componentes de alta gama y sistemas de refrigeración avanzados. Tiene capacidad para hasta tres ventiladores frontales de 120 mm o dos ventiladores de 140 mm, así como un ventilador trasero de 120 mm. También tiene soporte para radiadores de hasta 360 mm en la parte frontal y superior.",
        "category": 11
    },
    {
        "nombre": "Gabinete Cooler Master MASTERBOX MB520 ARGB ATX Mid Tower ",
        "img": "/gabinete-cooler-master-masterbox-mb520-argb-mcbb520kgnnrga-b65n9j-L.jpg",
        "price": 60,
        "description": "El gabinete Cooler Master MasterBox MB520 ARGB ATX Mid Tower es un estuche de computadora de tamaño mediano diseñado para alojar placas base ATX. Tiene un diseño moderno y elegante con un panel frontal tintado y una ventana de vidrio templado en el lateral , lo que permite mostrar los componentes internos de la computadora.",
        "category": 11
    },
    {
        "nombre": "Gabinete Corsair iCUE 220T ATX Mid Tower (Negro / Branco)",
        "img": "/gabinete-corsair-icue-220t-cc9011191ww-eQn68C-L.jpg",
        "price": 98,
        "description": "El gabinete Corsair iCUE 220T RGB es un estuche de computadora de tamaño mediano ATX con un diseño elegante y moderno. Viene en opciones de color negro y blanco. El Corsair iCUE 220T RGB viene con ventiladores RGB preinstalados para una iluminación personalizable y un rendimiento de enfriamiento eficiente . Puede albergar hasta tres ventiladores frontales de 120 mm o dos ventiladores de 140 mm, así como un ventilador trasero de 120 mm.",
        "category": 11
    },
    {
        "nombre": "Fuente Corsair CV550 550 W ATX",
        "img": "/fonte-corsair-cv-cv550550w80plusbronze-t8T6tP-L.jpg",
        "price": 35,
        "description": "La fuente de alimentación Corsair CV550 es una unidad de 550 W ATX que ofrece una eficiencia certificada 80 PLUS Bronze. Es ideal para alimentar tu nueva PC doméstica u de oficina, proporcionando una entrega continua de energía eficiente.",
        "category": 7
    },
    {
        "nombre": "Fuente AeroCool KCAS 400 W ATX",
        "img": "/fonte-aerocool-mwe-white-series-kcas-w9GtN9-L.jpg",
        "price": 60,
        "description": "La fuente de alimentación AeroCool KCAS 400W cuenta con un diseño compacto y cables fijos para una fácil instalación. También está equipada con un ventilador de 12 cm que proporciona un flujo de aire adecuado y ayuda a mantener la temperatura de la fuente de alimentación bajo control.",
        "category": 7
    },
    {
        "nombre": "Fuente Corsair CX750M 750 W ATX12V",
        "img": "/fonte-corsair-cxm-cx750m-hNkw98-L.jpg",
        "price": 90,
        "description": "La fuente de alimentación Corsair CX750M cuenta con un diseño semi-modular, lo que significa que algunos de los cables son fijos y otros son desmontables, lo que facilita la gestión de cables y la instalación. También está equipada con un ventilador de 12 cm que proporciona un flujo de aire adecuado y ayuda a mantener la temperatura de la fuente de alimentación bajo control.",
        "category": 7
    },
    {
        "nombre": "Fuente Corsair HX1000i 1000 W ATX12V / EPS12V",
        "img": "/fonte-corsair-hxi-hx1000i-cVL24I-L.jpg",
        "price": 190,
        "description": "La fuente de alimentación Corsair HX1000i cuenta con un diseño completamente modular, lo que significa que todos los cables son desmontables, lo que facilita la gestión de cables y la instalación. También está equipada con un ventilador de 140 mm con tecnología de rodamiento de fluido dinámico (FDB) que proporciona un funcionamiento silencioso y una larga vida útil.",
        "category": 7
    },
    {
        "nombre": "Fuente Corsair CX650 650 W ATX12V",
        "img": "/fonte-corsair-cx-cx650-nT564J-L.jpg",
        "price": 60,
        "description": "Esta fuente de alimentación ofrece una entrega de energía estable y eficiente, con una única línea de +12V para una compatibilidad completa con los componentes de tu sistema. Además, cuenta con protecciones de seguridad integradas, como protección contra sobretensión, cortocircuito y sobrecorriente, para proteger tus componentes de posibles daños.",
        "category": 7
    },
    {
        "nombre": "Fuente Corsair RM650X 650 W ATX12V / EPS12V",
        "img": "/fonte-corsair-rmx-rm650x-utG2k5-L.jpg",
        "price": 90,
        "description": "La fuente de alimentación Corsair RM650X es completamente modular, lo que significa que todos los cables son desmontables, lo que facilita la gestión de cables y la instalación. Está equipada con un ventilador de 135 mm con tecnología de rodamiento de fluido dinámico (FDB) que proporciona un funcionamiento silencioso y una larga vida útil.",
        "category": 7
    },
    {
        "nombre": "Teclado Redragon Kumara",
        "img": "/teclado-redragon-kumara-k552-AZ74wy-L.jpg",
        "price": 32,
        "description": "El teclado Redragon Kumara K552 es un teclado mecánico para juegos que ofrece una experiencia de juego inmersiva y de alta calidad. Tiene un diseño compacto de 87 teclas sin teclado numérico, lo que lo hace ideal para ahorrar espacio en el escritorio y permitir más libertad de movimiento durante las sesiones de juego intensas.",
        "category": 10
    },
    {
        "nombre": "Teclado HyperX Alloy Origins Core",
        "img": "/teclado-hyperx-alloy-origins-core-hxkb7rdxbr-CKp86Q-L.jpg",
        "price": 60,
        "description": "El teclado HyperX Alloy Origins Core es un teclado mecánico para juegos con un diseño compacto y características personalizables . Tiene un cuerpo de aluminio de grado aeronáutico y un diseño TKL (tenkeyless) sin teclado numérico, lo que lo hace más pequeño y ahorra espacio en el escritorio. Cuenta con interruptores mecánicos HyperX, que ofrecen una respuesta táctil y sonora distintiva. Puedes elegir entre diferentes opciones de interruptores, como HyperX Red, HyperX Aqua y HyperX Blue.",
        "category": 10
    },
    {
        "nombre": "Teclado Razer Huntsman",
        "img": "/teclado-razer-blackwidow-x-chroma-blackwidowxchroma-m4Wdo6-L.jpg",
        "price": 120,
        "description": "El teclado Razer Huntsman es un teclado gaming con características innovadoras y de alto rendimiento. En resumen, el Razer Huntsman es un teclado gaming de alto rendimiento con interruptores ópticos , retroiluminación personalizable y un diseño ergonómico. Es una excelente opción para los jugadores que buscan una experiencia de juego rápida, precisa y cómoda.",
        "category": 10
    },
    {
        "nombre": "Teclado Multilaser TC160",
        "img": "/teclado-multilaser-tc160-tx2S76-L.jpg",
        "price": 12,
        "description": "El teclado Multilaser TC160 es un teclado gamer con funciones básicas pero esenciales para mejorar tu experiencia de juego. Está diseñado para brindar comodidad y rendimiento durante largas sesiones de juego. En resumen, el teclado Multilaser TC160 es una opción básica pero funcional para los jugadores que buscan un teclado gaming con teclas rojas, teclas multimedia y un diseño compacto. Es una opción asequible que puede mejorar tu experiencia de juego.",
        "category": 10
    },
    {
        "nombre": "Monitor LG 29UM69G-B 29.0″ 2560 x 1080 75 Hz",
        "img": "/monitor-lg-29um69g-b-29um69gb-DrGS59-L.jpg",
        "price": 182,
        "description": "El Monitor LG 29UM69G-B 29.0 es un monitor de juego ultrawide con características impresionantes. En resumen, el Monitor LG 29UM69G-B 29.0 es un monitor de juego ultrawide con una pantalla de alta resolución, tecnología IPS, tiempo de respuesta rápido y compatibilidad con AMD FreeSync. Es una excelente opción para los jugadores que buscan una experiencia inmersiva y de alta calidad visual.",
        "category": 8
    },
    {
        "nombre": "Monitor Acer KG241Q 23.6″ 1920 x 1080 144 Hz",
        "img": "/monitor-acer-kg241q-CyA62g-L.jpg",
        "price":160,
        "description": "El Monitor Acer KG241Q 23.6 es un monitor de juego de 23.6 pulgadas con una resolución Full HD, un tiempo de respuesta rápido de 1ms y una alta frecuencia de actualización de 144Hz. También es compatible con la tecnología AMD FreeSync para una experiencia de juego sin desgarros en la pantalla. Con su tamaño compacto y características de rendimiento, es una opción popular para los jugadores que buscan una experiencia de juego inmersiva y fluida.",
        "category": 8
    },
    {
        "nombre": "Monitor AOC 24G2/BK 23.8″ 1920 x 1080 144 Hz",
        "img": "/monitor-aoc-24g2bk-ARs95r-L.jpg",
        "price": 318,
        "description": "El Monitor AOC 24G2/BK 23.8 es un monitor de juego de 23.8 pulgadas con una resolución Full HD y una frecuencia de actualización de 144Hz. Cuenta con un panel IPS para colores vivos y ángulos de visión amplios. Además, tiene un tiempo de respuesta de 1ms y es compatible con la tecnología AMD FreeSync para una experiencia de juego suave y sin desgarros en la pantalla. Con su tamaño compacto y características de rendimiento, es una opción popular para los jugadores que buscan una experiencia de juego inmersiva y de alta calidad visual.",
        "category": 8
    },
    {
        "nombre": "Monitor LG 34GL750 34.0″ 2560 x 1080 144 Hz",
        "img": "/monitor-lg-ultrawide-34gl750-b6zg7A-L.jpg",
        "price": 330,
        "description": "El Monitor LG 34GL750 34.0 es un monitor de juego de 34 pulgadas con una resolución ultrawide de 2560x1080 píxeles. Cuenta con una tecnología IPS para colores vivos y ángulos de visión amplios. Además, tiene un tiempo de respuesta rápido de 1ms y una frecuencia de actualización de 144Hz para una experiencia de juego suave y sin desenfoques. También es compatible con la tecnología AMD FreeSync para eliminar el desgarro de la pantalla. Con su tamaño amplio y características de rendimiento, es una opción popular para los jugadores que buscan una experiencia de juego inmersiva y envolvente.",
        "category": 8
    },
    {
        "nombre": "Monitor LG 29WK600 29.0″ 2560 x 1080 75 Hz",
        "img": "/monitor-lg-29wk600-B9VD4N-L.jpg",
        "price":160,
        "description": "El Monitor LG 29WK600 es un monitor de 29 pulgadas con una resolución de 2560 x 1080 píxeles y una frecuencia de actualización de 75 Hz. Cuenta con una pantalla ultrawide que ofrece una experiencia inmersiva y amplia. Además, utiliza tecnología IPS para colores vivos y ángulos de visión amplios. Con su resolución nítida y tamaño compacto, es una opción popular",
        "category": 8
    },
    {
        "nombre": "Monitor Asus VG32VQ 31.5″ 2560 x 1440 144 Hz",
        "img": "/monitor-asus-vg32vq-m3Tr56-L.jpg",
        "price": 320,
        "description": "El Monitor Asus VG32VQ es un monitor de 31.5 pulgadas con una resolución de 2560 x 1440 píxeles y una frecuencia de actualización de 144 Hz. Cuenta con tecnología de panel VA para colores vibrantes y ángulos de visión amplios. Además, tiene un tiempo de respuesta de 1ms para una experiencia de juego fluida y sin desenfoques. También es compatible con la tecnología AMD FreeSync para eliminar el desgarro de la pantalla. Con su tamaño amplio y características de rendimiento, es una opción popular para los jugadores que buscan una experiencia de juego inmersiva y de alta calidad visual.",
        "category": 8
    },
    {
        "nombre": "Mouse Logitech G PRO Wireless",
        "img": "/mouse-logitech-g-pro-gpro-u7vki2-L.jpg",
        "price": 70,
        "description": "El Mouse Logitech G PRO Wireless es un mouse de juego inalámbrico diseñado para ofrecer un rendimiento excepcional. Cuenta con tecnología inalámbrica LIGHTSPEED para una conexión rápida y estable, y tiene un sensor óptico de alta precisión con una sensibilidad ajustable de hasta 16,000 DPI. Además, tiene un diseño ligero y ambidiestro que lo hace cómodo de usar para cualquier tipo de agarre. Con botones programables y una duración de batería de hasta 48 horas, es una opción popular entre los jugadores que buscan un mouse de juego de alta calidad y rendimiento.",
        "category": 9
    },
    {
        "nombre": "Mouse Razer Deathadder V2",
        "img": "/mouse-razer-deathadder-v2-deathadderv2-BFyH82-L.jpg",
        "price": 46,
        "description": "El Mouse Razer Deathadder V2 es un mouse de juego de alta precisión diseñado para ofrecer un rendimiento excepcional. Cuenta con un sensor óptico de 20,000 DPI para una precisión y seguimiento precisos, y tiene una velocidad de respuesta de 650 IPS y una aceleración de 50G para una experiencia de juego rápida y fluida. Además, tiene un diseño ergonómico y cómodo que se adapta a la mano, con botones programables y una durabilidad mejorada. Con su rendimiento y características avanzadas, es una opción popular entre los jugadores que buscan un mouse de juego de alta calidad.",
        "category": 9
    },
    {
        "nombre": "Mouse Logitech G203",
        "img": "/mouse-logitech-g203-mMk88m-L.jpg",
        "price": 152,
        "description": "El Mouse Logitech G203 es un mouse de juego de alta calidad y rendimiento. Cuenta con un sensor óptico de hasta 8,000 DPI para una precisión y seguimiento precisos. Tiene un diseño ergonómico y cómodo que se adapta a la mano, lo que lo hace ideal para largas sesiones de juego. Además, cuenta con botones programables y una durabilidad mejorada. Con su rendimiento y características avanzadas, el Mouse Logitech G203 es una excelente opción para los jugadores que buscan un mouse confiable y preciso.",
        "category": 9
    },
    {
        "nombre": "Mouse Multilaser MO270",
        "img": "/mouse-multilaser-mo270-zQX9U2-L.jpg",
        "price": 13,
        "description": "El Mouse Multilaser MO270 es un mouse de diseño ergonómico y cómodo que ofrece un rendimiento confiable. Cuenta con un sensor óptico de hasta 1600 DPI para una precisión precisa y un seguimiento suave. Además, tiene botones programables y una conexión USB para una fácil instalación y uso. Con su diseño simple y funcional, el Mouse Multilaser MO270 es una opción adecuada para aquellos que buscan un mouse básico y eficiente para su uso diario.",
        "category": 9
    },
    {
        "nombre": "Mouse HyperX Pulsefire FPS PRO",
        "img": "/mouse-hyperx-pulsefire-fps-pro-pulsefirefpspro-Aw388X-L.jpg",
        "price": 29,
        "description": "El Mouse HyperX Pulsefire FPS PRO es un mouse diseñado específicamente para jugadores de FPS (First Person Shooter). Cuenta con un sensor óptico de alta precisión con hasta 16,000 DPI, lo que permite un seguimiento preciso y una respuesta rápida en el juego. Además, tiene un diseño ergonómico y cómodo que se adapta bien a la mano, lo que permite largas sesiones de juego sin fatiga. El Pulsefire FPS PRO también cuenta con botones programables y una iluminación RGB personalizable para una experiencia de juego personalizada. En resumen, es un mouse de alta calidad y rendimiento diseñado para satisfacer las necesidades de los jugadores de FPS.",
        "category": 9
    }
]
export default productos
