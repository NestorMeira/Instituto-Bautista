import'./Contacto.scss';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { Link } from 'react-router-dom';


const Contacto = () => {


  return (
    <div className='contacto'>
     
        <section className='section1'>
            <div className='padre1'>
                <h1>INSTITUTO BAUTISTA DEL <br/>CENTRO</h1>
                <p>ELDORADO - MISIONES</p>
                <div className='padre2'>
                  
                
                <Link className='linea' to='/novedades'>
                <div className='hijo'>            
                    <LibraryAddCheckOutlinedIcon className='icono2'/>
                    <span>Novedades</span>        
                </div>
                </Link>
                <Link className='linea' to='/formularios'>
                <div className='hijo'>            
                    <InsertDriveFileOutlinedIcon className='icono3'/>
                    <span>Formularios</span>                 
                </div>
                </Link>
                <Link className='linea' to='/materiales'>
                <div className='hijo'>            
                    <BackpackOutlinedIcon className='icono4'/>
                    <span>Lista de materiales<br/>2024</span>                 
                </div>
                </Link>
                
                </div>
            </div>
        </section>
        
        <section className='section2'>
        <h3>
            <strong>Contacto</strong>
        </h3>
        <div className='padre3'>
        <div className='tel-email'>
        <div className='tel'>
          <h6>Teléfono</h6>
          <p>Nivel Primario: 03751-424930<br/>
          Nivel Inicial: 03751-426784</p>
        </div>
        <div className='email'>
          <h6>Email</h6>
          <p><strong>Dirección:</strong><br/>
          direccion@ibceldorado.com.ar<br/>
          <strong>Administración:</strong><br/>
          administracion@ibceldorado.com.ar                    
          </p>
        </div>
        </div>
        <div className='mapa'>
        <iframe title="mapa"  src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCNveGQ9bfpKFwWzQLLftrR9hNiHwdqQG8&q=Calle La Rioja 1402, eldorado, misiones' allowFullScreen ></iframe>
        </div>
            </div>
        </section>
    </div>
    
  )
}

export default Contacto
