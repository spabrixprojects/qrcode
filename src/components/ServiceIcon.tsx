import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceIconProps {
  icon: LucideIcon;
  label: string;
  delay?: number;
}

const ServiceIcon = ({ icon: Icon, label, delay = 0 }: ServiceIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="service-icon"
    >
      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
      </div>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </motion.div>
  );
};

export default ServiceIcon;
