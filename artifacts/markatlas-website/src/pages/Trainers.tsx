import React from "react";
import trainer1 from "@/assets/images/trainer-1.png";
import trainer2 from "@/assets/images/trainer-2.png";
import trainer3 from "@/assets/images/trainer-3.png";
import trainer4 from "@/assets/images/trainer-4.png";
import { Linkedin, Twitter } from "lucide-react";

const trainers = [
  {
    name: "Arjun Reddy",
    role: "Lead Systems Architect",
    specialization: "Java Full Stack & Cloud",
    image: trainer1,
    bio: "Ex-Amazon SDE with 12+ years of experience building highly scalable microservices. Arjun leads our enterprise Java and AWS curriculum.",
  },
  {
    name: "Priya Sharma",
    role: "Senior Data Scientist",
    specialization: "Python & Machine Learning",
    image: trainer2,
    bio: "Former researcher at a top fintech firm. Priya specializes in NLP and predictive modeling, making complex algorithms accessible to beginners.",
  },
  {
    name: "Vikram Desai",
    role: "Head of Security",
    specialization: "Cyber Security & Networks",
    image: trainer3,
    bio: "Certified Ethical Hacker and former InfoSec consultant for Fortune 500 companies. Vikram brings real-world threat scenarios into the classroom.",
  },
  {
    name: "Ananya Patel",
    role: "Principal Product Designer",
    specialization: "UI/UX & Frontend Design",
    image: trainer4,
    bio: "Award-winning designer who has crafted experiences for millions of users. Ananya bridges the gap between aesthetic design and functional frontend code.",
  }
];

export default function Trainers() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-20 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4">Our Expert Trainers</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 delay-100">
            Learn directly from industry veterans who have built products at scale. We don't employ academic theorists; we employ practicing engineers.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  <h3 className="text-xl font-bold text-primary mb-1">{trainer.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-4">{trainer.specialization}</p>
                  <div className="h-px w-full bg-slate-100 mb-4"></div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join the team CTA */}
      <section className="py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Are you an industry expert?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We are always looking for passionate senior engineers and designers to join our faculty and shape the next generation of tech talent.
          </p>
          <button className="text-primary font-semibold border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
            View Teaching Opportunities
          </button>
        </div>
      </section>
    </div>
  );
}
