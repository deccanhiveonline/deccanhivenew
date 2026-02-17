import { useState, lazy, Suspense } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { Magnetic } from '@/components/ui/magnetic';
import FAQSection from '@/components/FAQSection';
import SEOHead from '@/components/SEOHead';
import { OrganizationSchema, BreadcrumbSchema } from '@/components/JsonLd';
import { z } from 'zod';

const WorldMap = lazy(() => import('@/components/ui/world-map').then(module => ({ default: module.WorldMap })));

const MAP_DOTS = [
  { start: { lat: 17.385, lng: 78.4867 }, end: { lat: 51.5074, lng: -0.1278 } },
  { start: { lat: 17.385, lng: 78.4867 }, end: { lat: 40.7128, lng: -74.006 } },
  { start: { lat: 17.385, lng: 78.4867 }, end: { lat: 25.2048, lng: 55.2708 } },
  { start: { lat: 17.385, lng: 78.4867 }, end: { lat: 1.3521, lng: 103.8198 } },
  { start: { lat: 17.385, lng: 78.4867 }, end: { lat: -33.8688, lng: 151.2093 } },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().max(200, "Subject must be less than 200 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters")
});

const Contact = () => {
  // Parallax Logic
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 250], [1, 0]);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmissionStatus('Sending...');
    const sanitizedData = result.data;
    const json = JSON.stringify({ ...sanitizedData, access_key: "6e27293d-8692-461d-a764-1b1ddc4d3cc0" });
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      }).then(r => r.json());
      
      if (res.success) {
        setSubmissionStatus("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmissionStatus(''), 5000);
      } else {
        setSubmissionStatus(res.message || "Something went wrong.");
      }
    } catch {
      setSubmissionStatus("Submission failed. Please try again.");
    }
  };

  const contactInfo = [
    { icon: Phone, title: 'Mobile & WhatsApp', info: '+91 63038 66637' },
    { icon: Phone, title: 'Landline', info: '+91 40 4550 9587' },
    { icon: Mail, title: 'Email', info: 'deccanhiveonline@gmail.com' },
    { icon: MapPin, title: 'Address', info: 'Plot Number 99, HNO: 1-5-1069, Colony Rd, Father Balaiah Nagar, Alwal, Secunderabad, Hyderabad, Telangana 500010' },
    { icon: Clock, title: 'Business Hours', info: 'Mon - Sat: 9:00 AM - 7:00 PM' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/deccanhive.digitalagency', label: 'Instagram', color: 'bg-pink-500/10 border-pink-500/20 text-pink-400 hover:bg-pink-500/20' },
    { icon: Facebook, href: 'https://facebook.com/deccanhive', label: 'Facebook', color: 'bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20' },
    { icon: Linkedin, href: 'https://linkedin.com/company/deccanhive', label: 'LinkedIn', color: 'bg-sky-500/10 border-sky-500/20 text-sky-400 hover:bg-sky-500/20' },
    { icon: Youtube, href: 'https://youtube.com/@deccanhive', label: 'YouTube', color: 'bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/20' }
  ];

  return (
    <main className="w-full relative overflow-x-hidden text-foreground">
      <SEOHead 
        title="Contact Deccan Hive | Digital Marketing Agency Near Me"
        description="Get a free consultation with Hyderabad's top digital marketing agency. Call Deccan Hive today for social media, PR, and AI automation solutions."
        canonicalPath="/contact"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://deccanhive.com' }, 
        { name: 'Contact Us', url: 'https://deccanhive.com/contact' }
      ]} />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center px-4 pt-20 md:pt-24 overflow-hidden">
        <motion.div 
          className="container mx-auto text-center max-w-5xl"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="sr-only">Contact Deccan Hive - Get in Touch</h1>
            <span className="label-tag mb-4 md:mb-6 text-xs md:text-sm">Let's Connect</span>
            <GradualSpacing
              text="Get In Touch"
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground"
              duration={0.3}
              delayMultiple={0.03}
            />
            <p className="text-muted-foreground text-sm md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how our digital solutions can help you achieve your goals.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-6 md:py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="premium-card p-5 md:p-8 rounded-2xl"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-8">
                Send us a <span className="text-gradient-gold">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      aria-label="Your name"
                      aria-invalid={!!errors.name}
                      className={`bg-secondary border-border h-11 md:h-12 text-sm md:text-base rounded-xl ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={255}
                      aria-label="Your email address"
                      aria-invalid={!!errors.email}
                      className={`bg-secondary border-border h-11 md:h-12 text-sm md:text-base rounded-xl ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={200}
                  aria-label="Message subject"
                  className="bg-secondary border-border h-11 md:h-12 text-sm md:text-base rounded-xl"
                />
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={2000}
                    aria-label="Your message"
                    aria-invalid={!!errors.message}
                    className={`bg-secondary border-border resize-none text-sm md:text-base rounded-xl ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <Magnetic strength={0.3}>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground font-semibold h-11 md:h-12 text-sm md:text-base rounded-xl">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </Magnetic>
                {submissionStatus && (
                  <p className="text-center text-primary font-medium text-sm">{submissionStatus}</p>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <div className="premium-card p-5 md:p-8 rounded-2xl">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Contact <span className="text-gradient-gold">Info</span>
                </h2>
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm md:text-base mb-0.5">{item.title}</h3>
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-card p-4 md:p-6 rounded-2xl">
                <h3 className="font-bold text-sm md:text-base mb-3 md:mb-4 text-center">Follow Us</h3>
                <div className="grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 border rounded-xl p-2 md:p-3 transition-all ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-[10px] md:text-sm font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-gold">Global Reach</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              From Hyderabad to the world — we serve clients across continents with tailored digital solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="premium-card p-4 md:p-8 rounded-2xl"
          >
            <Suspense fallback={<div className="w-full aspect-[2/1] bg-secondary/30 rounded-lg animate-pulse" />}>
              <WorldMap
                lineColor="#d4a853"
                dots={MAP_DOTS}
              />
            </Suspense>
          </motion.div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
};

export default Contact;
