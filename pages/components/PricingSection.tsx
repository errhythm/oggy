import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const PricingSection = () => {
  const pricingPlans = [
    { name: 'Basic', price: '$9', features: ['100 images/month', 'Email support'] },
    { name: 'Pro', price: '$29', features: ['500 images/month', 'Custom OG Image Templates', 'Priority support'] },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited images', 'Custom integrations', 'Dedicated account manager'] },
  ];

  return (
    <section className="py-12 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="flex flex-col justify-between bg-secondary hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-2xl h-full">
                  <CardContent className="p-8 flex-grow">
                    <motion.h3
                      className="text-2xl font-bold text-foreground mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {plan.name}
                    </motion.h3>
                    <motion.p
                      className="text-4xl font-bold text-primary mb-6"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {plan.price}
                    </motion.p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-center text-foreground"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 + featureIndex * 0.1 }}
                        >
                          <CheckCircle className="text-accent mr-3" size={20} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-8 bg-secondary mt-auto">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-3 transition-colors duration-300">
                      {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
