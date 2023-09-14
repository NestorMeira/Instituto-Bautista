import React from 'react'

const Contacto = () => {
  return (
    <div className='Contacto'>
        <section>
            <div>
                <h1>INSTITUTO BAUTISTA DEL CENTRO</h1>
                <p>ELDORADO - MISIONES</p>
                <div className='padre'>
                <div>
                    <span>Encuesta2024</span>
                </div>
                <div>
                    <span>Novedades</span>
                </div>
                <div>
                    <span>Formularios</span>
                </div>
                <div>
                    <span>Acceso Plataforma Santillana</span>
                </div>
                </div>

            </div>
        </section>
        <section>
            <div className='padre1'>
        <h3>
            <strong>Contacto</strong>
        </h3>

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
        <iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCNveGQ9bfpKFwWzQLLftrR9hNiHwdqQG8&q=Calle La Rioja 1402, eldorado, misiones'allowfullscreen></iframe>
        </div>


            </div>
        </section>
    </div>
  )
}

export default Contacto