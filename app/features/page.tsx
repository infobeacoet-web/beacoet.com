"use client";

import React from 'react';

export default function FeaturesPage() {
  const featureCategories = [
    {
      category: 'Business Understanding',
      icon: 'fa-solid fa-compass',
      items: [
        { name: 'Business Health Score', desc: 'Quantitative score measuring overall operational and market readiness.' },
        { name: 'SWOT Analysis', desc: 'Automated identification of internal strengths, weaknesses, and external factors.' },
        { name: 'Competitor Benchmarking', desc: 'Evaluate positioning and market gaps against industry rivals.' }
      ]
    },
    {
      category: 'Branding',
      icon: 'fa-solid fa-palette',
      items: [
        { name: 'Brand Positioning', desc: 'Define your unique value proposition and target audience resonance.' },
        { name: 'Tone of Voice Guidelines', desc: 'Establish consistent messaging rules across marketing channels.' },
        { name: 'Visual Identity Ideas', desc: 'Generate concept directions for logos, color palettes, and typography.' }
      ]
    },
    {
      category: 'Website',
      icon: 'fa-solid fa-laptop-code',
      items: [
        { name: 'Landing Page Concepts', desc: 'Generate high-converting layout suggestions and hero messaging.' },
        { name: 'UX Friction Audit', desc: 'Pinpoint user navigation obstacles and conversion drop-off points.' },
        { name: 'Copywriting Optimization', desc: 'Refine headline clarity, body copy, and primary call-to-actions.' }
      ]
    },
    {
      category: 'Marketing',
      icon: 'fa-solid fa-bullhorn',
      items: [
        { name: 'Multi-Channel Strategies', desc: 'Structured campaign blueprints for paid, organic, and email channels.' },
        { name: 'Funnel Optimization', desc: 'Improve customer journey steps from initial awareness to retention.' },
        { name: 'Campaign Blueprints', desc: 'Step-by-step launch plans tailored to target customer segments.' }
      ]
    },
    {
      category: 'Content',
      icon: 'fa-solid fa-pen-nib',
      items: [
        { name: 'Content Strategy', desc: 'Editorial calendars and topic recommendations aligned with buyer intent.' },
        { name: 'Ad Copywriting', desc: 'Generate high-performing headlines and body copy for digital ads.' },
        { name: 'Long-Form Articles', desc: 'Structured article outlines and drafts focused on industry authority.' }
      ]
    },
    {
      category: 'SEO',
      icon: 'fa-solid fa-magnifying-glass-chart',
      items: [
        { name: 'Search Visibility Audit', desc: 'Analyze technical SEO factors, page speed, and indexability.' },
        { name: 'Keyword Opportunities', desc: 'Discover high-intent search terms with strategic growth potential.' },
        { name: 'On-Page Optimization', desc: 'Meta tag recommendations, schema markup ideas, and content tweaks.' }
      ]
    },
    {
      category: 'Social Media',
      icon: 'fa-solid fa-share-nodes',
      items: [
        { name: 'Platform Strategy', desc: 'Tailored channel recommendations based on target audience habits.' },
        { name: 'Post Concepts & Drafts', desc: 'Ready-to-use social posts, captions, and creative visual angles.' },
        { name: 'Engagement Tactics', desc: 'Actionable strategies to build community trust and brand advocacy.' }
      ]
    },
    {
      category: 'Sales',
      icon: 'fa-solid fa-chart-line',
      items: [
        { name: 'Sales Messaging', desc: 'Pitch scripts, value proposition frameworks, and objection handling.' },
        { name: 'Lead Offer Strategy', desc: 'Design lead magnets and intro offers to accelerate customer acquisition.' },
        { name: 'Pricing Strategy', desc: 'Structure tiering and packaging models to maximize revenue.' }
      ]
    },
    {
      category: 'Customer Experience',
      icon: 'fa-solid fa-heart',
      items: [
        { name: 'Feedback Analysis', desc: 'Identify recurring themes in customer reviews and support channels.' },
        { name: 'Retention Playbooks', desc: 'Strategies to lower churn and increase customer lifetime value.' },
        { name: 'Onboarding Journeys', desc: 'Streamline post-purchase welcome sequences and product activation.' }
      ]
    },
    {
      category: 'Analytics',
      icon: 'fa-solid fa-chart-pie',
      items: [
        { name: 'Performance Metrics', desc: 'Track key performance indicators across marketing and growth efforts.' },
        { name: 'Impact Forecasts', desc: 'Estimate expected results before implementing recommended strategies.' },
        { name: 'Executive Summaries', desc: 'Consolidated progress reports for founders and team stakeholders.' }
      ]
    },
    {
      category: 'AI Business Coach',
      icon: 'fa-solid fa-user-astronaut',
      items: [
        { name: 'Strategic Guidance', desc: 'Get instant answers to complex business decisions and trade-offs.' },
        { name: 'Action Prioritization', desc: 'Rank tasks by effort versus potential business return.' },
        { name: 'Continuous Advisory', desc: 'Always-on business consulting grounded in your organizational context.' }
      ]
    },
    {
      category: 'Workspace',
      icon: 'fa-solid fa-cubes',
      items: [
        { name: 'Centralized Hub', desc: 'Single dashboard housing all generated business strategy assets.' },
        { name: 'Multi-Asset Search', desc: 'Instant search across reports, campaign plans, and brand copy.' },
        { name: 'Version History', desc: 'Reference and build upon past iterations without losing work.' }
      ]
    },
    {
      category: 'AI Memory',
      icon: 'fa-solid fa-brain',
      items: [
        { name: 'Persistent Context', desc: 'System remembers brand rules, target demographics, and past outputs.' },
        { name: 'Document Analysis', desc: 'Upload PDFs, presentations, and strategy docs for contextual learning.' },
        { name: 'Brand Rule Enforcement', desc: 'Ensures every output matches established company guidelines.' }
      ]
    },
    {
      category: 'Visual Opportunities',
      icon: 'fa-solid fa-eye',
      items: [
        { name: 'Website Prototypes', desc: 'Visual direction mockups for redesigned homepage sections.' },
        { name: 'Social Creative Directions', desc: 'Sample visual layouts for ad campaigns and social channels.' },
        { name: 'Brand Asset Directions', desc: 'Packaging and merchandise mockups tailored to your brand.' }
      ]
    }
  ];

  return (
    <>
      <style jsx>{`
        .features-hero {
          padding: 5.5rem 0 3.5rem;
          background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
          text-align: center;
        }

        .features-hero h1 {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 18px;
        }

        .features-hero p {
          font-size: 1.15rem;
          color: var(--color-medium-grey);
          max-width: 680px;
          margin: 0 auto 32px;
        }

        .category-block {
          margin-bottom: 4rem;
        }

        .category-block:last-child {
          margin-bottom: 0;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 1.8rem;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .category-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-md);
          background: rgba(212, 175, 55, 0.12);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .category-title {
          font-size: 1.6rem;
          color: var(--color-white);
        }

        .items-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 992px) {
          .items-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .items-grid {
            grid-template-columns: 1fr;
          }
        }

        .cta-footer {
          text-align: center;
          padding: 4.5rem 0;
          background: var(--color-dark-grey);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
      `}</style>

      {/* Hero */}
      <section className="features-hero">
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <span className="badge">Capabilities Overview</span>
          </div>
          <h1>Comprehensive Feature Suite</h1>
          <p>
            Short, focused features categorized by core business area to streamline your strategic workflow.
          </p>
          <a
            href="https://beacoet.business"
            className="btn btn-primary"
          >
            Start Free
          </a>
        </div>
      </section>

      {/* Features Grid by Category */}
      <section className="section">
        <div className="container">
          {featureCategories.map((cat) => (
            <div key={cat.category} className="category-block">
              <div className="category-header">
                <div className="category-icon">
                  <i className={cat.icon}></i>
                </div>
                <h2 className="category-title">{cat.category}</h2>
              </div>

              <div className="items-grid">
                {cat.items.map((item) => (
                  <div key={item.name} className="card">
                    <h4>{item.name}</h4>
                    <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-footer">
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '14px' }}>
            Experience BeaCoet Business Features
          </h2>
          <p style={{ color: 'var(--color-medium-grey)', marginBottom: '24px' }}>
            Get started today with 1,000 free credits.
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
