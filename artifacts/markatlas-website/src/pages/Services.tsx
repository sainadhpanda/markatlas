import React from "react";
import { Code, Database, Globe, Layout, Server, Smartphone, Shield, GitBranch } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    tech: "React, Next.js, Vue, Angular",
    description: "We design and build fast, responsive, and intuitive web applications tailored to your specific business workflows and user needs."
  },
  {
    icon: Server,
    title: "Backend & API Development",
    tech: "Node.js, Python, Java, Express, REST, GraphQL",
    description: "Robust, secure, and well-documented backend systems and APIs that power your products reliably — at any scale."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tech: "React Native, Flutter, iOS, Android",
    description: "Cross-platform mobile applications that deliver a native experience on both iOS and Android from a single codebase."
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    tech: "Figma, Adobe XD, Prototyping, User Research",
    description: "User-centered design that is visually compelling and built for conversion — wireframes, prototypes, and production-ready design systems."
  },
  {
    icon: Database,
    title: "Database Architecture",
    tech: "PostgreSQL, MongoDB, MySQL, Redis",
    description: "Scalable data architectures designed for performance. We model, migrate, and optimise databases to keep your applications running at peak efficiency."
  },
  {
    icon: Shield,
    title: "Application Security",
    tech: "OWASP, Penetration Testing, Auth Systems",
    description: "Security-first development practices. We audit, harden, and implement robust authentication and authorisation to protect your users and data."
  },
  {
    icon: GitBranch,
    title: "DevOps & Cloud Deployment",
    tech: "AWS, Docker, Kubernetes, CI/CD, Linux",
    description: "Automated deployment pipelines, containerisation, and cloud infrastructure setup so your application ships faster and stays reliable."
  },
  {
    icon: Code,
    title: "Custom Software Development",
    tech: "Bespoke Solutions, System Integration, Automation",
    description: "Off-the-shelf tools don't always fit. We build custom software precisely suited to your processes, integrating seamlessly with your existing systems."
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-primary py-20 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 delay-100">
            From ideation to deployment, we offer the full spectrum of web application development services under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 flex flex-col"
                  style={{ animationDelay: `${index * 80}ms` }}
                  data-testid={`card-service-${index}`}
                >
                  <div className="h-14 w-14 rounded-xl bg-slate-50 group-hover:bg-secondary/10 flex items-center justify-center text-slate-600 group-hover:text-secondary transition-colors mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm font-medium text-secondary mb-4">{service.tech}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground">
              A clear, structured process that keeps you informed and in control from day one.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Discovery", desc: "We understand your goals, users, and constraints before writing a single line of code." },
              { step: "02", title: "Design", desc: "Wireframes and prototypes are reviewed and approved before development begins." },
              { step: "03", title: "Development", desc: "Agile sprints with regular demos keep you updated and allow iterative feedback." },
              { step: "04", title: "Launch & Support", desc: "Seamless deployment followed by dedicated post-launch monitoring and support." },
            ].map((item, i) => (
              <div key={i} className="relative text-center p-6">
                <div className="text-6xl font-black text-secondary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
