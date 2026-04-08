import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does S&S Media Agency offer?',
      answer:
        'We offer comprehensive media services including professional photography, videography, production, and post-production. Our team specializes in commercial shoots, brand content, events, and creative campaigns tailored to your specific needs.',
    },
    {
      question: 'How far in advance should I book a session?',
      answer:
        'We recommend booking at least 2-3 weeks in advance to ensure availability, especially for larger projects. However, we also accommodate last-minute requests when possible. Contact us to check our current schedule.',
    },
    {
      question: 'What is included in your packages?',
      answer:
        'Our packages vary depending on the service type and can be customized to your needs. Typically, they include pre-production planning, the shoot itself, professional editing, and final delivery of high-resolution files. We also offer add-ons like additional editing hours, expedited delivery, and usage rights.',
    },
    {
      question: 'Do you provide on-location services?',
      answer:
        'Yes! We provide both studio and on-location services. Our team is equipped with professional-grade portable equipment and can travel to your desired location within the region. Additional travel fees may apply for locations outside our standard service area.',
    },
    {
      question: 'What is your turnaround time?',
      answer:
        'Standard turnaround time is 7-14 business days depending on the project scope. We also offer expedited services for urgent projects at an additional fee. Delivery times are discussed and agreed upon during the booking process.',
    },
    {
      question: 'Can I request revisions?',
      answer:
        'Absolutely! We include up to 2 rounds of revisions in all our packages to ensure you are completely satisfied with the final output. Additional revisions can be requested at our standard hourly rate.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-['Playfair_Display'] text-4xl text-white md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">Everything you need to know</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/20 bg-slate-900/40 backdrop-blur-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
              >
                <span className="pr-8 text-lg text-white">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-6 w-6 text-blue-500" />
                  ) : (
                    <Plus className="h-6 w-6 text-blue-500" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="border-t border-white/10 p-6 pt-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
