import Contacto from './components/Contacto/Contacto';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import ResponsiveAppBar from './components/Nav/Nav';
import Formularios from './components/Formularios/Formularios';
import Niveles from './components/Niveles/Niveles';
import Nosotros from './components/Nosotros/Nosotros';
import Novedades from './components/Novedades/Novedades';
import Footer from './components/Footer/Footer';
import Materiales from './components/Materiales/Materiales';
import Inicio from './inicio';

function App() {

  return (

   
    <Router>
      <ResponsiveAppBar/>
      <Routes>
      <Route index path='/' element={<Inicio/>}/>
      <Route path='/contacto' element={<Contacto />} /> 
      <Route path='/nosotros' element= {<Nosotros/>}/>
      <Route path='/novedades' element= {<Novedades/>}/>
      <Route path='/formularios' element= { <Formularios/>}/>
      <Route path='/niveles' element= {<Niveles/>}/>
      <Route path='/materiales' element= {<Materiales/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


