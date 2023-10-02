import'./Footer.scss'


function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="assets/logo.png" alt="Logo"  />
        <span className="logo-text">INSTITUTO BAUTISTA DEL CENTRO</span>
      </div>
      {/* <div className="creator">
        Creado por{' '}
        <a
          href="enlace_a_tu_portfolio"
          className="portfolio-link"
          target="_blank"
          rel="noopener noreferrer"
        >
            Nestor Meira
        </a>
      </div> */}
    </footer>
  );
}

export default Footer;
