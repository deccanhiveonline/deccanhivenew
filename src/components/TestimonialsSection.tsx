"use client";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "Deccan Hive transformed our digital presence completely. Our revenue increased by 400% in just 8 months!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Rajesh Kumar",
    role: "Kumar Electronics",
  },
  {
    text: "Professional team with exceptional results. They understand local market dynamics perfectly.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Priya Sharma",
    role: "Sharma Textiles",
  },
  {
    text: "Best investment we made for our business. The ROI speaks for itself - highly recommended!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Mohammed Ali",
    role: "Ali Traders",
  },
  {
    text: "Outstanding service and support. They helped us reach customers we never thought possible.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Sneha Patel",
    role: "Patel Enterprises",
  },
  {
    text: "The team's expertise in digital marketing is unmatched. Our social media presence skyrocketed!",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Vikram Singh",
    role: "Singh Motors",
  },
  {
    text: "From strategy to execution, everything was perfect. Truly a partner in our growth journey.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Ananya Reddy",
    role: "Reddy Fashion House",
  },
  {
    text: "Deccan Hive delivered exceptional results that transformed our online presence completely.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Arjun Mehta",
    role: "Mehta Industries",
  },
  {
    text: "Their Google Ads campaigns brought us 200+ qualified leads per month. Amazing work!",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Kavitha Nair",
    role: "Nair Healthcare",
  },
  {
    text: "Professional photography and marketing services that elevated our brand to the next level.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Suresh Rao",
    role: "Rao Hospitality",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">
              Testimonials
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mt-5 text-center text-foreground">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} reverse={false} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} reverse={true} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} reverse={false} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
