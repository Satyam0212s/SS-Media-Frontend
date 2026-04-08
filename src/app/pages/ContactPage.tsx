import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import api from "../../api/axios";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await api.post("/api/enquiries", formData);

    alert("Enquiry sent successfully ✅");

    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send enquiry ❌");
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@ssmedia.agency',
      action: 'mailto:info@ssmedia.agency'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Office',
      details: '123 Media Street, Creative City, CA 90210',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      action: null
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
            Get In Touch
          </h1>
          <p className="mx-auto max-w-3xl text-gray-300">
            Have a project in mind? We'd love to hear from you. Send us a message and 
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 lg:col-span-1"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="rounded-xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="mb-2 text-white">{info.title}</h3>
                  {info.action ? (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.details}</p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl">
              <h2 className="mb-6 font-['Playfair_Display'] text-white">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="peer w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-transparent focus:border-blue-500 focus:outline-none"
                    />
                    <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-sm peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:text-sm">
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required
                      className="peer w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-transparent focus:border-blue-500 focus:outline-none"
                    />
                    <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-sm peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:text-sm">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-transparent focus:border-blue-500 focus:outline-none"
                    />
                    <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-sm peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:text-sm">
                      Phone Number
                    </label>
                  </div>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                    >
                      <option value="" className="bg-slate-900">Select Subject</option>
                      <option value="general" className="bg-slate-900">General Inquiry</option>
                      <option value="quote" className="bg-slate-900">Request Quote</option>
                      <option value="booking" className="bg-slate-900">Booking</option>
                      <option value="support" className="bg-slate-900">Support</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    rows={6}
                    required
                    className="peer w-full resize-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-transparent focus:border-blue-500 focus:outline-none"
                  />
                  <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-0.5rem] peer-focus:text-sm peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:text-sm">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-8 py-3 text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
