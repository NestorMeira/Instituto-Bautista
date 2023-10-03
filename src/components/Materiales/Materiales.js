import'./Materiales.scss'

const Materiales = () => {
  return (
    <div className='Materiales'>
        <div className='grados'>
            <div className='hijo'>
            <button><a href="assets/1ºgrado.pdf">1º GRADO</a></button>
            <button><a href="assets/2ºgrado.pdf">2º GRADO</a></button>
            <button><a href="assets/3ºgrado.pdf">3º GRADO</a></button>
            <button><a href="assets/4ºgrado.pdf">4º GRADO</a></button>
            </div>
             <div className='hijo2'>
            <button><a href="assets/5ºgrado.pdf">5º GRADO</a></button>
            <button><a href="assets/6ºgrado.pdf">6º GRADO</a></button>
            <button><a href="assets/7ºgrado.pdf">7º GRADO</a></button>
               </div>
        </div>
        </div>
  )
}

export default Materiales
