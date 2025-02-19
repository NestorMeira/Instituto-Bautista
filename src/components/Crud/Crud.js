import React, { useState, useEffect } from 'react';
import { db, storage } from '../../Firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Swal from 'sweetalert2';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './Crud.scss';

const Crud = () => {
  const [numero, setNumero] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tituloPdf, setTituloPdf] = useState('');
  const [imagen, setImagen] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [categoria, setCategoria] = useState('General');
  const [link, setLink] = useState('');
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
    const data = await getDocs(collection(db, 'novedades'));
    const sortedNovedades = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
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
      link,
    });
    setTitulo('');
    setTituloPdf('');
    setDescripcion('');
    setNumero('');
    setImagen(null);
    setCategoria('General');
    setPdf(null);
    setLink('');

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

  const groupedNovedades = novedades.reduce((acc, novedad) => {
    acc[novedad.categoria] = acc[novedad.categoria] || [];
    acc[novedad.categoria].push(novedad);
    return acc;
  }, {});

  return (
    <div className='crud'>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"><img src="assets/logo.png" alt="logo" /></div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <span>Crear novedad</span>
        <select value={categoria} onChange={e => setCategoria(e.target.value)}>
          <option value="General">General</option>
          <option value="Sala 4">Sala 4</option>
          <option value="Sala 5">Sala 5</option>
          <option value="Primero">Primero</option>
          <option value="Segundo">Segundo</option>
          <option value="Tercero">Tercero</option>
          <option value="Cuarto">Cuarto</option>
          <option value="Quinto">Quinto</option>
          <option value="Sexto">Sexto</option>
          <option value="Séptimo">Séptimo</option>
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
          placeholder="Título"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
        <label>Imagen:</label>
        <input type="file" onChange={handleImageUpload} />
        {imagen && <img src={imagen} alt='Preview' style={{ maxWidth: '200px', maxHeight: '200px', marginBottom: '10px' }} />}
        <label>PDF:</label>
        <input
          type="text"
          placeholder="Título pdf opcional"
          value={tituloPdf}
          onChange={e => setTituloPdf(e.target.value)}
        />
        <input type="file" accept="application/pdf" onChange={handleFileUpload} />
        {pdf && <a href={pdf} target="_blank" rel="noopener noreferrer">Ver PDF</a>}
        
        <input
          type="text"
          placeholder="Link opcional"
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        
        <button type="submit">Guardar</button>
      </form>

      <h2>Novedades</h2>
      {/* Nuevo select para filtrar por categoría */}
      <select onChange={e => setCategoria(e.target.value)}>
        <option value="General">General</option>
        <option value="Sala 4">Sala 4</option>
        <option value="Sala 5">Sala 5</option>
        <option value="Primero">Primero</option>
        <option value="Segundo">Segundo</option>
        <option value="Tercero">Tercero</option>
        <option value="Cuarto">Cuarto</option>
        <option value="Quinto">Quinto</option>
        <option value="Sexto">Sexto</option>
        <option value="Séptimo">Séptimo</option>
        <option value="Primer año">1er Año</option>
      </select>
      {Object.keys(groupedNovedades).map(cat => (
        <div key={cat}>
   
          {/* Renderiza solo las novedades de la categoría seleccionada */}
          {categoria === cat && groupedNovedades[cat].map(novedad => (
            <div className='vista' key={novedad.id}>
              <h3>{cat}</h3>
              <h4>
                <span>Posición {novedad.numero}</span>
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
              
              {novedad.pdf && <a href={novedad.pdf} target="_blank" rel="noopener noreferrer">{novedad.tituloPdf}-PDF</a>}
              {novedad.link && <a href={novedad.link} target="_blank" rel="noopener noreferrer">Ver más</a>}
              
              <button onClick={() => handleDelete(novedad.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Crud;
