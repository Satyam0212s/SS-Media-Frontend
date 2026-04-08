import { Hero } from '../components/Hero';
import { BookingSection } from '../components/BookingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <BookingSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
