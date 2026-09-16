"use client";

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        .about-hero {
          padding: 7rem 0 5rem;
          background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
          text-align: center;
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 4.5rem 0 3.5rem;
          }
        }

        @media (max-width: 576px) {
          .about-hero {
            padding: 3.5rem 0 2.5rem;
          }
        }

        .about-hero h1 {
          font-size: clamp(1.8rem, 4.5vw, 3.8rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 20px;
          line-height: 1.18;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-hero p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--color-medium-grey);
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .story-container {
          max-width: 780px;
          margin: 0 auto;
        }

        .story-block {
          margin-bottom: 4rem;
        }

        @media (max-width: 576px) {
          .story-block {
            margin-bottom: 2.5rem;
          }
        }

        .story-block:last-child {
          margin-bottom: 0;
        }

        .story-tag {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-gold);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }

        .story-block h2 {
          font-size: clamp(1.4rem, 2.6vw, 2.2rem);
          color: var(--color-white);
          margin-bottom: 18px;
          line-height: 1.3;
        }

        .story-block p {
          font-size: clamp(0.98rem, 2vw, 1.1rem);
          color: var(--color-medium-grey);
          line-height: 1.75;
          margin-bottom: 18px;
        }

        .story-block p strong {
          color: var(--color-light-grey);
        }

        /* Journey Minimal Grid */
        .journey-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 28px 0;
        }

        @media (max-width: 640px) {
          .journey-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }

        .journey-step {
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--color-card-border);
          border-radius: var(--border-radius-md);
          color: var(--color-white);
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          font-weight: 600;
          font-family: var(--font-family-display);
          text-align: center;
          transition: border-color var(--transition-fast);
        }

        .journey-step:hover {
          border-color: var(--color-card-border-hover);
        }

        .status-box {
          background: rgba(212, 175, 55, 0.04);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: var(--border-radius-lg);
          padding: 24px 32px;
          margin-top: 32px;
          text-align: center;
        }

        @media (max-width: 576px) {
          .status-box {
            padding: 18px 16px;
            margin-top: 24px;
          }
        }

        .status-text {
          font-size: clamp(0.98rem, 2vw, 1.15rem);
          color: var(--color-gold);
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        /* Bottom CTA */
        .cta-center {
          text-align: center;
          padding: 6rem 0;
        }

        @media (max-width: 576px) {
          .cta-center {
            padding: 3.5rem 0;
          }

          .cta-center :global(.btn) {
            width: 100%;
          }
        }

        .cta-center h2 {
          font-size: clamp(1.5rem, 3.2vw, 2.4rem);
          color: var(--color-white);
          margin-bottom: 14px;
        }

        .cta-center p {
          color: var(--color-medium-grey);
          margin-bottom: 28px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
          font-size: clamp(0.95rem, 2vw, 1.05rem);
        }
      `}</style>

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <span className="badge">About BeaCoet</span>
          </div>
          <h1>Building a better way to think about business.</h1>
          <p>
            Exploring what happens when artificial intelligence truly understands the context behind every decision.
          </p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="section section-dark">
        <div className="container">
          <div className="story-container">
            {/* Section 1: The belief */}
            <div className="story-block">
              <span className="story-tag">The Belief</span>
              <h2>We believe better business decisions begin with understanding.</h2>
              <p>
                Businesses generate enormous amounts of information, but that information is often fragmented across tools, documents, teams and systems.
              </p>
              <p>
                <strong>BeaCoet is being built to bring that context closer together.</strong> When clarity replaces scattered data, teams make sounder choices and execute with enduring conviction.
              </p>
            </div>

            {/* Section 2: The ambition */}
            <div className="story-block">
              <span className="story-tag">The Ambition</span>
              <h2>To make intelligent business thinking more accessible.</h2>
              <p>
                BeaCoet is exploring what happens when AI understands more than a single prompt, when it can understand the business behind the question.
              </p>
              <p>
                Rather than treating intelligence as isolated generation, we view it as a persistent, evolving operating layer that supports founders from initial intuition to mature execution.
              </p>
            </div>

            {/* Section 3: The journey */}
            <div className="story-block">
              <span className="story-tag">The Journey</span>
              <h2>A continuous progression.</h2>
              <p>
                A deliberate evolution designed to support companies across each phase of their lifecycle:
              </p>

              <div className="journey-row">
                <div className="journey-step">Understand</div>
                <div className="journey-step">Build</div>
                <div className="journey-step">Grow</div>
                <div className="journey-step">Scale</div>
              </div>

              <div className="status-box">
                <span className="status-text">
                  BeaCoet is still taking shape.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-center">
        <div className="container">
          <h2>Join us as we build.</h2>
          <p>
            Have questions, ideas, or simply want to stay updated on our progress?
          </p>
          <Link href="/contact" className="btn btn-secondary">
            Get in touch &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
