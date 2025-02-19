import React, { useState } from 'react';
import { db } from '../../Firebase'
import { collection,  getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import Crud from '../Crud/Crud';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import './Contacto.scss';

const Contacto = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [nombre, setNombre] = useState('');
  const [clave, setClave] = useState('');

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      // Obtener todos los documentos de la colección "user"
      const querySnapshot = await getDocs(collection(db, 'user'));
      
      // Iterar sobre cada documento para verificar si coincide con el nombre y la contraseña
      let authenticated = false;
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.nombre === nombre && userData.clave === clave) {
          // Si encuentra alguna coincidencia, autentica al usuario
          authenticated = true;
        }
      });
  
      if (authenticated) {
        // Si se autentica al usuario, muestra un mensaje de éxito
        setAuthenticated(true);
        setShowPasswordForm(false);
        Swal.fire({
          icon: 'success',
          title: '¡Bienvenido!',
          text: 'Has ingresado correctamente.',
        });
      } else {
        // Si no encuentra ninguna coincidencia, muestra un mensaje de error
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.',
        });
      }
    } catch (error) {
      console.error('Error al verificar la contraseña:', error);
      // Muestra un mensaje de error genérico en caso de fallo
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal. Inténtalo de nuevo más tarde.',
      });
    }
  };
  
  
  const handleInputChange = (e) => {
    if (e.target.name === 'nombre') {
      setNombre(e.target.value);
    } else if (e.target.name === 'clave') {
      setClave(e.target.value);
    }
  };

  const togglePasswordForm = () => {
    setShowPasswordForm(!showPasswordForm);
  };

  return (
    <div className='contacto'>
      {showPasswordForm ? (
        <>
          <h2 className='titulo'>Administración</h2>
          <form className='password-form' onSubmit={handlePasswordSubmit}>
            <input type='text' name='nombre' value={nombre} onChange={handleInputChange} placeholder='Ingrese su nombre ' required />
            <input type='password' name='clave' value={clave} onChange={handleInputChange} placeholder='Ingrese su contraseña' required />
            <button type='submit'>Ingresar</button>
          </form>
        </>
      ) : (
        <>
          {authenticated ? (
            <Crud />
          ) : (
            <>
              <section className='section1'>
                <div className='padre1'>
                  <h1>INSTITUTO BAUTISTA DEL <br/>CENTRO</h1>
                  <p>ELDORADO - MISIONES</p>
                  <div className='padre2'>
                    <Link className='linea' to='/novedades'>
                      <div className='hijo'>            
                        <LibraryAddCheckOutlinedIcon className='icono2'/>
                        <span>Novedades</span>        
                      </div>
                    </Link>
                    <Link className='linea' to='/formularios'>
                      <div className='hijo'>            
                        <InsertDriveFileOutlinedIcon className='icono3'/>
                        <span>Formularios</span>                 
                      </div>
                    </Link>
                    <Link className='linea' to='/materiales'>
                      <div className='hijo'>            
                        <BackpackOutlinedIcon className='icono4'/>
                        <span>Lista de materiales<br/>2025</span>                 
                      </div>
                    </Link>
                  </div>
                </div>
              </section>

              <section className='section2'>
                <h2 className='cont'>
                  Contacto
                </h2>
                <div className='padre3'>
                  <div className='tel-email'>
                    <div className='tel'>
                      <h6>Teléfono</h6>
                      <p><b>Nivel Primario:</b> 03751-424930<br/>
                      <b>Nivel Inicial:</b> 03751-426784</p>
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
                    <iframe title="mapa"  src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCNveGQ9bfpKFwWzQLLftrR9hNiHwdqQG8&q=Calle La Rioja 1402, eldorado, misiones' allowFullScreen ></iframe>
                  </div>
                </div>
              </section>

              <button className='login' onClick={togglePasswordForm}>
                <AccountBoxIcon className='login-icon'/>
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Contacto;
