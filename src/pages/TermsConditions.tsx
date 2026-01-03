import SEOHead from '@/components/SEOHead';

const TermsConditions = () => (
  // UPDATED: Removed bg-background and min-h-screen
  <main className="w-full relative overflow-x-hidden text-foreground">
    <SEOHead 
      title="Terms & Conditions - Service Agreement"
      description="Read Deccan Hive's terms and conditions for digital marketing services. Understand our service agreement, payments, and refund policies."
      canonicalPath="/terms-conditions"
    />
    <article className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & <span className="text-gradient-gold">Conditions</span></h1>
          <p className="text-lg text-muted-foreground">Please read these terms carefully before using our services</p>
        </header>
        <div className="premium-card p-8 md:p-12 space-y-8">
          <p className="text-muted-foreground">By accessing and using this website, you agree to the following terms and conditions.</p>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Services</h2>
            <p className="text-muted-foreground">We offer digital marketing services including social media marketing, paid advertising, branding, web development, and content marketing campaigns.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Payments</h2>
            <p className="text-muted-foreground">All payments must be made in advance or as per agreed milestones. Prices are subject to change based on project scope.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Project Deliverables</h2>
            <p className="text-muted-foreground">All project timelines and deliverables will be outlined in the service agreement. Changes to project scope may affect timeline and pricing.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground">Upon full payment, clients receive ownership of final deliverables. We retain the right to showcase work in our portfolio unless otherwise agreed.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Refund Policy</h2>
            <p className="text-muted-foreground">Due to the nature of digital services, we do not offer refunds once the work has started. Partial refunds may be considered on a case-by-case basis.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Contact</h2>
            <p className="text-muted-foreground">Email: <a href="mailto:deccanhiveonline@gmail.com" className="text-primary hover:underline">deccanhiveonline@gmail.com</a></p>
            <p className="text-muted-foreground">Phone: <a href="tel:+91 6303866637" className="text-primary hover:underline">+91 6303866637</a></p>
          </section>
        </div>
      </div>
    </article>
  </main>
);

export default TermsConditions;

