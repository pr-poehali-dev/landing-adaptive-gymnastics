
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Dna, 
  Zap, 
  Leaf, 
  Shield 
} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-bg-alt border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Адаптивно-функциональная гимнастика</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-lg mb-8 leading-relaxed">
              Адаптивно-функциональная гимнастика — это уникальный метод восстановления организма, 
              основанный на использовании естественных ресурсов тела и природных механизмов.
            </p>
            
            <div className="space-y-6">
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <Zap className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Мгновенный эффект:</strong> уже после первого занятия ощущается прилив энергии и улучшение состояния.</p>
              </div>
              
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <Shield className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Безопасность и естественность:</strong> исключены инъекции, медикаменты и хирургия.</p>
              </div>
              
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <Dna className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Глубокая регенерация:</strong> стимулируется рост новых клеток, коллагена, восстанавливаются кости и соединительные ткани.</p>
              </div>
              
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <Brain className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Мощная перезагрузка нервной системы:</strong> снимается мышечное напряжение и восстанавливается гармония тела и разума.</p>
              </div>
              
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <Leaf className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Долгосрочный результат:</strong> укрепление костей, суставов, повышение гибкости и устранение болей.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/44731ebe-4ce2-45ff-b3e5-234126d8cb36.jpg" 
                alt="Анатомическое строение мышц" 
                className="rounded-lg shadow-lg max-w-full mx-auto border-4 border-white"
              />
              <div className="absolute -bottom-3 -left-3 -right-3 h-full rounded-lg -z-10 bg-gradient-to-r from-life-yellow via-life-orange to-life-purple blur-md opacity-20"></div>
            </div>
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        <h3 className="text-2xl font-bold text-center mb-8">Почему это работает?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 card-highlight border-2">
            <h4 className="text-xl font-bold mb-4 gradient-text">Кости — живой орган</h4>
            <p className="text-gray-700 leading-relaxed">
              Они постоянно обновляются. Нарушение этого процесса приводит к остеопорозу и хрупкости.
              Наша методика активирует естественные процессы регенерации костных тканей.
            </p>
          </Card>
          
          <Card className="p-8 card-highlight border-2">
            <h4 className="text-xl font-bold mb-4 gradient-text">Тренировка, которую не даст спортзал</h4>
            <p className="text-gray-700 leading-relaxed">
              Наш тренажёр создаёт уникальную нагрузку: сила, в 4,2 раза превышающая вес тела, 
              запускает рост новой костной ткани, укрепляет мышцы, связки и избавляет от болей.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
