import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How Much Will It Cost?",
      answer:
        "To get a better idea of the cost of what you want to build, give us a quick phone call. We’ll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc. Then we’ll be able to give you a ballpark figure. If you’re still interested, we’ll come to your place of business and come up with a firm quote..",
    },
    {
      question: "How Long It Takes To Design?",
      answer:
        "The time limit of any assignment is normally dictated by the client. If you have any time limit in mind we will attempt to assemble it for you. The common time period for project developemnent will be 1 month, however a client can customize those.",
    },
    {
      question: "How Do I Associate With IT Company?",
      answer:
        "The process begins when you contact us with your requirements. We analyze your requirements and respond to you. On the basis of the further discussion, you can choose an engagement model that suits you the best. After that, we begin the process of development.",
    },
    {
      question: "Can You Help My Current Site Look More Professional?",
      answer:
        "Yes. Give us your requirements and we have experienced expertise to help you give a new professional look that really wonders!",
    },
    {
      question: "When Do I Pay?",
      answer:
        "We manage multiple projects simultaneously, ensuring timely completion and providing comprehensive support and documentation to our valued clients. To efficiently handle expenses, we prefer collecting payments at the project's initiation.",
    },
  ];

  return (
    <div className="bg-black bg-opacity-60 py-10" id="faqs">
      <div className="container mx-auto px-4">
        {/* FAQ Header */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center">
          ＦＡＱ
        </h2>

        {/* FAQ Items */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-white-700 py-4 cursor-pointer transition-colors duration-300"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl text-white">{faq.question}</h3>
              <div
                className={`transform transition-transform duration-300  ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                } text-blue-400 text-2xl`}
              >
                +
              </div>
            </div>

            {/* Answer */}
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
              }}
              className="overflow-hidden text-white"
            >
              <p className="mt-2 px-2 backdrop-blur-3xl">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
