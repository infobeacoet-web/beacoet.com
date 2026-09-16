"use client";

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const philosophyStages = [
    {
      step: '01',
      title: 'Understand',
      desc: 'See where the business stands with objective clarity.'
    },
    {
      step: '02',
      title: 'Decide',
      desc: 'Identify what truly requires attention next.'
    },
    {
      step: '03',
      title: 'Execute',
      desc: 'Turn strategic decisions into coordinated action.'
    },
    {
      step: '04',
      title: 'Grow',
      desc: 'Build compounding momentum on a single foundation.'
    }
  ];

  return (
    <>
      <style jsx>{`
        /* Hero Section */
        .hero {
          padding: 7.5rem 0 6rem;
          background: radial-gradient(circle at 50% 25%, rgba(212, 175, 55, 0.09) 0%, rgba(10, 10, 10, 1) 75%);
          text-align: center;
          position: relative;
        }

        .hero-badge {
          margin-bottom: 28px;
        }

        .hero-title {
          font-size: clamp(2.6rem, 5.5vw, 4.4rem);
          font-weight: 700;
          line-height: 1.12;
          max-width: 920px;
          margin: 0 auto 24px;
          background: linear-gradient(180deg, #FFFFFF 0%, #E8E8E8 65%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }

        .hero-subheading {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          color: var(--color-medium-grey);
          max-width: 740px;
          margin: 0 auto 40px;
          line-height: 1.65;
          font-weight: 400;
        }

        .cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        /* Philosophy Grid */
        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 3.5rem;
        }

        @media (max-width: 992px) {
          .philosophy-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
          }
        }

        .philosophy-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-card-border);
          border-radius: var(--border-radius-lg);
          padding: 32px 26px;
          text-align: left;
          transition: all var(--transition-normal);
          position: relative;
        }

        .philosophy-card:hover {
          border-color: var(--color-card-border-hover);
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
        }

        .philosophy-step {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-gold);
          letter-spacing: 0.08em;
          margin-bottom: 14px;
          display: block;
        }

        .philosophy-card h3 {
          font-size: 1.4rem;
          margin-bottom: 12px;
          color: var(--color-white);
        }

        .philosophy-card p {
          font-size: 0.95rem;
          color: var(--color-medium-grey);
          line-height: 1.6;
          margin: 0;
        }

        /* The Problem Section */
        .problem-container {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .problem-statement {
          font-family: var(--font-family-display);
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          line-height: 1.25;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--color-white);
        }

        .problem-statement span {
          display: block;
        }

        .problem-statement span.highlight {
          color: var(--color-gold);
        }

        .problem-body {
          font-size: 1.2rem;
          color: var(--color-medium-grey);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .problem-resolution {
          font-size: 1.25rem;
          color: var(--color-light-grey);
          font-weight: 500;
          padding: 20px 32px;
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--border-radius-md);
          display: inline-block;
        }

        /* Teaser Box */
        .teaser-wrapper {
          max-width: 860px;
          margin: 0 auto;
          background: radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.12) 0%, rgba(18, 18, 18, 0.9) 70%);
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: var(--border-radius-xl);
          padding: 5rem 2.5rem;
          text-align: center;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .teaser-title {
          font-size: clamp(2rem, 3.6vw, 3rem);
          margin-bottom: 16px;
          color: var(--color-white);
        }

        .teaser-subtext {
          font-size: 1.15rem;
          color: var(--color-medium-grey);
          max-width: 580px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .coming-soon-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 24px;
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid var(--color-gold);
          border-radius: 40px;
          color: var(--color-gold);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .coming-soon-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-gold);
          box-shadow: 0 0 10px var(--color-gold);
          animation: pulse 2.4s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        /* Final CTA */
        .final-teaser {
          padding: 6rem 0;
          text-align: center;
        }

        .final-title {
          font-family: var(--font-family-display);
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          max-width: 640px;
          margin: 0 auto 16px;
          line-height: 1.3;
          text-wrap: balance;
          color: var(--color-white);
        }

        .final-tagline {
          font-size: 1.15rem;
          color: var(--color-medium-grey);
          margin-bottom: 28px;
          font-style: italic;
        }
      `}</style>

      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="badge">Something new is taking shape</span>
          </div>

          <h1 className="hero-title">
            Business, understood differently.
          </h1>

          <p className="hero-subheading">
            An intelligent business operating system being built to help businesses understand, decide, and move forward with greater clarity.
          </p>

          <div className="cta-group">
            <Link href="/why" className="btn btn-primary">
              Why BeaCoet &rarr;
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* 2. The Idea Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">The Idea</span>
            <h2 className="section-title">
              Businesses don't need more tools.<br />They need better context.
            </h2>
            <p className="section-desc">
              BeaCoet is being built around a simple idea: better business decisions begin with better understanding.
            </p>
          </div>

          <div className="philosophy-grid">
            {philosophyStages.map((stage) => (
              <div key={stage.step} className="philosophy-card">
                <span className="philosophy-step">PHASE {stage.step}</span>
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Problem Section */}
      <section className="section">
        <div className="container">
          <div className="problem-container">
            <span className="section-tag" style={{ marginBottom: '24px' }}>The Shift</span>

            <div className="problem-statement">
              <span>Too many tools.</span>
              <span>Too many tabs.</span>
              <span className="highlight">Too much starting over.</span>
            </div>

            <p className="problem-body">
              Business context gets scattered across documents, dashboards, conversations, campaigns and countless disconnected tools.
            </p>

            <div className="problem-resolution">
              BeaCoet is being built to bring that context together.
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Teaser Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="teaser-wrapper">
            <h2 className="teaser-title">Something is taking shape.</h2>
            <p className="teaser-subtext">
              A more connected way to understand your business is coming.
            </p>
            <div className="coming-soon-pill">
              <span className="coming-soon-dot"></span>
              BEACOET &middot; COMING SOON
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="final-teaser">
        <div className="container">
          <h2 className="final-title">
            The next way to work with your business context is being built.
          </h2>
          <p className="final-tagline">Stay curious.</p>
          <Link href="/contact" className="btn btn-secondary">
            Contact BeaCoet &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
