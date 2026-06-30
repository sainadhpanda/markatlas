import React from "react";
import { Code, Database, Globe, Layout, LineChart, Server, Smartphone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Web Development",
    icon: Globe,
    tech: "HTML, CSS, JavaScript, React, Node.js",
    description: "Master modern full-stack web development. Build responsive, dynamic applications from the ground up."
  },
  {
    title: "Python & Data Science",
    icon: LineChart,
    tech: "Python, Pandas, TensorFlow, Scikit-Learn",
    description: "Learn to analyze complex data sets, build machine learning models, and derive actionable business insights."
  },
  {
    title: "Java Full Stack",
    icon: Code,
    tech: "Java, Spring Boot, Hibernate, Angular",
    description: "Enterprise-grade software engineering. Learn the stack that powers the world's largest financial and corporate systems."
  },
  {
    title: "DevOps & Cloud",
    icon: Server,
    tech: "AWS, Docker, Kubernetes, Jenkins",
    description: "Bridge the gap between development and operations. Master CI/CD pipelines, containerization, and cloud infrastructure."
  },
  {
    title: "Cyber Security",
    icon: Shield,
    tech: "Ethical Hacking, Network Security, Pen Testing",
    description: "Protect systems from advanced threats. Learn offensive and defensive security strategies used by top organizations."
  },
  {
    title: "UI/UX Design",
    icon: Layout,
    tech: "Figma, Adobe XD, User Research, Prototyping",
    description: "Design intuitive, beautiful digital experiences. Master user psychology, wireframing, and high-fidelity prototyping."
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    tech: "React Native, Flutter, iOS, Android",
    description: "Build native-feeling applications for iOS and Android using modern cross-platform frameworks."
  },
  {
    title: "Database Management",
    icon: Database,
    tech: "SQL, MongoDB, PostgreSQL, Redis",
    description: "Design robust data architectures. Learn advanced querying, optimization, and scalable database design."
  }
];

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-primary py-20 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4">Our Training Programs</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 delay-100">
            Industry-aligned curriculum designed to make you a highly effective technology professional.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-14 w-14 rounded-xl bg-slate-50 group-hover:bg-secondary/10 flex items-center justify-center text-slate-600 group-hover:text-secondary transition-colors mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{course.title}</h3>
                  <p className="text-sm font-medium text-secondary mb-4">{course.tech}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <div className="mt-auto">
                    <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all">
                      View Syllabus
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
