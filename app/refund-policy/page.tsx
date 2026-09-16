"use client";

import React from 'react';
import Link from 'next/link';

export default function RefundPolicyPage() {
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
          <span className="legal-badge">Billing Policy</span>
          <h1>Refund Policy</h1>
          <p>
            Learn how cancellations, refunds, and subscription billing allocations are managed at BeaCoet Business.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="legal-body">
            <p><strong>Last Updated: July 26, 2026</strong></p>

            <p>This Refund Policy outlines the terms for refunds and cancellations of services provided by BeaCoet Inc. through the BeaCoet Business AI Platform.</p>

            <h2>1. Subscription Cancellation</h2>
            <p>You may cancel your BeaCoet Business plan at any time within your workspace billing settings. Upon cancellation:</p>
            <ul>
              <li>Your subscription features remain active until the end of your current monthly billing period.</li>
              <li>Your plan will not auto-renew, and no further recurring charges will be initiated.</li>
              <li>Once expired, your account defaults to the free Discover plan with your workspace history preserved.</li>
            </ul>

            <h2>2. Refund Eligibility</h2>
            <p>Refunds are evaluated for the following scenarios:</p>
            <ul>
              <li><strong>Duplicate Payments:</strong> In the event of a technical billing error resulting in duplicate charges.</li>
              <li><strong>Billing Discrepancies:</strong> Verified discrepancies caused by automated billing system errors.</li>
              <li><strong>Extended Platform Outages:</strong> Significant, unscheduled service unavailability under direct BeaCoet control.</li>
            </ul>

            <h2>3. Request Process</h2>
            <p>To request a refund review, contact customer support at <a href="mailto:contact@beacoet.com">contact@beacoet.com</a>. Approved refunds are processed within 5 to 10 business days to the original payment method.</p>

            <h2>4. Contact Us</h2>
            <p>If you have questions about billing or subscription management, contact us:</p>
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
