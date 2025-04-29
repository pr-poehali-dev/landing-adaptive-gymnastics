
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden pt-16">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/d1b0c24f-0574-4a67-98ca-9a4ea88f8cec.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }}
      />
      
      <div className="container mx-auto px-4 z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text block">Революция</span> 
              в оздоровлении тела
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Адаптивно-функциональная гимнастика на уникальном тренажере «Ось Жизни» — 
              естественный путь к здоровью, молодости и гармонии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="btn-gradient text-lg px-8 py-6" onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}>
                Записаться на занятие
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-life-orange text-life-orange hover:bg-life-orange/10" onClick={() => {
                const element = document.getElementById("programs");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}>
                Узнать о программах
              </Button>
            </div>
          </div>
          
          <div className="relative mx-auto md:ml-auto">
            <div className="relative w-full max-w-md mx-auto animate-float">
              <img 
                src="https://cdn.poehali.dev/files/0aef551d-9d3d-43a2-945d-ef25a039cc4e.jpeg" 
                alt="Тренажёр Ось Жизни" 
                className="rounded-lg shadow-xl z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 -left-4 h-full bg-gradient-to-r from-life-yellow via-life-orange to-life-purple rounded-lg -z-10 blur-md opacity-30" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
          <ArrowDownCircle 
            className="text-life-orange h-12 w-12" 
            onClick={scrollToAbout} 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
