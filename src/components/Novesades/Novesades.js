import'./Novedades.scss'
import React from 'react'

const Novesades = () => {
  return (
    <div className='novedades'>
      <h2>Novedades</h2>
<div className='padre'>
        <div className='reunion-de-padres'>
           <img src='/assets/reunion.jpg' alt='imagen'/>
           <h3>Reunion de Padres</h3>
           
           <p><strong>3º grado:</strong> Viernes 01/09 19:30hs</p> <br/> 
           <p><strong>2º grado:</strong> Lunes 04/09 11:00hs</p> <br/>
           <p><strong>1º grado:</strong> Martes 05/09 11:00hs</p> <br/>
           <p><strong>6º grado:</strong> Martes 12/09 07:30hs</p> <br/>
           <p><strong>7º grado:</strong> Martes 19/09 07:30hs</p><br/>
           
        </div>
        <div className='calendario'>
        <img src='/assets/calendario.jpg' alt='imagen'/>
        <h3>Calendario Septiembre</h3>
        <p>- 08/09 20:00 HS. VELADA ARTISTICA: 1º GRADO, 2º GRADO, 3º GRADO, 4º GRADO y 5º GRADO</p>
        <p>- 11/09: ASUETO “DIA DEL DOCENTE”</p>
        <p>- 15/09 20:00 HS. VELADA ARTISTICA: NIVEL INICIAL, 6º GRADO y 7º GRADO</p>
        <p>- 21/09: ASUETO “DIA DE ESTUDIANTE”</p>
        <p>- 29/09: FERIADO MUNICIPAL “ANIVERSARIO DE LA CIUDAD DE ELDORADO”</p>
        <p>- 29/09: FIN DEL 3º BIMESTRE (NIVEL PRIMARIO)</p><br/>
        </div>
        <div className='viaje'>
        <img src='/assets/capiovi_img.jpeg' alt='imagen'/>
        <h3>Viaje Capioví</h3>
        <h4>Archivos para descargar</h4>
        <a href="assets/Autorizacion_Viaje_Capiovi.pdf">Autorización</a>
        <a href="assets/nota_padres_Capiovi.pdf">Nota de padres</a><br/>
        </div>
        <div className='libro'>
        <img src='/assets/libroingles.jpg' alt='imagen'/>
        <h3>Libros Ingles 2023</h3>
        <p><strong>1º grado:</strong> Storyline Starter A (Se comienza a usar el 1 de marzo)</p>
        <p><strong>2º grado:</strong> Storyline Starter B (Se comienza a usar a partir de 3/4. Durante el mes de marzo se termina de usar el del año anterior)</p>
        <p><strong>3º grado:</strong> Storyline 1 (Se comienza a usar a partir de 3/4. Durante el mes de marzo se termina de usar el del año anterior)</p>
        <p><strong>4º a 7º grado:</strong> Retirar el cuadernillo en Imprenta Heidell. Se utiliza desde el 1 de marzo.
        <br/>
        </p>
  
        </div>
</div>
        
    </div>
  )
}

export default Novesades