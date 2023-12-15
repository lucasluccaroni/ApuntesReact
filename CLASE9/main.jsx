//CLASE 9 - RUTEO Y NAVEGACION


//Conectar estados con la URL del navegador.

//-ORGANIZACION DE LA APLICACION
// Organizada en diferentes funcionabilidades
//*EJ: 
//* Listar productos, hacer el checkout del producto, ver el listado de productos, ver listado de productos dentro del carrito, etc, todas funcionabilidades distintas.

//Cada funcionabilidad debe estar dentro de un componente contenedor.
//Cada funcionabilidad deberia estar relacionada a una ruta, una URL. Esto me va a servir en terminos de experiencia de usuario y escalabilidad para ir agregando otras funcionabilidades sin problemas. Tambien va a permitir que los usuarios sepan donde estan parados al momento de ir  navengado por la app.

//Una buena navegacion permite conocer al navegador el historial y controlar las acciones de ir para adelante, para atras, sin problemas.
//Tambien permite analizar a los crawlers la app y entenderla, proveyendo acceso optimizado.

//? ↓ PASO A PASO LA ORGANIZACION DE LA PAGINA ↓
//? inicio → busqueda → detalle → confirmacion → fin




//- ROUTING
//Tengo que relacionar cada funcionabilidad a los componentes contenedores que tienen la logica para realizar estas funcionabilidades.

//INICIO: "/"                   → ItemListContainer
//CATEGORIA: "/category/:id"    → ItemListContainer + cat
//DETALE: "/item/:id"           → ItemDetailContainer
//CARRITO: "/cart"              → Cart
//CONFIRMACION: "/checkout"     → Checkout




//- REACT ROUTER
// Libreria que se encarga de relacionar un estado de React con la navegacion del navegador.
//! npm install react-router-dom
// react-router-native → para unir el nucleo de navegacion con navegacion en dispositivo movil



//? <BroswerRouter/>
// Este componente tiene toda la logica relacionada con el estado.
//Con este componente voy a tener que envolver todos aquellosc omponentes que deben estar realacionados con la navegacion. (clase9 min27)
//*EJ:
//! <BrowserRouter>
//*     <Navbar/>
//*     <ItemListContainer/>
//*     <ItemDetailContainer/>
//! </BrowserRouter>



//? <Routes/>
//Ahora hay que diferenciar QUÉ elementos dependen de la navegacion de los que no.
//EJ: Mostrar el NavBar no depende de la URL, siempre va a mostrarse.
// Con Routes voy a envolver los elementos que SI dependen de la navegacion.
//*EJ:
//* <BrowserRouter>
//*     <Navbar/>
//!     <Routes>    
//*         <ItemListContainer/>
//*         <ItemDetailContainer/>
//!     </Routes>
//* </BrowserRouter>



//? <Route/>
//Componente con 2 props:
//1) Path: Donde voy a indicar la URL
//2) Element: el componente que yo quiero montar en esa URL.
//*EJ:
//* <BrowserRouter>
//*     <Navbar/>
//*     <Routes>    
//!         <Route path="/" element={<ItemListContainer/>} /> 
//!         <Route path="/detail" element={<ItemDetailContainer/>} />
//*     </Routes>
//* </BrowserRouter>

// Si hago un Route con path='*', puedod efinir que elemento mostrar cuando no se encuentre la ruta buscada.




//? <Link/>
//Reemplaza al button para navegar entre rutas.
//Componente con 1 prop "to" para definir a que ruta quiero navegar. 
//*EJ:
//* <Link to="/detail"> Detalle </Link>

//Esto reemplaza al boton, NO poner un button dentro de Link. Estilar Link para que se parezca a un boton.
//! Tambien se puede envolver una imagen con un <Link/> para  que pueda ser clickeada y redirigir!




//- USE PARAMS
//Hook que devuelve los parametros de URL que fueron definidos.
// Al path el cual su URL puede tener porciones dinamicas de ruta, debo poner "/:nombreDePorcionDeRuta" para identificar cada parametro con un nombre y que sea permeable a recibir rutas dinamicas
//*EJ: "/detail/:productId"

//SINTAXIS
// useParams()  → devuelve un objeto por lo que puedo desestructurarla
// ↓
// const {productId} = useParams()



//- USE NAVIGATE
//este hook da una funcion  que permite navegar programaticamente
// const navigate = useNavigate()
//*EJ:
//* const navigate = useNavigate()
//*          ↓
//* <h1 onClick={ ()=> navigate('/') }> Inicio </h1>
// Clase9-min1.47
