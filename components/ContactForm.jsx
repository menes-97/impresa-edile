'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xnjvreko', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginBottom: '0.75rem' }}>
          Messaggio inviato!
        </h3>
        <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
          Grazie per averci contattato. Ti risponderemo il prima possibile.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="contact-submit"
        >
          Invia un altro messaggio
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Scrivici un messaggio</h3>

      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <input
        type="text"
        name="nome"
        placeholder="Il tuo nome"
        required
        className="contact-input"
      />
      <input
        type="email"
        name="email"
        placeholder="La tua email"
        required
        className="contact-input"
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Il tuo telefono"
        className="contact-input"
      />
      <textarea
        name="messaggio"
        placeholder="Il tuo messaggio..."
        required
        rows={4}
        className="contact-input"
        style={{ resize: 'vertical' }}
      />

      <input type="hidden" name="_subject" value="Nuovo messaggio dal sito web S&S Impresa Edile" />

      {status === 'error' && (
        <p style={{ color: '#dc2626', fontSize: '0.9rem', textAlign: 'center' }}>
          Errore nell&apos;invio. Riprova o contattaci telefonicamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="contact-submit"
      >
        {status === 'sending' ? 'Invio in corso...' : 'Invia Messaggio'}
      </button>
    </form>
  )
}
