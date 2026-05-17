import React, { useState } from "react";
import { submitContactForm, type ContactFormData } from "@/lib/strapi";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    brief: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const result = await submitContactForm(formData);
    
    if (result) {
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", service: "", brief: "" });
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container px-5 md:px-10 lg:px-16 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Column: Form */}
          <div className="w-full lg:w-1/2 bg-white border border-gray-200 shadow-sm rounded-3xl p-8 lg:p-12">
            <h4 className="text-teal-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Get in Touch
            </h4>
            <h2 className="text-3xl md:text-4xl font-aileron font-bold text-[#0A2540] mb-4 leading-tight">
              Let’s Build Something<br/>Great Together
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-10 max-w-md">
              Whether you have an idea, a question, or a full project in mind — we're here to listen, collaborate, and help bring your vision to life.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your First Name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-shadow"
                    required
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your Last Name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-shadow"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-shadow"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="service">Services</label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-teal-500 transition-shadow text-gray-600"
                    required
                  >
                    <option value="" disabled>Select Our Services</option>
                    <option value="AI Customer Support">AI Customer Support</option>
                    <option value="Smart Inventory Management">Smart Inventory Management</option>
                    <option value="Data-Driven Marketing">Data-Driven Marketing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="brief">Brief</label>
                <textarea
                  id="brief"
                  name="brief"
                  value={formData.brief}
                  onChange={handleChange}
                  placeholder="Your Brief"
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 transition-shadow resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full border border-teal-500 text-teal-600 font-medium py-3 rounded-lg hover:bg-teal-50 transition-colors disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              
              {success && (
                <p className="text-green-600 text-sm text-center font-medium">Thank you! Your message has been sent successfully.</p>
              )}
              {error && (
                <p className="text-red-500 text-sm text-center font-medium">Oops! Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          {/* Right Column: Illustration */}
          <div className="w-full lg:w-1/2 bg-white border border-gray-200 shadow-sm rounded-3xl relative overflow-hidden min-h-[500px]">
             <img src="/assets/Group 21 (1).png" alt="Let's build together" className="absolute inset-0 w-full h-full object-contain object-left" />
             
             {/* Social Media Texts overlay */}
             <div className="absolute bottom-8 right-8 flex flex-col gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/40">
               <div className="flex items-center gap-3">
                 <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Facebook size={16} fill="currentColor" className="text-blue-600" />
                 </div>
                 <span className="text-sm font-semibold text-gray-800">Layang digital official</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
                    <Instagram size={16} />
                 </div>
                 <span className="text-sm font-semibold text-gray-800">@layangdigital</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <Youtube size={16} />
                 </div>
                 <span className="text-sm font-semibold text-gray-800">Layang Digital</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
