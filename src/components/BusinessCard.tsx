import { motion } from "framer-motion";
import {
  Globe,
  Megaphone,
  Palette,
  Phone,
  MessageCircle,
  Mail,
  Download,
  UserPlus
} from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import ActionButton from "./ActionButton";
import SocialLinks from "./SocialLinks";
import { generateVCard, downloadDigitalCard } from "@/lib/vcard";

const services = [
  { icon: Globe, label: "Website Dev" },
  { icon: Megaphone, label: "Digital Mktg" },
  { icon: Palette, label: "Graphic Design" },
];

const BusinessCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-sm md:max-w-md mx-auto p-6 md:p-10 overflow-hidden"
    >
      {/* Glassmorphism Background Layer */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-2xl skew-y-0" style={{ zIndex: -1 }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center mb-8 flex flex-col items-center"
      >
        <div className="relative w-24 h-24 mb-4 rounded-2xl overflow-hidden shadow-lg bg-white p-2 animate-float">
          <img src="/logo.png" alt="Spabrix Logo" className="w-full h-full object-contain" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-spabrix-blue to-spabrix-orange tracking-tight mb-2">
          Spabrix
        </h1>
        <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
          Digital Agency
        </p>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-muted-foreground text-sm leading-relaxed mb-6 px-2 md:px-4"
      >
        Transforming ideas into digital reality. Expert solutions for your business growth.
      </motion.p>

      {/* Services */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6">
        {services.map((service, index) => (
          <ServiceIcon
            key={service.label}
            icon={service.icon}
            label={service.label}
            delay={0.3 + index * 0.1}
          />
        ))}
      </div>

      {/* Primary Actions */}
      <div className="space-y-3 mb-8">
        <ActionButton
          icon={Phone}
          label="Call Now"
          href="tel:9946972210"
          variant="primary"
          delay={0.5}
        />
        <div className="grid grid-cols-1 gap-3">
          <ActionButton
            icon={MessageCircle}
            label="WhatsApp"
            href="https://wa.me/919946972210"
            variant="secondary"
            delay={0.55}
          />
        </div>
      </div>

      {/* Secondary Actions */}
      <div className="grid grid-cols-1 gap-3 mb-8">

        <a href="/card.png" download>
          <img src="/card.png" alt="Save Card" className="w-full h-auto rounded-xl" />
        </a>


      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"
      />

      {/* Social Links */}
      <SocialLinks />
    </motion.div>
  );
};

export default BusinessCard;
