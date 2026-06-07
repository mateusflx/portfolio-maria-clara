'use client';

import { useEffect, useState } from 'react';

const PHONE = '558393089267';

function buildUrl(name: string) {
  const trimmed = name.trim();
  const greeting = trimmed
    ? `Olá, Maria Clara! Meu nome é ${trimmed}.`
    : 'Olá, Maria Clara!';
  const message = `${greeting}\n\nVim através do seu portfólio e tenho interesse em conhecer seu trabalho. Podemos conversar?`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.04 4C9.43 4 4.06 9.37 4.06 15.98c0 2.11.55 4.17 1.6 5.99L4 28l6.2-1.63a11.9 11.9 0 0 0 5.84 1.49h.01c6.6 0 11.98-5.37 11.98-11.98C28.03 9.37 22.65 4 16.04 4Zm0 21.84h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.68.97.98-3.59-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.46 4.45-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.9-9.92 9.9Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function WhatsAppModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  // Intercept every WhatsApp link on the page (event delegation).
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('.whatsapp-link');
      if (link) {
        event.preventDefault();
        setName('');
        setError(false);
        setOpen(true);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Lock scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (!open) return null;

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!name.trim()) {
      setError(true);
      return;
    }
    window.open(buildUrl(name), '_blank', 'noopener,noreferrer');
    setOpen(false);
  }

  return (
    <div
      className="wa-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div className="wa-popup" role="dialog" aria-modal="true" aria-label="Falar no WhatsApp">
        <button type="button" className="wa-close" aria-label="Fechar" onClick={() => setOpen(false)}>
          &times;
        </button>
        <div className="wa-badge">
          <WhatsAppGlyph />
        </div>
        <h2 className="wa-title">Vamos conversar! 💬</h2>
        <p className="wa-text">Antes de abrir o WhatsApp, como podemos te chamar?</p>
        <form className="wa-form" onSubmit={submit}>
          <label className="wa-label" htmlFor="wa-name">
            Seu nome
          </label>
          <input
            id="wa-name"
            className={`wa-input ${error ? 'wa-input-error' : ''}`}
            type="text"
            value={name}
            autoComplete="name"
            placeholder="Digite seu nome"
            autoFocus
            onChange={(event) => {
              setName(event.target.value);
              setError(false);
            }}
          />
          <div className="wa-actions">
            <button type="button" className="wa-btn wa-btn-ghost" onClick={() => setOpen(false)}>
              Cancelar
            </button>
            <button type="submit" className="wa-btn wa-btn-primary">
              Continuar no WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
