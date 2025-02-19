import React, { useState, useEffect } from 'react';
import'./Materiales.scss'

const Materiales = () => {

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
    <div className='Materiales'>
      {loading && ( // Mostrar el spinner mientras se carga el componente
        <div className="spinner-overlay">
          <div className="spinner"><img src="assets/logo.png" alt="logo" /></div>
        </div>
      )}

        <div className='grados'>
            <div className='hijo'>
            <button><a href="assets/1grado.pdf" target='_blank'>1º GRADO</a></button>
            <button><a href="assets/2grado.pdf" target='_blank'>2º GRADO</a></button>
            <button><a href="assets/3grado.pdf" target='_blank'>3º GRADO</a></button>
            <button><a href="assets/4grado.pdf" target='_blank'>4º GRADO</a></button>
            </div>
             <div className='hijo2'>
            <button><a href="assets/5grado.pdf" target='_blank'>5º GRADO</a></button>
            <button><a href="assets/6grado.pdf" target='_blank'>6º GRADO</a></button>
            <button><a href="assets/7grado.pdf" target='_blank'>7º GRADO</a></button>
               </div>
        </div>
        </div>
  )
}

export default Materiales
