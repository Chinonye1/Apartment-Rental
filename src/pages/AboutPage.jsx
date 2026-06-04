export function AboutPage() {
  return (
    <main className="about-shell">
      <header className="about-hero">
        <div>
          <h1>About this Apartment Rental demo</h1>
          <p className="lead">
            A small, friendly interface for browsing curated apartment listings
            — view details, explore amenities, and manage listings locally in
            the browser.
          </p>
        </div>
      </header>

      <section className="about-grid">
        <article className="about-card">
          <h2>Our mission</h2>
          <p>
            We want to make searching for a short-term stay pleasant and
            transparent. This demo focuses on clear information, thoughtful
            imagery, and easy editing so hosts and guests can quickly find what
            matters.
          </p>
        </article>

        <article className="about-card">
          <h2>What we offer</h2>
          <ul>
            <li>Clean listing summaries and detailed pages</li>
            <li>Responsive layout for mobile and desktop</li>
            <li>Simple forms to add or edit apartments</li>
            <li>Searchable, real-like sample data</li>
          </ul>
        </article>

        <article className="about-card">
          <h2>How it works</h2>
          <p>
            Browse the list on the home screen, click a listing to see a rich
            detail page with amenities and availability, and use the dashboard
            to add or update items locally.
          </p>
        </article>

        <aside className="about-card about-contact">
          <h2>Get in touch</h2>
          <p>
            Want to improve the demo or report an issue? Open a ticket on the
            repository or drop a short note to the project maintainer.
          </p>
        </aside>
      </section>
    </main>
  );
}
