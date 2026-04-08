import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import api from "../../api/axios";

export function BookingSection() {
  const today = new Date();

  // 🔹 Calendar navigation state
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // 🔹 Calendar calculations
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // 🔹 Month navigation
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Submit booking
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert("Please select date and time");
      return;
    }

    try {
      await api.post("/api/bookings", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.service,
        message: formData.message,

        // ✅ MUST MATCH Booking.java
        selectedDate: selectedDate.toISOString().split("T")[0],
        selectedTime: selectedTime,
      });

      alert("Booking Successful! ✅");

      // reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setSelectedDate(null);
      setSelectedTime(null);
    } catch (error) {
      console.error(error);
      alert("Booking failed. Please try again ❌");
    }
  };

  return (
    <section className="px-4 py-20" id="booking">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-['Playfair_Display'] text-4xl text-white md:text-5xl">
            Book Your Session
          </h2>
          <p className="text-xl text-gray-400">
            Choose your preferred date and time
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT: Calendar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/20 bg-slate-900/40 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                <h3 className="text-xl text-white">Select Date</h3>
              </div>

              {/* Month Navigation */}
              <div className="mb-4 flex items-center justify-between">
                <button
                  onClick={goToPrevMonth}
                  className="rounded-lg px-3 py-1 text-white hover:bg-white/10"
                >
                  ◀
                </button>

                <div className="text-lg text-white">
                  {new Date(currentYear, currentMonth).toLocaleDateString(
                    "en-US",
                    { month: "long", year: "numeric" }
                  )}
                </div>

                <button
                  onClick={goToNextMonth}
                  className="rounded-lg px-3 py-1 text-white hover:bg-white/10"
                >
                  ▶
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d} className="text-center text-sm text-gray-400">
                    {d}
                  </div>
                ))}

                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={i} />
                ))}

                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1;
                  const date = new Date(currentYear, currentMonth, day);

                  const isPast =
                    date <
                    new Date(
                      today.getFullYear(),
                      today.getMonth(),
                      today.getDate()
                    );

                  const isSelected =
                    selectedDate?.getDate() === day &&
                    selectedDate?.getMonth() === currentMonth &&
                    selectedDate?.getFullYear() === currentYear;

                  return (
                    <button
                      key={day}
                      onClick={() => !isPast && setSelectedDate(date)}
                      disabled={isPast}
                      className={`aspect-square rounded-lg p-2 text-sm transition-all ${
                        isPast
                          ? "cursor-not-allowed text-gray-600"
                          : isSelected
                          ? "bg-blue-600 text-white"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            <div className="rounded-2xl border border-white/20 bg-slate-900/40 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <h3 className="text-xl text-white">Select Time</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {timeSlots.map((time) => {
                  const isSelected = selectedTime === time;

                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-lg px-4 py-3 text-sm transition-all ${
                        isSelected
                          ? "border-2 border-blue-500 bg-blue-600 text-white"
                          : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="rounded-2xl border border-white/20 bg-slate-900/40 p-6 backdrop-blur-xl">
            <h3 className="mb-6 text-xl text-white">Enquiry Details</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-white/5 px-4 py-3 text-white"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-white/5 px-4 py-3 text-white"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-white/5 px-4 py-3 text-white"
                required
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-white/5 px-4 py-3 text-white"
                required
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="photography">Photography</option>
                <option value="videography">Videography</option>
                <option value="production">Production</option>
                <option value="post-production">Post Production</option>
              </select>

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full rounded-lg bg-white/5 px-4 py-3 text-white"
                required
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
