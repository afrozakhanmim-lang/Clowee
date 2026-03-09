import { motion } from "framer-motion";
import { Check } from "lucide-react";

const cloweeTasks = [
  "Total Investment",
  "Supply chain maintain for gifts (doll)",
  "Machine maintenance",
  "Machine technical support",
  "Calculate the profit",
];

const partnerTasks = [
  "Provide 3ft × 3ft space",
  "Provide Wi-Fi & electricity",
  "Handle sales & collect money",
  "Send sales & stock report (2× monthly)",
  "Refill dolls to machine & pay Clowee profit + doll cost",
];

const InvestmentSection = () => (
  <section className="section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Responsibility Breakdown
        </h2>
        <p className="text-muted-foreground text-lg">See exactly who does what.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 p-8"
        >
          <h3 className="font-heading font-bold text-xl text-foreground mb-6">What Clowee Does</h3>
          <ul className="space-y-3">
            {cloweeTasks.map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 p-8"
        >
          <h3 className="font-heading font-bold text-xl text-foreground mb-6">What Partner Does</h3>
          <ul className="space-y-3">
            {partnerTasks.map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InvestmentSection;
