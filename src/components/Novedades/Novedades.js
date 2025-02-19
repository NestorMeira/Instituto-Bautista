import { Link,useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase';
import { collection, getDocs } from 'firebase/firestore';
import'./Novedades.scss'


const Novedades = () => {

  const [novedades, setNovedades] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate(); 
 
  const [selectedCategory, setSelectedCategory] = useState('/');

  
  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    navigate(newCategory);
  };




  useEffect(() => {
    // Simular un retraso de 3 segundos antes de cambiar el estado de carga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Limpiar el temporizador en caso de que el componente se desmonte antes de que termine el retraso
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getDocs(collection(db, 'novedades'));
      const sortedNovedades = data.docs
        .map(doc => ({ ...doc.data(), id: doc.id }))
        .filter(novedad => novedad.categoria === 'General') // Filtrar por la categoría "General"
        .sort((a, b) => a.numero - b.numero); // Ordenar de menor a mayor según el número
      setNovedades(sortedNovedades);
    } catch (error) {
      console.error('Error fetching novedades:', error);
    }
  };

  return (
    <div className='novedades'>
      {loading && ( // Mostrar el spinner mientras se carga el componente
        <div className="spinner-overlay">
          <div className="spinner"><img src="assets/logo.png" alt="logo" /></div>
        </div>
      )}
      <div className='grados'>
      <select className='linea' value={selectedCategory} onChange={handleCategoryChange}>
          <option >Nivel inicial</option>
          <option value="/sala4">Sala de 4</option>
          <option value="/sala5">Sala de 5</option>
        </select>
        <select className='linea' value={selectedCategory} onChange={handleCategoryChange}>
          <option >Nivel primario</option>
          <option value="/primero">1º</option>
          <option value="/segundo">2º</option>
          <option value="/tercero">3º</option>
          <option value="/cuarto">4º</option>
          <option value="/quinto">5º</option>
          <option value="/sexto">6º</option>
          <option value="/septimo">7º</option>
        </select>
        <select className='linea' value={selectedCategory} onChange={handleCategoryChange}>
          <option >Nivel secundario</option>
          <option value="/1er">1er Año</option>
        </select>
      </div>

      {novedades.map(novedad => (
        <div className='descripcion' key={novedad.id}>
          <span>{novedad.numero}</span>
          <img src={novedad.imagen}  />
          <h2>{novedad.titulo}</h2>
          <p>{novedad.descripcion}</p>
          { novedad.pdf && <a href={novedad.pdf} target="_blank" rel="noopener noreferrer">{novedad.tituloPdf}-PDF</a> }
        <br />
        {novedad.link && <a href={novedad.link} target="_blank" rel="noopener noreferrer"> - LINK </a>}
        <br />
        </div>
      ))}

      <div className='uniformes'>
      
        {/* <div className='libros'>
          <h1 className='titulo-libro'>LIBROS</h1>
          <div className='btn-libros'>
            <Link to='/librosaula'><button>Libros de aula 2024</button></Link>
            <Link to='/librosingles'><button>Libros de inglés 2024</button></Link> 
          </div>
        </div> */}
        <p>UNIFORMES</p>
        <div className='btn-uniformes'>
          <a href='assets/uniforme-nivel-inicial.pdf' target='_blank'>Nivel inicial</a>
          <a href='assets/uniforme-nivel-primario.pdf' target='_blank'>Nivel primario</a>
          <a href='assets/uniforme-nivel-secundario.pdf' target='_blank'>Nivel secundario</a>
        </div>
      </div>
    </div>
  )
}

export default Novedades;
