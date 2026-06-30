import React from "react";
import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-slate-400 max-w-sm mt-4 leading-relaxed">
              Markatlas Inkjet Technologies Pvt Ltd is a Hyderabad-based web application development company, delivering high-quality, scalable digital solutions for businesses of every size.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-400 hover:text-secondary transition-colors">Testimonials</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Markatlas Inkjet Technologies Pvt Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Building the web, one application at a time.</p>
        </div>
      </div>
    </footer>
  );
}
