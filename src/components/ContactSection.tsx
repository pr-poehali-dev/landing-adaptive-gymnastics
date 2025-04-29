
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Check
} from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы код для отправки данных на сервер
    
    // Имитация успешной отправки
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({
        name: "",
        phone: "",
        message: ""
      });
      
      // Сбросить состояние успешной отправки через 5 секунд
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="section-padding section-bg-alt border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Свяжитесь с нами</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Запишитесь на занятие</h3>
            <p className="mb-8 text-lg leading-relaxed">
              Заполните форму, и мы свяжемся с вами в ближайшее время для подтверждения записи 
              и ответим на все ваши вопросы о тренировках в «Центре Жизни».
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Иван Иванов"
                    className="w-full border-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Номер телефона
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border-2"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение (не обязательно)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Укажите удобное время для занятий или ваши вопросы"
                    rows={4}
                    className="w-full border-2"
                  />
                </div>
                
                <Button type="submit" className="btn-gradient text-lg px-8 py-6 w-full">
                  Записаться
                </Button>
              </form>
            ) : (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">Заявка отправлена!</h4>
                <p className="text-green-700">
                  Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            )}
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="feature-item">
                  <div className="bg-orange-50 p-2 rounded-full">
                    <Phone className="icon-feature h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Телефон</p>
                    <p>+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="bg-orange-50 p-2 rounded-full">
                    <Mail className="icon-feature h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Email</p>
                    <p>info@центржизни.рф</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="bg-orange-50 p-2 rounded-full">
                    <MapPin className="icon-feature h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Адрес</p>
                    <p>г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="bg-orange-50 p-2 rounded-full">
                    <Clock className="icon-feature h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">График работы</p>
                    <p>Пн-Пт: 9:00 - 20:00</p>
                    <p>Сб: 10:00 - 18:00</p>
                    <p>Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-orange-100">
              <h4 className="text-xl font-bold mb-4 gradient-text">Хотите открыть такой же зал?</h4>
              <p className="mb-4 leading-relaxed">
                Мы предлагаем возможность приобрести тренажер «Ось Жизни» для дома или открыть 
                тренировочный зал в вашем городе!
              </p>
              <div className="p-4 bg-gray-50 rounded-lg mb-6 border border-gray-200">
                <p className="text-center font-medium">
                  Никаких лицензий не требуется, наша методика доступна каждому, 
                  кто хочет помогать людям и развивать свой бизнес.
                </p>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-2 border-life-orange text-life-orange hover:bg-life-orange/10 py-6"
                onClick={() => window.location.href = "mailto:franchise@центржизни.рф"}
              >
                Узнать о франшизе
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
