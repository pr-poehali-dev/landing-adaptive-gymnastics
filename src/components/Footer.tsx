
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Telegram 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/c0507e51-9340-45db-9f3d-f6802f034f69.JPG" 
                alt="Центр Жизни" 
                className="h-12 w-auto"
              />
              <span className="font-bold text-xl md:text-2xl gradient-text">Центр Жизни</span>
            </div>
            <p className="text-gray-400 mb-4">
              Адаптивно-функциональная гимнастика на уникальном тренажере «Ось Жизни»
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-life-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-life-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-life-orange transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-life-orange transition-colors"
                aria-label="Telegram"
              >
                <Telegram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-life-orange transition-colors"
                >
                  О методике
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("benefits")}
                  className="text-gray-400 hover:text-life-orange transition-colors"
                >
                  Преимущества
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-400 hover:text-life-orange transition-colors"
                >
                  Программы
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-400 hover:text-life-orange transition-colors"
                >
                  Отзывы
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-life-orange transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Программы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-life-orange transition-colors">
                  Основная программа оздоровления
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-life-orange transition-colors">
                  Антистресс и восстановление ЦНС
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-life-orange transition-colors">
                  Гормональный баланс
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-life-orange transition-colors">
                  Поддержка иммунитета
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-life-orange transition-colors">
                  Коррекция осанки
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">+7 (999) 123-45-67</li>
              <li className="text-gray-400">info@центржизни.рф</li>
              <li className="text-gray-400">г. Москва, ул. Примерная, д. 123</li>
              <li className="text-gray-400">Пн-Пт: 9:00 - 20:00</li>
              <li className="text-gray-400">Сб: 10:00 - 18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} Центр Жизни. Все права защищены.</p>
          <p className="mt-2 text-sm">
            Обратите внимание: наша методика не является медицинской услугой и не требует лицензий.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
