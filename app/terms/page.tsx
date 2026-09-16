"use client";

import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <>
      <style jsx>{`
        .legal-hero {
          padding: 5.5rem 0 3rem;
          background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
          text-align: center;
        }

        @media (max-width: 576px) {
          .legal-hero {
            padding: 3.5rem 0 2.5rem;
          }
        }

        .legal-badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 30px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.25);
          color: var(--color-gold);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .legal-hero h1 {
          font-size: clamp(1.8rem, 4.5vw, 3.8rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 16px;
        }

        .legal-hero p {
          font-size: clamp(0.98rem, 2vw, 1.15rem);
          color: var(--color-medium-grey);
          max-width: 640px;
          margin: 0 auto;
        }

        .legal-body {
          max-width: 860px;
          margin: 0 auto;
          text-align: left;
        }

        .legal-body h2 {
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          color: var(--color-white);
          margin: 2.5rem 0 1rem;
        }

        .legal-body p {
          font-size: 1rem;
          color: var(--color-light-grey);
          line-height: 1.7;
          margin-bottom: 1.2rem;
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .legal-body ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .legal-body ul li {
          font-size: 1rem;
          color: var(--color-light-grey);
          margin-bottom: 0.5rem;
          line-height: 1.6;
          overflow-wrap: anywhere;
          word-break: break-word;
        }
      `}</style>

      {/* Hero */}
      <section className="legal-hero">
        <div className="container">
          <span className="legal-badge">Legal Documentation</span>
          <h1>Terms & Conditions</h1>
          <p>
            Please read these Terms and Conditions carefully before using the BeaCoet Business platform.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="legal-body">
            <p><strong>Last Updated: July 26, 2026</strong></p>

            <p>Welcome to BeaCoet. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the BeaCoet AI Business Operating System platform (the &quot;Service&quot;) provided by BeaCoet Inc. (&quot;BeaCoet&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).</p>

            <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

            <h2>1. Accounts & Workspace Usage</h2>
            <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            <p>You are responsible for safeguarding your credentials and for any activities or actions under your account.</p>

            <h2>2. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of BeaCoet and its licensors. All user-generated outputs and workspace documents remain the property of the organization that created them.</p>

            <h2>3. Limitation Of Liability</h2>
            <p>In no event shall BeaCoet, nor its directors, employees, partners, agents, or suppliers, be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of the Service.</p>

            <h2>4. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with applicable laws, without regard to its conflict of law provisions.</p>

            <h2>5. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>By email: <a href="mailto:contact@beacoet.com">contact@beacoet.com</a></li>
              <li>By visiting our contact page: <Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
