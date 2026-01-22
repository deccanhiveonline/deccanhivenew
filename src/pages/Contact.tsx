import { useState, lazy, Suspense } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Linkedin, Youtube, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { Magnetic } from '@/components/ui/magnetic';
import FAQSection from '@/components/FAQSection';
import SEOHead from '@/components/SEOHead';
import { OrganizationSchema } from '@/components/JsonLd';
import { z } from 'zod';

const WorldMap = lazy(() => import('@/components/ui/world-map').then(module => ({ default: module.WorldMap })));

const MAP_DOTS = [
  { start: { lat: 17.385, lng: 78.4867 }, end: { lat: 51.5074, lng: -0.1278 } }, // London
  { start: { lat: 17.385, lng: 78.4867 }, end: { lat: 40.7128, lng: -74.006 } }, // New York
  { start: { lat: 17.385, lng: 78.4867 }, end: { lat: 25.2048, lng: 55.2708 } }, // Dubai
  { start: { lat: 17.385, lng: 78.4867 }, end: { lat: 1.3521, lng: 103.8198 } }, // Singapore
  { start: { lat: 17.385, lng: 78.4867 }, end: { lat: -33.8688, lng: 151.2093 } }, // Sydney
];

// UPDATED: Schema with new fields
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Valid phone number is required").max(15),
  company: z.string().trim().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000)
});

const Contact = () => {
  // UPDATED: Form state
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    company: '', 
    service: '', 
    message: '' 
  });
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    // Replace access_key with your actual Web3Forms key
    const json = JSON.stringify({ 
      ...result.data, 
      access_key: "6e27293d-8692-461d-a764-1b1ddc4d3cc0",
      subject: `New Lead: ${result.data.service} - ${result.data.company || result.data.name}`
    });
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      }).then(r => r.json());
      
      if (res.success) {
        setSubmissionStatus("Message sent successfully!");
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
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
    { icon: MapPin, title: 'Address', info: 'Beside Pochamma Temple Alwal Rd, Anand Rao Nagar, Srilaxmi Nagar, Alwal, Secunderabad, Hyderabad, Telangana 500010' },
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
        title="Contact Deccan Hive | Get a Quote Today"
        description="Contact Hyderabad's best digital marketing agency. Fill out the form for services in SEO, PPC, Web Development, and AI Automation."
        canonicalPath="/contact"
      />
      <OrganizationSchema />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center px-4 pt-20 md:pt-24">
        <div className="container mx-auto text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-tag mb-4 md:mb-6 text-xs md:text-sm">Let's Connect</span>
            <GradualSpacing
              text="Get In Touch"
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground"
              duration={0.3}
              delayMultiple={0.03}
            />
            <p className="text-muted-foreground text-sm md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed">
              Ready to grow? Fill out the form below and we'll craft a strategy for your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 md:py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            
            {/* Contact Form Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="premium-card p-6 md:p-8 rounded-2xl h-fit"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                Project <span className="text-gradient-gold">Inquiry</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.name}
                      className={`bg-secondary border-border h-12 rounded-xl px-4 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs px-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.email}
                      className={`bg-secondary border-border h-12 rounded-xl px-4 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs px-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.phone}
                      className={`bg-secondary border-border h-12 rounded-xl px-4 ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs px-1">{errors.phone}</p>}
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <Input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-secondary border-border h-12 rounded-xl px-4"
                    />
                  </div>

                  {/* Service Selection - Spans 2 columns on tablet/desktop */}
                  <div className="md:col-span-2 space-y-1.5 relative">
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full h-12 appearance-none bg-secondary border border-border text-foreground rounded-xl px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${errors.service ? 'border-red-500' : ''} ${formData.service === '' ? 'text-muted-foreground' : 'text-foreground'}`}
                      >
                        <option value="" disabled>Select Service Needed</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Paid Advertising (PPC)">Paid Advertising (PPC)</option>
                        <option value="SEO & Content">SEO & Content Strategy</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Branding & Design">Branding & Graphic Design</option>
                        <option value="Marketing Automation">Marketing Automation (AI)</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                    {errors.service && <p className="text-red-500 text-xs px-1">{errors.service}</p>}
                  </div>

                  {/* Message - Spans 2 columns */}
                  <div className="md:col-span-2 space-y-1.5">
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project goals..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.message}
                      className={`bg-secondary border-border resize-none rounded-xl p-4 ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs px-1">{errors.message}</p>}
                  </div>

                </div>

                <Magnetic strength={0.3}>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground font-semibold h-12 rounded-xl text-base mt-2">
                    Send Inquiry
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </Magnetic>
                
                {submissionStatus && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center font-medium text-sm p-3 rounded-lg ${submissionStatus.includes('success') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}
                  >
                    {submissionStatus}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Info & Socials Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 flex flex-col"
            >
              <div className="premium-card p-6 md:p-8 rounded-2xl flex-1">
                <h2 className="text-xl md:text-2xl font-bold mb-6">
                  Contact <span className="text-gradient-gold">Info</span>
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-card p-6 md:p-8 rounded-2xl">
                <h3 className="font-bold text-base mb-4 text-center md:text-left">Follow Us</h3>
                <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-2 gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 border rounded-xl p-3 transition-all hover:scale-105 active:scale-95 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-[10px] md:text-sm font-medium hidden md:block">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-gold">Global Reach</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              From Hyderabad to the world — we serve clients across continents.
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
              <WorldMap lineColor="#d4a853" dots={MAP_DOTS} />
            </Suspense>
          </motion.div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
};

export default Contact;
