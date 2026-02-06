import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in-up">
            S&S IMPRESA EDILE
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-2">
            Costruzioni e ristrutturazioni di qualit&agrave; in Treviso e provincia
          </p>
          <a href="#contatti" className="hero-btn animate-fade-in-up delay-4">
            Richiedi un Preventivo
          </a>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" className="servizi-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ color: '#111' }}>
            I Nostri Servizi
          </h2>
          <div className="section-divider" />
          <div className="servizi-grid">
            <div className="servizio-card animate-fade-in-up delay-1">
              <span className="servizio-icon">🏠</span>
              <h3 className="servizio-title">Ristrutturazioni</h3>
              <p className="servizio-desc">
                Ristrutturazione completa di appartamenti e case con materiali di prima qualit&agrave;
              </p>
            </div>

            <div className="servizio-card animate-fade-in-up delay-3">
              <span className="servizio-icon">🏗️</span>
              <h3 className="servizio-title">Costruzioni</h3>
              <p className="servizio-desc">
                Nuove costruzioni residenziali e commerciali chiavi in mano
              </p>
            </div>

            <div className="servizio-card animate-fade-in-up delay-5">
              <span className="servizio-icon">🔧</span>
              <h3 className="servizio-title">Manutenzione</h3>
              <p className="servizio-desc">
                Riparazioni tetti, facciate e impianti con interventi rapidi e professionali
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section
        className="parallax-section"
        style={{ backgroundImage: 'url(/images/parallax.jpg)' }}
      >
        <div className="parallax-overlay" />
        <div className="parallax-content">
          <h2 className="parallax-title">
            Costruiamo il tuo futuro, mattone dopo mattone
          </h2>
          <p className="parallax-text">
            Con anni di esperienza nel settore edile, realizziamo progetti
            di qualit&agrave; con passione e professionalit&agrave;. Dalla ristrutturazione alla
            nuova costruzione, il nostro team &egrave; al tuo fianco in ogni fase del lavoro.
          </p>
          <div className="parallax-line" />
        </div>
      </section>

      {/* Progetti Section */}
      <section id="progetti" className="progetti-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ color: '#fff' }}>
            I Nostri Lavori
          </h2>
          <div className="section-divider" />
          <div className="progetti-grid">
            {[
              { src: '/images/progetto1.jpg', alt: 'Ristrutturazione completa' },
              { src: '/images/progetto2.jpg', alt: 'Nuova costruzione' },
              { src: '/images/progetto3.jpg', alt: 'Lavori edili' },
              { src: '/images/progetto4.jpg', alt: 'Progetto residenziale' },
              { src: '/images/progetto5.jpg', alt: 'Pavimentazione esterna' },
              { src: '/images/progetto6.jpg', alt: 'Barriere stradali' },
              { src: '/images/progetto7.jpg', alt: 'Scavi e canalizzazioni' },
              { src: '/images/progetto8.jpg', alt: 'Cantiere stradale' },
            ].map((progetto, i) => (
              <div key={i} className={`progetto-card animate-scale-in delay-${i + 1}`}>
                <img src={progetto.src} alt={progetto.alt} />
                <div className="progetto-overlay">
                  <span className="progetto-overlay-text">{progetto.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contatti" className="contatti-section">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ color: '#111' }}>
            Contattaci
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#666',
            marginBottom: '1rem',
            fontSize: '1.1rem',
          }}>
            Richiedi un preventivo gratuito o contattaci per qualsiasi informazione
          </p>
          <div className="section-divider" />

          <div className="contatti-grid">
            {/* Info */}
            <div>
              <h3 className="contatti-info-title">S&S Impresa Edile</h3>

              <div className="contatti-item">
                <div className="contatti-item-icon">📞</div>
                <div>
                  <p className="contatti-item-label">Telefono</p>
                  <a href="tel:+393884293583" className="contatti-item-value">
                    +39 388 429 3583
                  </a>
                </div>
              </div>

              <div className="contatti-item">
                <div className="contatti-item-icon">✉️</div>
                <div>
                  <p className="contatti-item-label">Email</p>
                  <a href="mailto:selminshakiroski@icloud.com" className="contatti-item-value" style={{ fontSize: '0.95rem' }}>
                    selminshakiroski@icloud.com
                  </a>
                </div>
              </div>

              <div className="contatti-item">
                <div className="contatti-item-icon">📄</div>
                <div>
                  <p className="contatti-item-label">Partita IVA</p>
                  <p className="contatti-item-value" style={{ cursor: 'default' }}>05470940262</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Parallax Section 2 */}
      <section
        className="parallax-section"
        style={{ backgroundImage: 'url(/images/parallax2.jpg)', padding: '100px 20px', minHeight: '350px' }}
      >
        <div className="parallax-overlay" />
        <div className="parallax-content" style={{ maxWidth: '700px' }}>
          <h2 className="parallax-title" style={{ fontSize: '2.2rem' }}>
            Il tuo progetto, la nostra passione
          </h2>
          <p className="parallax-text">
            Ogni cantiere &egrave; una sfida che affrontiamo con dedizione e competenza.
            Contattaci oggi per trasformare la tua idea in realt&agrave;.
          </p>
          <div className="parallax-line" style={{ marginTop: '2rem' }} />
        </div>
      </section>
    </main>
  )
}
