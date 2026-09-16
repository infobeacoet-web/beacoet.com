"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <style jsx>{`
        footer {
          background-color: var(--color-dark-grey);
          color: var(--color-medium-grey);
          padding: 4.5rem 0 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          font-family: var(--font-family-primary);
          position: relative;
        }

        @media (max-width: 576px) {
          footer {
            padding: 3.5rem 0 2rem;
          }
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 3rem;
          padding-bottom: 3.5rem;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
            padding-bottom: 2.5rem;
          }
        }

        /* Left side: Brand with explicit vertical flex gap between logo and description */
        .footer-brand {
          max-width: 440px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          transition: opacity var(--transition-fast);
          line-height: 1;
        }

        .footer-logo:hover {
          opacity: 0.9;
        }

        .footer-logo img {
          height: 24px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          display: block;
        }

        .footer-desc {
          font-size: 0.95rem;
          color: var(--color-medium-grey);
          line-height: 1.65;
          margin: 0;
          padding: 0;
        }

        /* Right side: Connect */
        .footer-connect {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        @media (max-width: 768px) {
          .footer-connect {
            align-items: flex-start;
          }
        }

        .footer-connect h3 {
          color: var(--color-white);
          font-size: 0.82rem;
          margin-bottom: 16px;
          font-family: var(--font-family-display);
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-links a {
          color: var(--color-medium-grey);
          font-size: 1rem;
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          min-width: 44px;
          min-height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          touch-action: manipulation;
        }

        .social-links a:hover {
          color: var(--color-gold);
          background: rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.35);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.85rem;
          color: #666666;
          flex-wrap: wrap;
          gap: 12px;
        }
      `}</style>

      <footer>
        <div className="container">
          <div className="footer-top">
            {/* Left Side: Brand */}
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <img src="/images/beacoet_name_logo_dark.webp" alt="BeaCoet" />
              </Link>
              <p className="footer-desc">
                Helping businesses make better decisions using artificial intelligence.
              </p>
            </div>

            {/* Right Side: Connect */}
            <div className="footer-connect">
              <h3>Connect</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/beacoetforbusiness/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/beacoet/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://x.com/beacoet" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.youtube.com/@beacoet" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 BeaCoet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
