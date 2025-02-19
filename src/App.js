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
import LibrosAula from './components/Novedades/LibrosAula';
import LibrosIngles from './components/Novedades/LibrosIngles';
import Sala5vista from './components/Sala5/Sala5vista';
import Sala4vista from './components/Sala4/Sala4vista';
import Primerovista from './components/Primero/Primerovista';
import Segundovista from './components/Segundo/Segundovista';
import Tercerovista from './components/Tercero/Tercerovista';
import Cuartovista from './components/Cuarto/Cuartovista';
import Quintovista from './components/Quinto/Quintovista';
import Sextovista from './components/Sexto/Sextovista';
import Septimovista from './components/Septimo/Septimovista';
import Primeranovista from './components/Primerano/Primeranovista';


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
      <Route path='/librosaula' element= {<LibrosAula/>}/>
      <Route path='/librosingles' element= {<LibrosIngles/>}/>
      <Route path='/sala4' element= {<Sala4vista/>}/>
      <Route path='/sala5' element= {<Sala5vista/>}/>
      <Route path='/primero' element= {<Primerovista/>}/>
      <Route path='/segundo' element= {<Segundovista/>}/>
      <Route path='/tercero' element= {<Tercerovista/>}/>
      <Route path='/cuarto' element= {<Cuartovista/>}/>
      <Route path='/quinto' element= {<Quintovista/>}/>
      <Route path='/sexto' element= {<Sextovista/>}/>
      <Route path='/septimo' element= {<Septimovista/>}/>
      <Route path='/1er' element= {<Primeranovista/>}/>

      </Routes>
    
      <Footer/>
    </Router>
  );
}

export default App;


