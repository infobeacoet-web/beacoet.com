"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Why BeaCoet', href: '/why' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          height: 78px;
          display: flex;
          align-items: center;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
          transition: background-color var(--transition-normal);
        }

        /* Subtle gold hairline along the header bottom edge */
        .site-header::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(212, 175, 55, 0.18) 25%,
            rgba(212, 175, 55, 0.18) 75%,
            transparent 100%
          );
          pointer-events: none;
        }

        .header-container {
          max-width: 1080px;
          width: 100%;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (max-width: 992px) {
          .header-container {
            padding: 0 24px;
          }
        }

        @media (max-width: 576px) {
          .header-container {
            padding: 0 16px;
          }
        }

        /* Left Side: Brand Logo */
        .brand-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          transition: opacity var(--transition-fast);
        }

        .brand-logo:hover {
          opacity: 0.88;
        }

        .brand-logo img {
          height: 24px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          display: block;
        }

        @media (max-width: 768px) {
          .brand-logo img {
            height: 20px;
          }
        }

        /* Right Side: Designed Navigation Container */
        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-container {
          display: inline-flex;
          align-items: center;
          background: rgba(22, 22, 22, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--border-radius-lg);
          padding: 0 20px;
          height: 48px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: border-color var(--transition-fast);
        }

        .nav-container:hover {
          border-color: rgba(255, 255, 255, 0.12);
        }

        .nav-list {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 26px;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          display: flex;
          align-items: center;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          font-family: var(--font-family-primary);
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.015em;
          color: #9e9e9e;
          text-decoration: none;
          padding: 6px 0;
          position: relative;
          display: inline-flex;
          align-items: center;
          transition: color 0.2s ease;
          line-height: 1;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: var(--color-gold);
        }

        .nav-link.active {
          color: var(--color-gold);
          font-weight: 600;
        }

        /* Refined active underline indicator */
        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-gold);
          border-radius: 2px;
          box-shadow: 0 0 6px rgba(212, 175, 55, 0.45);
        }

        /* Mobile Toggle Button - Hidden on desktop */
        .mobile-toggle {
          display: none;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          cursor: pointer;
          width: 44px;
          height: 44px;
          min-width: 44px;
          min-height: 44px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          padding: 10px;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
          touch-action: manipulation;
        }

        .mobile-toggle:hover,
        .mobile-toggle:active {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .mobile-toggle span {
          display: block;
          width: 20px;
          height: 2px;
          background-color: var(--color-white);
          transition: transform 0.25s ease, opacity 0.25s ease;
          border-radius: 2px;
        }

        .mobile-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .mobile-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile Menu Overlay - Strictly hidden on desktop */
        .mobile-menu-overlay {
          display: none;
        }

        @keyframes menuSlideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Breakpoint */
        @media (max-width: 992px) {
          .site-header {
            height: 68px;
          }

          .desktop-nav {
            display: none !important;
          }

          .mobile-toggle {
            display: flex;
          }

          .mobile-menu-overlay {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(12, 12, 12, 0.98);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding: 16px 20px 24px;
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);
            animation: menuSlideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            max-height: calc(100vh - 68px);
            overflow-y: auto;
          }

          .mobile-nav-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .mobile-nav-item {
            margin: 0;
            padding: 0;
          }

          .mobile-nav-link {
            font-family: var(--font-family-primary);
            font-size: 1rem;
            font-weight: 500;
            color: #a3a3a3;
            text-decoration: none;
            display: flex;
            align-items: center;
            min-height: 48px;
            padding: 12px 16px;
            border-radius: 8px;
            transition: all 0.2s ease;
            touch-action: manipulation;
          }

          .mobile-nav-link:hover,
          .mobile-nav-link:active {
            color: var(--color-white);
            background: rgba(255, 255, 255, 0.04);
          }

          .mobile-nav-link.active {
            color: var(--color-gold);
            font-weight: 600;
            background: rgba(212, 175, 55, 0.08);
            border: 1px solid rgba(212, 175, 55, 0.2);
          }
        }
      `}</style>

      <header className="site-header">
        <div className="container header-container">
          {/* Logo on Left */}
          <Link href="/" className="brand-logo" aria-label="BeaCoet Home">
            <img src="/images/beacoet_name_logo_dark.webp" alt="BeaCoet" />
          </Link>

          {/* Designed Navigation Container on Right */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <div className="nav-container">
              <ul className="nav-list">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href} className="nav-item">
                      <Link
                        href={item.href}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Mobile Toggle Button - Strictly hidden on desktop */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation Menu - Only rendered when open */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href} className="mobile-nav-item">
                    <Link
                      href={item.href}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
