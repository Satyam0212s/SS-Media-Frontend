import { useEffect, useRef, useState } from "react";
import api from "../../api/axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  text: string;
  rating: number;
};

export function TestimonialsSection() {
  const sliderRef = useRef<Slider>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await api.get("/api/testimonials");
        setTestimonials(res.data);
      } catch (error) {
        console.error("Failed to load testimonials", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) {
    return (
      <section className="px-4 py-20 text-center text-white">
        Loading testimonials...
      </section>
    );
  }

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-['Playfair_Display'] text-4xl text-white md:text-5xl">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400">
            What our clients say about us
          </p>
        </div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="rounded-2xl border border-white/20 bg-slate-900/40 p-6 backdrop-blur-xl">
                  <Quote className="mb-4 h-10 w-10 text-blue-500 opacity-50" />

                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="mb-6 text-gray-300">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/80 p-3 text-white backdrop-blur-xl transition-all hover:bg-slate-800"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 z-10 translate-x-4 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/80 p-3 text-white backdrop-blur-xl transition-all hover:bg-slate-800"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
