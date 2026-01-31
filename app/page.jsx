import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            S&S IMPRESA EDILE
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px' }}>
            Costruzioni e ristrutturazioni di qualità in Treviso e provincia
          </p>
          <a
            href="#contatti"
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              fontWeight: 'bold',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
            }}
          >
            Richiedi un Preventivo
          </a>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111' }}>
            I Nostri Servizi
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Servizio 1 */}
            <div style={{ backgroundColor: '#f3f4f6', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#111' }}>Ristrutturazioni</h3>
              <p style={{ color: '#666' }}>
                Ristrutturazione completa di appartamenti e case
              </p>
            </div>

            {/* Servizio 2 */}
            <div style={{ backgroundColor: '#f3f4f6', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏗️</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#111' }}>Costruzioni</h3>
              <p style={{ color: '#666' }}>
                Nuove costruzioni residenziali e commerciali
              </p>
            </div>

            {/* Servizio 3 */}
            <div style={{ backgroundColor: '#f3f4f6', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔧</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#111' }}>Manutenzione</h3>
              <p style={{ color: '#666' }}>
                Riparazioni tetti, facciate e impianti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section style={{
        backgroundImage: 'url(/images/parallax.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '120px 20px',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.3',
          }}>
            Costruiamo il tuo futuro, mattone dopo mattone
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#d1d5db',
            marginBottom: '2rem',
          }}>
            Con anni di esperienza nel settore edile, realizziamo progetti
            di qualità con passione e professionalità. Dalla ristrutturazione alla
            nuova costruzione, il nostro team è al tuo fianco in ogni fase del lavoro.
          </p>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#dc2626',
            margin: '0 auto',
            borderRadius: '2px',
          }} />
        </div>
      </section>

      {/* Progetti Section */}
      <section id="progetti" style={{ padding: '80px 20px', backgroundColor: '#1f2937' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
            I Nostri Lavori
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div style={{ height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/progetto1.jpg"
                alt="Progetto 1"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/progetto2.jpg"
                alt="Progetto 2"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/progetto3.jpg"
                alt="Progetto 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/progetto4.jpg"
                alt="Progetto 4"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/progetto5.jpg"
                alt="Pavimentazione esterna"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/progetto6.jpg"
                alt="Barriere stradali"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/progetto7.jpg"
                alt="Scavi e canalizzazioni"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/images/progetto8.jpg"
                alt="Cantiere stradale"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contatti Section */}
      <section id="contatti" style={{ padding: '80px 20px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '0.75rem',
            color: '#111',
          }}>
            Contattaci
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#666',
            marginBottom: '3rem',
            fontSize: '1.1rem',
          }}>
            Richiedi un preventivo gratuito o contattaci per qualsiasi informazione
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
          }}>
            {/* Info */}
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                color: '#111',
              }}>
                S&S Impresa Edile
              </h3>

              {/* Telefon 1 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.25rem',
                padding: '1rem',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  backgroundColor: '#fef2f2',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  fontSize: '1.5rem',
                }}>📞</div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '2px' }}>Telefono 1</p>
                  <a href="tel:+393884293583" style={{ color: '#111', textDecoration: 'none', fontWeight: '600', fontSize: '1.05rem' }}>
                    +39 388 429 3583
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.25rem',
                padding: '1rem',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  backgroundColor: '#fef2f2',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  fontSize: '1.5rem',
                }}>✉️</div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '2px' }}>Email</p>
                  <a href="mailto:selminshakiroski@icloud.com" style={{ color: '#111', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>
                    selminshakiroski@icloud.com
                  </a>
                </div>
              </div>

              {/* P.IVA */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  backgroundColor: '#fef2f2',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  fontSize: '1.5rem',
                }}>📄</div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '2px' }}>Partita IVA</p>
                  <p style={{ color: '#111', fontWeight: '600', fontSize: '1.05rem' }}>05470940262</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Parallax Section 2 */}
      <section style={{
        backgroundImage: 'url(/images/parallax2.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '100px 20px',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
        }} />

        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          color: 'white',
          maxWidth: '700px',
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 'bold',
            marginBottom: '1.25rem',
            lineHeight: '1.3',
          }}>
            Il tuo progetto, la nostra passione
          </h2>
          <p style={{
            fontSize: '1.15rem',
            lineHeight: '1.8',
            color: '#d1d5db',
          }}>
            Ogni cantiere è una sfida che affrontiamo con dedizione e competenza.
            Contattaci oggi per trasformare la tua idea in realtà.
          </p>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#dc2626',
            margin: '2rem auto 0',
            borderRadius: '2px',
          }} />
        </div>
      </section>

    </main>
  )
}
