import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Katnip Info" description="Central hub for all Katnip resources">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Katnip Info</h1>
          <p className="hero__subtitle">Your central hub for Katnip resources, docs, and guides.</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/json-docs/README">
              📘 JSON Docs
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/">
              🐾 Katnip Docs
            </Link>
            <Link className="button button--secondary button--lg" to="/blog/">
              📝 Blog
            </Link>
          </div>
        </div>
      </header>

      <main className="container">
        <section style={{ padding: '2rem 0' }}>
          <h2>What is Katnip?</h2>
          <p>
            Katnip is a platform where you can explore innovative tools, documentation,
            and technical breakdowns—from JSON block structures to in-depth guides.
          </p>
        </section>

        <section style={{ paddingBottom: '2rem' }}>
          <h2>Available Resources</h2>
          <ul>
            <li><strong>JSON Docs:</strong> A breakdown of block-level syntax and formatting</li>
            <li><strong>Katnip Docs:</strong> Guides, tutorials, and implementation notes</li>
            <li><strong>Blog:</strong> Project logs, ideas, and updates</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
