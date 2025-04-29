
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Определение активного раздела для подсветки в меню
      const sections = ["about", "benefits", "programs", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 300;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && 
            scrollPosition >= element.offsetTop && 
            scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(sectionId);
          return;
        }
      }
      
      if (scrollPosition < 300) {
        setActiveSection("hero");
      }
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

  const isActive = (sectionId: string) => activeSection === sectionId;

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
            className={`transition-colors relative ${
              isActive("about") 
                ? "text-life-orange font-medium" 
                : "text-gray-700 hover:text-life-orange/80"
            }`}
          >
            О методике
            {isActive("about") && (
              <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-life-orange"></span>
            )}
          </button>
          <button 
            onClick={() => scrollToSection("benefits")} 
            className={`transition-colors relative ${
              isActive("benefits") 
                ? "text-life-orange font-medium" 
                : "text-gray-700 hover:text-life-orange/80"
            }`}
          >
            Преимущества
            {isActive("benefits") && (
              <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-life-orange"></span>
            )}
          </button>
          <button 
            onClick={() => scrollToSection("programs")} 
            className={`transition-colors relative ${
              isActive("programs") 
                ? "text-life-orange font-medium" 
                : "text-gray-700 hover:text-life-orange/80"
            }`}
          >
            Программы
            {isActive("programs") && (
              <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-life-orange"></span>
            )}
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className={`transition-colors relative ${
              isActive("testimonials") 
                ? "text-life-orange font-medium" 
                : "text-gray-700 hover:text-life-orange/80"
            }`}
          >
            Отзывы
            {isActive("testimonials") && (
              <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-life-orange"></span>
            )}
          </button>
          <Button 
            onClick={() => scrollToSection("contact")} 
            className={`btn-gradient ${isActive("contact") ? "ring-2 ring-life-purple" : ""}`}
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
              className={`py-2 transition-colors ${isActive("about") ? "text-life-orange font-medium" : "text-gray-700"}`}
            >
              О методике
            </button>
            <button 
              onClick={() => scrollToSection("benefits")} 
              className={`py-2 transition-colors ${isActive("benefits") ? "text-life-orange font-medium" : "text-gray-700"}`}
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection("programs")} 
              className={`py-2 transition-colors ${isActive("programs") ? "text-life-orange font-medium" : "text-gray-700"}`}
            >
              Программы
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")} 
              className={`py-2 transition-colors ${isActive("testimonials") ? "text-life-orange font-medium" : "text-gray-700"}`}
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
