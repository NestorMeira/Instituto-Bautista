import'./Novedades.scss'


const Novedades = () => {
  return (
    <div className='novedades'>
     <div className='uniformes'>
      <div className='img-inscripcion'>
      <img src="/assets/secundario2.jpg" alt="" />
      </div>
      <h1>UNIFORMES</h1>
      <div className='btn-uniformes'>
       <a href='assets/uniforme-nivel-inicial.pdf' target='_blank'>Nivel inicial</a>
       <a href='assets/uniforme-nivel-primario.pdf' target='_blank'>Nivel primario</a>
       <a href='assets/uniforme-nivel-secundario.pdf' target='_blank'>Nivel secundario</a>
      </div>
     </div>
        <div className='padre'>
        <div className='calendario'>
        <h3><strong>Calendario</strong><br/> Octubre - diciembre</h3>
        <p><b>01/12</b> Asueto escolar y Administrativo - Día de la Bandera de Misiones</p>
        <p><b>08/12</b> Feriado Nacional</p>
        <p><b>11/12</b>  Acto de Colación de Sala de 5 años</p>
        <p><b>13/12</b>  Cierre del 4º bimestre </p>
        <p><b>15/12</b>  20 hs Velada de Navidad todos los niveles </p>
        <p><b>18/12</b>  20 hs Acto de Colación 7º grado</p>
        <p><b>20 al 22/12</b> Entrega de libretas a las familias por plataforma. </p><br/>
        </div>
        </div>
</div>
        
  )
}

export default Novedades