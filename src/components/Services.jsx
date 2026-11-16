
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
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      badge: "Web Engineering",
    },
    {
      title: "School & Enterprise Portals",
      desc: "Role-based management systems featuring dedicated dashboards (Admin, Teachers, Students, Parents) and automated QR Smart ID generation.",
      icon: <Layout className="w-6 h-6 text-emerald-400" />,
      badge: "Multi-Role Systems",
    },
    {
      title: "Shop & Pharmacy POS Systems",
      desc: "Production-ready point-of-sale and inventory tracking solutions with multi-tenant support, expiry alerts, and offline-first reliability.",
      icon: <Database className="w-6 h-6 text-purple-400" />,
      badge: "Business Software",
    },
    {
      title: "Developer Tools & Automation",
      desc: "Open-source CLI/web utilities like @degifetise/envdiff, custom REST API integrations, and automated notification workflows.",
      icon: <Terminal className="w-6 h-6 text-amber-400" />,
      badge: "Open-Source & APIs",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-4 py-12 border-t border-[#30363d]"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Briefcase className="w-7 h-7 text-emerald-400" />
          <h2 className="text-2xl font-bold text-white">What I Build</h2>
        </div>
        <span className="text-xs text-gray-400 hidden sm:inline">
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
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 flex flex-col justify-between hover:border-gray-500 transition group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-[#0d1117] border border-[#30363d] rounded-md">
                  {service.icon}
                </div>
                <span className="text-[11px] bg-[#21262d] border border-[#30363d] px-2.5 py-0.5 rounded-full text-gray-300">
                  {service.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#30363d]/60 flex items-center justify-between text-xs text-gray-400">
              <span>Custom Architecture</span>
              <a
                href="https://wa.me/251924275434?text=Hi%20Degife,%20I%20saw%20your%20portfolio%20and%20want%20to%20inquire%20about%20building%20a%20solution."
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline flex items-center gap-1 font-medium"
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
