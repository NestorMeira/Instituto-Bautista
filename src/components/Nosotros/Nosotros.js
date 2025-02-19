import Carrusel from '../Carrusel/Carrusel'
import'./Nosotros.scss'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import React, { useState, useEffect } from 'react';


const Nosotros = () => {


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
    <div className='Nosotros'>
{loading && ( // Mostrar el spinner mientras se carga el componente
        <div className="spinner-overlay">
          <div className="spinner"><img src="assets/logo.png" alt="logo" /></div>
        </div>
      )}
           <h1>IBC ELDORADO</h1>
        <Carrusel/>
        <div className='titulo-img'>
         
           
        </div>
       <div className='parrafo1'>
       <p>
    La <b>Iglesia Bautista del Centro</b> es una congregación que por años ha soñado <b>desarrollar un ministerio educativo</b>. Es una comunidad de fe, que tiene el propósito de ayudar a las personas a vivir una vida plena, a desarrollar sanamente su capacidad de amar y ser amado, a recuperar la habilidad de crear un futuro distinto, superar sus límites y a avanzar continuamente con <b>alegría, esperanza y paz.</b><br/><br/>  
    El <b>Instituto Bautista del Centro</b> nace con el propósito de formar de manera íntegra a las personas para que sean capaces de asumir responsabilidades y desarrollar actividades que le permitan participar en la sociedad.<br/> <br/>
    Fue incorporado al Subsistema de Gestión Privada del Sistema Educativo Oficial de la Provincia de Misiones con el código 0612 según la Resolución n° 399/11 del 16 de Noviembre de 2011. Abre sus puertas a la comunidad el 27 de febrero de 2012 con sala de 4 años, sala de 5 años y primer grado.<br/><br/>
    Año a año se agregó un grado hasta completar el Nivel Primario en 2018. Año en que egresó nuestra primera promoción.     
</p>


         </div>
         <ul>
    <li>
        <strong>Nuestro trabajo está motivado por amor a Dios</strong><br/>
        <p>Creador de todas las cosas, y a la niñez, razón de ser de nuestra institución. Nuestra tarea es impartir una educación integral incluyendo todas las áreas de la persona y evangelizar, esto es llevar las Buenas Nuevas <b>primeramente a los niños</b> y luego a través de ellos a sus familias.</p>
    </li><br/>
    <li>
        <strong>Defendemos el valor de la vida</strong><br/>
        <p>Entendiendo que todo ser humano, varón y mujer, es persona desde la concepción. <b>Defendemos la familia como institución social básica</b> establecida por Dios como ambiente propicio para el desarrollo personal, transmisora de vida, primera educadora de virtudes y valores.</p>
    </li><br/>
    <li>
        <strong>Nuestra escuela funciona en el marco de libertad</strong><br/>
        <p> Sin discriminación de ningún tipo, ya que Nuestro Señor Jesús dio su vida por todos, y <b>respeto mutuo para beneficio de toda la Comunidad Educativa</b>. Procuramos formar personas que se respeten a sí mismos, a los demás y al contexto en el cual se desarrollan. <b>Respetamos la autonomía en la toma de decisiones</b> de cada alumno y familia en cuanto a cuestiones personales y familiares.</p>
    </li>
</ul>

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

export default Nosotros