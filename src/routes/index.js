import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../templates/Character';
import Error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


//Creación de Rutas
const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact'
}

const router = async() =>{
  const header = document.getElementById('header')
  const content = document.getElementById('content')

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
}

export default router;