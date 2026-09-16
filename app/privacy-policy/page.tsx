"use client";

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      <style jsx>{`
        .legal-hero {
          padding: 5.5rem 0 3rem;
          background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
          text-align: center;
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
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 16px;
        }

        .legal-hero p {
          font-size: 1.15rem;
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
          font-size: 1.8rem;
          color: var(--color-white);
          margin: 2.5rem 0 1rem;
        }

        .legal-body h3 {
          font-size: 1.3rem;
          color: var(--color-white);
          margin: 1.8rem 0 0.8rem;
        }

        .legal-body h4 {
          font-size: 1.1rem;
          color: var(--color-gold);
          margin: 1.2rem 0 0.5rem;
        }

        .legal-body p {
          font-size: 1rem;
          color: var(--color-light-grey);
          line-height: 1.7;
          margin-bottom: 1.2rem;
        }

        .legal-body ul {
          list-style: disc;
          padding-left: 1.8rem;
          margin-bottom: 1.5rem;
        }

        .legal-body ul li {
          font-size: 1rem;
          color: var(--color-light-grey);
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
      `}</style>

      {/* Hero */}
      <section className="legal-hero">
        <div className="container">
          <span className="legal-badge">Legal Documentation</span>
          <h1>Privacy Policy</h1>
          <p>
            Your privacy is paramount. Learn how BeaCoet collects, uses, and protects your operational data.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="legal-body">
            <p><strong>Last Updated: July 19, 2026</strong></p>

            <p>BeaCoet Inc. (&quot;BeaCoet&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the BeaCoet Business AI Platform and its associated website (the &quot;Service&quot;). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

            <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>

            <h2>1. Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include:</p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h4>Usage Data</h4>
            <p>We may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time spent on those pages, and other diagnostic data.</p>

            <h2>2. Use of Data</h2>
            <p>BeaCoet uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2>3. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: <a href="mailto:privacy@beacoet.com">privacy@beacoet.com</a></li>
              <li>By visiting our contact page: <Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
