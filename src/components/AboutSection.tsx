
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
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Адаптивно-функциональная гимнастика</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-6">
              Адаптивно-функциональная гимнастика — это уникальный метод восстановления организма, 
              основанный на использовании естественных ресурсов тела и природных механизмов.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="text-life-orange h-6 w-6 mt-1 flex-shrink-0" />
                <p><strong>Мгновенный эффект:</strong> уже после первого занятия ощущается прилив энергии и улучшение состояния.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="text-life-orange h-6 w-6 mt-1 flex-shrink-0" />
                <p><strong>Безопасность и естественность:</strong> исключены инъекции, медикаменты и хирургия.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Dna className="text-life-orange h-6 w-6 mt-1 flex-shrink-0" />
                <p><strong>Глубокая регенерация:</strong> стимулируется рост новых клеток, коллагена, восстанавливаются кости и соединительные ткани.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Brain className="text-life-orange h-6 w-6 mt-1 flex-shrink-0" />
                <p><strong>Мощная перезагрузка нервной системы:</strong> снимается мышечное напряжение и восстанавливается гармония тела и разума.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Leaf className="text-life-orange h-6 w-6 mt-1 flex-shrink-0" />
                <p><strong>Долгосрочный результат:</strong> укрепление костей, суставов, повышение гибкости и устранение болей.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/44731ebe-4ce2-45ff-b3e5-234126d8cb36.jpg" 
                alt="Анатомическое строение мышц" 
                className="rounded-lg shadow-lg max-w-full mx-auto"
              />
              <div className="absolute -bottom-3 -left-3 -right-3 h-full rounded-lg -z-10 bg-gradient-to-r from-life-yellow via-life-orange to-life-purple blur-md opacity-20"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Почему это работает?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-3 gradient-text">Кости — живой орган</h4>
              <p className="text-gray-700">
                Они постоянно обновляются. Нарушение этого процесса приводит к остеопорозу и хрупкости.
                Наша методика активирует естественные процессы регенерации костных тканей.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-3 gradient-text">Тренировка, которую не даст спортзал</h4>
              <p className="text-gray-700">
                Наш тренажёр создаёт уникальную нагрузку: сила, в 4,2 раза превышающая вес тела, 
                запускает рост новой костной ткани, укрепляет мышцы, связки и избавляет от болей.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
