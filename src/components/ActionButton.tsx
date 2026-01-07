import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  delay?: number;
}

const ActionButton = ({ 
  icon: Icon, 
  label, 
  href, 
  onClick, 
  variant = "primary",
  delay = 0 
}: ActionButtonProps) => {
  const className = variant === "primary" ? "btn-primary w-full" : "btn-secondary w-full";
  
  const content = (
    <>
      <Icon className="w-5 h-5" strokeWidth={2} />
      <span>{label}</span>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="w-full"
    >
      {href ? (
        <a href={href} className={className} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <button onClick={onClick} className={className}>
          {content}
        </button>
      )}
    </motion.div>
  );
};

export default ActionButton;
