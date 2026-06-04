import React from 'react';
import { CalendarRange, ShieldAlert, HeartHandshake, Award } from 'lucide-react';
import { FadeIn } from '../../ui/motion';
import PetalDivider from '../../ui/PetalDivider';

export default function TermsOfService() {
  const sections = [
    {
      icon: <CalendarRange className="w-5 h-5 text-primary shrink-0 mt-1" />,
      title: "1. Booking slots & Late Arrivals",
      content: "All sessions are reserved exclusively for you. We highly recommend arriving 15 minutes before your scheduled start. If you arrive late, your session duration will be reduced proportionally to protect subsequent guest bookings. The full rate of the treatment remains payable."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-primary shrink-0 mt-1" />,
      title: "2. Cancellation & Rescheduling",
      content: "Since we coordinate therapist times specifically for your booking, we require a minimum of 24 hours notice for any cancellation or rescheduling of appointments. Modifications within 24 hours of the session may result in booking deposit forfeitures."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-1" />,
      title: "3. Health Disclaimers & Disclosures",
      content: "Traditional Thai massage (Nuad Thai) utilizes intense stretching, bending, and deep pressure. You must fully disclose all medical conditions, implants, heart conditions, pregnancy, or recent joint injuries during intake. RUA Thai Spa is not liable for issues arising from undisclosed health conditions."
    },
    {
      icon: <Award className="w-5 h-5 text-primary shrink-0 mt-1" />,
      title: "4. Conduct & Sanctuary Etiquette",
      content: "Our space is a quiet, meditative wellness sanctuary. Please silence all mobile phones. We practice zero-tolerance for any inappropriate conduct, harassment, or non-therapeutic demands. Misconduct will result in immediate termination of the session without refund."
    }
  ];

  return (
    <article id="simulated-page-terms-content" className="py-10 md:py-14 px-6 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <FadeIn direction="up" delay={0.05} duration={0.8} className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Sanctuary Rules</span>
          <h2 className="text-3xl md:text-5xl mt-2 font-normal text-foreground">Terms of Service</h2>
          <PetalDivider className="my-4" />
          <p className="text-muted-foreground text-sm max-w-xl mx-auto font-light leading-relaxed">
            By reserving a healing session at RUA Thai Spa, you agree to our booking rules and sanctuary etiquette.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {sections.map((sec, idx) => (
            <FadeIn key={idx} direction="up" delay={0.1 * idx} duration={0.8} className="flex gap-4 p-4 md:p-5 bg-card/75 dark:bg-card/30 rounded-2xl border border-border/25 backdrop-blur-sm">
              {sec.icon}
              <div className="flex flex-col gap-1 text-left">
                <h3 className="font-serif text-lg font-semibold text-foreground">{sec.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{sec.content}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.5} duration={0.8} className="mt-8 text-center border-t border-border/10 pt-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          Last Updated: June 2026 • RUA Thai Spa sanctuary guidelines
        </FadeIn>
      </div>
    </article>
  );
}
