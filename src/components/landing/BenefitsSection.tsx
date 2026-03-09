import { motion } from "framer-motion";
import { CircleDollarSign, Settings, Headphones, Smile, Baby, RotateCcw, Sparkles, Share2 } from "lucide-react";

const benefits = [
  { icon: CircleDollarSign, text: "Zero Investment" },
  { icon: Settings, text: "Zero Operational Hassle" },
  { icon: Headphones, text: "Fully Managed by i3 Technologies" },
  { icon: Smile, text: "Increases Customer Waiting Engagement" },
  { icon: Baby, text: "Kids-Friendly Environment" },
  { icon: RotateCcw, text: "Boosts Repeat Visits" },
  { icon: Sparkles, text: "Adds Modern Brand Value" },
  { icon: Share2, text: "Creates Social Media Moments" },
];

const BenefitsSection = () => (
  <section className="section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Why Restaurants Love <span className="text-primary">Clowee</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <b.icon className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground">{b.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
