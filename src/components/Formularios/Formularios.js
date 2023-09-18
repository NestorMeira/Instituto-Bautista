import'./Formularios.scss'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const Formularios = () => {
  return (
    <div className='formularios'>
        <section className='section'>
        <div className='titulo'>
        <h3>
            <strong>Formularios para descargar</strong>
        </h3>
        </div>
        </section>
        <section className='sction1'>
            <h3>
            <strong>
                Haga click en los iconos para descargar los formularios en formato PDF
            </strong>
            </h3>
            <div className='padre'>
                <div className='hijo'>
                <a href="assets/ficha_medica.pdf">
                <InsertDriveFileOutlinedIcon className='iconos'/>
                    <h4>
                        Ficha Medica <br/> Obligatoria
                    </h4>
                    </a>
                </div>
                <div className='hijo'>
             <a href='assets/AUTORIZACIN-SALIDAINDIVIDUAL.pdf'>
                   <PersonOutlineIcon className='iconos'/>
                       <h4>
                           Retiro Alumno <br/>Individual
                           </h4>
             </a>
                </div>
                <div className='hijo'>
              <a href='assets/AUTORIZACIN-SALIDAACOMPAADA.pdf'>
                      
                  <PeopleAltOutlinedIcon className='iconos'/>
                      <h4>
                          Retiro Alumno <br/>Acompañado
                      </h4>
              </a>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Formularios