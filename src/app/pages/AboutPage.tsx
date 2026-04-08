import { motion } from 'motion/react';
import { Users, Target, Award, Heart } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional media production services that exceed client expectations and bring creative visions to life.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, ensuring quality and professionalism in all aspects of our work.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our team is driven by a genuine love for storytelling and creating visual content that resonates with audiences.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to understand their needs and deliver tailored solutions.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Cinematographer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Post-Production Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'David Park',
      role: 'Senior Photographer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 font-['Playfair_Display'] text-white">
            About Us
          </h1>
          <p className="mx-auto max-w-3xl text-gray-300">
            S&S Media Agency is a premier media production company dedicated to crafting 
            compelling visual stories that captivate audiences and deliver results.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 rounded-2xl border border-white/10 bg-slate-900/40 p-12 backdrop-blur-xl"
        >
          <h2 className="mb-6 font-['Playfair_Display'] text-white">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Founded in 2015, S&S Media Agency began with a simple vision: to create 
              extraordinary visual content that tells meaningful stories. What started as a 
              small team of passionate filmmakers has grown into a full-service production 
              company serving clients worldwide.
            </p>
            <p>
              Over the years, we've had the privilege of working on diverse projects ranging 
              from intimate weddings to large-scale commercial productions. Our commitment to 
              excellence and innovation has earned us recognition in the industry and the trust 
              of countless satisfied clients.
            </p>
            <p>
              Today, we continue to push creative boundaries, embrace new technologies, and 
              deliver exceptional results that exceed expectations. Every project we undertake 
              is an opportunity to create something remarkable.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-center font-['Playfair_Display'] text-white"
          >
            Our Values
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="rounded-xl border border-white/10 bg-slate-900/40 p-6 text-center backdrop-blur-xl"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                      <Icon className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="mb-12 text-center font-['Playfair_Display'] text-white">
            Meet Our Team
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-xl transition-all hover:border-blue-500/50"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-2 text-white">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
