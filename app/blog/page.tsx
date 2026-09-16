"use client";

import React, { useState } from 'react';

export default function BlogPage() {
  const categories = [
    'All',
    'Business growth',
    'Branding',
    'Marketing',
    'AI',
    'SEO',
    'Website',
    'Sales',
    'Customer Experience'
  ];

  const articles = [
    {
      title: 'How AI Business Operating Systems Are Replacing Disconnected Tools',
      category: 'AI',
      readTime: '5 min read',
      excerpt: 'Founders spend too much time copying data between single-purpose tools. Learn how unified organizational memory accelerates strategic decision-making.'
    },
    {
      title: 'Measuring Business Health Before Writing Strategic Action Plans',
      category: 'Business growth',
      readTime: '6 min read',
      excerpt: 'Discovering root operational friction is the single most important step before allocating capital or launch resources.'
    },
    {
      title: 'Building a Cohesive Visual Brand Identity with AI Direction',
      category: 'Branding',
      readTime: '4 min read',
      excerpt: 'How structured brand guidelines turn AI generation from generic outputs into precise brand-consistent assets.'
    },
    {
      title: 'Optimizing Website Landing Pages for Conversion Intent',
      category: 'Website',
      readTime: '7 min read',
      excerpt: 'Eliminating navigation friction and refining headline messaging to turn qualified visitors into long-term customers.'
    },
    {
      title: 'High-Intent Search Engine Optimization for Modern Founders',
      category: 'SEO',
      readTime: '5 min read',
      excerpt: 'Moving past vanity search volume to target high-intent keywords that directly impact monthly recurring revenue.'
    },
    {
      title: 'Multi-Channel Content Strategy Without Sacrificing Quality',
      category: 'Marketing',
      readTime: '6 min read',
      excerpt: 'Repurposing strategic business insights into compelling social content, email sequences, and long-form articles.'
    },
    {
      title: 'Structuring High-Converting B2B Sales Pitch Scripts',
      category: 'Sales',
      readTime: '5 min read',
      excerpt: 'Aligning value propositions with customer pain points to compress sales cycles and improve deal close rates.'
    },
    {
      title: 'Transforming Customer Support Feedback into Product Innovation',
      category: 'Customer Experience',
      readTime: '4 min read',
      excerpt: 'Systematically analyzing customer reviews and support tickets to identify product improvement opportunities.'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <>
      <style jsx>{`
        .blog-hero {
          padding: 5.5rem 0 3rem;
          background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(10, 10, 10, 1) 70%);
          text-align: center;
        }

        @media (max-width: 576px) {
          .blog-hero {
            padding: 3.5rem 0 2.5rem;
          }
        }

        .blog-hero h1 {
          font-size: clamp(1.8rem, 4.5vw, 3.8rem);
          font-weight: 700;
          color: var(--color-white);
          margin-bottom: 16px;
        }

        .blog-hero p {
          font-size: clamp(0.98rem, 2vw, 1.15rem);
          color: var(--color-medium-grey);
          max-width: 640px;
          margin: 0 auto;
        }

        .category-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 576px) {
          .category-nav {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            margin-bottom: 2rem;
            gap: 8px;
            padding-bottom: 8px;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }

          .category-nav::-webkit-scrollbar {
            display: none;
          }
        }

        .category-btn {
          background: var(--color-card-bg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--color-light-grey);
          padding: 8px 18px;
          min-height: 40px;
          border-radius: 20px;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
          touch-action: manipulation;
        }

        .category-btn:hover,
        .category-btn.active {
          background: rgba(212, 175, 55, 0.15);
          border-color: var(--color-gold);
          color: var(--color-gold);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 992px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .articles-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .article-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (max-width: 576px) {
          .article-card {
            padding: 20px 16px;
          }
        }

        .article-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .article-cat {
          color: var(--color-gold);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .read-time {
          font-size: 0.8rem;
          color: var(--color-medium-grey);
        }

        .article-card h3 {
          font-size: 1.25rem;
          color: var(--color-white);
          line-height: 1.4;
          margin-bottom: 12px;
        }

        .article-card p {
          font-size: 0.92rem;
          color: var(--color-medium-grey);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .read-link {
          color: var(--color-gold);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color var(--transition-fast);
        }

        .read-link:hover {
          color: var(--color-gold-dark);
        }
      `}</style>

      {/* Hero */}
      <section className="blog-hero">
        <div className="container">
          <div style={{ marginBottom: '20px' }}>
            <span className="badge">BeaCoet Journal</span>
          </div>
          <h1>Insights on Growth, AI & Strategy</h1>
          <p>
            Practical perspectives for business owners navigating modern growth and operational strategy.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section">
        <div className="container">
          <div className="category-nav">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="articles-grid">
            {filteredArticles.map((art) => (
              <div key={art.title} className="card article-card">
                <div>
                  <div className="article-meta">
                    <span className="article-cat">{art.category}</span>
                    <span className="read-time">{art.readTime}</span>
                  </div>
                  <h3>{art.title}</h3>
                  <p>{art.excerpt}</p>
                </div>
                <div>
                  <a href="https://beacoet.business" className="read-link">
                    Read Article →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
