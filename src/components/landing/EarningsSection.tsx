import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const earningsData = [
  { step: "Cost Per Play", explanation: "The amount a customer pays for one play", amount: "৳25" },
  { step: "Average Plays Per Day", explanation: "On average, about 120 people play the machine daily", amount: "120 plays" },
  { step: "Daily Revenue", explanation: "120 plays × ৳25", amount: "৳3,000 per day", highlight: true },
  { step: "Weekly Revenue (7 Days)", explanation: "৳3,000 × 7 days", amount: "৳21,000 per week", highlight: true },
  { step: "Monthly Revenue (30 Days)", explanation: "৳3,000 × 30 days", amount: "≈ ৳90,000 per month", highlight: true },
  { step: "Estimated Net Profit", explanation: "Profit after basic operating costs", amount: "৳45,000 – ৳50,000", highlight: true },
  { step: "Partner Profit Share (50%)", explanation: "Partner receives 50% of the net profit", amount: "৳22,000 – ৳25,000 per month", highlight: true },
];

const EarningsSection = () => (
  <section id="earnings" className="section-padding section-alt-bg">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          How Much Can You Earn?
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl border border-border p-6 md:p-8 overflow-x-auto"
      >
        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6 text-center">
          Estimated Earnings Overview
        </h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                <th className="text-left py-4 px-4 font-heading font-bold text-foreground text-sm md:text-base">Income Step</th>
                <th className="text-left py-4 px-4 font-heading font-bold text-foreground text-sm md:text-base hidden md:table-cell">Explanation</th>
                <th className="text-right py-4 px-4 font-heading font-bold text-foreground text-sm md:text-base">Amount (BDT)</th>
              </tr>
            </thead>
            <tbody>
              {earningsData.map((row, index) => (
                <tr key={row.step} className="border-b border-purple-200/50 dark:border-purple-800/50 hover:bg-purple-100/50 dark:hover:bg-purple-900/20 transition-colors">
                  <td className="py-4 px-4 text-foreground">
                    <div className="font-semibold text-sm md:text-base">{row.step}</div>
                    <div className="text-xs text-muted-foreground md:hidden mt-1">{row.explanation}</div>
                  </td>
                  <td className="py-4 px-4 text-sm text-muted-foreground hidden md:table-cell">{row.explanation}</td>
                  <td className={`py-4 px-4 text-right text-sm md:text-base ${
                    row.highlight ? 'font-heading font-bold text-primary' : 'text-foreground font-medium'
                  }`}>
                    {row.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl gradient-primary p-5 text-center text-primary-foreground">
          <TrendingUp className="w-6 h-6 mx-auto mb-2" />
          <p className="text-xs font-medium mb-1 opacity-90">Your 50% Share</p>
          <p className="text-2xl md:text-3xl font-heading font-extrabold">৳22,000 – ৳25,000</p>
          <p className="text-xs mt-1 opacity-90">per month</p>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Earn <strong className="text-foreground">20,000–30,000 BDT Monthly</strong> Without Investment
        </p>
        <p className="text-center text-xs text-muted-foreground mt-2">
          * Profit is calculated <strong className="text-foreground">twice monthly</strong> after deducting all costs (doll cost, electricity, etc.). Actual earnings vary by location and traffic.
        </p>
      </motion.div>
    </div>
  </section>
);

export default EarningsSection;
