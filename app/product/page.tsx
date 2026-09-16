"use client";

import React from 'react';

export default function ProductPage() {
  const steps = [
    {
      number: '01',
      title: 'Create Organization',
      summary: 'Set up your dedicated business profile in minutes.',
      details: 'Input your domain, operational sector, target demographics, and primary value propositions. BeaCoet instantly structures an organizational context for intelligent analysis.'
    },
    {
      number: '02',
      title: 'Business Analysis',
      summary: 'Autonomous audit across digital and strategic touchpoints.',
      details: 'BeaCoet evaluates your website structure, content positioning, market visibility, and brand messaging to pinpoint existing strengths and strategic friction.'
    },
    {
      number: '03',
      title: 'Business Health Score',
      summary: 'Get a clear, quantitative snapshot of operational readiness.',
      details: 'Receive an overall health rating broken down into core pillars: branding, search engine presence, content quality, user conversion experience, and strategic alignment.'
    },
    {
      number: '04',
      title: 'Discover Opportunities',
      summary: 'Uncover prioritized growth levers ordered by impact.',
      details: 'Rather than overwhelming you with endless tasks, BeaCoet highlights high-ROI initiatives to tackle first for maximum business progress.'
    },
    {
      number: '05',
      title: 'Generate Strategies',
      summary: 'Receive actionable, step-by-step strategic roadmaps.',
      details: 'Convert opportunity insights into clear execution strategies complete with brand copy, marketing tactics, website improvements, and positioning assets.'
    },
    {
      number: '06',
      title: 'Build Better Business',
      summary: 'Execute with confidence and track progress continuously.',
      details: 'Deploy AI-generated assets into your workflows while your workspace retains complete context for all future strategic initiatives.'
    }
  ];

  return (
    <>
      <style jsx>{`
        .product-hero {
          padding: 5.5rem 0 4rem;
          background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
          text-align: center;
        }

        @media (max-width: 576px) {
          .product-hero {
            padding: 3.5rem 0 2.5rem;
          }

          .product-hero :global(.btn) {
            width: 100%;
          }
        }

        .product-hero h1 {
          font-size: clamp(1.8rem, 4.5vw, 3.8rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 20px;
          line-height: 1.15;
        }

        .product-hero p {
          font-size: clamp(0.98rem, 2vw, 1.15rem);
          color: var(--color-medium-grey);
          max-width: 720px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .steps-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (max-width: 576px) {
          .steps-stack {
            gap: 16px;
          }
        }

        .step-row {
          background: var(--color-card-bg);
          border: 1px solid var(--color-card-border);
          border-radius: var(--border-radius-lg);
          padding: 32px;
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          align-items: start;
          transition: border-color var(--transition-fast);
        }

        .step-row:hover {
          border-color: var(--color-card-border-hover);
        }

        @media (max-width: 640px) {
          .step-row {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 22px 18px;
          }
        }

        .step-num {
          font-size: 1.8rem;
          font-family: var(--font-family-display);
          font-weight: 700;
          color: var(--color-gold);
        }

        .step-content h3 {
          font-size: 1.35rem;
          color: var(--color-white);
          margin-bottom: 6px;
        }

        .step-summary {
          font-size: 0.98rem;
          color: var(--color-gold);
          font-weight: 500;
          margin-bottom: 10px;
        }

        .step-details {
          font-size: 0.94rem;
          color: var(--color-medium-grey);
          line-height: 1.6;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 992px) {
          .grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .grid-3 {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .cta-box {
          text-align: center;
          padding: 5rem 0;
          background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, rgba(10, 10, 10, 1) 70%);
        }

        @media (max-width: 576px) {
          .cta-box {
            padding: 3.5rem 0;
          }

          .cta-box :global(.btn) {
            width: 100%;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="product-hero">
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <span className="badge">Product Architecture</span>
          </div>
          <h1>BeaCoet Business Operating System</h1>
          <p>
            An end-to-end intelligent platform engineered to analyze business health, uncover non-obvious growth opportunities, and generate tailored strategies.
          </p>
          <a
            href="https://beacoet.business"
            className="btn btn-primary"
          >
            Start Free
          </a>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">End-to-End Execution Workflow</h2>
            <p className="section-desc">
              Understand what needs improvement before taking strategic action.
            </p>
          </div>

          <div className="steps-stack">
            {steps.map((s) => (
              <div key={s.number} className="step-row">
                <div className="step-num">{s.number}</div>
                <div className="step-content">
                  <h3>{s.title}</h3>
                  <div className="step-summary">{s.summary}</div>
                  <p className="step-details">{s.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Operating Capabilities</h2>
            <p className="section-desc">
              Designed around clarity, continuity, and tangible visual outputs.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h4>Persistent Organization Workspace</h4>
              <p style={{ marginTop: '8px' }}>
                Every generated strategy, report, campaign draft, and brand document is automatically saved. Search anytime without losing history.
              </p>
            </div>
            <div className="card">
              <h4>Context-Aware AI Intelligence</h4>
              <p style={{ marginTop: '8px' }}>
                Uses your uploaded brand guidelines, website structure, and past campaign performance to produce highly customized outputs.
              </p>
            </div>
            <div className="card">
              <h4>Visual Opportunity Generation</h4>
              <p style={{ marginTop: '8px' }}>
                Translates abstract recommendations into concrete visual concepts including website redesign ideas, landing pages, and brand collateral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-box">
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Ready to Upgrade Your Business Operations?
          </h2>
          <p style={{ color: 'var(--color-medium-grey)', marginBottom: '28px' }}>
            Access the full BeaCoet Business AI platform today.
          </p>
          <a
            href="https://beacoet.business"
            className="btn btn-primary"
          >
            Start Free
          </a>
        </div>
      </section>
    </>
  );
}
