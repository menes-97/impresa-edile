'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle, sending, success, error

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
      <div style={{
        backgroundColor: 'white',
        padding: '3rem 2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111', marginBottom: '0.75rem' }}>
          Messaggio inviato!
        </h3>
        <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
          Grazie per averci contattato. Ti risponderemo il prima possibile.
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            backgroundColor: '#dc2626',
            color: 'white',
            fontWeight: 'bold',
            padding: '12px 24px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Invia un altro messaggio
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
      }}
    >
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>
        Scrivici un messaggio
      </h3>

      {/* Honeypot - Spam-Schutz */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <input
        type="text"
        name="nome"
        placeholder="Il tuo nome"
        required
        style={{ padding: '14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '1rem', backgroundColor: '#f9fafb' }}
      />
      <input
        type="email"
        name="email"
        placeholder="La tua email"
        required
        style={{ padding: '14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '1rem', backgroundColor: '#f9fafb' }}
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Il tuo telefono"
        style={{ padding: '14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '1rem', backgroundColor: '#f9fafb' }}
      />
      <textarea
        name="messaggio"
        placeholder="Il tuo messaggio..."
        required
        rows={4}
        style={{ padding: '14px', border: '1px solid #e5e7eb', borderRadius: '10px', fontSize: '1rem', resize: 'vertical', backgroundColor: '#f9fafb' }}
      />

      <input type="hidden" name="_subject" value="Nuovo messaggio dal sito web S&S Impresa Edile" />

      {status === 'error' && (
        <p style={{ color: '#dc2626', fontSize: '0.9rem', textAlign: 'center' }}>
          Errore nell'invio. Riprova o contattaci telefonicamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          backgroundColor: status === 'sending' ? '#999' : '#dc2626',
          color: 'white',
          fontWeight: 'bold',
          padding: '14px 24px',
          borderRadius: '10px',
          border: 'none',
          fontSize: '1.05rem',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          marginTop: '0.5rem',
          transition: 'background-color 0.3s',
        }}
      >
        {status === 'sending' ? 'Invio in corso...' : 'Invia Messaggio'}
      </button>
    </form>
  )
}
