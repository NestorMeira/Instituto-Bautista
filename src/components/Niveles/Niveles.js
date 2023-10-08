import'./Niveles.scss'
import React from 'react'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

const Niveles = () => {
  return (
    <div className='Niveles'>
    
     <h4>
     <h3>
      <strong>Perfil del alumno</strong>
     </h3>
        <p>Es protagonista del proceso de enseñanza - aprendizaje</p>
        <div className='punto'>●</div>
        <p>
        Es un ser sociable, independiente, participativo, solidario, crítico, observador, respetuoso y creativo
        </p>
        <div className='punto'>●</div>
        <p>
        Es respetuoso de las diferencias, con capacidad creciente para aceptar lo diverso, desarrollando actitudes de tolerancia 
        </p>
        <div className='punto'>●</div>
        <p>
        Se reconoce y respeta como persona
        </p>
        <div className='punto'>●</div>
        <p>
        Manifiesta sentimientos de pertenencia, seguridad y confianza en sí mismo, para resolver situaciones problemáticas
        </p>
        <div className='punto'>●</div>
        <p>
        Tiene control de su cuerpo y seguridad en sus desplazamientos  
        </p>
        <div className='punto'>●</div>
        <p>
        Conoce y relaciona hechos, fenómenos y situaciones del ambiente natural y social y los explica
        </p>
        <div className='punto'>●</div>
        <p>
        Valora la importancia del medio natural y de la calidad de la vida humana
        </p>
     </h4>
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
    <div className='objetivos'>
        <h3>Nuestros Objetivos Pedagógicos</h3>
    <section>
        <ul>
            <li><CheckCircleSharpIcon className='ok'/>
            Enseñar un estilo de vida inspirado en el amor a Dios y al prójimo. 
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Funcionar en el marco de libertad, solidaridad y respeto mutuo para beneficio de toda la Comunidad Educativa.
            </li>
            <li>
            Desarrollar una propuesta educativa para producir una experiencia de aprendizaje significativa, que capacite al niño para enfrentar la creciente complejidad de la realidad.
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Crear condiciones para que los niños participen activamente en las prácticas sociales del lenguaje, para que las constituyan en objeto de reflexión, para que asuman una posición crítica frente a ellas.
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Que comprendan los fundamentos lógicos que atienden a la formación de procesos generales de pensamiento matemático, a la resolución de problemas y a los modos de comunicar sus procedimientos y resultados.
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Que se acerquen al conocimiento de la diversidad biológica mediante el estudio de las estructuras y funciones vitales de los organismos.
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Que accedan a explicaciones e informaciones de hechos sociales actuales y del pasado, reconociendo causas y consecuencias como la participación de actores sociales en los mismos.
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Promover múltiples y variadas situaciones didácticas que favorezcan el uso de diferentes medios tecnológicos para la comunicación.
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Que utilicen las posibilidades expresivas de la voz, del cuerpo, del juego y de las imágenes con creatividad y autonomía. 
            </li>
            <li><CheckCircleSharpIcon className='ok'/>
            Que desarrollen habilidades cognitivas y lingüísticas del inglés, lengua de comunicación internacional y conozcan aspectos propios de la vida y cultura anglosajona.  
            </li>
        </ul>
    </section>
    </div>
    </div>
  )
}

export default Niveles