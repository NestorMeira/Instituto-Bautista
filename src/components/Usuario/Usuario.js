import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2'; 
import './Usuario.scss';

const Usuario = () => {
  const [nombre, setNombre] = useState('');
  const [clave, setClave] = useState('');
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getDocs(collection(db, 'user'));
    const sorteduser = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setuser(sorteduser);
  };



  const handleSubmit = async e => {
    e.preventDefault();
    await addDoc(collection(db, 'user'), {
      clave,
      nombre,
     
    });
    setClave('');
    setNombre('');
   

    // Mostrar mensaje de éxito con SweetAlert2
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'La usuario se ha guardado correctamente.',
    });
    fetchData();
  };

  const handleDelete = async id => {
    await deleteDoc(doc(db, 'user', id));
    setuser(user.filter(usuario => usuario.id !== id));
    Swal.fire('eliminado correctamente')
  };

  return (
    <div className='Usuario'>
      <h2>Crear usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
          <input
          type="password"
          placeholder="contraseña"
          value={clave}
          onChange={e => setClave(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>

      <h2>usuarios</h2>
      {user.map(usuario => (

         <div className='vista' key={usuario.id}>
           <h4>{usuario.nombre}</h4>
           <h3>{usuario.clave}</h3>

           <button onClick={() => handleDelete(usuario.id)}>Eliminar</button>
         </div>
 
      ))}
    </div>
  );
};

export default Usuario;
