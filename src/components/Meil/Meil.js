import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import'./Meil.scss'


export default class Form extends Component {
    render() {
        function enviarEmail(e){
            e.preventDefault();

            emailjs.sendForm('service_hpv20dp','template_2a0z2do',e.target,'CfFyu9yt0BvtlknZY').then(res=>{
                console.log(res);
            })
        }
        return (
            <div className='Formulario'>
            <div className='padre'>
              <h2>Encuesta Inscripcion 2024</h2>
              <p>
              La siguiente es una encuesta, en vista de considerar posibles vacantes para <br/> el ciclo lectivo 2024. Debe Completar el formulario por cada hijo que inscribirá.
              </p>
              <h3>Tiene intenciones que su hijo/​a concurra a nuestra <br/>Institución académica el próximo ciclo lectivo 2024:</h3>
              <form onSubmit={enviarEmail}>
              <div className='si-no'> 
                    <label>
                      
                      <input
                        type="radio"
                        name="user_opcion1"
                        value="si quiero inscibir en el 2024"
                       
                      />
                      Si
                    </label>
                    <label>    
                      <input
                        type="radio"
                        name="user_opcion1"
                        value="no quiero inscribir en 2024"
                      />
                       No
                    </label>
                    </div>
             
                <div className='nombre'>
                  <label>Nombre:</label>
                  <input
                    type="text"
                    name="user_name"
                  
                  />
                  <label>Apellido:</label>
                  <input
                    type="text"
                    name="user_name"
                
                  />
                </div>
                
             <div className='grado'>
                  <h4>Sala o grado a inscribir en 2024</h4>
                      <label>
                        <input
                          type="checkbox"
                          name="user_opcion"
                          value="sala de 4"
                      
                        />
                         Sala 4
                      </label>
                     
                      <label>
                        
                        <input
                          type="checkbox"
                          name="user_opcionion"
                          value="sala de 5"
                   
                        />
                        Sala 5
                      </label>
                      <label>
                       
                        <input
                          type="checkbox"
                          name="user_opcion"
                          value="1º grado"
                        />
                         1º Grado
                      </label>
                      <label>
                       
                        <input
                          type="checkbox"
                          name="user_opcion"
                          value="2º grado"
                        
                        />
                         2º Grado
                      </label>
                      <label>
                     
                        <input
                          type="checkbox"
                          name="user_opcion"
                          value="3º grado"
                        />
                           3º Grado
                      </label>
                      <label>
                      
                        <input
                          type="checkbox"
                          name="user_opcion"
                          value="4º grado"
                        />
                          4º Grado
                      </label><br/><br/>
                      <label>
                      
                        <input
                          type="checkbox"
                          name="user_opcion"
                          value="5ºgrado"
                        />
                          5º Grado
                      </label>
                      <label>
                       
                        <input
                          type="checkbox"
                          name="user_opcion"
                          value="6º grado"
                        />
                         6º Grado
                      </label>
                      <label>
                       
                        <input
                          type="checkbox"
                          name="user_opcion"
                          value="7º grado"
                        />
                         7º Grado
                      </label>
                      <label>
                      
                        <input
                          type="checkbox"
                          name="user_opcion"
                          value="1ºer Año Secundaria"
                          
                        />
                          1ºer Año Secundaria
                      </label><br/>
                  <button type="submit">Enviar</button>
             </div>
              </form>
            </div>
           </div>
        )
    }
}