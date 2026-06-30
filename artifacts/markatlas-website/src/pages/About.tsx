import React from "react";
import aboutImg1 from "@/assets/images/about-1.png";
import aboutImg2 from "@/assets/images/about-2.png";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-20 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4">About Markatlas</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 delay-100">
            A passionate team of developers and designers building robust, scalable web applications from Hyderabad for clients across India and beyond.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Markatlas Inkjet Technologies Pvt Ltd is a Hyderabad-based web application development company founded with a clear purpose: to help businesses harness the power of technology through well-crafted, high-performance digital products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team consists of experienced full-stack developers, UI/UX designers, and project managers who have collectively delivered over 200 applications across industries including e-commerce, healthcare, education, logistics, and finance. We don't just write code — we engineer solutions.
              </p>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img src={aboutImg1} alt="Development team at work" className="w-full h-full object-cover" data-testid="img-about-1" />
              </div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img src={aboutImg2} alt="Team collaboration session" className="w-full h-full object-cover" data-testid="img-about-2" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-l-4 border-secondary pl-4">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To deliver reliable, scalable, and beautifully designed web applications that solve real business problems — on time, on budget, and beyond expectation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 border-l-4 border-secondary pl-4">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the most trusted web application development partner in India, recognised for technical excellence, transparent communication, and long-term client relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What Sets Us Apart</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "End-to-End Product Development",
              "Agile, Transparent Delivery Process",
              "Dedicated Project Managers for Every Client",
              "Performance-Optimised Architecture",
              "Post-Launch Support & Maintenance",
              "Modern Tech Stack, Always Up to Date"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-white border border-slate-100 shadow-sm">
                <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <p className="font-semibold text-primary text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
