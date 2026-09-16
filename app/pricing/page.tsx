"use client";

import React from 'react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Discover',
      price: 'Free',
      credits: '1,000 Credits',
      period: 'Monthly',
      desc: 'Ideal for early founders exploring business health scoring and opportunity discovery.',
      highlight: false,
      features: [
        '1,000 AI Credits',
        'Business Health Score',
        'Basic Opportunity Audit',
        'Organization Workspace',
        'Community Support'
      ],
      ctaText: 'Start Free'
    },
    {
      name: 'Build',
      price: '$9',
      credits: '10,000 Credits',
      period: 'per month',
      desc: 'Designed for growing businesses ready to formulate strategy and brand positioning.',
      highlight: false,
      features: [
        '10,000 AI Credits',
        'Full SWOT Analysis',
        'Brand Messaging & Strategy',
        'Website Copy Optimization',
        'Persistent Workspace Memory',
        'Email Support'
      ],
      ctaText: 'Choose Build'
    },
    {
      name: 'Grow',
      price: '$29',
      credits: '20,000 Credits',
      period: 'per month',
      desc: 'Best for active teams scaling multi-channel marketing, content, and conversion funnels.',
      highlight: true,
      features: [
        '20,000 AI Credits',
        'Competitor Intelligence Audit',
        'Visual Opportunity Generation',
        'Multi-Channel Content Suite',
        'SEO & Search Audit',
        'Priority Advisory Support'
      ],
      ctaText: 'Choose Grow'
    },
    {
      name: 'Scale',
      price: '$59',
      credits: '50,000 Credits',
      period: 'per month',
      desc: 'Comprehensive operating package for established businesses demanding high output volume.',
      highlight: false,
      features: [
        '50,000 AI Credits',
        'Unlimited Organization Memory',
        'Advanced Analytics Summaries',
        'Custom Document Context AI',
        'Dedicated Onboarding Assistant',
        '24/7 Priority Support'
      ],
      ctaText: 'Choose Scale'
    }
  ];

  const creditPacks = [
    { credits: '5,000 Credits', desc: 'Quick top-up for temporary campaign bursts and strategy reviews.' },
    { credits: '15,000 Credits', desc: 'Standard add-on pack for deep audits and visual prototyping.' },
    { credits: '30,000 Credits', desc: 'High-volume pack for full website copy overhauls and content sprints.' }
  ];

  return (
    <>
      <style jsx>{`
        .pricing-hero {
          padding: 5.5rem 0 3.5rem;
          background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
          text-align: center;
        }

        .pricing-hero h1 {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 18px;
        }

        .pricing-hero p {
          font-size: 1.15rem;
          color: var(--color-medium-grey);
          max-width: 680px;
          margin: 0 auto 32px;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          align-items: stretch;
        }

        @media (max-width: 1100px) {
          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .plans-grid {
            grid-template-columns: 1fr;
          }
        }

        .plan-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-card-border);
          border-radius: var(--border-radius-lg);
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all var(--transition-normal);
        }

        .plan-card.highlight {
          border-color: var(--color-gold);
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.08) 0%, rgba(17, 17, 17, 1) 100%);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.15);
        }

        .popular-tag {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-gold);
          color: #0A0A0A;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .plan-name {
          font-size: 1.4rem;
          color: var(--color-white);
          margin-bottom: 8px;
        }

        .plan-price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 4px;
        }

        .plan-price {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--color-white);
          font-family: var(--font-family-display);
        }

        .plan-period {
          font-size: 0.85rem;
          color: var(--color-medium-grey);
        }

        .plan-credits {
          font-size: 0.95rem;
          color: var(--color-gold);
          font-weight: 600;
          margin-bottom: 16px;
        }

        .plan-desc {
          font-size: 0.88rem;
          color: var(--color-medium-grey);
          line-height: 1.5;
          margin-bottom: 24px;
          min-height: 52px;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          flex-grow: 1;
        }

        .plan-features li {
          font-size: 0.88rem;
          color: var(--color-light-grey);
          padding: 8px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .plan-features li i {
          color: var(--color-gold);
          font-size: 0.8rem;
        }

        /* Credit Packs Section */
        .credit-packs-section {
          background-color: var(--color-dark-grey);
          padding: 5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .packs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 960px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .packs-grid {
            grid-template-columns: 1fr;
          }
        }

        .pack-card {
          background: var(--color-card-bg);
          border: 1px solid var(--color-card-border);
          border-radius: var(--border-radius-lg);
          padding: 28px;
          text-align: center;
        }

        .pack-credits {
          font-size: 1.5rem;
          color: var(--color-gold);
          font-weight: 700;
          margin-bottom: 12px;
          font-family: var(--font-family-display);
        }

        .pack-desc {
          font-size: 0.9rem;
          color: var(--color-medium-grey);
          margin-bottom: 20px;
          line-height: 1.5;
        }
      `}</style>

      {/* Hero */}
      <section className="pricing-hero">
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <span className="badge">Transparent Pricing</span>
          </div>
          <h1>Plans Tailored for Every Growth Stage</h1>
          <p>
            Choose a predictable monthly operating plan with flexible credit allocations.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section">
        <div className="container">
          <div className="plans-grid">
            {plans.map((plan) => (
              <div key={plan.name} className={`plan-card ${plan.highlight ? 'highlight' : ''}`}>
                {plan.highlight && <div className="popular-tag">Most Popular</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price-row">
                  <span className="plan-price">{plan.price}</span>
                  <span className="plan-period">{plan.period}</span>
                </div>
                <div className="plan-credits">{plan.credits}</div>
                <p className="plan-desc">{plan.desc}</p>

                <ul className="plan-features">
                  {plan.features.map((feat) => (
                    <li key={feat}>
                      <i className="fa-solid fa-check"></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://beacoet.business"
                  className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  {plan.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Packs */}
      <section className="credit-packs-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">Add-on Capacity</span>
            <h2 className="section-title">Credit Packs</h2>
            <p className="section-desc">
              Need extra power? Add stand-alone credit packs to your active plan whenever required.
            </p>
          </div>

          <div className="packs-grid">
            {creditPacks.map((pack) => (
              <div key={pack.credits} className="pack-card">
                <div className="pack-credits">{pack.credits}</div>
                <p className="pack-desc">{pack.desc}</p>
                <a
                  href="https://beacoet.business"
                  className="btn btn-outline"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Get Credit Pack
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
