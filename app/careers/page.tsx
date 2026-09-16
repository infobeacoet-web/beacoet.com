"use client";

import React from 'react';

export default function CareersPage() {
  const values = [
    {
      title: 'High Autonomy & Ownership',
      desc: 'We trust small, high-performing teams to solve meaningful problems without micromanagement.'
    },
    {
      title: 'Customer-Centric Rigor',
      desc: 'Every feature and AI prompt is designed around genuine business value for real founders.'
    },
    {
      title: 'Speed & Clarity',
      desc: 'We prefer fast iteration and clear written communication over long meetings and bureaucracy.'
    }
  ];

  return (
    <>
      <style jsx>{`
        .careers-hero {
          padding: 6rem 0 4rem;
          background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
          text-align: center;
        }

        @media (max-width: 576px) {
          .careers-hero {
            padding: 3.5rem 0 2.5rem;
          }
        }

        .careers-hero h1 {
          font-size: clamp(1.8rem, 4.5vw, 3.8rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 18px;
        }

        .careers-hero p {
          font-size: clamp(0.98rem, 2vw, 1.15rem);
          color: var(--color-medium-grey);
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .contact-box {
          background: var(--color-card-bg);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--border-radius-xl);
          padding: 40px;
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          box-shadow: var(--shadow-card);
        }

        @media (max-width: 576px) {
          .contact-box {
            padding: 24px 18px;
          }
        }

        .email-link {
          display: inline-block;
          font-size: clamp(1.1rem, 4.5vw, 1.4rem);
          font-weight: 700;
          color: var(--color-gold);
          margin: 16px 0 24px;
          text-decoration: none;
          font-family: var(--font-family-display);
          transition: color var(--transition-fast);
          overflow-wrap: anywhere;
          word-break: break-word;
          max-width: 100%;
        }

        .email-link:hover {
          color: var(--color-gold-dark);
        }
      `}</style>

      {/* Hero */}
      <section className="careers-hero">
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <span className="badge">Join Our Mission</span>
          </div>
          <h1>Shape the Future of Business Intelligence</h1>
          <p>
            We are building the AI Business Operating System that empowers founders worldwide to understand, build, grow, and scale their companies.
          </p>
        </div>
      </section>

      {/* Culture Values */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Culture</span>
            <h2 className="section-title">How We Work</h2>
          </div>

          <div className="grid-3">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontSize: '0.92rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container">
          <div className="contact-box">
            <h2 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '12px' }}>
              Future Opportunities
            </h2>
            <p style={{ color: 'var(--color-medium-grey)', fontSize: '1rem', lineHeight: '1.6' }}>
              We are continuously looking for talented engineers, product designers, and growth strategists who are passionate about building business AI systems.
            </p>
            <div>
              <a href="mailto:careers@beacoet.com" className="email-link">
                careers@beacoet.com
              </a>
            </div>
            <p style={{ color: 'var(--color-medium-grey)', fontSize: '0.88rem' }}>
              Send your resume, GitHub, portfolio, or brief introduction to apply directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
