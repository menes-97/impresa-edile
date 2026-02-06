export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1f2937', color: 'white' }}>
      {/* Top Section */}
      <div className="footer-content">
        {/* Logo */}
        <div>
          <img
            src="/images/logo.png"
            alt="S&S Logo"
            style={{ height: '60px', width: 'auto' }}
          />
          <p style={{ color: '#9ca3af', marginTop: '0.75rem', fontSize: '0.9rem' }}>
            Costruzioni e ristrutturazioni<br />di qualità
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ marginBottom: '1rem', fontSize: '1rem', letterSpacing: '1px' }}>LINK RAPIDI</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#servizi" className="footer-link">Servizi</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#progetti" className="footer-link">Lavori</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#contatti" className="footer-link">Contatti</a>
            </li>
          </ul>
        </div>

        {/* Dati di contatto */}
        <div>
          <h4 style={{ marginBottom: '1rem', fontSize: '1rem', letterSpacing: '1px' }}>CONTATTI</h4>
          <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>📞 +39 388 429 3583</p>
          <p style={{ color: '#9ca3af', marginBottom: '0.5rem', fontSize: '0.85rem' }}>✉️ selminshakiroski@icloud.com</p>
          <p style={{ color: '#9ca3af' }}>📄 P.IVA: 05470940262</p>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div style={{
        borderTop: '1px solid #374151',
        padding: '1.5rem 3rem',
        textAlign: 'center',
        color: '#9ca3af',
        fontSize: '0.85rem',
      }}>
        <p>&copy; 2026 S&S Impresa Edile. Tutti i diritti riservati.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
          Sito web realizzato da{' '}
          <a
            href="https://menesnasufoski.dev/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#dc2626', textDecoration: 'none' }}
          >
            Menes Nasufoski
          </a>
        </p>
      </div>
    </footer>
  )
}
