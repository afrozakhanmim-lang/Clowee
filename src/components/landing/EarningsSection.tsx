import { motion } from "framer-motion";

const weeklyData = [
  { step: "Cost Per Play", explanation: "The amount a customer pays for one play", amount: "৳25" },
  { step: "Average Plays Per Day", explanation: "On average, about 120 people play the machine daily", amount: "120 plays" },
  { step: "Daily Revenue", explanation: "120 plays × ৳25", amount: "৳3,000 per day" },
  { step: "Weekly Revenue (7 Days)", explanation: "৳3,000 × 7 days", amount: "৳21,000 per week" },
];

const monthlyData = [
  { step: "Monthly Revenue (30 Days)", explanation: "৳3,000 × 30 days", amount: "≈ ৳90,000 per month" },
  { step: "Estimated Net Profit", explanation: "Profit after basic operating costs", amount: "৳45,000 – ৳50,000" },
  { step: "Partner Profit Share (50%)", explanation: "Partner receives 50% of the net profit", amount: "৳22,000 – ৳25,000 per month" },
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

      <div className="space-y-8">
        {/* Weekly Earnings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-6 md:p-8"
        >
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">
            Weekly Earnings Overview
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground text-sm md:text-base">Income Step</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground text-sm md:text-base hidden md:table-cell">Explanation</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground text-sm md:text-base">Estimated Amount (BDT)</th>
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((row) => (
                  <tr key={row.step} className="border-b border-border/50">
                    <td className="py-4 px-4 text-foreground">
                      <div className="font-medium text-sm md:text-base">{row.step}</div>
                      <div className="text-xs text-muted-foreground md:hidden mt-1">{row.explanation}</div>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground hidden md:table-cell">{row.explanation}</td>
                    <td className="py-4 px-4 text-right text-sm md:text-base font-bold text-foreground">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Monthly Earnings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-6 md:p-8"
        >
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">
            Monthly Earnings Overview
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground text-sm md:text-base">Income Step</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground text-sm md:text-base hidden md:table-cell">Explanation</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground text-sm md:text-base">Estimated Amount (BDT)</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((row) => (
                  <tr key={row.step} className="border-b border-border/50">
                    <td className="py-4 px-4 text-foreground">
                      <div className="font-medium text-sm md:text-base">{row.step}</div>
                      <div className="text-xs text-muted-foreground md:hidden mt-1">{row.explanation}</div>
                    </td>
                    <td className="py-4 px-4 text-sm text-muted-foreground hidden md:table-cell">{row.explanation}</td>
                    <td className="py-4 px-4 text-right text-sm md:text-base font-bold text-foreground">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EarningsSection;
