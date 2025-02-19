import React, { useState, useEffect } from 'react';
import { db, storage } from '../../Firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Swal from 'sweetalert2';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import '../Aulas.scss';

const Primerano= () => {
  const [numero, setNumero] = useState('');
  const [titulo, setTitulo] = useState('');
  const [tituloPdf, setTituloPdf] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [categoria, setCategoria] = useState('Primer año');
  const [novedades, setNovedades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(query(collection(db, 'novedades'), where("categoria", "==", "Primer año")));
    const sortedNovedades = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })).sort((a, b) => a.numero - b.numero);
    setNovedades(sortedNovedades);
  };

  const handleImageUpload = async e => {
    const file = e.target.files[0];
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);
    setImagen(imageUrl);
  };

  const handleFileUpload = async e => {
    const file = e.target.files[0];
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    const pdfUrl = await getDownloadURL(storageRef);
    setPdf(pdfUrl);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addDoc(collection(db, 'novedades'), {
      titulo,
      descripcion,
      numero,
      imagen,
      categoria,
      pdf,
      tituloPdf,
    });
    setTitulo('');
    setTituloPdf('');
    setDescripcion('');
    setNumero('');
    setImagen(null);
    setCategoria('Primer año');
    setPdf(null);

    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'La novedad se ha guardado correctamente.',
    });
    fetchData();
  };

  const handleDelete = async id => {
    await deleteDoc(doc(db, 'novedades', id));
    setNovedades(novedades.filter(novedad => novedad.id !== id));
    Swal.fire('eliminado correctamente');
  };

  const handleEdit = async (id, field, value) => {
    await updateDoc(doc(db, 'novedades', id), {
      [field]: value,
    });
    fetchData();
  };

  const handleEditMode = (id, field) => {
    const newValue = prompt(`Ingrese el nuevo valor para ${field}`);
    if (newValue !== null) {
      handleEdit(id, field, newValue);
    }
  };

  return (
    <div className='Sala4'>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"><img src="assets/logo.png" alt="logo" /></div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <span>Crear novedad</span>
        <select value={categoria} onChange={e => setCategoria(e.target.value)} disabled>
          <option value="Primer año">1er Año</option>
        </select>
        <input
          type="number"
          placeholder=" Número"
          value={numero}
          onChange={e => setNumero(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Título opcional"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Descripción opcional"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
        <label>Imagen:</label>
        <input type="file" onChange={handleImageUpload} />
        {imagen && <img src={imagen} alt='Preview' style={{ maxWidth: '200px',maxHeight: '200px', marginBottom: '10px' }} />}
        <label>PDF:</label>
        <input
          type="text"
          placeholder="Título pdf opcional"
          value={tituloPdf}
          onChange={e => setTituloPdf(e.target.value)}
        />
        <input type="file" accept="application/pdf" onChange={handleFileUpload} />
        {pdf && <a href={pdf} target="_blank" rel="noopener noreferrer">Ver PDF</a>}
        <button type="submit">Guardar</button>
      </form>

      <h2>Novedades</h2>
      {novedades.map(novedad => (
        <div className='vista' key={novedad.id}>
          <h4>
            <span>Posición   {novedad.numero}</span>
          </h4>
          <button className='editar' onClick={() => handleEditMode(novedad.id, 'numero')}><BorderColorIcon className='edit-icon'/></button>
          <img src={novedad.imagen} alt="imagen" />
          <h3>
            <span>{novedad.titulo}</span>
          </h3>
          <button className='editar' onClick={() => handleEditMode(novedad.id, 'titulo')}><BorderColorIcon className='edit-icon'/></button>
          <p>
            <span>{novedad.descripcion}</span>
          </p>
          <button className='editar' onClick={() => handleEditMode(novedad.id, 'descripcion')}><BorderColorIcon className='edit-icon'/></button>
        
          { novedad.pdf && <a href={novedad.pdf} target="_blank" rel="noopener noreferrer">{novedad.tituloPdf}-PDF</a> }
          
          <button onClick={() => handleDelete(novedad.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Primerano;
