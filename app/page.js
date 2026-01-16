import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      <section className="hero-section">
        <div className="content">
          <h1 className="title">
            <span className="duty">[DUTY]</span>
            <span className="group">GROUP</span>
          </h1>

          <p className="vision">
            Our duty is to make people{' '}
            <span className="highlight">CHOOSE GREATNESS</span>{' '}
            everytime.
          </p>
        </div>
      </section>



      <section className="vision-section">
        <div className="vision-content">
          <h2 className="vision-title">THE REFUSAL OF MEDIOCRITY</h2>

          <div className="vision-text-block">
            <p>Greatness isn't a state. It's a constant refusal.</p>
            <p>We exist to push humans toward self-fulfillment. To ensure no one settles for an ordinary life.</p>
            <p>The man who stands up against his condition. The one who refuses to stay in his place.</p>
          </div>

          <div className="progress-arrow">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L20 40" stroke="currentColor" strokeWidth="2" />
              <path d="M0 20L40 20" stroke="currentColor" strokeWidth="2" />
              <path d="M20 40L35 25" stroke="currentColor" strokeWidth="2" />
              <path d="M20 40L5 25" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      <section className="ventures-section">
        <div className="ventures-grid">
          {/* Flagship App */}
          <a href="https://www.captureyourchapters.com/" target="_blank" rel="noopener noreferrer" className="venture-card flagship">
            <div>
              <span className="flagship-badge">Flagship App</span>
              <h3 className="venture-title">Capture Your Chapters</h3>
              <p className="venture-desc">Unleash your potential and reveal greatness. The ultimate tool to document and elevate your journey.</p>
            </div>
            <span className="venture-link-text">Discover App &rarr;</span>
          </a>

          {/* Standard Ventures */}
          <a href="https://chatyoursequence.com/" target="_blank" rel="noopener noreferrer" className="venture-card">
            <div>
              <h3 className="venture-title">ChatYourSequence</h3>
              <p className="venture-desc">AI-powered copywriting sequences for cold email campaigns. Write better, convert more.</p>
            </div>
            <span className="venture-link-text">Visit Site &rarr;</span>
          </a>

          <a href="https://chatyourleadlist.com/" target="_blank" rel="noopener noreferrer" className="venture-card">
            <div>
              <h3 className="venture-title">ChatYourLeadList</h3>
              <p className="venture-desc">Generate targeted prospect lists simply by talking to an LLM. Forgot the manual search.</p>
            </div>
            <span className="venture-link-text">Visit Site &rarr;</span>
          </a>

          <a href="https://www.nametodomain.com/" target="_blank" rel="noopener noreferrer" className="venture-card">
            <div>
              <h3 className="venture-title">NameToDomain</h3>
              <p className="venture-desc">Enrich company names into valid domains instantly. Simple, fast, effective.</p>
            </div>
            <span className="venture-link-text">Visit Site &rarr;</span>
          </a>
        </div>

        <footer>
          <Link href="/privacy" className="footer-link">Data Privacy Policy</Link>
        </footer>
      </section>

      <div className="ambient-bg"></div>
    </main >
  )
}
