"use client";

import React from 'react';

export default function ContactPage() {
  return (
    <>
      <style jsx>{`
        .contact-hero {
          padding: 8rem 0 5rem;
          background: radial-gradient(circle at 50% 25%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 75%);
          text-align: center;
        }

        .contact-badge {
          margin-bottom: 24px;
        }

        .contact-hero h1 {
          font-size: clamp(2.6rem, 5.5vw, 4.2rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 24px;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .contact-hero p {
          font-size: clamp(1.15rem, 2.2vw, 1.35rem);
          color: var(--color-medium-grey);
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .contact-section {
          padding: 3rem 0 8rem;
        }

        .connect-container {
          max-width: 720px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        @media (max-width: 640px) {
          .connect-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .connect-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-card-border);
          border-radius: var(--border-radius-xl);
          padding: 36px 32px;
          text-align: left;
          transition: all var(--transition-normal);
        }

        .connect-card:hover {
          border-color: var(--color-card-border-hover);
          transform: translateY(-3px);
          box-shadow: var(--shadow-card);
        }

        .connect-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-gold);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .connect-value {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-white);
          text-decoration: none;
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .connect-value:hover {
          color: var(--color-gold);
        }

        .connect-note {
          font-size: 0.9rem;
          color: var(--color-medium-grey);
          margin-top: 10px;
          line-height: 1.5;
        }
      `}</style>

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-badge">
            <span className="badge">Contact</span>
          </div>

          <h1>Let's talk.</h1>

          <p>
            Have a question, an idea, or simply want to know what we're building? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="contact-section">
        <div className="container">
          <div className="connect-container">
            <div className="connect-card">
              <span className="connect-label">Direct Inquiries</span>
              <a href="mailto:contact@beacoet.com" className="connect-value">
                contact@beacoet.com
              </a>
              <p className="connect-note">
                For partnerships, questions, or conversation.
              </p>
            </div>

            <div className="connect-card">
              <span className="connect-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/company/beacoetforbusiness/"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-value"
              >
                BeaCoet &rarr;
              </a>
              <p className="connect-note">
                Follow updates, ideas, and developments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
