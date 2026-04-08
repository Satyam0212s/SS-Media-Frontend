import { BookingSection } from '../components/BookingSection';
import { motion } from 'motion/react';

export function BookYourSessionPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-6 font-['Playfair_Display'] text-white">
            Book Your Session
          </h1>
          <p className="mx-auto max-w-3xl text-gray-300">
            Choose your preferred date and time slot to schedule a session with our team. 
            We'll get back to you shortly to confirm your booking.
          </p>
        </motion.div>

        {/* Booking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BookingSection />
        </motion.div>
      </div>
    </div>
  );
}
