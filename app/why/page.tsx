"use client";

import React from 'react';
import Link from 'next/link';

export default function WhyPage() {
  const loopItems = [
    {
      title: 'Understand',
      desc: 'See where the business stands.'
    },
    {
      title: 'Decide',
      desc: 'Identify what matters next.'
    },
    {
      title: 'Execute',
      desc: 'Turn decisions into practical action.'
    },
    {
      title: 'Grow',
      desc: 'Build toward more consistent, sustainable progress.'
    }
  ];

  const directionStages = [
    { step: '01', name: 'Understand' },
    { step: '02', name: 'Build' },
    { step: '03', name: 'Grow' },
    { step: '04', name: 'Scale' }
  ];

  const pillars = [
    {
      title: 'Context-Aware Intelligence',
      desc: 'AI that understands the organization behind the question, not just a single prompt in isolation.'
    },
    {
      title: 'Strategic Clarity',
      desc: 'Identifying what requires attention first, so teams make decisions with focus rather than guesswork.'
    },
    {
      title: 'Connected Execution',
      desc: 'Bridging high-level strategy and daily implementation inside a single, unified environment.'
    }
  ];

  return (
    <>
      <style jsx>{`
        /* Hero */
        .why-hero {
          padding: 7rem 0 5rem;
          background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
          text-align: center;
        }

        .why-hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 24px;
          line-height: 1.15;
        }

        .why-hero p {
          font-size: clamp(1.15rem, 2.2vw, 1.35rem);
          color: var(--color-medium-grey);
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* Conceptual Loop */
        .loop-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 3rem;
        }

        @media (max-width: 992px) {
          .loop-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .loop-grid {
            grid-template-columns: 1fr;
          }
        }

        .loop-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-card-border);
          border-radius: var(--border-radius-lg);
          padding: 32px 24px;
          text-align: left;
          transition: all var(--transition-normal);
        }

        .loop-card:hover {
          border-color: var(--color-card-border-hover);
          transform: translateY(-3px);
          box-shadow: var(--shadow-card);
        }

        .loop-card h3 {
          font-size: 1.35rem;
          color: var(--color-white);
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }



        .loop-card p {
          font-size: 0.95rem;
          color: var(--color-medium-grey);
          line-height: 1.6;
          margin: 0;
        }

        /* Direction Progression */
        .direction-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .direction-track {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 3.5rem;
          position: relative;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .direction-track {
            flex-direction: column;
            gap: 20px;
          }
        }

        .direction-node {
          flex: 1;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--color-card-border);
          border-radius: var(--border-radius-md);
          padding: 24px 16px;
          text-align: center;
          transition: border-color var(--transition-fast);
        }

        .direction-node:hover {
          border-color: var(--color-card-border-hover);
        }

        .direction-node-num {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-gold);
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .direction-node-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-white);
          font-family: var(--font-family-display);
        }

        .direction-arrow {
          color: var(--color-gold);
          font-size: 1.2rem;
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .direction-arrow {
            transform: rotate(90deg);
          }
        }

        /* Pillars Grid */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 3rem;
        }

        @media (max-width: 992px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }

        .pillar-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-card-border);
          border-radius: var(--border-radius-lg);
          padding: 36px 28px;
          text-align: left;
          transition: all var(--transition-normal);
        }

        .pillar-card:hover {
          border-color: var(--color-card-border-hover);
          transform: translateY(-3px);
          box-shadow: var(--shadow-card);
        }

        .pillar-card h3 {
          font-size: 1.3rem;
          color: var(--color-white);
          margin-bottom: 12px;
        }

        .pillar-card p {
          font-size: 0.95rem;
          color: var(--color-medium-grey);
          line-height: 1.65;
          margin: 0;
        }

        /* Bottom CTA */
        .why-cta {
          padding: 6rem 0;
          text-align: center;
        }

        .why-cta h2 {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          margin-bottom: 16px;
          color: var(--color-white);
        }

        .why-cta p {
          font-size: 1.1rem;
          color: var(--color-medium-grey);
          max-width: 540px;
          margin: 0 auto 32px;
        }
      `}</style>

      {/* Hero */}
      <section className="why-hero">
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <span className="badge">Why BeaCoet</span>
          </div>
          <h1>What is BeaCoet?</h1>
          <p>
            BeaCoet is an AI-powered business operating system designed to help businesses understand their context, make better decisions, and turn those decisions into action.
          </p>
        </div>
      </section>

      {/* Conceptual Loop */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">The Philosophy</span>
            <h2 className="section-title">A Continuous Decision Loop</h2>
            <p className="section-desc">
              Moving from fragmented intuition to grounded, context-aware execution.
            </p>
          </div>

          <div className="loop-grid">
            {loopItems.map((item) => (
              <div key={item.title} className="loop-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direction Progression */}
      <section className="section">
        <div className="container">
          <div className="direction-container">
            <span className="section-tag">The Direction</span>
            <h2 className="section-title">Structured for Growth</h2>
            <p className="section-desc">
              A natural progression from foundational clarity to compound expansion.
            </p>

            <div className="direction-track">
              {directionStages.map((stage, idx) => (
                <React.Fragment key={stage.step}>
                  <div className="direction-node">
                    <div className="direction-node-num">PHASE {stage.step}</div>
                    <div className="direction-node-title">{stage.name}</div>
                  </div>
                  {idx < directionStages.length - 1 && (
                    <div className="direction-arrow">&rarr;</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Broad Core Ideas */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Guiding Principles</span>
            <h2 className="section-title">Designed for Real Business Context</h2>
            <p className="section-desc">
              Broadening the frontier of how artificial intelligence serves leaders.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((p) => (
              <div key={p.title} className="pillar-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="why-cta">
        <div className="container">
          <h2>Curious to learn more as we build?</h2>
          <p>
            Connect with us to stay informed about early access and development milestones.
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Get in touch &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
