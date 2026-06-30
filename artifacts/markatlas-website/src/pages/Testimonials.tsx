import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    company: "FreshCart India",
    role: "Founder & CEO",
    rating: 5,
    text: "Markatlas delivered our full e-commerce platform in under 10 weeks. The code quality was exceptional — our dev team took it over after launch and had zero issues understanding the architecture. They don't just build what you ask for; they build what you actually need.",
    avatar: "RK",
    color: "bg-blue-500"
  },
  {
    name: "Sneha Anand",
    company: "MedTrack Solutions",
    role: "CTO",
    rating: 5,
    text: "We needed a healthcare data management application with strict compliance requirements. The team at Markatlas understood our regulatory constraints immediately and built a system that is both powerful and audit-ready. Communication throughout was flawless.",
    avatar: "SA",
    color: "bg-teal-500"
  },
  {
    name: "Harish Nambiar",
    company: "LogixPro Freight",
    role: "Director of Operations",
    rating: 5,
    text: "Our logistics dashboard used to be a patchwork of spreadsheets. Markatlas replaced the entire workflow with a real-time web application that our operations team now cannot imagine working without. The ROI was visible within the first month.",
    avatar: "HN",
    color: "bg-orange-500"
  },
  {
    name: "Divya Menon",
    company: "EduSpark Learning",
    role: "Product Manager",
    rating: 5,
    text: "We hired Markatlas to rebuild our student portal from scratch. They took a deeply broken legacy system and transformed it into a clean, performant application. The new portal handles 5x the traffic with half the infrastructure cost.",
    avatar: "DM",
    color: "bg-purple-500"
  },
  {
    name: "Anil Choudhary",
    company: "FinEdge Capital",
    role: "Head of Technology",
    rating: 5,
    text: "Security and performance are non-negotiable in fintech. Markatlas understood this from day one. Their backend team built our transaction processing module with rigorous security practices, and it has operated without a single incident since launch.",
    avatar: "AC",
    color: "bg-green-600"
  },
  {
    name: "Priyanka Joshi",
    company: "RetailVision",
    role: "Co-Founder",
    rating: 5,
    text: "What sets Markatlas apart is their honesty. They pushed back on a few of our initial ideas and explained why — and they were right every time. You want a development partner that tells you the truth, not just what you want to hear.",
    avatar: "PJ",
    color: "bg-rose-500"
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [featured, setFeatured] = useState(0);

  const prev = () => setFeatured((f) => (f - 1 + testimonials.length) % testimonials.length);
  const next = () => setFeatured((f) => (f + 1) % testimonials.length);

  const active = testimonials[featured];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-20 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4">
            Client Testimonials
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 delay-100">
            Don't take our word for it. Here's what the businesses we've built for have to say.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-14 animate-in fade-in duration-500">
            <Quote className="absolute top-8 left-8 h-10 w-10 text-secondary/20" />

            <div className="flex flex-col items-center text-center">
              <div className={`h-16 w-16 rounded-full ${active.color} text-white flex items-center justify-center text-xl font-bold mb-6`}>
                {active.avatar}
              </div>

              <StarRating count={active.rating} />

              <blockquote className="mt-6 text-xl md:text-2xl text-primary font-medium leading-relaxed italic max-w-2xl">
                "{active.text}"
              </blockquote>

              <div className="mt-8">
                <p className="font-bold text-primary text-lg">{active.name}</p>
                <p className="text-secondary font-medium text-sm">{active.role}</p>
                <p className="text-muted-foreground text-sm">{active.company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
                data-testid="button-prev-testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFeatured(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === featured ? "w-8 bg-secondary" : "w-2 bg-slate-200"}`}
                    data-testid={`button-dot-${i}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
                data-testid="button-next-testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">All Reviews</h2>
            <p className="text-lg text-muted-foreground">Every engagement. Every client. Every result.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                onClick={() => setFeatured(i)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  i === featured
                    ? "border-secondary bg-secondary/5 shadow-md"
                    : "border-slate-100 bg-slate-50 hover:border-secondary/40"
                }`}
                data-testid={`card-testimonial-${i}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`h-11 w-11 rounded-full ${t.color} text-white flex items-center justify-center text-sm font-bold shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} — {t.company}</p>
                  </div>
                </div>
                <StarRating count={t.rating} />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 gap-8 text-center divide-x divide-primary-foreground/10">
            <div className="space-y-1">
              <h3 className="text-4xl font-bold text-secondary">50+</h3>
              <p className="text-primary-foreground/70 font-medium">Happy Clients</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl font-bold text-secondary">5.0</h3>
              <p className="text-primary-foreground/70 font-medium">Average Rating</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-4xl font-bold text-secondary">98%</h3>
              <p className="text-primary-foreground/70 font-medium">Repeat Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
