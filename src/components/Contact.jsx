import { useState } from "react";
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form state to capture inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Replace these with your actual EmailJS credentials
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Template parameters matching your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => {
        setLoading(false);
        console.error("EmailJS Error:", err);
        setError(
          "Failed to send message. Please try again or reach out via WhatsApp.",
        );
      });
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-12 border-t border-[#30363d]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <div className="inline-flex items-center gap-2 bg-[#21262d] border border-[#30363d] px-3 py-1 rounded-full text-xs text-emerald-400 font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />{" "}
            Available for Hire
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Whether you have a remote developer role, a freelance client
            project, or want to discuss full-stack solutions, my inbox and
            WhatsApp are always open.
          </p>

          <div className="space-y-4 text-sm">
            <a
              href="https://wa.me/251924275434?text=Hi%20Degife,%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white bg-[#0d1117] border border-[#30363d] p-3 rounded-md transition"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp: +251 924 275 434</span>
            </a>
            <a
              href="mailto:degifetise09@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-white bg-[#0d1117] border border-[#30363d] p-3 rounded-md transition"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              <span>degifetise09@gmail.com</span>
            </a>
            <a
              href="https://github.com/degifetise"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white bg-[#0d1117] border border-[#30363d] p-3 rounded-md transition"
            >
              <span>Github</span>
              <span>github.com/degifetise</span>
            </a>
          </div>
        </div>

        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-gray-400">
                Thank you for reaching out. I will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">
                Send a Direct Message
              </h3>

              {error && (
                <div className="p-3 bg-red-950/50 border border-red-500/50 rounded-md text-xs text-red-400">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#161b22] border border-[#30363d] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#161b22] border border-[#30363d] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                  placeholder="youemail@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#161b22] border border-[#30363d] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                  placeholder="Hello Degife, I'd like to discuss..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2ea043] hover:bg-[#2c974b] text-white font-medium py-2.5 px-4 rounded-md text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
