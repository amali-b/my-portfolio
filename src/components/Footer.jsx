import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 items-center">
      <p className="text-sm text-muted-foreground text-primary flex justify-center">
        &copy; {new Date().getFullYear()} Amali, All rights reserved.
        <a
          href="#hero"
          className="p-2 fixed bottom-5 right-5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300 animate-bounce"
        >
          <ArrowUp size={24} />
        </a>
      </p>
    </footer>
  );
};
