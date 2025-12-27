import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  description: string;
}

const leadership: TeamMember[] = [
  {
    name: 'Thurupu Praveen Kumar',
    role: 'Founder and CEO',
    initials: 'TPK',
    description: 'Visionary leader driving digital innovation',
  },
  {
    name: 'Gaddam Srinivas Murali',
    role: 'Co-founder, Marketing Head',
    initials: 'GSM',
    description: 'Strategic marketing expert and co-founder',
  },
];

const creative: TeamMember[] = [
  {
    name: 'Hari Priya Jaligam',
    role: 'Copy Writing, Content Creation',
    initials: 'HPJ',
    description: 'Creative wordsmith and content strategist',
  },
  {
    name: 'Karthik',
    role: 'Web Developer, UI/UX & SEO Expert',
    initials: 'K',
    description: 'Full-stack developer and digital experience specialist',
  },
  {
    name: 'Akshay Gaddam',
    role: 'Social Media Manager',
    initials: 'AG',
    description: 'Social media strategist and community builder',
  },
  {
    name: 'Sonali Sharma',
    role: 'Graphic Designer',
    initials: 'SS',
    description: 'Visual artist creating compelling brand experiences',
  },
];

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex flex-col text-left"
  >
    <div className="bg-background size-20 rounded-full border border-border/50 p-0.5 shadow-lg shadow-background/50 mb-3">
      <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
        <span className="text-lg font-heading font-bold text-primary">{member.initials}</span>
      </div>
    </div>
    <span className="block text-sm font-bold text-foreground">{member.name}</span>
    <span className="text-primary text-xs font-medium uppercase tracking-wide mt-1">{member.role}</span>
    {/* Added description subtly to maintain previous UI's clean look */}
    <p className="text-muted-foreground text-[10px] leading-relaxed mt-2 max-w-[180px]">
      {member.description}
    </p>
  </motion.div>
);

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="label-tag mb-4">The People Behind</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            MEET OUR <span className="text-gradient-gold">TEAM</span>
          </h2>
        </motion.div>

        <div>
          <h3 className="mb-6 text-lg font-medium text-foreground">Leadership</h3>
          {/* Maintained the original grid structure */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border/30 py-8 md:grid-cols-4">
            {leadership.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-6 text-lg font-medium text-foreground">Creative & Strategy</h3>
          {/* Maintained the original grid structure - fits 4 people perfectly */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border/30 py-8 md:grid-cols-4">
            {creative.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
