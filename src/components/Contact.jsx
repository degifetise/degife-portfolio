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
      className="theme-border max-w-6xl mx-auto border-t px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="theme-card theme-border grid grid-cols-1 items-center gap-8 rounded-lg border p-8 lg:p-10 md:grid-cols-2"
      >
        <div>
          <div className="theme-subtle theme-border theme-green mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <span className="theme-green-bg h-2 w-2 animate-pulse rounded-full" />{" "}
            Available for Hire
          </div>
          <h2 className="theme-text mb-4 text-3xl font-bold tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="theme-body mb-6 text-sm leading-relaxed">
            Whether you have a remote developer role, a freelance client
            project, or want to discuss full-stack solutions, my inbox and
            WhatsApp are always open.
          </p>

          <div className="space-y-4 text-sm">
            <a
              href="https://wa.me/251924275434?text=Hi%20Degife,%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="theme-inset theme-border theme-body flex items-center gap-3 rounded-md border p-3 transition-colors hover:opacity-70"
            >
              <MessageSquare className="theme-green h-5 w-5" />
              <span>WhatsApp: +251 924 275 434</span>
            </a>
            <a
              href="mailto:degifetise09@gmail.com"
              className="theme-inset theme-border theme-body flex items-center gap-3 rounded-md border p-3 transition-colors hover:opacity-70"
            >
              <Mail className="theme-blue h-5 w-5" />
              <span>degifetise09@gmail.com</span>
            </a>
            <a
              href="https://github.com/degifetise"
              target="_blank"
              rel="noreferrer"
              className="theme-inset theme-border theme-body flex items-center gap-3 rounded-md border p-3 transition-colors hover:opacity-70"
            >
              <span>Github</span>
              <span>github.com/degifetise</span>
            </a>
          </div>
        </div>

        <div className="theme-inset theme-border rounded-lg border p-6">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <CheckCircle2 className="theme-green mx-auto h-12 w-12" />
              <h3 className="theme-text text-lg font-bold">
                Message Sent Successfully!
              </h3>
              <p className="theme-muted text-sm">
                Thank you for reaching out. I will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="theme-text mb-2 text-sm font-semibold uppercase tracking-wider">
                Send a Direct Message
              </h3>

              {error && (
                <div role="alert" className="theme-red rounded-md border border-red-200 bg-red-50 p-3 text-xs dark:border-red-500/50 dark:bg-red-950/50">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="contact-name" className="theme-muted mb-1 block text-xs font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="theme-subtle theme-border theme-text theme-placeholder w-full rounded-md border px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="theme-muted mb-1 block text-xs font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="theme-subtle theme-border theme-text theme-placeholder w-full rounded-md border px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  placeholder="youemail@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="theme-muted mb-1 block text-xs font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="theme-subtle theme-border theme-text theme-placeholder w-full rounded-md border px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  placeholder="Hello Degife, I'd like to discuss..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#166534] px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-emerald-900/20 transition-colors hover:bg-[#15803d] disabled:opacity-50"
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
