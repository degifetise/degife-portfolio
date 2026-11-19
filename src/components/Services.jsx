
import {
  Briefcase,
  Code2,
  Layout,
  Database,
  Terminal,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Applications",
      desc: "End-to-end scalable web platforms built with React, TypeScript, Node.js, and .NET—engineered for security, speed, and clean architecture.",
      icon: <Code2 className="theme-blue h-6 w-6" />,
      badge: "Web Engineering",
    },
    {
      title: "School & Enterprise Portals",
      desc: "Role-based management systems featuring dedicated dashboards (Admin, Teachers, Students, Parents) and automated QR Smart ID generation.",
      icon: <Layout className="theme-green h-6 w-6" />,
      badge: "Multi-Role Systems",
    },
    {
      title: "Shop & Pharmacy POS Systems",
      desc: "Production-ready point-of-sale and inventory tracking solutions with multi-tenant support, expiry alerts, and offline-first reliability.",
      icon: <Database className="theme-purple h-6 w-6" />,
      badge: "Business Software",
    },
    {
      title: "Developer Tools & Automation",
      desc: "Open-source CLI/web utilities like @degifetise/envdiff, custom REST API integrations, and automated notification workflows.",
      icon: <Terminal className="theme-amber h-6 w-6" />,
      badge: "Open-Source & APIs",
    },
  ];

  return (
    <section
      id="services"
      className="theme-border max-w-6xl mx-auto border-t px-4 py-12"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Briefcase className="theme-green h-7 w-7" />
          <h2 className="theme-text text-2xl font-bold">What I Build</h2>
        </div>
        <span className="theme-muted hidden text-xs sm:inline">
          Production-Ready Solutions
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="theme-card theme-border group flex flex-col justify-between rounded-lg border p-6 transition-colors hover:opacity-90"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="theme-inset theme-border rounded-md border p-2.5">
                  {service.icon}
                </div>
                <span className="theme-subtle theme-border theme-body rounded-full border px-2.5 py-0.5 text-[11px]">
                  {service.badge}
                </span>
              </div>
              <h3 className="theme-text mb-2 text-lg font-bold transition-colors group-hover:opacity-70">
                {service.title}
              </h3>
              <p className="theme-muted text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>

            <div className="theme-muted theme-border mt-5 flex items-center justify-between border-t pt-4 text-xs">
              <span>Custom Architecture</span>
              <a
                href="https://wa.me/251924275434?text=Hi%20Degife,%20I%20saw%20your%20portfolio%20and%20want%20to%20inquire%20about%20building%20a%20solution."
                target="_blank"
                rel="noreferrer"
                className="theme-green flex items-center gap-1 font-medium hover:underline"
              >
                Inquire <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
