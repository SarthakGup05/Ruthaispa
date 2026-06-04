import React from 'react';
import { ShieldCheck, Eye, Lock, FileText } from 'lucide-react';
import { FadeIn } from '../../ui/motion';
import PetalDivider from '../../ui/PetalDivider';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Eye className="w-5 h-5 text-primary shrink-0 mt-1" />,
      title: "1. Information We Collect",
      content: "We collect basic contact information (name, phone number, email address) when you book a session or make an inquiry. Additionally, to ensure your physical safety during deep pressure therapies, we collect basic wellness and health information (such as recent surgeries, chronic back pain, or pregnancy status) during intake."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-1" />,
      title: "2. Medical Data Privacy",
      content: "All pre-massage questionnaires and physical therapy forms detailing muscle injuries, joint stiffness, or conditions are kept strictly confidential. This information is accessed solely by your assigned certified therapist and management to customize your Siamese healing ritual safely."
    },
    {
      icon: <Lock className="w-5 h-5 text-primary shrink-0 mt-1" />,
      title: "3. How We Use & Protect Data",
      content: "We use your contact logs to verify sessions, send SMS reminders, and coordinate therapist schedules. We never sell, lease, or distribute your email or phone contacts to third-party advertisers. All records are protected using secure server protocols to prevent unauthorized leaks."
    },
    {
      icon: <FileText className="w-5 h-5 text-primary shrink-0 mt-1" />,
      title: "4. Cookies & Site Analytics",
      content: "Our website uses minor cookies and logging analytics to save your light/dark theme preference and load pages faster on return visits. You can configure your browser to reject cookies, though some preferences (like dark mode toggle) may reset."
    }
  ];

  return (
    <article id="simulated-page-privacy-content" className="py-10 md:py-14 px-6 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <FadeIn direction="up" delay={0.05} duration={0.8} className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Privacy Sanctuary</span>
          <h2 className="text-3xl md:text-5xl mt-2 font-normal text-foreground">Data Safety & Trust</h2>
          <PetalDivider className="my-4" />
          <p className="text-muted-foreground text-sm max-w-xl mx-auto font-light leading-relaxed">
            Your physical and digital privacy are protected with absolute integrity. Learn how we handle your booking records.
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
          Last Updated: June 2026 • RUA Thai Spa Compliance Team
        </FadeIn>
      </div>
    </article>
  );
}
