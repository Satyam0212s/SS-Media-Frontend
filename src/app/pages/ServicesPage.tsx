import { motion } from "framer-motion";
import { Camera, Video, Film, Scissors } from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      icon: Camera,
      title: "Photography",
      description:
        "Professional photography services for events, portraits, commercial projects, and more.",
      features: [
        "Event Photography",
        "Portrait Sessions",
        "Product Photography",
        "Real Estate",
        "Fashion Photography",
      ],
    },
    {
      icon: Video,
      title: "Videography",
      description:
        "High-quality video production that tells your story from concept to delivery.",
      features: [
        "Event Videography",
        "Corporate Videos",
        "Music Videos",
        "Documentary",
        "Wedding Films",
      ],
    },
    {
      icon: Film,
      title: "Production",
      description:
        "Full-scale production services with experienced crew and equipment.",
      features: [
        "Pre-Production Planning",
        "Location Scouting",
        "Casting",
        "Equipment Rental",
        "On-Set Direction",
      ],
    },
    {
      icon: Scissors,
      title: "Post-Production",
      description:
        "Transform raw footage into polished masterpieces with editing and VFX.",
      features: [
        "Video Editing",
        "Color Grading",
        "Sound Design",
        "Motion Graphics",
        "Visual Effects",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-3xl text-gray-300">
            We offer complete media solutions from concept to final delivery.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl hover:border-blue-500/50"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600/20">
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>

                <h2 className="mb-4 text-xl font-semibold text-white">
                  {service.title}
                </h2>

                <p className="mb-6 text-gray-300">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-300"
                    >
                      <span className="mr-2 h-2 w-2 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
