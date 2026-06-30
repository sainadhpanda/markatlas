import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Layers, Smartphone, Globe, Zap, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/images/hero.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6 border border-secondary/20">
                <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
                Hyderabad's Web Application Experts
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
                We Build <br /><span className="text-secondary">Powerful Web</span><br />Applications.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                From concept to deployment, Markatlas Inkjet Technologies crafts custom, scalable web applications that drive growth and transform your digital presence.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 h-14 text-base font-semibold group" data-testid="button-view-services">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold" data-testid="button-why-markatlas">
                    Who We Are
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative lg:ml-auto animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
                <img
                  src={heroImg}
                  alt="Web application development team at work"
                  className="w-full h-auto object-cover aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]"
                  data-testid="img-hero"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 md:p-6 border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Projects Delivered</p>
                    <p className="text-2xl font-bold text-primary">200+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-primary-foreground/10">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-secondary">200+</h3>
              <p className="text-primary-foreground/70 font-medium">Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-secondary">50+</h3>
              <p className="text-primary-foreground/70 font-medium">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-secondary">8+</h3>
              <p className="text-primary-foreground/70 font-medium">Years of Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-secondary">15+</h3>
              <p className="text-primary-foreground/70 font-medium">Expert Developers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Markatlas?</h2>
            <p className="text-lg text-muted-foreground">
              We combine technical depth with product thinking. Every application we build is engineered for performance, scalability, and long-term maintainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <Code2 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Clean, Modern Code</h3>
              <p className="text-muted-foreground leading-relaxed">
                We write code that's readable, maintainable, and built on industry best practices — so your application scales with your business, not against it.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <Layers className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Full-Stack Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                From pixel-perfect frontend interfaces to robust, secure backend systems — we handle the entire stack so you get one seamless product.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Reliable Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                We take commitments seriously. Our structured development process ensures on-time delivery without compromising on quality or security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What We Build</h2>
            <p className="text-lg text-muted-foreground">
              End-to-end digital solutions tailored to your unique business needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, label: "Web Applications" },
              { icon: Smartphone, label: "Mobile Apps" },
              { icon: Layers, label: "API & Backend Systems" },
              { icon: Code2, label: "Custom Software" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300 group">
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="font-semibold text-primary text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 80%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Ready to build your next application?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Partner with Markatlas Inkjet Technologies and turn your ideas into powerful, production-ready web applications.
          </p>
          <Link href="/services">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-10 h-16 text-lg font-semibold" data-testid="button-cta-services">
              View Our Services
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
