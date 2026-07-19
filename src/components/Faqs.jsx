import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of tiles do you offer?",
    answer:
      "We offer a wide range of ceramic, porcelain, floor, wall, bathroom, kitchen, outdoor, and decorative tiles suitable for residential and commercial projects.",
  },
  {
    question: "Do you provide delivery services?",
    answer:
      "Yes, we provide reliable delivery services across Pakistan to ensure your products arrive safely and on time.",
  },
  {
    question: "Can I visit your showroom before purchasing?",
    answer:
      "Absolutely! Our showroom displays a complete collection of tiles, sanitary ware, and interior products to help you choose the perfect design.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "We can recommend experienced installation professionals to ensure your tiles are installed with precision and quality.",
  },
  {
    question: "Are your tiles suitable for outdoor use?",
    answer:
      "Yes. We offer durable outdoor porcelain and anti-slip tiles designed to withstand weather conditions and heavy foot traffic.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can contact us by phone, email, or visit our showroom. Our team will provide a customized quotation based on your requirements.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className=" bg-[#EFECE8] ">
      <div className="max-w-[1450px] mx-auto px-5 lg:px-8 py-20">
         
        <div className="text-center mb-14">
          
          <h2 className="text-2xl lg:text-5xl font-medium text-[#332820]">
            Everything You Need to Know
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#FCFBFA] border border-gray-200"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-sm lg:text-lg font-regular text-[#332820] pr-5">
                    {faq.question}
                  </h3>

                  {isOpen ? (
                    <Minus className="flex-shrink-0 text-[#332820]" size={22} />
                  ) : (
                    <Plus className="flex-shrink-0 text-[#332820]" size={22} />
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 border-t border-gray-100 pt-3">
                    <p className="text-gray-700 text-sm md:text-md">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}