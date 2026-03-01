import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const faqItems = [
  {
    id: 'item-1',
    question: 'What services does Deccan Hive offer?',
    answer: 'We provide 360° digital marketing solutions including paid advertising (Meta, Google, LinkedIn Ads), email & WhatsApp marketing, content creation, video production, web development, e-commerce solutions, and graphic design services.',
  },
  {
    id: 'item-2',
    question: 'How long does it take to see results from digital marketing?',
    answer: 'Results vary by service. Paid advertising can show immediate traffic within days. SEO and content marketing typically take 3-6 months for significant organic growth. We provide monthly reports to track your progress.',
  },
  {
    id: 'item-3',
    question: 'Do you work with small businesses?',
    answer: 'Absolutely! We specialize in helping micro and local businesses grow online. Our solutions are tailored to fit different budgets while maximizing ROI for businesses of all sizes.',
  },
  {
    id: 'item-4',
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing based on your needs. From one-time projects like website development to monthly retainer packages for ongoing marketing. Contact us for a customized quote based on your specific requirements.',
  },
  {
    id: 'item-5',
    question: 'How do I get started with Deccan Hive?',
    answer: 'Simply reach out through our contact form or WhatsApp. We\'ll schedule a free consultation to understand your business goals, analyze your current digital presence, and create a tailored strategy for growth.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="label-tag mb-4">FAQ</span>
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4 text-balance">Get answers to common questions about our digital marketing services and how we can help your business grow.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-12 max-w-xl"
        >
          <Accordion
            type="single"
            collapsible
            className="premium-card w-full rounded-2xl px-8 py-3"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-border/50 last:border-0"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-foreground font-medium py-5">{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-muted-foreground pb-4">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8 text-center">
            Can't find what you're looking for?{' '}
            <Link
              to="/contact"
              className="text-primary font-medium hover:underline"
            >
              Contact our team
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
