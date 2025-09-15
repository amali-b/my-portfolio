import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background effects */}
      <StarBackground />

      {/* Navbar */}

      {/* Main Content --> hero section, about section, skill section, projectc etc. */}

      {/* Footer */}
    </div>
  );
};
