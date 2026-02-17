import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Users, DollarSign } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradualSpacing } from '@/components/ui/gradual-spacing';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/JsonLd'; // FIXED: Import

const Portfolio = () => {
  // Parallax Logic
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const portfolioItems = [
    { title: 'E-commerce Growth Campaign', client: 'Kumar Electronics', challenge: 'Local electronics retailer needed to increase online sales by 300%', result: '450% ROI achieved with ₹50L+ revenue generated', metrics: { roi: '450%', revenue: '₹50L+', leads: '2,500+' }, tags: ['Google Ads', 'Meta Ads', 'E-commerce'] },
    { title: 'B2B Lead Generation', client: 'TechSolutions Pvt Ltd', challenge: 'Tech startup required 200+ qualified leads monthly', result: '250+ qualified leads per month with 35% conversion rate', metrics: { roi: '380%', leads: '2,000+', conversion: '35%' }, tags: ['LinkedIn Ads', 'Content Marketing', 'B2B'] },
    { title: 'Restaurant Chain Transformation', client: 'Spice Garden Restaurants', challenge: 'Restaurant chain needed to increase brand awareness', result: '500K+ monthly reach with 40% increase in foot traffic', metrics: { roi: '320%', reach: '500K+', traffic: '+40%' }, tags: ['Social Media', 'Influencer Marketing', 'Local SEO'] },
    { title: 'Fashion Brand Launch', client: 'Trending Styles', challenge: 'New fashion brand needed to build online presence', result: '100K+ followers and ₹25L+ sales in first year', metrics: { roi: '420%', followers: '100K+', sales: '₹25L+' }, tags: ['Instagram Marketing', 'Pinterest Ads', 'UGC'] },
  ];

  return (
    <main className="w-full relative overflow-x-hidden text-foreground">
      <SEOHead 
        title="Our Work | Success Stories in Digital Marketing & PR"
        description="See how Deccan Hive helps businesses grow. From 'Deccan Marketing' strategies to advanced AI automation, explore our case studies in social media and PR."
        canonicalPath="/portfolio"
      />
      {/* FIXED: Added BreadcrumbSchema */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://deccanhive.com' }, 
        { name: 'Portfolio', url: 'https://deccanhive.com/portfolio' }
      ]} />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 pt-24 overflow-hidden">
        <motion.div 
          className="container mx-auto text-center max-w-5xl"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* FIXED: Added Hidden H1 */}
            <h1 className="sr-only">Our Success Stories & Case Studies</h1>

            <span className="label-tag mb-6">Proven Results</span>
            <GradualSpacing text="SUCCESS STORIES" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground" duration={0.3} delayMultiple={0.03} />
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto text-pretty">Real results for real businesses. Discover how we've helped our clients achieve remarkable growth.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          >
            {[{ icon: TrendingUp, num: '500+', label: 'Projects' }, { icon: DollarSign, num: '₹100Cr+', label: 'Revenue' }, { icon: BarChart3, num: '400%', label: 'Avg ROI' }, { icon: Users, num: '98%', label: 'Satisfaction' }].map((stat, i) => (
              <div key={i} className="premium-card p-4 text-center"><stat.icon className="w-6 h-6 text-primary mx-auto mb-2" /><div className="text-2xl font-bold text-primary">{stat.num}</div><div className="text-xs text-muted-foreground">{stat.label}</div></div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Case Studies with Staggered Reveal */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }} 
                viewport={{ once: true, margin: "-50px" }} 
                className="premium-card p-8 group"
              >
                <div className="flex flex-wrap gap-2 mb-4">{item.tags.map((tag, i) => (<span key={i} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">{tag}</span>))}</div>
                <h3 className="text-xl font-bold mb-2 text-balance group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">Client: {item.client}</p>
                <div className="space-y-3 mb-6">
                  <div><span className="text-xs text-muted-foreground uppercase">Challenge:</span><p className="text-sm text-foreground/80 text-pretty">{item.challenge}</p></div>
                  <div><span className="text-xs text-muted-foreground uppercase">Results:</span><p className="text-sm text-foreground/80 text-pretty">{item.result}</p></div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">{Object.entries(item.metrics).map(([key, value], i) => (<div key={i} className="text-center"><div className="text-lg font-bold text-primary">{value}</div><div className="text-xs text-muted-foreground capitalize">{key}</div></div>))}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
