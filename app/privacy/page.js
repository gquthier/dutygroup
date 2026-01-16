import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="container privacy-page">
      <div className="content text-left">
        <Link href="/" className="back-link">← Return Home</Link>
        
        <h1 className="title privacy-title">Data Privacy<br/><span className="duty">Policy</span></h1>
        
        <div className="policy-content">
          <section>
            <h2>1. Introduction</h2>
            <p>At Duty Group, we believe in greatness, and that starts with trust. This policy outlines how we handle your data with the utmost respect and security.</p>
          </section>

          <section>
            <h2>2. Data Collection</h2>
            <p>We collect only the essential information needed to provide our services and improve your experience. This may include usage data, device information, and any communication you choose to send us.</p>
          </section>

          <section>
            <h2>3. Usage of Information</h2>
            <p>Your data fuels the improvement of our tools and services. We use it to:</p>
            <ul>
              <li>Optimize our AI models (ChatYourSequence, ChatYourLeadList)</li>
              <li>Enhance application performance</li>
              <li>Communicate important updates</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share anonymized, aggregated data with trusted partners solely for the purpose of analytics and service improvement.</p>
          </section>

          <section>
            <h2>5. Your Rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal data at any time. Excellence implies transparency.</p>
          </section>

          <section>
            <h2>6. Contact</h2>
            <p>For any privacy-related inquiries, please contact us directly. We are here to serve.</p>
          </section>
        </div>
      </div>

      <div className="ambient-bg"></div>
    </main>
  );
}
