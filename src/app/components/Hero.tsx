import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1673557478884-5017643d6b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYW1lcmElMjBsZW5zJTIwc3R1ZGlvfGVufDF8fHx8MTc2NjI3MTAyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional camera lens"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="mb-6 font-['Playfair_Display'] text-5xl text-white md:text-7xl">
            Elevate Your Brand with S&S Media Agency
          </h1>
          <p className="mb-10 text-xl text-gray-300 md:text-2xl">
            Professional media coverage tailored to your vision.
          </p>
          <motion.button
            onClick={() => navigate('/book-your-session')}
            className="group relative overflow-hidden rounded-full bg-blue-600 px-10 py-4 text-lg text-white shadow-lg shadow-blue-600/50 transition-all hover:shadow-xl hover:shadow-blue-600/60"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Book a Slot</span>
            <motion.div
              className="absolute inset-0 bg-blue-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-12 w-6 rounded-full border-2 border-white/30">
          <motion.div
            className="mx-auto mt-2 h-2 w-2 rounded-full bg-white"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}