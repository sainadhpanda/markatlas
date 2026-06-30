import React from "react";
import trainer1 from "@/assets/images/trainer-1.png";
import trainer2 from "@/assets/images/trainer-2.png";
import trainer3 from "@/assets/images/trainer-3.png";
import trainer4 from "@/assets/images/trainer-4.png";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Arjun Reddy",
    role: "Lead Full-Stack Developer",
    specialization: "React, Node.js & Cloud Architecture",
    image: trainer1,
    bio: "With 12+ years in web application development, Arjun leads complex end-to-end projects, ensuring clean architecture, scalability, and robust API design across every engagement.",
  },
  {
    name: "Priya Sharma",
    role: "Senior Backend Engineer",
    specialization: "Python, Django & Microservices",
    image: trainer2,
    bio: "Priya specialises in high-throughput backend systems and data pipelines. She has delivered critical backend infrastructure for fintech and e-commerce platforms at scale.",
  },
  {
    name: "Vikram Desai",
    role: "DevOps & Security Engineer",
    specialization: "AWS, Docker, Kubernetes & AppSec",
    image: trainer3,
    bio: "Vikram owns our cloud infrastructure and security practices. From CI/CD pipelines to application hardening, he ensures every product we ship is production-grade and secure.",
  },
  {
    name: "Ananya Patel",
    role: "Lead UI/UX Designer",
    specialization: "Product Design & Frontend Development",
    image: trainer4,
    bio: "Ananya bridges design and code. She has crafted digital experiences used by hundreds of thousands of people, blending aesthetic precision with deep frontend engineering skill.",
  }
];

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-20 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4">Our Team</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 delay-100">
            Meet the engineers and designers who build your applications. Every member of our team is a practitioner — no project managers who don't code.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 group"
                style={{ animationDelay: `${index * 150}ms` }}
                data-testid={`card-team-${index}`}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-testid={`img-team-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                    <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-secondary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center hover:bg-secondary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-4">{member.specialization}</p>
                  <div className="h-px w-full bg-slate-100 mb-4"></div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Want to build with us?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We are always looking for talented developers and designers who are passionate about building exceptional web applications.
          </p>
          <button className="text-primary font-semibold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors" data-testid="button-join-team">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
}
