import'./Niveles.scss'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import React, { useState, useEffect } from 'react';


const Niveles = () => {



  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Simular un retraso de 3 segundos antes de cambiar el estado de carga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Limpiar el temporizador en caso de que el componente se desmonte antes de que termine el retraso
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='Niveles'>
    {loading && ( // Mostrar el spinner mientras se carga el componente
        <div className="spinner-overlay">
          <div className="spinner"><img src="assets/logo.png" alt="logo" /></div>
        </div>
      )}
    <div className='imgNiveles'>
  <div className='img'>
  <img src='/assets/niveles-img1.jpg' alt='imagen'/>
  <div className='divItem'>
 <strong>Salas de 4 y 5 años</strong>
 <p>Turno Mañana</p>
  </div>
  </div>
  <div className='img'>
  <img src='/assets/niveles-img2.jpg' alt='imagen'/>
  <div className='divItem'>
  <strong>Nivel Primario</strong>
 <p>Turno Mañana</p>
</div>
</div>
<div className='img'>
  <img src='/assets/secundario.jpg' alt='imagen'/>
  <div className='divItem'>
  <strong>1er Año Secundaria</strong>
  <h6>Orientación Educación Física </h6>
 <p>Turno Tarde</p>
</div>
</div>
    </div>
    <div className='perfil'>
        <h3>Perfil del alumno</h3>
    <section>
    <ul>
            <li><CheckCircleSharpIcon className='ok'/>
            Es protagonista del proceso de enseñanza - aprendizaje
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Es un ser sociable, independiente, participativo, solidario, crítico, observador, respetuoso y creativo
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Es respetuoso de las diferencias, con capacidad creciente para aceptar lo diverso, desarrollando actitudes de tolerancia 
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Se reconoce y respeta como persona
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Manifiesta sentimientos de pertenencia, seguridad y confianza en sí mismo, para resolver situaciones problemáticas
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Tiene control de su cuerpo y seguridad en sus desplazamientos  
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Conoce y relaciona hechos, fenómenos y situaciones del ambiente natural y social y los explica
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Valora la importancia del medio natural y de la calidad de la vida humana
            </li>
        </ul>


    </section>
    </div>



















    </div>
  )
}

export default Niveles