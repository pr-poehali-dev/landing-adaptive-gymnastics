
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star 
} from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  age: number;
  text: string;
  photo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Дмитрий",
    age: 55,
    text: "За 4 занятия улучшился сон, исправилась осанка, ушёл горбик. Уже после первого сеанса почувствовал, как вытягивается позвоночник!"
  },
  {
    id: 2,
    name: "Вера",
    age: 67,
    text: "За 4 занятия исчезла «холка», подтянулась кожа лица, прошли боли в кистях. Появилась легкость и прилив энергии."
  },
  {
    id: 3,
    name: "Юрий",
    age: 77,
    text: "За 4 занятия давление снизилось с 150/130 до 130/110, прошла боль в шее, повысилась энергия. Даже моя жена заметила, как я помолодел!"
  },
  {
    id: 4,
    name: "Вероника",
    age: 66,
    text: "После 6 занятий восстановилась чувствительность половины тела после инсульта. Врачи были в шоке от таких результатов!"
  },
  {
    id: 5,
    name: "Ирина",
    age: 89,
    text: "После первого занятия спала крепким сном, а после курса — отправилась в поход на Килиманджаро. Никогда бы не подумала, что в моем возрасте это возможно!"
  },
  {
    id: 6,
    name: "Ольга",
    age: 64,
    text: "После 1 занятия исчезли боли, нормализовался сон, вернулась мелкая моторика, занялась огородом. Чувствую себя на 20 лет моложе!"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = window.innerWidth < 768 ? 1 : 3;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - cardsToShow ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - cardsToShow : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Отзывы наших клиентов</h2>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        <Star className="fill-current" size={20} />
                        <Star className="fill-current" size={20} />
                        <Star className="fill-current" size={20} />
                        <Star className="fill-current" size={20} />
                        <Star className="fill-current" size={20} />
                      </div>
                    </div>
                    
                    <p className="mb-4 italic">"{testimonial.text}"</p>
                    
                    <div className="mt-auto">
                      <p className="font-bold">{testimonial.name}, {testimonial.age} лет</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="text-life-orange" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="text-life-orange" />
          </button>
        </div>
        
        <div className="mt-12 md:mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
            Для кого подходят наши тренировки
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-bold mb-2 text-life-orange">Военным</p>
              <p>Мобилизация скрытых ресурсов организма при реабилитации</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-bold mb-2 text-life-orange">Спортсменам</p>
              <p>Быстрое восстановление после травм, ушибов, растяжений</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-bold mb-2 text-life-orange">Водителям</p>
              <p>Исправление тазовой деформации и шейно-воротниковой зоны</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-bold mb-2 text-life-orange">Офисным работникам</p>
              <p>При нервных истощениях, стрессах и депрессиях</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-bold mb-2 text-life-orange">Детям и подросткам</p>
              <p>Исправление осанки и профилактика сколиоза</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <p className="font-bold mb-2 text-life-orange">Пожилым людям</p>
              <p>Сохранение подвижности и возвращение активности суставам</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
