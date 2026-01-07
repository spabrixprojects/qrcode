import { motion } from "framer-motion";
import BusinessCard from "@/components/BusinessCard";

const Index = () => {
  return (
    <>
      {/* SEO Meta - handled in index.html for static rendering */}

      {/* Floating background shapes */}
      <div className="floating-shapes" aria-hidden="true" />

      {/* Main content */}
      <main className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-4 py-4 md:py-12">
        <BusinessCard />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Spabrix. All rights reserved.
          </p>
        </motion.footer>
      </main>
    </>
  );
};

export default Index;
