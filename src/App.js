import Contacto from './components/Contacto/Contacto';

import { Route,BrowserRouter,Routes} from 'react-router-dom';
import ResponsiveAppBar from './components/Nav/Nav';
import Formularios from './components/Formularios/Formularios';
import Niveles from './components/Niveles/Niveles';
import Nosotros from './components/Nosotros/Nosotros';
import Novesades from './components/Novesades/Novesades';
import Form from './components/Meil/Meil';
import Footer from './components/Footer/Footer';

function App() {

  return (
<BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
      <Route path='/' element= {<Contacto/>}/>
      <Route path='/encuesta' element= {<Form/>}/>
      <Route path='/nosotros' element= {<Nosotros/>}/>
      <Route path='/novedades' element= {<Novesades/>}/>
      <Route path='/formularios' element= { <Formularios/>}/>
      <Route path='/niveles' element= {<Niveles/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;


