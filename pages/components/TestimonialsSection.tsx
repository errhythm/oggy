import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'John Doe', role: 'Designer', quote: 'This tool has revolutionized my workflow. I can create stunning visuals in minutes!', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=John%20Doe' },
    { name: 'Jane Smith', role: 'Marketing Manager', quote: 'The quality of images generated is incredible. It\'s like having a professional designer on demand.', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Jane%20Smith' },
    { name: 'Mike Johnson', role: 'Entrepreneur', quote: 'The custom solutions offered by the team have been a game-changer for our startup.', image: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Mike%20Johnson' },
  ];

  return (
    <section className="py-16 bg-background" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-foreground text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-secondary hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <p className="text-lg text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-4 flex items-center">
                        <div className="flex-shrink-0 mr-3">
                          <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="rounded-full" />
                        </div>
                        <div>
                          <p className="text-base font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
