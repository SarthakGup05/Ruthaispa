import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PetalDivider from '../../ui/PetalDivider';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      question: "What should I wear during my Thai massage session?",
      answer: "For traditional dry Thai massage, we provide loose, comfortable, custom cotton attire. For oil-based therapies, we recommend undressing to your comfort level; professional draping is practiced at all times."
    },
    {
      question: "When should I arrive for my appointment?",
      answer: "We recommend arriving 15 minutes prior to your scheduled slot. This allows you to check in, sip our post-therapy butterfly pea tea, and relax in the lounges before your session starts."
    },
    {
      question: "Are your therapists trained in authentic Thai techniques?",
      answer: "Yes, 100% of our practitioners are fully certified, with primary training completed directly at the Wat Pho Traditional Medical School in Bangkok, Thailand."
    },
    {
      question: "What is your reservation and cancellation policy?",
      answer: "Since treatments are reserved exclusively for you, we require a 24-hour notice for cancellations or modifications. Rescheduling inside the 24-hour window may incur a fee."
    },
    {
      question: "Can I customize the pressure of the treatment?",
      answer: "Absolutely. Before starting, your practitioner will review your preferences (light, medium, deep, or firm pressure) and key problem areas to target during the ritual."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Spa Etiquette</span>
          <h2 className="text-3xl md:text-5xl mt-2 font-normal">Common Questions</h2>
          <PetalDivider />
          <p className="text-muted-foreground text-sm max-w-xl mx-auto mt-2 font-light">
            Read through our wellness guidance to prepare for your journey into absolute serenity.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl bg-card/45 transition-all duration-300 ${
                  isOpen ? 'border-primary bg-gradient-to-r from-card to-primary/5 shadow-md shadow-primary/5' : 'border-border/15 hover:border-primary/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer font-serif text-base md:text-lg font-medium text-foreground select-none"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-primary shrink-0 ml-4" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 ml-4" />}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-40 border-t border-border/10' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
