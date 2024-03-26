import'./Footer.scss'


function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="assets/logo.png" alt="Logo"  />
        <span className="logo-text">INSTITUTO BAUTISTA DEL CENTRO</span>
      </div>
      <div className="creator">
        Creado por{' '}
        <a
          href="https://xn--diseosaman-w9a.online/"
          className="portfolio-link"
          target="_blank"
          rel="noopener noreferrer"
        >
            Nestor Meira
        </a>
      </div>
    </footer>
  );
}

export default Footer;
