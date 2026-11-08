import { useState } from 'react';
import { Icon } from './Icon';
import { QUOTE_SUBJECT, QUOTE_BODY } from '../data/content';
import { useBodyScrollLock } from '../hooks/useScrollReveal';
import '../styles/contactModal.css';

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
];

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const data = Object.fromEntries(new FormData(e.target).entries());

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData(data),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true))
      .finally(() => setSubmitting(false));
  };

  const handleClose = () => {
    setSubmitted(false);
    setError(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close">
          <Icon name="close" size={22} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">
              <Icon name="check" size={40} strokeWidth={2.5} />
            </div>
            <h2>Request Sent</h2>
            <p>
              Thank you for reaching out to LoVo Advertising. Our team will review your
              campaign requirements and respond with a detailed quotation within 24 hours.
            </p>
            <button className="btn btn-primary" onClick={handleClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="modal-eyebrow">Request a Quote</span>
              <h2>Let's Build Your Campaign</h2>
              <p>Fill out the form below and we'll send you a detailed quotation tailored to your needs.</p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input id="firstName" name="firstName" type="text" required placeholder="John" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input id="lastName" name="lastName" type="text" required placeholder="Doe" />
                </div>
              </div>

              <div className="form-row form-row-3">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input id="city" name="city" type="text" required placeholder="Chicago" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <select id="state" name="state" required defaultValue="IL">
                    <option value="" disabled>Select</option>
                    {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="zip">ZIP *</label>
                  <input id="zip" name="zip" type="text" required placeholder="78701" maxLength={5} pattern="\d{5}" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name *</label>
                <input id="company" name="company" type="text" required placeholder="Your Company LLC" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required placeholder="john@company.com" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" defaultValue={QUOTE_SUBJECT} />
              </div>

              <div className="form-group">
                <label htmlFor="body">Message</label>
                <textarea id="body" name="message" rows={12} defaultValue={QUOTE_BODY} />
              </div>

              {error && (
                <p style={{ color: 'var(--color-error-500)', fontSize: '14px' }}>
                  Something went wrong sending your request. Please try again or email us directly.
                </p>
              )}

              <button type="submit" className="btn btn-primary btn-lg form-submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Request'}
                <Icon name="arrow" size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
