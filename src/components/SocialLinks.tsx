import { motion } from "framer-motion";
import { Instagram, Globe } from "lucide-react";

const socials = [
  { icon: Globe, href: "https://www.spabrix.in/", label: "Website" },
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex items-center justify-center gap-4"
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon"
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" strokeWidth={1.5} />
        </a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
