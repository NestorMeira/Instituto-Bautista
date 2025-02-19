import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Septimo from './Septimo';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Swal from 'sweetalert2';
import '../Aulas.scss';

const Septimovista = () => {


  const [loading, setLoading] = useState(true);
  const [novedades, setNovedades] = useState([])

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
      let authorized = false; 
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.nombre === nombre && userData.clave === clave) {
          // Si encuentra alguna coincidencia, autentica al usuario
          authenticated = true;
          if (userData.categoria === "septimo") {
            // Si la categoría es correcta, autoriza al usuario
            authorized = true;
          }
        }
      });
  
      if (authenticated &&  authorized) {
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



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(query(collection(db, 'novedades'), where("categoria", "==", "Séptimo")));
    const sortedNovedades = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })).sort((a, b) => a.numero - b.numero);
    setNovedades(sortedNovedades);
  };

  

  return (
    <div className='sala4vista'>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"><img src="assets/logo.png" alt="logo" /></div>
        </div>
      )}

    
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
            <Septimo/>
          ) : (
            <>
              <button className='login' onClick={togglePasswordForm}>
                <AccountBoxIcon className='login-icon'/>
              </button>

              <br /><br /> <br /> <br />
      {novedades.map(novedad => (
        <div className='vista2' key={novedad.id}>
        
        {novedad.imagen && <img src={novedad.imagen} alt="imagen" />}
          <h3>
            <span>{novedad.titulo}</span>
          </h3>
              <p>
            <span>{novedad.descripcion}</span>
          </p>
                 
          { novedad.pdf && <a href={novedad.pdf} target="_blank" rel="noopener noreferrer">{novedad.tituloPdf}-PDF</a> }
          
           </div>
      ))}


            </>
          )}
        </>
      )}


    </div>
  );
};

export default Septimovista;
