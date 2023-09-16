import'./Nosotros.scss'
import React from 'react'

const Nosotros = () => {

  return (
    <div className='Nosotros'>
        <div className='titulo-img'>
            <h1>IBC ELDORADO</h1>
            <img src='/assets/nosotros.jpg' alt='imagen'/>
        </div>
       <div className='parrafo1'>
         <p>
         La Iglesia Bautista del Centro es una congregación que por años ha soñado desarrollar un ministerio educativo. Es una comunidad de fe, que tiene el propósito de ayudar a las personas a vivir una vida plena, a desarrollar sanamente su capacidad de amar y ser amado, a recuperar la habilidad de crear un futuro distinto, superar sus límites y a avanzar continuamente con alegría, esperanza y paz.<br/>   
         El Instituto Bautista del Centro nace con el propósito de formar de manera íntegra a las personas para que sean capaces de asumir responsabilidades y desarrollar actividades que le permitan participar en la sociedad.<br/>
         Fue incorporado al Subsistema de Gestión Privada del Sistema Educativo Oficial de la Provincia de Misiones con el código 0612 según la Resolución n° 399/11 del 16 de Noviembre de 2011. Abre sus puertas a la comunidad el 27 de febrero de 2012 con sala de 4 años, sala de 5 años y primer grado.<br/>
         Año a año se agregó un grado hasta completar el Nivel Primario en 2018. Año en que egresó nuestra primera promoción.     
         </p>
         </div>
         <ul>
            <li>
                <strong>
                Nuestro trabajo está motivado por amor a Dios
                </strong><br/>
                Creador de todas las cosas, y a la niñez, razón de ser de nuestra institución. Nuestra tarea es impartir una educación integral incluyendo todas las áreas de la persona y evangelizar, esto es llevar las Buenas Nuevas primeramente a los niños y luego a través de ellos a sus familias. 

            </li>
            <li>
                <strong>
                Defendemos el valor de la vida.
                </strong><br/>
                Entendiendo que todo ser humano, varón y mujer, es persona desde la concepción. Defendemos la familia como institución social básica establecida por Dios como ambiente propicio para el desarrollo personal, transmisora de vida, primera educadora de virtudes y valores.

            </li>
            <li>
                <strong>
                Nuestra escuela funciona en el marco de libertad.
                </strong><br/>
                Sin discriminación de ningún tipo, ya que Nuestro Señor Jesús dio su vida por todos, y respeto mutuo para beneficio de toda la Comunidad Educativa. Procuramos formar personas que se respeten a sí mismos, a los demás y al contexto en el cual se desarrollan. Respetamos la autonomía en la toma de decisiones de cada alumno y familia en cuanto a cuestiones personales y familiares. 
            </li>
        </ul>
    </div>
  )
}

export default Nosotros