import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/JsonLd';

const PrivacyPolicy = () => (
  // UPDATED: Removed bg-background and min-h-screen
  <main className="w-full relative overflow-x-hidden text-foreground">
    <SEOHead 
      title="Privacy Policy - Data Protection & Privacy"
      description="Learn how Deccan Hive Digital Agency collects, uses, and protects your personal information. We value your privacy and are committed to data security."
      canonicalPath="/privacy-policy"
    />
    <BreadcrumbSchema items={[
      { name: 'Home', url: 'https://deccanhive.com' },
      { name: 'Privacy Policy', url: 'https://deccanhive.com/privacy-policy' }
    ]} />

    <article className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy <span className="text-gradient-gold">Policy</span></h1>
          <p className="text-lg text-muted-foreground">How we collect, use, and protect your personal information</p>
        </header>
        <div className="premium-card p-8 md:p-12 space-y-8">
          <p className="text-muted-foreground">At Deccan Hive Digital Agency Pvt Ltd, we value your privacy and are committed to protecting your personal information.</p>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Name, email address, phone number</li>
              <li>Business or company name</li>
              <li>Project or service-related details</li>
              <li>Website usage data</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Communicate and respond to inquiries</li>
              <li>Provide digital marketing services</li>
              <li>Improve website experience</li>
              <li>Send updates and marketing communications (with consent)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Data Security</h2>
            <p className="text-muted-foreground">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Your Rights</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground">Email: <a href="mailto:deccanhiveonline@gmail.com" className="text-primary hover:underline">deccanhiveonline@gmail.com</a></p>
            <p className="text-muted-foreground">Phone: <a href="tel:+916303866637" className="text-primary hover:underline">+91 6303866637</a></p>
          </section>
        </div>
      </div>
    </article>
  </main>
);

export default PrivacyPolicy;
