import'./Encuesta.scss'
import React, { useState } from 'react';

function Encuesta() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [opciones, setOpciones] = useState({
    si: false,
    no: false,
    grado1: false,
    grado2: false,
    grado3: false,
    grado4: false,
    grado5: false,
    grado6: false,
    grado7: false,
    secundaria1: false,
    // Agrega aquí más opciones de radio si es necesario
  });
  console.log(opciones);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nombre') {
      setNombre(value);
    } else if (name === 'apellido') {
      setApellido(value);
    }
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setOpciones({
      ...opciones,
      [name]: value === 'true',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes acceder a los valores de nombre, apellido y opciones para enviarlos o usarlos como desees.
    console.log({ nombre, apellido, opciones });
  };

  return (
    <div className='Formulario'>
     <div className='padre'>
       <h2>Encuesta Inscripcion 2024</h2>
       <p>
       La siguiente es una encuesta, en vista de considerar posibles vacantes para <br/> el ciclo lectivo 2024. Debe Completar el formulario por cada hijo que inscribirá.
       </p>
       <h3>Tiene intenciones que su hijo/​a concurra a nuestra <br/>Institución académica el próximo ciclo lectivo 2024:</h3>
       <form onSubmit={handleSubmit}>
       <div className='si-no'> 
             <label>
               
               <input
                 type="radio"
                 name="opcion1"
                 value="true"
                 checked={opciones.si}
                 onChange={handleRadioChange}
               />
               Si
             </label>
             <label>    
               <input
                 type="radio"
                 name="opcion2"
                 value="true"
                 checked={opciones.no}
                 onChange={handleRadioChange}
               />
                No
             </label>
             </div>
      
         <div className='nombre'>
           <label htmlFor="nombre">Nombre:</label>
           <input
             type="text"
             id="nombre"
             name="nombre"
             value={nombre}
             onChange={handleInputChange}
           />
           <label htmlFor="apellido">Apellido:</label>
           <input
             type="text"
             id="apellido"
             name="apellido"
             value={apellido}
             onChange={handleInputChange}
           />
         </div>
         
      <div className='grado'>
           <h4>Sala o grado a inscribir en 2024</h4>
               <label>
                 <input
                   type="radio"
                   name="opcion2"
                   value="true"
                   checked={opciones.sala4}
                   onChange={handleRadioChange}
                 />
                  Sala 4
               </label>
              
               <label>
                 
                 <input
                   type="radio"
                   name="opcion2"
                   value="true"
                   checked={opciones.sala5}
                   onChange={handleRadioChange}
                 />
                 Sala 5
               </label>
               <label>
                
                 <input
                   type="radio"
                   name="opcion2"
                   value="true"
                   checked={opciones.grado1}
                   onChange={handleRadioChange}
                 />
                  1º Grado
               </label>
               <label>
                
                 <input
                   type="radio"
                   name="opcion2"
                   value="true"
                   checked={opciones.grado2}
                   onChange={handleRadioChange}
                 />
                  2º Grado
               </label>
               <label>
              
                 <input
                   type="radio"
                   name="opcion2"
                   value="true"
                   checked={opciones.grado3}
                   onChange={handleRadioChange}
                 />
                    3º Grado
               </label>
               <label>
               
                 <input
                   type="radio"
                   name="opcion2"
                   value="true"
                   checked={opciones.grado4}
                   onChange={handleRadioChange}
                 />
                   4º Grado
               </label><br/><br/>
               <label>
               
                 <input
                   type="radio"
                   name="opcion2"
                   value="true"
                   checked={opciones.grado5}
                   onChange={handleRadioChange}
                 />
                   5º Grado
               </label>
               <label>
                
                 <input
                   type="radio"
                   name="opcion2"
                   value="true"
                   checked={opciones.grado6}
                   onChange={handleRadioChange}
                 />
                  6º Grado
               </label>
               <label>
                
                 <input
                   type="radio"
                   name="opcion2"
                   value="true"
                   checked={opciones.grado7}
                   onChange={handleRadioChange}
                 />
                  7º Grado
               </label>
               <label>
               
                 <input
                   type="radio"
                   name="opcion2"
                   value="true"
                   checked={opciones.secundaria1}
                   onChange={handleRadioChange}
                 />
                   1ºer Año Secundaria
               </label><br/>
           <button type="submit">Enviar</button>
      </div>
       </form>
     </div>
    </div>
  );
}

export default Encuesta;
