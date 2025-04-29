
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.poehali.dev/files/c0507e51-9340-45db-9f3d-f6802f034f69.JPG" 
            alt="Центр Жизни" 
            className="h-12 w-auto"
          />
          <span className="font-bold text-xl md:text-2xl gradient-text">Центр Жизни</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-gray-700 hover:text-life-orange transition-colors"
          >
            О методике
          </button>
          <button 
            onClick={() => scrollToSection("benefits")} 
            className="text-gray-700 hover:text-life-orange transition-colors"
          >
            Преимущества
          </button>
          <button 
            onClick={() => scrollToSection("programs")} 
            className="text-gray-700 hover:text-life-orange transition-colors"
          >
            Программы
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className="text-gray-700 hover:text-life-orange transition-colors"
          >
            Отзывы
          </button>
          <Button 
            onClick={() => scrollToSection("contact")} 
            className="btn-gradient"
          >
            Записаться
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-gray-700 hover:text-life-orange py-2 transition-colors"
            >
              О методике
            </button>
            <button 
              onClick={() => scrollToSection("benefits")} 
              className="text-gray-700 hover:text-life-orange py-2 transition-colors"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection("programs")} 
              className="text-gray-700 hover:text-life-orange py-2 transition-colors"
            >
              Программы
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")} 
              className="text-gray-700 hover:text-life-orange py-2 transition-colors"
            >
              Отзывы
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="btn-gradient w-full"
            >
              Записаться
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
